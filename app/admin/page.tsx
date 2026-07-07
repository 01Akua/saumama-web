"use client";

/**
 * PANEL ADMINISTRATIVO — DEMO PROVISIONAL (v2)
 * Editor universal: recorre la estructura de contenido del sitio y genera
 * campos para TODO el texto, agrupado por página. Los cambios viven en
 * localStorage; en producción, "Guardar" publicará al CMS.
 */

import { useEffect, useMemo, useState } from "react";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { IMG } from "@/lib/images";
import { Logo } from "@/components/Logo";
import { getStoredApiKey, setStoredApiKey, translateFields } from "@/lib/translate";
import { readComments, writeComments, MEMBERS_KEY, type Comment } from "@/components/Community";

type Overrides = Record<string, string>;
const STORAGE_KEY = "saumama-cms-demo";

// ── Etiquetas humanas para las claves del contenido ────────────────
const LABELS: Record<string, string> = {
  kicker: "Etiqueta superior", title: "Título", subtitle: "Subtítulo", text: "Texto",
  p1: "Párrafo 1", p2: "Párrafo 2", p3: "Párrafo 3", link: "Texto del enlace",
  quote: "Cita", line: "Frase de cierre", value: "Valor", label: "Etiqueta",
  name: "Nombre", role: "Cargo", bio: "Biografía", tag: "Categoría", date: "Fecha",
  excerpt: "Extracto", benefit: "Beneficio clave", button: "Texto del botón",
  sectionTitle: "Título de sección", sectionText: "Texto de sección",
  redirect: "Nota de redirección", demoNote: "Nota demo", amounts: "Etiqueta de montos",
  historyKicker: "Etiqueta historia", historyTitle: "Título historia",
  historyP1: "Historia — párrafo 1", historyP2: "Historia — párrafo 2",
  teamKicker: "Etiqueta equipo", teamTitle: "Título equipo",
  logoKicker: "Etiqueta", logoTitle: "Título", logoText: "Texto",
  closing: "Frase de cierre", closingCta1: "Botón 1", closingCta2: "Botón 2",
  featured: "Título destacados", status: "Estado", cta: "Botón",
  cta1: "Botón 1", cta2: "Botón 2", category: "Categoría",
  safeguardsKicker: "Etiqueta salvaguardas", safeguardsTitle: "Título salvaguardas",
  readOn: "Enlace de lectura", follow: "Botón seguir", followText: "Texto seguir",
  galleryTitle: "Título galería", galleryText: "Texto galería",
  versionNote: "Nota de versión", viewClassic: "Ver clásica", readMore: "Leer más",
  featuredTag: "Etiqueta destacado", aboutCard: "Tarjeta sobre", figuresCard: "Tarjeta cifras",
  standardsCard: "Tarjeta estándares", tagline: "Lema", navTitle: "Título navegación",
  resourcesTitle: "Título recursos", newsletterTitle: "Título boletín",
  newsletterText: "Texto boletín", newsletterPlaceholder: "Placeholder correo",
  rights: "Derechos", prototype: "Nota prototipo", home: "Inicio", about: "Nosotros",
  projects: "Proyectos", blog: "Blog", donate: "Donar",
  purpose: "Propósito", what: "Qué hacemos", project: "Proyecto", team: "Equipo",
  inspiration: "Inspiración",
};

function labelFor(path: string): string {
  const parts = path.split(".");
  const leaf = parts[parts.length - 1];
  const idx = parts.filter((p) => /^\d+$/.test(p)).map((n) => Number(n) + 1);
  const base = LABELS[leaf] ?? leaf;
  return idx.length ? `${base} · ${idx.join(".")}` : base;
}

// Aplana un subárbol del diccionario a [ruta, valor] de hojas string
function flatten(obj: unknown, prefix: string): Array<[string, string]> {
  if (typeof obj === "string") return [[prefix, obj]];
  if (Array.isArray(obj)) {
    return obj.flatMap((item, i) => flatten(item, `${prefix}.${i}`));
  }
  if (obj && typeof obj === "object") {
    return Object.entries(obj).flatMap(([k, v]) => flatten(v, prefix ? `${prefix}.${k}` : k));
  }
  return [];
}

function getPath(obj: unknown, path: string): unknown {
  let cur: unknown = obj;
  for (const key of path.split(".")) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[key];
  }
  return cur;
}

// ── Secciones del panel: cada una agrupa subárboles del contenido ──
type Group = { title: string; path: string };
type Section = { id: string; label: string; icon: string; page: string; groups: Group[] };

const SECTIONS: Section[] = [
  {
    id: "portada", label: "Portada", page: "Página de inicio",
    icon: "M3 12l9-8 9 8M5 10v10h5v-6h4v6h5V10",
    groups: [
      { title: "Hero principal", path: "hero" },
      { title: "Manifiesto", path: "manifesto" },
      { title: "Cifras clave", path: "stats" },
    ],
  },
  {
    id: "proposito", label: "Propósito", page: "Página de inicio",
    icon: "M12 3v18m-7-9c0 5 3 8 7 9 4-1 7-4 7-9",
    groups: [
      { title: "¿Por qué existimos?", path: "about" },
      { title: "Qué hacemos", path: "whatWeDo" },
      { title: "Nuestro enfoque", path: "impact" },
    ],
  },
  {
    id: "lineas", label: "Líneas y servicios", page: "Inicio · Proyectos",
    icon: "M4 6h16M4 12h16M4 18h16M8 6v12",
    groups: [
      { title: "Líneas de negocio", path: "businessLines" },
      { title: "Servicios", path: "services" },
      { title: "Estándares", path: "standards" },
    ],
  },
  {
    id: "proyectos", label: "Proyectos", page: "Página de proyectos",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z",
    groups: [
      { title: "Encabezado y proyectos", path: "projectsPage" },
    ],
  },
  {
    id: "nosotros", label: "Nosotros", page: "Página nosotros",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM5 21a7 7 0 0114 0",
    groups: [
      { title: "Historia, misión y visión", path: "aboutPage.kicker" },
      { title: "", path: "aboutPage.title" },
      { title: "", path: "aboutPage.subtitle" },
      { title: "", path: "aboutPage.historyKicker" },
      { title: "", path: "aboutPage.historyTitle" },
      { title: "", path: "aboutPage.historyP1" },
      { title: "", path: "aboutPage.historyP2" },
      { title: "Misión", path: "aboutPage.mission" },
      { title: "Visión 2030", path: "aboutPage.vision" },
      { title: "La Samauma", path: "aboutPage.logoKicker" },
      { title: "", path: "aboutPage.logoTitle" },
      { title: "", path: "aboutPage.logoText" },
      { title: "", path: "aboutPage.closing" },
    ],
  },
  {
    id: "equipo", label: "Equipo", page: "Página nosotros",
    icon: "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-8.13a4 4 0 11-8 0 4 4 0 018 0zm8 4a3 3 0 11-6 0 3 3 0 016 0z",
    groups: [
      { title: "Encabezado", path: "aboutPage.teamKicker" },
      { title: "", path: "aboutPage.teamTitle" },
      { title: "Integrantes", path: "aboutPage.team" },
    ],
  },
  {
    id: "donaciones", label: "Donaciones", page: "Inicio · Widget",
    icon: "M12 21c-4-2.5-8-5.5-8-10a4 4 0 017-2.6A4 4 0 0118 11c0 4.5-4 7.5-6 10z",
    groups: [
      { title: "Sección y widget", path: "donation.kicker" },
      { title: "", path: "donation.sectionTitle" },
      { title: "", path: "donation.sectionText" },
      { title: "", path: "donation.text" },
      { title: "", path: "donation.bullets" },
      { title: "", path: "donation.button" },
      { title: "", path: "donation.redirect" },
      { title: "Flujo de pago (simulación)", path: "donation.flow" },
    ],
  },
  {
    id: "blog", label: "Blog", page: "Página blog",
    icon: "M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z",
    groups: [
      { title: "Teaser en inicio", path: "blog" },
      { title: "Página del blog", path: "blogPage" },
    ],
  },
  {
    id: "general", label: "Navegación y pie", page: "Todo el sitio",
    icon: "M4 6h16M4 12h10M4 18h7",
    groups: [
      { title: "Menú de navegación", path: "nav" },
      { title: "Pie de página", path: "footer" },
      { title: "Cierre (CTA final)", path: "cta" },
    ],
  },
];

// ── Iconos utilitarios ─────────────────────────────────────────────
const Icon = ({ d, className = "h-4 w-4" }: { d: string; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d={d} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IC = {
  dashboard: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  media: "M4 5h16v14H4zM4 15l4-4 3 3 5-5 4 4M9 9h.01",
  settings: "M12 15a3 3 0 100-6 3 3 0 000 6zm7-3a7 7 0 01-.1 1.2l2 1.6-2 3.4-2.4-1a7 7 0 01-2 1.2L14 21h-4l-.5-2.6a7 7 0 01-2-1.2l-2.4 1-2-3.4 2-1.6A7 7 0 015 12a7 7 0 01.1-1.2l-2-1.6 2-3.4 2.4 1a7 7 0 012-1.2L10 3h4l.5 2.6a7 7 0 012 1.2l2.4-1 2 3.4-2 1.6c.06.4.1.8.1 1.2z",
  check: "M5 13l4 4L19 7",
  spark: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z",
  eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zm10 3a3 3 0 100-6 3 3 0 000 6z",
  download: "M12 3v12m0 0l-4-4m4 4l4-4M4 21h16",
  upload: "M12 21V9m0 0l-4 4m4-4l4 4M4 3h16",
  warn: "M12 9v4m0 4h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z",
  globe: "M12 21a9 9 0 100-18 9 9 0 000 18zm-9-9h18M12 3a15 15 0 010 18",
  users: "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-8.13a4 4 0 11-8 0 4 4 0 018 0zm8 4a3 3 0 11-6 0 3 3 0 016 0z",
  trash: "M3 6h18M8 6V4h8v2m-9 0l1 14h8l1-14",
};

// Miniaturas para la sección Galería
const MEDIA: Array<{ src: string; name: string; uso: string }> = [
  { src: IMG.heroRiver, name: "hero.jpg", uso: "Portada — hero" },
  { src: IMG.heroValley, name: "hero-nosotros.jpg", uso: "Nosotros — hero" },
  { src: IMG.mountain, name: "hero-proyectos.jpg", uso: "Proyectos — hero" },
  { src: IMG.samauma, name: "samauma.jpg", uso: "La Samauma" },
  { src: IMG.forestSun, name: "proposito.jpg", uso: "Propósito" },
  { src: IMG.historia, name: "historia.jpg", uso: "Historia" },
  { src: IMG.enfoque, name: "enfoque.jpg", uso: "Enfoque (fondo)" },
  { src: IMG.donacion, name: "donacion.jpg", uso: "Cierre proyectos" },
  { src: IMG.seedling, name: "cta.jpg", uso: "CTA final · Blog" },
  ...IMG.gal.map((src, i) => ({ src, name: `gal-${i + 1}.jpg`, uso: "Galería inicio" })),
  ...IMG.proj.map((src, i) => ({ src, name: `proj-${i + 1}.jpg`, uso: `Proyecto ${i + 1}` })),
  ...IMG.que.map((src, i) => ({ src, name: `que-${i + 1}.jpg`, uso: "Qué hacemos" })),
  ...IMG.blogGal.map((src, i) => ({ src, name: `blog-g${i + 1}.jpg`, uso: "Galería blog" })),
];

export default function AdminDemo() {
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [lang, setLang] = useState<Locale>("es");
  const [view, setView] = useState<string>("dashboard"); // dashboard | media | ajustes | <section.id>
  const [overrides, setOverrides] = useState<Overrides>({});
  const [dirty, setDirty] = useState(false);
  const [toast, setToast] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [translating, setTranslating] = useState(false);
  const [savedAt, setSavedAt] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [membersCount, setMembersCount] = useState(0);

  const dict = useMemo(() => getDictionary(lang), [lang]);
  const active = SECTIONS.find((s) => s.id === view);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setOverrides(JSON.parse(raw));
      const at = localStorage.getItem(STORAGE_KEY + "-at");
      if (at) setSavedAt(at);
    } catch {}
    setApiKey(getStoredApiKey());
    setComments(readComments());
    try {
      setMembersCount((JSON.parse(localStorage.getItem(MEMBERS_KEY) ?? "[]") as string[]).length);
    } catch {}
  }, []);

  const val = (path: string) =>
    overrides[`${lang}.${path}`] ?? ((getPath(dict, path) as string) ?? "");

  const setVal = (path: string, v: string) => {
    setOverrides((o) => ({ ...o, [`${lang}.${path}`]: v }));
    setDirty(true);
  };

  const notify = (msg: string, ms = 4000) => {
    setToast(msg);
    setTimeout(() => setToast(""), ms);
  };

  const save = () => {
    const at = new Date().toLocaleString("es-CO", { dateStyle: "medium", timeStyle: "short" });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    localStorage.setItem(STORAGE_KEY + "-at", at);
    setSavedAt(at);
    setDirty(false);
    notify("Cambios guardados. En producción el sitio se actualizaría automáticamente.");
  };

  const resetAll = () => {
    localStorage.removeItem(STORAGE_KEY);
    setOverrides({});
    setDirty(false);
    notify("Contenido restaurado al original.");
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(overrides, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "saumama-contenido.json";
    a.click();
    URL.revokeObjectURL(a.href);
    notify("Contenido exportado como JSON.");
  };

  const importJson = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result)) as Overrides;
        setOverrides(data);
        setDirty(true);
        notify("Contenido importado — revisa y guarda.");
      } catch {
        notify("Archivo inválido.");
      }
    };
    reader.readAsText(file);
  };

  const moderate = (id: string, action: "approve" | "delete") => {
    const all = readComments();
    const next =
      action === "delete"
        ? all.filter((c) => c.id !== id)
        : all.map((c) => (c.id === id ? { ...c, status: "approved" as const } : c));
    writeComments(next);
    setComments(next);
    notify(action === "approve" ? "Comentario aprobado — ya es visible en el blog." : "Comentario eliminado.");
  };

  const pendingCount = comments.filter((c) => c.status === "pending").length;

  // Campos (hojas string) de la sección activa
  const activeFields = useMemo(() => {
    if (!active) return [];
    return active.groups.map((g) => ({
      group: g,
      fields: flatten(getPath(dict, g.path), g.path),
    }));
  }, [active, dict]);

  // Nº de cambios sin guardar / total editado por sección
  const editedCount = (section: Section, l: Locale) =>
    Object.keys(overrides).filter(
      (k) => k.startsWith(`${l}.`) && section.groups.some((g) => k.slice(3).startsWith(g.path))
    ).length;

  const totalFields = useMemo(
    () => SECTIONS.reduce((n, s) => n + s.groups.reduce((m, g) => m + flatten(getPath(dict, g.path), g.path).length, 0), 0),
    [dict]
  );
  const totalEdited = Object.keys(overrides).length;

  const translateSection = async () => {
    if (!active) return;
    const target: Locale = lang === "es" ? "en" : "es";
    const fields = Object.fromEntries(
      activeFields.flatMap(({ fields }) => fields.map(([p]) => [p, val(p)]))
    );
    setTranslating(true);
    try {
      const result = await translateFields(fields, lang, target, apiKey || undefined);
      setOverrides((o) => {
        const next = { ...o };
        for (const [path, text] of Object.entries(result.fields)) next[`${target}.${path}`] = text;
        return next;
      });
      setDirty(true);
      notify(`Sección traducida al ${target === "en" ? "inglés" : "español"} (traductor: ${result.method}) — revisa y guarda.`, 6000);
    } catch (e) {
      notify(
        e instanceof Error && e.message.includes("401")
          ? "Clave de API inválida — bórrala en Ajustes para usar el traductor gratuito."
          : "No se pudo traducir. Revisa tu conexión."
      );
    } finally {
      setTranslating(false);
    }
  };

  // ── Login ────────────────────────────────────────────────────────
  if (!logged) {
    return (
      <div className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-forest-950 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${IMG.heroRiver})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 to-forest-950" />
        <div className="modal-in relative w-full max-w-sm rounded-3xl border border-cream-100/15 bg-forest-900/90 p-8 shadow-2xl backdrop-blur">
          <Logo dark horizontal={false} className="mx-auto h-28 w-auto" />
          <p className="mt-3 text-center text-[10px] tracking-[0.4em] text-cream-100/70 uppercase">
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
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@saumama.org"
                className="mt-1 w-full rounded-xl border border-cream-100/20 bg-forest-950 px-3 py-2.5 text-sm text-cream-50 outline-none transition-colors focus:border-cream-100/60"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold tracking-wider text-cream-100/70 uppercase">Contraseña</span>
              <input
                type="password" required placeholder="••••••••"
                className="mt-1 w-full rounded-xl border border-cream-100/20 bg-forest-950 px-3 py-2.5 text-sm text-cream-50 outline-none transition-colors focus:border-cream-100/60"
              />
            </label>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-cream-50 py-3 font-semibold text-forest-950 transition-all hover:bg-white active:scale-[0.99]"
            >
              Ingresar
            </button>
          </form>
          <p className="mt-5 rounded-xl border border-cream-100/15 bg-cream-50/5 p-3 text-center text-xs text-cream-100/60">
            Demo provisional — cualquier correo y contraseña funcionan.
          </p>
        </div>
      </div>
    );
  }

  const NavItem = ({ id, label, icon, badge }: { id: string; label: string; icon: string; badge?: number }) => (
    <button
      onClick={() => setView(id)}
      className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-300 ${
        view === id
          ? "bg-cream-50 font-semibold text-forest-950 shadow-sm"
          : "text-cream-100/85 hover:bg-forest-800 hover:text-cream-50"
      }`}
    >
      <Icon d={icon} className="h-4 w-4 shrink-0" />
      <span className="flex-1">{label}</span>
      {badge ? (
        <span className={`rounded-full px-1.5 text-[10px] font-bold ${view === id ? "bg-forest-900 text-cream-50" : "bg-cream-50/15 text-cream-100"}`}>
          {badge}
        </span>
      ) : null}
    </button>
  );

  // ── Panel ────────────────────────────────────────────────────────
  return (
    <div className="flex min-h-[100dvh] bg-cream-100">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-[100dvh] w-64 shrink-0 flex-col overflow-y-auto bg-forest-950 text-cream-100 md:flex">
        <div className="flex items-center justify-center border-b border-cream-100/10 px-5 py-5">
          <Logo dark className="h-12 w-auto" />
        </div>
        <nav className="flex-1 space-y-1 p-3">
          <NavItem id="dashboard" label="Panel" icon={IC.dashboard} />
          <p className="px-3 pt-4 pb-1 text-[10px] font-bold tracking-[0.2em] text-cream-100/40 uppercase">
            Contenido
          </p>
          {SECTIONS.map((s) => (
            <NavItem key={s.id} id={s.id} label={s.label} icon={s.icon} badge={editedCount(s, lang) || undefined} />
          ))}
          <NavItem id="comunidad" label="Comunidad" icon={IC.users} badge={pendingCount || undefined} />
          <p className="px-3 pt-4 pb-1 text-[10px] font-bold tracking-[0.2em] text-cream-100/40 uppercase">
            Sistema
          </p>
          <NavItem id="media" label="Galería de medios" icon={IC.media} />
          <NavItem id="ajustes" label="Ajustes" icon={IC.settings} />
        </nav>
        <div className="border-t border-cream-100/10 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-forest-900 p-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-50 font-display text-sm font-bold text-forest-950">
              {(email[0] || "A").toUpperCase()}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-cream-50">{email || "admin"}</p>
              <button onClick={() => setLogged(false)} className="cursor-pointer text-[11px] text-cream-100/60 hover:text-cream-100">
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 border-b border-cream-200 bg-cream-50/95 px-6 py-3.5 backdrop-blur">
          <div>
            <p className="text-[11px] font-semibold tracking-widest text-forest-700 uppercase">
              {active ? active.page : view === "media" ? "Recursos" : view === "ajustes" ? "Configuración" : view === "comunidad" ? "Blog · Moderación" : "Resumen"}
            </p>
            <h1 className="font-display text-2xl font-semibold text-forest-950">
              {active ? active.label : view === "media" ? "Galería de medios" : view === "ajustes" ? "Ajustes" : view === "comunidad" ? "Comunidad" : "Hola, bienvenido 👋"}
            </h1>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex overflow-hidden rounded-xl border border-cream-200 bg-white text-xs font-bold shadow-sm">
              {(["es", "en"] as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`cursor-pointer px-4 py-2 uppercase transition-colors ${
                    lang === l ? "bg-forest-900 text-cream-50" : "text-forest-800 hover:bg-cream-100"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            {active && (
              <button
                onClick={translateSection}
                disabled={translating}
                className={`flex cursor-pointer items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold shadow-sm transition-all ${
                  translating
                    ? "cursor-wait border-cream-200 bg-white text-forest-800/40"
                    : "border-forest-700/30 bg-white text-forest-800 hover:border-forest-700"
                }`}
              >
                <Icon d={IC.spark} className="h-3.5 w-3.5" />
                {translating ? "Traduciendo…" : `Traducir a ${lang === "es" ? "EN" : "ES"}`}
              </button>
            )}
            <button
              onClick={save}
              disabled={!dirty}
              className={`flex cursor-pointer items-center gap-1.5 rounded-xl px-5 py-2 text-sm font-semibold shadow-sm transition-all ${
                dirty
                  ? "bg-forest-900 text-cream-50 hover:bg-forest-800 active:scale-[0.98]"
                  : "cursor-default bg-cream-200 text-forest-800/40"
              }`}
            >
              <Icon d={IC.check} className="h-4 w-4" />
              {dirty ? "Guardar cambios" : "Guardado"}
            </button>
          </div>
        </header>

        {/* Aviso demo */}
        <div className="flex items-center gap-2 border-b border-forest-700/20 bg-forest-100 px-6 py-2 text-xs text-forest-800">
          <Icon d={IC.warn} className="h-3.5 w-3.5 shrink-0" />
          <span>
            <strong>Demo provisional:</strong> los cambios se guardan en este navegador. En la versión final,
            guardar publica al sitio real automáticamente.
          </span>
        </div>

        <div className="flex-1 p-6">
          {/* ── Vista: Dashboard ─────────────────────────────────── */}
          {view === "dashboard" && (
            <div className="mx-auto max-w-5xl space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { n: SECTIONS.length, t: "Secciones de contenido", icon: IC.dashboard },
                  { n: totalFields, t: "Campos editables", icon: IC.spark },
                  { n: totalEdited, t: "Campos personalizados", icon: IC.check },
                  { n: 2, t: "Idiomas (ES · EN)", icon: IC.globe },
                ].map((c) => (
                  <div key={c.t} className="rounded-2xl border border-cream-200 bg-cream-50 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-900 text-cream-50">
                      <Icon d={c.icon} />
                    </span>
                    <p className="mt-3 font-display text-3xl font-semibold text-forest-950">{c.n}</p>
                    <p className="text-xs text-forest-800/70">{c.t}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
                <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6 shadow-sm">
                  <h2 className="font-display text-xl font-semibold text-forest-950">Secciones del sitio</h2>
                  <p className="mt-1 text-sm text-forest-800/70">
                    Edita cualquier texto del sitio en español e inglés. El número indica campos personalizados.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {SECTIONS.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setView(s.id)}
                        className="group flex cursor-pointer items-center gap-3 rounded-xl border border-cream-200 bg-white p-3.5 text-left transition-all hover:-translate-y-0.5 hover:border-forest-700/40 hover:shadow-md"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-100 text-forest-800 transition-colors group-hover:bg-forest-900 group-hover:text-cream-50">
                          <Icon d={s.icon} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-forest-950">{s.label}</span>
                          <span className="block truncate text-[11px] text-forest-800/60">{s.page}</span>
                        </span>
                        {editedCount(s, lang) > 0 && (
                          <span className="rounded-full bg-forest-900 px-2 py-0.5 text-[10px] font-bold text-cream-50">
                            {editedCount(s, lang)}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-cream-200 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={IMG.heroRiver} alt="" className="aspect-[16/9] w-full object-cover" />
                    <div className="bg-cream-50 p-4">
                      <p className="text-xs font-semibold tracking-widest text-forest-700 uppercase">Sitio publicado</p>
                      <div className="mt-2 flex flex-col gap-1.5 text-sm">
                        <a href="../es/" target="_blank" className="flex cursor-pointer items-center gap-1.5 font-semibold text-forest-900 hover:underline">
                          <Icon d={IC.eye} className="h-3.5 w-3.5" /> Página principal
                        </a>
                        <a href="../es/blog/" target="_blank" className="flex cursor-pointer items-center gap-1.5 font-semibold text-forest-900 hover:underline">
                          <Icon d={IC.eye} className="h-3.5 w-3.5" /> Blog y comunidad
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-cream-200 bg-cream-50 p-4 shadow-sm">
                    <p className="text-xs font-semibold tracking-widest text-forest-700 uppercase">Último guardado</p>
                    <p className="mt-1 font-display text-lg font-semibold text-forest-950">
                      {savedAt || "Aún sin guardar"}
                    </p>
                    {dirty && (
                      <p className="mt-1 inline-block rounded-full bg-forest-900 px-2.5 py-0.5 text-[11px] font-semibold text-cream-50">
                        Cambios sin guardar
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Vista: sección de contenido (editor universal) ───── */}
          {active && (
            <div className="mx-auto max-w-4xl space-y-6">
              {activeFields.map(({ group, fields }, gi) =>
                fields.length === 0 ? null : (
                  <div key={gi} className={group.title ? "rounded-2xl border border-cream-200 bg-cream-50 p-6 shadow-sm" : "-mt-4 rounded-2xl border border-cream-200 bg-cream-50 p-6 pt-2 shadow-sm"}>
                    {group.title && (
                      <h2 className="mb-4 flex items-center gap-2 border-b border-cream-200 pb-3 font-display text-lg font-semibold text-forest-950">
                        {group.title}
                      </h2>
                    )}
                    <div className="grid gap-4 sm:grid-cols-2">
                      {fields.map(([path, base]) => {
                        const value = val(path);
                        const isLong = base.length > 80 || value.length > 80;
                        const changed = `${lang}.${path}` in overrides;
                        return (
                          <label key={path} className={isLong ? "block sm:col-span-2" : "block"}>
                            <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-forest-800/70 uppercase">
                              {labelFor(path)}
                              {changed && <span className="h-1.5 w-1.5 rounded-full bg-forest-700" title="Personalizado" />}
                            </span>
                            {isLong ? (
                              <textarea
                                rows={Math.min(6, Math.max(2, Math.ceil(value.length / 90)))}
                                value={value}
                                onChange={(e) => setVal(path, e.target.value)}
                                className="mt-1.5 w-full rounded-xl border border-cream-200 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-forest-950 shadow-sm outline-none transition-colors focus:border-forest-700"
                              />
                            ) : (
                              <input
                                type="text"
                                value={value}
                                onChange={(e) => setVal(path, e.target.value)}
                                className="mt-1.5 w-full rounded-xl border border-cream-200 bg-white px-3.5 py-2.5 text-sm text-forest-950 shadow-sm outline-none transition-colors focus:border-forest-700"
                              />
                            )}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )
              )}
            </div>
          )}

          {/* ── Vista: Comunidad (moderación) ────────────────────── */}
          {view === "comunidad" && (
            <div className="mx-auto max-w-4xl space-y-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { n: membersCount + 127, t: "Miembros de la comunidad" },
                  { n: comments.length, t: "Comentarios totales" },
                  { n: pendingCount, t: "Pendientes de aprobación" },
                ].map((c) => (
                  <div key={c.t} className="rounded-2xl border border-cream-200 bg-cream-50 p-5 shadow-sm">
                    <p className="font-display text-3xl font-semibold text-forest-950">{c.n}</p>
                    <p className="text-xs text-forest-800/70">{c.t}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6 shadow-sm">
                <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-forest-950">
                  <Icon d={IC.users} /> Moderación de comentarios
                </h2>
                <p className="mt-1 text-sm text-forest-800/70">
                  Los comentarios del blog quedan aquí hasta que los apruebes. Solo los aprobados
                  son visibles para los visitantes.
                </p>
                <div className="mt-5 space-y-3">
                  {comments.length === 0 && (
                    <p className="rounded-xl border border-dashed border-cream-200 p-6 text-center text-sm text-forest-800/50">
                      Aún no hay comentarios. Cuando alguien comente en el blog, aparecerá aquí.
                    </p>
                  )}
                  {comments.map((c) => (
                    <div key={c.id} className="flex flex-wrap items-start gap-3 rounded-xl border border-cream-200 bg-white p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-900 text-xs font-bold text-cream-50">
                        {c.name.slice(0, 1).toUpperCase()}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-forest-950">
                          {c.name}
                          <span className="ml-2 text-xs font-normal text-forest-800/50">{c.date}</span>
                          <span
                            className={`ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                              c.status === "approved"
                                ? "bg-forest-100 text-forest-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {c.status === "approved" ? "Aprobado" : "Pendiente"}
                          </span>
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-forest-800/85">{c.text}</p>
                        <p className="mt-1 text-[11px] text-forest-800/50">En: {c.slug}</p>
                      </div>
                      <div className="flex gap-2">
                        {c.status === "pending" && (
                          <button
                            onClick={() => moderate(c.id, "approve")}
                            className="flex cursor-pointer items-center gap-1 rounded-lg bg-forest-900 px-3 py-1.5 text-xs font-semibold text-cream-50 transition-colors hover:bg-forest-800"
                          >
                            <Icon d={IC.check} className="h-3.5 w-3.5" /> Aprobar
                          </button>
                        )}
                        <button
                          onClick={() => moderate(c.id, "delete")}
                          className="flex cursor-pointer items-center gap-1 rounded-lg border border-red-200 bg-white px-3 py-1.5 text-xs font-semibold text-red-700 transition-colors hover:bg-red-50"
                        >
                          <Icon d={IC.trash} className="h-3.5 w-3.5" /> Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6 shadow-sm">
                <h2 className="font-display text-lg font-semibold text-forest-950">
                  ¿Cómo funcionará el registro en la versión real?
                </h2>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-forest-800/80">
                  <li>• <strong>Publicar entradas:</strong> solo el equipo, desde este panel (con usuarios y contraseñas reales).</li>
                  <li>• <strong>Comentar:</strong> visitantes con nombre + correo verificado; todo pasa por esta moderación antes de publicarse.</li>
                  <li>• <strong>Comunidad:</strong> el registro por correo alimenta el boletín y las convocatorias.</li>
                </ul>
              </div>
            </div>
          )}

          {/* ── Vista: Galería de medios ─────────────────────────── */}
          {view === "media" && (
            <div className="mx-auto max-w-5xl">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm text-forest-800/70">
                  {MEDIA.length} fotografías reales de la fundación en uso en el sitio.
                </p>
                <button
                  onClick={() => notify("La carga de imágenes se habilita en la versión final con el CMS.")}
                  className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-forest-900 px-4 py-2 text-xs font-semibold text-cream-50 transition-colors hover:bg-forest-800"
                >
                  <Icon d={IC.upload} className="h-3.5 w-3.5" /> Subir imagen
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {MEDIA.map((m) => (
                  <figure key={m.name} className="group overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <div className="overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={m.src}
                        alt={m.name}
                        loading="lazy"
                        className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="p-3">
                      <p className="truncate text-xs font-semibold text-forest-950">{m.name}</p>
                      <p className="truncate text-[11px] text-forest-800/60">{m.uso}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* ── Vista: Ajustes ───────────────────────────────────── */}
          {view === "ajustes" && (
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6 shadow-sm">
                <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-forest-950">
                  <Icon d={IC.spark} /> Traducción automática
                </h2>
                <p className="mt-1 text-sm text-forest-800/70">
                  Sin clave, el panel usa el traductor gratuito del navegador. Con una clave de Anthropic
                  (opcional) traduce con IA de calidad editorial.
                </p>
                <div className="mt-4 flex gap-2">
                  <input
                    type={showKey ? "text" : "password"}
                    value={apiKey}
                    onChange={(e) => {
                      setApiKey(e.target.value);
                      setStoredApiKey(e.target.value.trim());
                    }}
                    placeholder="Clave API de Anthropic (opcional)"
                    className="w-full rounded-xl border border-cream-200 bg-white px-3.5 py-2.5 text-sm text-forest-950 shadow-sm outline-none focus:border-forest-700"
                  />
                  <button
                    onClick={() => setShowKey(!showKey)}
                    className="cursor-pointer rounded-xl border border-cream-200 bg-white px-3.5 text-forest-800 shadow-sm hover:border-forest-700"
                  >
                    <Icon d={IC.eye} />
                  </button>
                </div>
                <p className="mt-2 text-xs text-forest-800/50">
                  La clave se guarda solo en este navegador. En producción vivirá en el servidor del CMS.
                </p>
              </div>

              <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6 shadow-sm">
                <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-forest-950">
                  <Icon d={IC.download} /> Copia de seguridad del contenido
                </h2>
                <p className="mt-1 text-sm text-forest-800/70">
                  Descarga tus personalizaciones como archivo, o restáuralas en otro navegador.
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <button
                    onClick={exportJson}
                    className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-forest-900 px-4 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-forest-800"
                  >
                    <Icon d={IC.download} className="h-4 w-4" /> Exportar contenido
                  </button>
                  <label className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-cream-200 bg-white px-4 py-2.5 text-sm font-semibold text-forest-900 shadow-sm transition-colors hover:border-forest-700">
                    <Icon d={IC.upload} className="h-4 w-4" /> Importar contenido
                    <input
                      type="file"
                      accept="application/json"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && importJson(e.target.files[0])}
                    />
                  </label>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6 shadow-sm">
                <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-red-900">
                  <Icon d={IC.warn} /> Zona de riesgo
                </h2>
                <p className="mt-1 text-sm text-red-900/70">
                  Elimina todas tus personalizaciones y vuelve al contenido original del sitio.
                </p>
                <button
                  onClick={resetAll}
                  className="mt-4 cursor-pointer rounded-xl border border-red-300 bg-white px-4 py-2.5 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100"
                >
                  Restaurar contenido original
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Toast */}
      {toast && (
        <div className="modal-in fixed bottom-6 left-1/2 z-[80] flex -translate-x-1/2 items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-sm text-cream-50 shadow-2xl">
          <Icon d={IC.check} className="h-4 w-4 shrink-0" />
          {toast}
        </div>
      )}
    </div>
  );
}
