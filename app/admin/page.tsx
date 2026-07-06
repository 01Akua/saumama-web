"use client";

/**
 * PANEL ADMINISTRATIVO — DEMO PROVISIONAL
 * Muestra al cliente cómo se administraría el sitio sin tocar código.
 * Los cambios se guardan en localStorage (solo en este navegador).
 * En producción, "Guardar" escribiría al CMS y el sitio se actualizaría solo.
 */

import { useEffect, useMemo, useState } from "react";
import { getDictionary, type Locale } from "@/lib/dictionaries";

type Overrides = Record<string, string>;
const STORAGE_KEY = "saumama-cms-demo";

// ── Campos editables por sección ──────────────────────────────────
const SECTIONS = [
  {
    id: "hero",
    label: "Portada (Hero)",
    icon: "M4 6h16M4 12h16M4 18h10",
    fields: [
      { path: "hero.kicker", label: "Etiqueta superior", type: "text" },
      { path: "hero.title", label: "Título principal", type: "textarea" },
      { path: "hero.subtitle", label: "Subtítulo", type: "textarea" },
    ],
  },
  {
    id: "stats",
    label: "Cifras clave",
    icon: "M5 20V10m7 10V4m7 16v-7",
    fields: [
      { path: "stats.0.value", label: "Cifra 1 — valor", type: "text" },
      { path: "stats.0.label", label: "Cifra 1 — texto", type: "text" },
      { path: "stats.1.value", label: "Cifra 2 — valor", type: "text" },
      { path: "stats.1.label", label: "Cifra 2 — texto", type: "text" },
      { path: "stats.2.value", label: "Cifra 3 — valor", type: "text" },
      { path: "stats.2.label", label: "Cifra 3 — texto", type: "text" },
      { path: "stats.3.value", label: "Cifra 4 — valor", type: "text" },
      { path: "stats.3.label", label: "Cifra 4 — texto", type: "text" },
    ],
  },
  {
    id: "about",
    label: "Quiénes somos",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    fields: [
      { path: "about.title", label: "Título", type: "text" },
      { path: "about.p1", label: "Párrafo 1", type: "textarea" },
      { path: "about.p2", label: "Párrafo 2", type: "textarea" },
      { path: "about.p3", label: "Párrafo 3", type: "textarea" },
    ],
  },
  {
    id: "donation",
    label: "Donaciones",
    icon: "M12 21c-4-2.5-8-5.5-8-10a4 4 0 017-2.6A4 4 0 0118 11c0 4.5-4 7.5-6 10z",
    fields: [
      { path: "donation.sectionTitle", label: "Título de la sección", type: "text" },
      { path: "donation.sectionText", label: "Texto de la sección", type: "textarea" },
      { path: "donation.button", label: "Texto del botón", type: "text" },
    ],
  },
  {
    id: "projects",
    label: "Proyectos",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2zM15 4v6h6",
    fields: [
      { path: "projectsPage.projects.0.name", label: "Proyecto 1 — nombre", type: "text" },
      { path: "projectsPage.projects.0.text", label: "Proyecto 1 — descripción", type: "textarea" },
      { path: "projectsPage.projects.1.name", label: "Proyecto 2 — nombre", type: "text" },
      { path: "projectsPage.projects.1.text", label: "Proyecto 2 — descripción", type: "textarea" },
      { path: "projectsPage.projects.2.name", label: "Proyecto 3 — nombre", type: "text" },
      { path: "projectsPage.projects.2.text", label: "Proyecto 3 — descripción", type: "textarea" },
    ],
  },
] as const;

// Lee un valor anidado tipo "hero.title" o "stats.0.value"
function getPath(obj: unknown, path: string): string {
  let cur: unknown = obj;
  for (const key of path.split(".")) {
    if (cur == null || typeof cur !== "object") return "";
    cur = (cur as Record<string, unknown>)[key];
  }
  return typeof cur === "string" ? cur : "";
}

export default function AdminDemo() {
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [lang, setLang] = useState<Locale>("es");
  const [section, setSection] = useState<(typeof SECTIONS)[number]["id"]>("hero");
  const [overrides, setOverrides] = useState<Overrides>({});
  const [dirty, setDirty] = useState(false);
  const [toast, setToast] = useState("");

  const dict = useMemo(() => getDictionary(lang), [lang]);
  const active = SECTIONS.find((s) => s.id === section)!;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setOverrides(JSON.parse(raw));
    } catch {}
  }, []);

  const val = (path: string) => overrides[`${lang}.${path}`] ?? getPath(dict, path);

  const setVal = (path: string, v: string) => {
    setOverrides((o) => ({ ...o, [`${lang}.${path}`]: v }));
    setDirty(true);
  };

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    setDirty(false);
    setToast("Cambios guardados. En producción el sitio se actualizaría automáticamente.");
    setTimeout(() => setToast(""), 4000);
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setOverrides({});
    setDirty(false);
    setToast("Contenido restaurado al original.");
    setTimeout(() => setToast(""), 3000);
  };

  // ── Login demo ───────────────────────────────────────────────────
  if (!logged) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center bg-forest-950 px-4">
        <div className="w-full max-w-sm rounded-2xl border border-cream-100/25 bg-forest-900 p-8 shadow-2xl">
          <p className="text-center font-display text-2xl font-semibold tracking-[0.15em] text-cream-50">
            SAUMAMA
          </p>
          <p className="mt-1 text-center text-[10px] tracking-[0.4em] text-cream-100 uppercase">
            Panel administrativo
          </p>
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setLogged(true);
            }}
          >
            <label className="block">
              <span className="text-xs font-semibold tracking-wider text-cream-100/70 uppercase">Correo</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@saumama.org"
                className="mt-1 w-full rounded-lg border border-cream-100/20 bg-forest-950 px-3 py-2.5 text-sm text-cream-50 outline-none focus:border-cream-50"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold tracking-wider text-cream-100/70 uppercase">Contraseña</span>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="mt-1 w-full rounded-lg border border-cream-100/20 bg-forest-950 px-3 py-2.5 text-sm text-cream-50 outline-none focus:border-cream-50"
              />
            </label>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-cream-50 py-3 font-semibold text-forest-950 transition-colors hover:bg-white"
            >
              Ingresar
            </button>
          </form>
          <p className="mt-5 rounded-lg border border-cream-50/20 bg-cream-50/5 p-3 text-center text-xs text-cream-100/60">
            Demo provisional — cualquier correo y contraseña funcionan.
          </p>
        </div>
      </div>
    );
  }

  // ── Panel ────────────────────────────────────────────────────────
  return (
    <div className="flex min-h-[100dvh] bg-cream-100">
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 flex-col bg-forest-950 text-cream-100 sm:flex">
        <div className="border-b border-cream-100/10 p-5">
          <p className="font-display text-lg font-semibold tracking-[0.15em]">SAUMAMA</p>
          <p className="text-[9px] tracking-[0.35em] text-cream-100 uppercase">Administración</p>
        </div>
        <nav className="flex-1 space-y-1 p-3">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSection(s.id)}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                section === s.id ? "bg-cream-50 font-semibold text-forest-950" : "hover:bg-forest-800"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4 shrink-0">
                <path d={s.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {s.label}
            </button>
          ))}
        </nav>
        <div className="space-y-2 border-t border-cream-100/10 p-4 text-xs">
          <a href="../es/" className="block cursor-pointer text-cream-100/70 transition-colors hover:text-cream-100">
            ← Ver sitio publicado
          </a>
          <button onClick={() => setLogged(false)} className="cursor-pointer text-cream-100/50 hover:text-cream-100">
            Cerrar sesión ({email || "admin"})
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-cream-200 bg-cream-50 px-5 py-3">
          <div>
            <h1 className="font-display text-xl font-semibold text-forest-900">{active.label}</h1>
            <p className="text-xs text-forest-800/60">Edita el contenido y guarda — sin tocar código.</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Idioma */}
            <div className="flex overflow-hidden rounded-lg border border-cream-200 text-xs font-bold">
              {(["es", "en"] as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`cursor-pointer px-3.5 py-2 uppercase transition-colors ${
                    lang === l ? "bg-forest-800 text-cream-50" : "bg-cream-50 text-forest-800 hover:bg-cream-100"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={reset}
              className="cursor-pointer rounded-lg border border-cream-200 px-3.5 py-2 text-xs font-semibold text-forest-800 transition-colors hover:border-forest-800"
            >
              Restaurar
            </button>
            <button
              onClick={save}
              disabled={!dirty}
              className={`cursor-pointer rounded-lg px-5 py-2 text-sm font-semibold transition-all ${
                dirty
                  ? "bg-cream-50 text-forest-950 hover:bg-white"
                  : "cursor-default bg-cream-200 text-forest-800/40"
              }`}
            >
              {dirty ? "Guardar cambios" : "Guardado"}
            </button>
          </div>
        </header>

        {/* Aviso demo */}
        <div className="border-b border-cream-100/30 bg-cream-50/10 px-5 py-2 text-xs text-forest-800">
          <strong>Demo provisional:</strong> los cambios se guardan solo en este navegador. En la versión final,
          guardar publica los cambios en el sitio real automáticamente.
        </div>

        <div className="grid flex-1 gap-6 overflow-y-auto p-5 lg:grid-cols-2">
          {/* Formulario */}
          <div className="space-y-5">
            {active.fields.map((f) => (
              <label key={f.path} className="block">
                <span className="text-xs font-semibold tracking-wider text-forest-800/70 uppercase">
                  {f.label}
                </span>
                {f.type === "textarea" ? (
                  <textarea
                    rows={3}
                    value={val(f.path)}
                    onChange={(e) => setVal(f.path, e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-cream-200 bg-cream-50 px-3 py-2.5 text-sm text-forest-950 outline-none focus:border-cream-50"
                  />
                ) : (
                  <input
                    type="text"
                    value={val(f.path)}
                    onChange={(e) => setVal(f.path, e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-cream-200 bg-cream-50 px-3 py-2.5 text-sm text-forest-950 outline-none focus:border-cream-50"
                  />
                )}
              </label>
            ))}
            {/* Slot de imagen (demo) */}
            <div>
              <span className="text-xs font-semibold tracking-wider text-forest-800/70 uppercase">Imagen</span>
              <button className="mt-1.5 flex w-full cursor-pointer flex-col items-center gap-1 rounded-lg border-2 border-dashed border-cream-200 py-8 text-forest-800/50 transition-colors hover:border-cream-100/60 hover:text-forest-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                  <path d="M12 16V8m0 0l-3 3m3-3l3 3M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs">Subir o cambiar imagen (disponible en la versión final)</span>
              </button>
            </div>
          </div>

          {/* Vista previa en vivo */}
          <div className="lg:sticky lg:top-5 lg:self-start">
            <p className="mb-2 text-xs font-semibold tracking-wider text-forest-800/70 uppercase">
              Vista previa en vivo
            </p>
            <div className="overflow-hidden rounded-xl border border-cream-200 shadow-lg">
              {section === "hero" && (
                <div className="bg-forest-950 px-6 py-12 text-center text-cream-50">
                  <p className="text-[10px] font-semibold tracking-[0.3em] text-cream-100 uppercase">
                    {val("hero.kicker")}
                  </p>
                  <h2 className="mt-3 font-display text-3xl leading-tight font-semibold">{val("hero.title")}</h2>
                  <div className="mx-auto mt-4 h-0.5 w-14 bg-cream-50" />
                  <p className="mx-auto mt-4 max-w-sm text-sm text-cream-100/80">{val("hero.subtitle")}</p>
                </div>
              )}
              {section === "stats" && (
                <div className="grid grid-cols-2 gap-6 bg-forest-900 px-6 py-10 text-center text-cream-50">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i}>
                      <p className="font-display text-3xl font-semibold text-cream-100">{val(`stats.${i}.value`)}</p>
                      <p className="mt-1 text-xs text-cream-100/75">{val(`stats.${i}.label`)}</p>
                    </div>
                  ))}
                </div>
              )}
              {section === "about" && (
                <div className="bg-cream-50 px-6 py-10">
                  <h2 className="font-display text-2xl font-semibold text-forest-900">{val("about.title")}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-forest-800/80">{val("about.p1")}</p>
                  <p className="mt-3 text-sm leading-relaxed text-forest-800/80">{val("about.p2")}</p>
                </div>
              )}
              {section === "donation" && (
                <div className="bg-forest-900 px-6 py-10 text-cream-50">
                  <h2 className="font-display text-2xl font-semibold">{val("donation.sectionTitle")}</h2>
                  <p className="mt-3 text-sm text-cream-100/80">{val("donation.sectionText")}</p>
                  <span className="mt-5 inline-block rounded-full bg-cream-50 px-6 py-2.5 text-sm font-semibold text-forest-950">
                    {val("donation.button")} · $25 ↗
                  </span>
                </div>
              )}
              {section === "projects" && (
                <div className="space-y-4 bg-cream-50 px-6 py-8">
                  {[0, 1, 2].map((i) => (
                    <article key={i} className="rounded-lg border border-cream-200 p-4">
                      <h3 className="font-display text-lg font-semibold text-forest-900">
                        {val(`projectsPage.projects.${i}.name`)}
                      </h3>
                      <p className="mt-1 text-xs text-forest-800/70">{val(`projectsPage.projects.${i}.text`)}</p>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-forest-950 px-6 py-3 text-sm text-cream-50 shadow-2xl">
          ✓ {toast}
        </div>
      )}
    </div>
  );
}
