"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

/**
 * Comunidad del blog (demo): registro de miembros y comentarios con
 * moderación. Todo vive en localStorage; en producción, el registro irá a
 * un servicio de auth/newsletter y los comentarios a la base del CMS,
 * moderados desde el mismo panel admin.
 */

export const MEMBERS_KEY = "saumama-members";
export const COMMENTS_KEY = "saumama-comments";

export type Comment = {
  id: string;
  slug: string;
  name: string;
  text: string;
  date: string;
  status: "pending" | "approved";
};

export function readComments(): Comment[] {
  try {
    return JSON.parse(localStorage.getItem(COMMENTS_KEY) ?? "[]") as Comment[];
  } catch {
    return [];
  }
}

export function writeComments(list: Comment[]) {
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(list));
}

// ── Registro de miembros (newsletter/comunidad) ────────────────────
export function CommunityJoin({ dict }: { dict: Dictionary }) {
  const c = dict.blogPage.community;
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [members, setMembers] = useState(127); // base demo

  useEffect(() => {
    try {
      const list = JSON.parse(localStorage.getItem(MEMBERS_KEY) ?? "[]") as string[];
      setMembers(127 + list.length);
      if (list.length) setJoined(true);
    } catch {}
  }, []);

  const join = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const list = JSON.parse(localStorage.getItem(MEMBERS_KEY) ?? "[]") as string[];
      if (!list.includes(email)) list.push(email);
      localStorage.setItem(MEMBERS_KEY, JSON.stringify(list));
      setMembers(127 + list.length);
    } catch {}
    setJoined(true);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-forest-900 p-8 text-cream-50 sm:p-10">
      <div className="aurora-orb h-64 w-64" style={{ top: "-4rem", right: "-4rem", "--orb-color": "rgba(246,242,234,0.12)" } as React.CSSProperties} />
      <div className="relative">
        <p className="text-sm font-semibold tracking-[0.3em] text-cream-100/80 uppercase">{c.kicker}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{c.title}</h2>
        <p className="mt-3 max-w-md text-cream-100/85">{c.text}</p>
        {joined ? (
          <div className="mt-6 rounded-2xl border border-cream-100/25 bg-cream-50/10 p-5">
            <p className="flex items-center gap-2 font-semibold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {c.joined}
            </p>
            <p className="mt-1 text-xs text-cream-100/60">{c.joinedDemo}</p>
          </div>
        ) : (
          <form onSubmit={join} className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={c.emailPlaceholder}
              className="w-full rounded-full border border-cream-100/30 bg-forest-950/60 px-5 py-3 text-sm text-cream-50 outline-none transition-colors placeholder:text-cream-100/40 focus:border-cream-100/70"
            />
            <button
              type="submit"
              className="shrink-0 cursor-pointer rounded-full bg-cream-50 px-6 py-3 text-sm font-semibold text-forest-950 transition-all hover:bg-white active:scale-[0.98]"
            >
              {c.button}
            </button>
          </form>
        )}
        <p className="mt-4 text-xs text-cream-100/60">
          <strong className="font-display text-base text-cream-50">{members}</strong> {c.members}
        </p>
      </div>
    </div>
  );
}

// ── Comentarios con moderación ─────────────────────────────────────
export function Comments({ dict, slug }: { dict: Dictionary; slug: string }) {
  const c = dict.blogPage.comments;
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setComments(readComments().filter((x) => x.slug === slug));
  }, [slug]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const all = readComments();
    const nuevo: Comment = {
      id: `c_${Date.now()}`,
      slug,
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" }),
      status: "pending",
    };
    all.push(nuevo);
    writeComments(all);
    setComments(all.filter((x) => x.slug === slug));
    setText("");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const visibles = comments; // el visitante ve aprobados + los suyos pendientes (demo: todos locales)

  return (
    <section className="mt-14 border-t border-cream-200 pt-10">
      <h2 className="font-display text-2xl font-semibold text-forest-950">
        {c.title} {visibles.length > 0 && <span className="text-forest-800/50">({visibles.length})</span>}
      </h2>

      <div className="mt-6 space-y-4">
        {visibles.length === 0 && <p className="text-sm text-forest-800/60">{c.empty}</p>}
        {visibles.map((cm) => (
          <article key={cm.id} className="rounded-2xl border border-cream-200 bg-cream-50 p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-900 text-xs font-bold text-cream-50">
                {cm.name.slice(0, 1).toUpperCase()}
              </span>
              <span className="text-sm font-semibold text-forest-950">{cm.name}</span>
              <span className="text-xs text-forest-800/50">· {cm.date}</span>
              {cm.status === "pending" && (
                <span className="rounded-full border border-forest-700/30 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-forest-700 uppercase">
                  {c.pending}
                </span>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-forest-800/85">{cm.text}</p>
          </article>
        ))}
      </div>

      <form onSubmit={submit} className="mt-8 rounded-2xl border border-cream-200 bg-cream-50 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block sm:col-span-1">
            <span className="text-xs font-semibold tracking-wider text-forest-800/70 uppercase">{c.nameLabel}</span>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={c.namePlaceholder}
              className="mt-1.5 w-full rounded-xl border border-cream-200 bg-white px-3.5 py-2.5 text-sm text-forest-950 outline-none focus:border-forest-700"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="text-xs font-semibold tracking-wider text-forest-800/70 uppercase">{c.textLabel}</span>
            <textarea
              required
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={c.textPlaceholder}
              className="mt-1.5 w-full rounded-xl border border-cream-200 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-forest-950 outline-none focus:border-forest-700"
            />
          </label>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-forest-800/60">{sent ? c.moderation : c.demoNote}</p>
          <button
            type="submit"
            className="cursor-pointer rounded-full bg-forest-900 px-6 py-2.5 text-sm font-semibold text-cream-50 transition-all hover:bg-forest-800 active:scale-[0.98]"
          >
            {c.submit}
          </button>
        </div>
      </form>
    </section>
  );
}
