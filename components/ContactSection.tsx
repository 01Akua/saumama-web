"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

/**
 * Sección de contacto — reemplaza a la donación mientras la fundación no
 * puede recibir aportes en línea. Demo: los mensajes se guardan en
 * localStorage; en producción se conecta al correo de la fundación.
 */
export function ContactSection({ dict }: { dict: Dictionary }) {
  const c = dict.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const list = JSON.parse(localStorage.getItem("saumama-contactos") ?? "[]") as unknown[];
      list.push({ name, email, message, date: new Date().toISOString() });
      localStorage.setItem("saumama-contactos", JSON.stringify(list));
    } catch {}
    setSent(true);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-forest-900 text-cream-50">
      <div className="aurora-orb h-80 w-80" style={{ top: "-6rem", right: "-6rem", "--orb-color": "rgba(195,153,41,0.18)" } as React.CSSProperties} />
      <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-[0.3em] text-gold-400 uppercase">{c.kicker}</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-semibold sm:text-5xl">{c.title}</h2>
          <div className="mt-5 h-0.5 w-14 bg-gold-500" />
          <p className="mt-5 max-w-md text-lg leading-relaxed text-cream-100/85">{c.text}</p>
          <ul className="mt-8 space-y-4">
            {c.bullets.map((b) => (
              <li key={b.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-sm leading-relaxed text-cream-100/85">
                  <strong className="font-semibold text-cream-50">{b.title}</strong> — {b.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-cream-100/15 bg-forest-950/60 p-6 sm:p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-forest-950">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="mt-5 font-display text-2xl font-semibold">{c.success}</p>
              <p className="mt-2 text-xs text-cream-100/60">{c.demoNote}</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <label className="block">
                <span className="text-xs font-semibold tracking-wider text-cream-100/70 uppercase">{c.name}</span>
                <input
                  type="text" required value={name} onChange={(e) => setName(e.target.value)}
                  placeholder={c.namePlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-cream-100/20 bg-forest-900 px-4 py-3 text-sm text-cream-50 outline-none transition-colors placeholder:text-cream-100/35 focus:border-gold-500/60"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold tracking-wider text-cream-100/70 uppercase">{c.email}</span>
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder={c.emailPlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-cream-100/20 bg-forest-900 px-4 py-3 text-sm text-cream-50 outline-none transition-colors placeholder:text-cream-100/35 focus:border-gold-500/60"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold tracking-wider text-cream-100/70 uppercase">{c.message}</span>
                <textarea
                  required rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                  placeholder={c.messagePlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-cream-100/20 bg-forest-900 px-4 py-3 text-sm leading-relaxed text-cream-50 outline-none transition-colors placeholder:text-cream-100/35 focus:border-gold-500/60"
                />
              </label>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-full bg-gold-500 py-3.5 font-semibold text-forest-950 transition-all duration-500 hover:bg-gold-400 active:scale-[0.99]"
              >
                {c.submit}
              </button>
              <p className="text-center text-[11px] text-cream-100/50">{c.demoNote}</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
