import React from "react";
import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { ContactSection } from "@/components/ContactSection";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { IMG } from "@/lib/images";

const LeafIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M5 19c0-8 5-13 14-14-.5 9-5 14-12 14M5 19c2-4 5-7 9-9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Iconos de causas: ilustraciones duotono propias (sin IA), trabajadas con
// gradientes, texturas y varias capas de detalle — legibles a primera vista
// y con acabado de icono premium, no un pictograma plano.
const CAUSE_ICONS: React.ReactNode[] = [
  // Restauración ecológica: árbol frondoso con raíces y follaje en gradiente
  <svg key="c0" viewBox="0 0 64 64" className="h-11 w-11">
    <defs>
      <linearGradient id="rg0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" className="[stop-color:var(--color-forest-700)]" />
        <stop offset="100%" className="[stop-color:var(--color-forest-900)]" />
      </linearGradient>
      <linearGradient id="rg0b" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" className="[stop-color:var(--color-gold-400)]" />
        <stop offset="100%" className="[stop-color:var(--color-gold-500)]" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="57" rx="16" ry="3" className="fill-forest-900/20" />
    <path d="M30 58V38m0 0c-4-1-8 1-10 4m10-4c-3-3-4-7-2-11m2 11c3-4 8-5 12-3" stroke="currentColor" className="stroke-forest-700" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    <path d="M18 38c-2 2-3 5-2 8" stroke="currentColor" className="stroke-forest-700/70" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <circle cx="30" cy="24" r="17" fill="url(#rg0)" />
    <circle cx="16" cy="31" r="11.5" fill="url(#rg0)" />
    <circle cx="45" cy="30" r="12.5" fill="url(#rg0)" />
    <circle cx="24" cy="14" r="9" className="fill-forest-700" />
    <circle cx="41" cy="16" r="8" fill="url(#rg0b)" />
    <path d="M20 22c2-2 5-2 7 0M37 19c2-1.5 4.5-1.5 6 .3" stroke="currentColor" className="stroke-forest-950/30" strokeWidth="1.1" strokeLinecap="round" fill="none" />
  </svg>,
  // Biodiversidad y fauna: colibrí en vuelo sobre una flor
  <svg key="c1" viewBox="0 0 64 64" className="h-11 w-11">
    <defs>
      <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" className="[stop-color:var(--color-forest-700)]" />
        <stop offset="100%" className="[stop-color:var(--color-forest-900)]" />
      </linearGradient>
    </defs>
    {/* flor */}
    <g>
      <ellipse cx="16" cy="41" rx="3.4" ry="5.6" transform="rotate(0 16 48)" className="fill-terra-300" />
      <ellipse cx="16" cy="41" rx="3.4" ry="5.6" transform="rotate(72 16 48)" className="fill-terra-300" />
      <ellipse cx="16" cy="41" rx="3.4" ry="5.6" transform="rotate(144 16 48)" className="fill-terra-300" />
      <ellipse cx="16" cy="41" rx="3.4" ry="5.6" transform="rotate(216 16 48)" className="fill-terra-300" />
      <ellipse cx="16" cy="41" rx="3.4" ry="5.6" transform="rotate(288 16 48)" className="fill-terra-300" />
      <circle cx="16" cy="48" r="3.2" className="fill-gold-500" />
      <rect x="14.6" y="50" width="2.8" height="10" rx="1.4" className="fill-forest-700" />
      <path d="M14.6 56c-3-.5-5-2.5-5.5-5.5 3 0 5.2 2 5.5 5.5z" className="fill-forest-700" />
    </g>
    {/* colibrí */}
    <path d="M16 33c0-7 7-12 16-11.5 8 .4 13 5 12 10.5-.8 5-7 8-15 7.5-8-.4-13-3-13-6.5z" fill="url(#bg1)" />
    <circle cx="43" cy="26" r="6.5" fill="url(#bg1)" />
    <path d="M48 24.5l11-4.5-8.5 9z" className="fill-gold-500" />
    <circle cx="45.5" cy="24" r="1.7" className="fill-cream-50" />
    <circle cx="46" cy="23.6" r="0.8" className="fill-forest-950" />
    <path d="M27 24c-5-9-15-11-20-6 5 2 10 6 12 12 3-3.5 5.5-5 8-6z" className="fill-gold-500" />
    <path d="M15 34l-11-6 12.5 3z" className="fill-forest-700" />
    <path d="M15 37l-12 2 12.5 2z" className="fill-forest-800" />
    <path d="M16 40l-9 8 11-4.5z" className="fill-forest-700" />
  </svg>,
  // Carbono y clima: nube con degradado y hoja de venas marcadas
  <svg key="c2" viewBox="0 0 64 64" className="h-11 w-11">
    <defs>
      <linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" className="[stop-color:var(--color-forest-700)]" />
        <stop offset="100%" className="[stop-color:var(--color-forest-900)]" />
      </linearGradient>
      <linearGradient id="cg2b" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" className="[stop-color:var(--color-gold-400)]" />
        <stop offset="100%" className="[stop-color:var(--color-gold-500)]" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="48" rx="17" ry="2.6" className="fill-forest-900/15" />
    <path d="M17 42a10.5 10.5 0 01-2-20.8A13.5 13.5 0 0142.5 17a11.5 11.5 0 014 22.5 8 8 0 01-1.8.5H17z" fill="url(#cg2)" />
    <circle cx="24" cy="24" r="2" className="fill-cream-50/70" />
    <path d="M32 24c5 2 7 7.5 5.5 13.5-5-.3-9.5-3.5-10.5-9A13 13 0 0132 24z" fill="url(#cg2b)" />
    <path d="M32 26c0 4 .5 8 2 11.5M28 31c1.5 1.5 3 2.5 5 3" stroke="currentColor" className="stroke-forest-950/30" strokeWidth="1" strokeLinecap="round" fill="none" />
  </svg>,
  // Agroforestería y suelos: árbol y cultivo conviviendo sobre capas de tierra
  <svg key="c3" viewBox="0 0 64 64" className="h-11 w-11">
    <defs>
      <linearGradient id="ag3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" className="[stop-color:var(--color-forest-700)]" />
        <stop offset="100%" className="[stop-color:var(--color-forest-900)]" />
      </linearGradient>
    </defs>
    <rect x="7" y="46" width="50" height="7" rx="3.5" className="fill-forest-900" />
    <rect x="10" y="38" width="44" height="7" rx="3.5" className="fill-forest-800" />
    <path d="M10 42h44M10 49h44" stroke="currentColor" className="stroke-cream-50/10" strokeWidth="1" />
    <rect x="30" y="27" width="5" height="14" rx="2" className="fill-forest-700" />
    <circle cx="32.5" cy="21" r="12.5" fill="url(#ag3)" />
    <circle cx="24" cy="26" r="8" className="fill-forest-700" />
    <circle cx="40" cy="25" r="7.5" fill="url(#ag3)" />
    <circle cx="37" cy="14" r="5.5" className="fill-gold-500" />
    <path d="M14 38c0-4 2-6 5-7 .3 4-1.6 6.5-5 7z" className="fill-gold-500" />
    <path d="M44 38c0-4 2-6 5-7 .3 4-1.6 6.5-5 7z" className="fill-terra-300" />
  </svg>,
  // Cacao sostenible: mazorca abierta con semillas y textura de nervaduras
  <svg key="c4" viewBox="0 0 64 64" className="h-11 w-11">
    <defs>
      <linearGradient id="ca4" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" className="[stop-color:var(--color-gold-400)]" />
        <stop offset="100%" className="[stop-color:var(--color-terra-300)]" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="58" rx="10" ry="2.4" className="fill-forest-900/15" />
    <path d="M32 6c8.5 0 14.5 10 14.5 22.5S40.5 55 32 55s-14.5-14-14.5-26.5S23.5 6 32 6z" fill="url(#ca4)" />
    <path d="M32 6v49" stroke="currentColor" className="stroke-forest-900/50" strokeWidth="1.5" />
    <path d="M22 16c4 2 6 4 6 4M42 16c-4 2-6 4-6 4M19 27c4.5 1.4 7.5 3 7.5 3M45 27c-4.5 1.4-7.5 3-7.5 3M20 39c4.3 1.2 7 2.6 7 2.6M44 39c-4.3 1.2-7 2.6-7 2.6" stroke="currentColor" className="stroke-forest-900/60" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    <ellipse cx="32" cy="22" rx="4.4" ry="5.6" className="fill-cream-50" />
    <ellipse cx="32" cy="34" rx="4.6" ry="5.8" className="fill-cream-50" />
    <ellipse cx="32" cy="46" rx="4.2" ry="5.2" className="fill-cream-50" />
    <ellipse cx="30.5" cy="20.5" rx="1.6" ry="2.2" className="fill-gold-400/70" />
    <ellipse cx="30.5" cy="32.5" rx="1.7" ry="2.3" className="fill-gold-400/70" />
  </svg>,
  // Café sostenible: taza con plato, vapor y cereza de café partida
  <svg key="c5" viewBox="0 0 64 64" className="h-11 w-11">
    <defs>
      <linearGradient id="co5" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" className="[stop-color:var(--color-forest-700)]" />
        <stop offset="100%" className="[stop-color:var(--color-forest-900)]" />
      </linearGradient>
    </defs>
    <ellipse cx="26" cy="52" rx="20" ry="3.4" className="fill-forest-900/15" />
    <path d="M10 26h32v11a16 16 0 01-16 16 16 16 0 01-16-16V26z" fill="url(#co5)" />
    <ellipse cx="26" cy="26" rx="16" ry="3.2" className="fill-forest-700" />
    <ellipse cx="26" cy="26" rx="12" ry="2" className="fill-forest-950/40" />
    <path d="M42 30h4.5a7 7 0 010 14H42" stroke="currentColor" className="stroke-forest-900" strokeWidth="3.6" fill="none" strokeLinecap="round" />
    <path d="M17 18c-2.5-2.5-2.5-5.2 0-7.8M26 18c-2.5-2.5-2.5-5.2 0-7.8M35 18c-2.5-2.5-2.5-5.2 0-7.8" stroke="currentColor" className="stroke-forest-700/80" strokeWidth="2" strokeLinecap="round" fill="none" />
    <ellipse cx="49" cy="46" rx="7" ry="9" className="fill-terra-300" transform="rotate(-18 49 46)" />
    <path d="M49 38.5c0 4.5 0 12 0 17" stroke="currentColor" className="stroke-forest-900/50" strokeWidth="1.4" strokeLinecap="round" transform="rotate(-18 49 46)" />
    <ellipse cx="46" cy="43" rx="1.6" ry="2.2" className="fill-gold-400/70" transform="rotate(-18 49 46)" />
  </svg>,
];

const WHAT_ICONS = [
  <path key="0" d="M4 7h16M4 12h10M4 17h7" strokeLinecap="round" />,
  <path key="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM5 21a7 7 0 0114 0" strokeLinecap="round" strokeLinejoin="round" />,
  <path key="2" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />,
  <path key="3" d="M12 3v18m0-18c-2 2-5 3-8 3 0 7 3 11 8 15 5-4 8-8 8-15-3 0-6-1-8-3z" strokeLinecap="round" strokeLinejoin="round" />,
];

// Divide un texto en <span>s para el efecto de cascada palabra por palabra
function Words({ text }: { text: string }) {
  return (
    <span className="word-stagger">
      {text.split(" ").map((w, i) => (
        <React.Fragment key={i}>
          <span className="w" style={{ "--i": i } as React.CSSProperties}>{w}</span>{" "}
        </React.Fragment>
      ))}
    </span>
  );
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const gallery = IMG.gal;
  const REGION_IMGS = [IMG.heroValley, IMG.proj[0], IMG.mountain, IMG.donacion, IMG.que[3]];

  return (
    <>
      {/* ── Hero editorial (aurora + text reveal) ─────────────────── */}
      {/* React 19 eleva este link al <head>: el hero llega antes */}
      <link rel="preload" as="image" href={IMG.heroRiver} fetchPriority="high" />
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="slow-zoom absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${IMG.heroRiver})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-950/35 to-forest-950/85" />
        <div className="aurora-orb h-[28rem] w-[28rem]" style={{ top: "-8rem", left: "-6rem", "--orb-color": "rgba(246,242,234,0.22)" } as React.CSSProperties} />
        <div className="aurora-orb h-[24rem] w-[24rem]" style={{ bottom: "-6rem", right: "-4rem", animationDelay: "-6s", "--orb-color": "rgba(58,106,78,0.45)" } as React.CSSProperties} />
        <div className="aurora-orb h-72 w-72" style={{ top: "30%", right: "18%", animationDelay: "-12s", "--orb-color": "rgba(246,242,234,0.14)" } as React.CSSProperties} />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-28 pb-24 text-center sm:px-6">
          <p className="hero-in inline-flex items-center gap-2.5 rounded-full border border-cream-100/30 bg-forest-900/60 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-cream-100 uppercase backdrop-blur-sm">
            <LeafIcon className="h-3.5 w-3.5 shrink-0" />
            {dict.hero.kicker}
          </p>
          <h1 className="mt-7 font-display text-4xl leading-tight font-semibold sm:text-6xl lg:text-[4.2rem]">
            {dict.hero.title.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                <span
                  className="hero-in inline-block"
                  style={{ "--hero-delay": `${150 + i * 60}ms` } as React.CSSProperties}
                >
                  {word}
                </span>{" "}
              </React.Fragment>
            ))}
          </h1>
          <div className="draw-line mt-7 h-0.5 w-20 bg-cream-50" />
          <p
            className="hero-in mt-7 max-w-2xl text-lg leading-relaxed text-cream-100/95 sm:text-xl"
            style={{ "--hero-delay": "800ms" } as React.CSSProperties}
          >
            {dict.hero.subtitle}
          </p>
          <div
            className="hero-in mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ "--hero-delay": "950ms" } as React.CSSProperties}
          >
            <Link
              href={`/${lang}/proyectos/`}
              className="group shimmer-btn flex cursor-pointer items-center gap-2 rounded-full bg-cream-50 py-3 pr-2.5 pl-7 font-semibold text-forest-950 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white active:scale-[0.98]"
            >
              {dict.hero.cta2}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-950/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-105">
                <ArrowIcon className="h-4 w-4" />
              </span>
            </Link>
            <a
              href="#contacto"
              className="cursor-pointer rounded-full bg-gold-500 px-7 py-3 font-semibold text-forest-950 transition-all duration-500 hover:bg-gold-400 active:scale-[0.98]"
            >
              {dict.nav.donate}
            </a>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
          <div className="scroll-hint flex h-10 w-6 items-start justify-center rounded-full border border-cream-100/30 pt-2">
            <span className="h-2 w-1 rounded-full bg-cream-100" />
          </div>
        </div>
      </section>

      {/* ── Cifras (contadores — firma visual) ────────────────────── */}
      <section className="bg-forest-900 text-cream-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          {dict.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120} className="text-center">
              <p className="font-display text-4xl font-semibold text-cream-50 sm:text-5xl">
                <CountUp value={s.value} />
              </p>
              <div className="draw-on-reveal mx-auto mt-2 h-px w-8 bg-cream-50/60" />
              <p className="mt-2 text-base text-cream-100/85">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Manifiesto (cita en cascada) ───────────────────────────── */}
      <section className="mx-auto max-w-4xl px-4 py-28 text-center sm:px-6">
        <Reveal>
          <span className="font-display text-6xl leading-none text-gold-500">“</span>
          <p className="mt-2 font-display text-2xl leading-snug font-medium text-forest-900 sm:text-4xl">
            <Words text={dict.manifesto.quote} />
          </p>
          <div className="draw-on-reveal mx-auto mt-8 h-0.5 w-16 bg-forest-700" />
          <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-forest-700 uppercase">
            {dict.manifesto.line}
          </p>
        </Reveal>
      </section>

      {/* ── Propósito ──────────────────────────────────────────────── */}
      <section className="bg-cream-100">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.3em] text-forest-700 uppercase">
              {dict.about.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
              {dict.about.title}
            </h2>
            <p className="mt-6 leading-relaxed text-forest-800/80">{dict.about.p1}</p>
            <p className="mt-4 leading-relaxed text-forest-800/80">{dict.about.p2}</p>
            <p className="mt-4 leading-relaxed text-forest-800/80">{dict.about.p3}</p>
            <Link
              href={`/${lang}/nosotros/`}
              className="group mt-6 inline-flex cursor-pointer items-center gap-2 font-semibold text-forest-700 underline decoration-forest-700 decoration-2 underline-offset-4 transition-colors hover:text-forest-900"
            >
              {dict.about.link}
              <ArrowIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG.forestSun}
                alt="Bosque — Fundación Saumama"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Proyectos destacados (protagonismo — feedback cliente) ── */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-forest-700 uppercase">
              {dict.projectsHome.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
              {dict.projectsHome.title}
            </h2>
            <p className="mt-3 max-w-md text-lg text-forest-800/80">{dict.projectsHome.text}</p>
          </div>
          <Link
            href={`/${lang}/proyectos/`}
            className="group flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-forest-900 py-2.5 pr-2 pl-6 text-sm font-semibold text-cream-50 transition-all duration-500 hover:bg-forest-800"
          >
            {dict.projectsHome.button}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-50/10 transition-transform duration-500 group-hover:translate-x-0.5">
              <ArrowIcon className="h-3.5 w-3.5" />
            </span>
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { name: dict.projectsPage.featuredProject.name, category: dict.projectsPage.featuredProject.category, text: dict.projectsPage.featuredProject.text, img: IMG.heroValley, badge: dict.projectsPage.featuredProject.stage },
            { ...dict.projectsPage.projects[0], img: IMG.proj[0], badge: dict.projectsPage.status },
            { ...dict.projectsPage.projects[2], img: IMG.proj[2], badge: dict.projectsPage.status },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 130} className="h-full">
              <Link href={`/${lang}/proyectos/`} className="block h-full cursor-pointer">
                <article className="group relative h-full min-h-[380px] overflow-hidden rounded-3xl shadow-md transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-2xl hover:shadow-forest-900/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/40 to-forest-950/10" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold tracking-widest text-forest-950 uppercase">
                      {p.badge}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-cream-50">{p.name}</h3>
                    <p className="mt-1 text-xs font-semibold tracking-wide text-cream-100/85 uppercase">
                      {p.category}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-cream-100/80">{p.text}</p>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Contacto (reemplaza donación mientras no hay pasarela) ─── */}
      <section id="contacto" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
        <Reveal>
          <ContactSection dict={dict} />
        </Reveal>
      </section>

      {/* ── Causas (diferenciadas de Proyectos — feedback cliente) ── */}
      <section className="bg-forest-900 text-cream-50">
        <div className="relative mx-auto max-w-6xl overflow-hidden px-4 py-24 sm:px-6">
          <div className="aurora-orb h-80 w-80" style={{ top: "-8rem", left: "-8rem", "--orb-color": "rgba(246,242,234,0.10)" } as React.CSSProperties} />
          <Reveal className="text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-cream-100 uppercase">
              {dict.causes.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{dict.causes.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-cream-100/85">{dict.causes.text}</p>
            <div className="draw-on-reveal mx-auto mt-5 h-0.5 w-12 bg-cream-50" />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.causes.items.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 120} className="h-full">
                <div className="group h-full rounded-2xl border border-cream-100/10 bg-forest-950/50 p-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-cream-100/30">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-stone-400/90 ring-1 ring-cream-50/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-105 [&_svg]:h-11 [&_svg]:w-11">
                    {CAUSE_ICONS[i]}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-cream-100/80">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qué hacemos ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-forest-700 uppercase">
            {dict.whatWeDo.kicker}
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            {dict.whatWeDo.title}
          </h2>
          <div className="draw-on-reveal mx-auto mt-5 h-0.5 w-12 bg-forest-700" />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.whatWeDo.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className="h-full">
              <SpotlightCard className="group h-full overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-cream-100/40 hover:shadow-lg hover:shadow-forest-900/5">
                <div className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={IMG.que[i]}
                    alt=""
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl leading-snug font-semibold text-forest-900">{item.title}</h3>
                  <p className="mt-2 text-base font-medium text-forest-700">{item.text}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Galería: trabajo en campo con leyendas ─────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-forest-700 uppercase">
            {dict.galleryHome.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            {dict.galleryHome.title}
          </h2>
          <div className="draw-on-reveal mx-auto mt-5 h-0.5 w-12 bg-forest-700" />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((src, i) => (
            <Reveal key={i} delay={i * 90} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <figure className="group relative h-full overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={dict.galleryHome.captions[i]}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 ${i === 0 ? "h-full min-h-[420px]" : "aspect-square"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                <figcaption className={`absolute inset-x-0 bottom-0 p-4 font-semibold text-cream-50 ${i === 0 ? "text-lg" : "text-xs"}`}>
                  {dict.galleryHome.captions[i]}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Líneas de negocio ──────────────────────────────────────── */}
      <section className="bg-forest-950 text-cream-50">
        <div className="relative mx-auto max-w-6xl overflow-hidden px-4 py-24 sm:px-6">
          <div className="aurora-orb h-96 w-96" style={{ top: "-10rem", right: "-10rem", "--orb-color": "rgba(246,242,234,0.12)" } as React.CSSProperties} />
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.3em] text-cream-100 uppercase">
              {dict.businessLines.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              {dict.businessLines.title}
            </h2>
            <div className="draw-on-reveal mt-5 h-0.5 w-12 bg-cream-50" />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {dict.businessLines.items.map((line, i) => {
              const acc = [
                { n: "text-gold-400", tag: "border-gold-500/40 text-gold-400", hover: "hover:border-gold-500/50", bar: "bg-gold-500" },
                { n: "text-terra-300", tag: "border-terra-300/50 text-terra-300", hover: "hover:border-terra-300/60", bar: "bg-terra-300" },
                { n: "text-cream-100", tag: "border-cream-100/40 text-cream-100", hover: "hover:border-cream-100/50", bar: "bg-cream-100" },
              ][i];
              return (
              <Reveal key={line.title} delay={i * 140} className="h-full">
                <div className={`group h-full rounded-2xl border border-cream-100/10 bg-forest-900 p-7 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 ${acc.hover}`}>
                  <div className="flex items-center justify-between">
                    <span className={`font-display text-4xl font-semibold ${acc.n}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`h-1 w-10 rounded-full ${acc.bar}`} />
                  </div>
                  <h3 className="mt-3 font-display text-2xl leading-snug font-semibold">{line.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-100/75">{line.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {line.tags.map((t) => (
                      <span key={t} className={`rounded-full border px-3 py-1 text-[11px] ${acc.tag}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Enfoque (cita de impacto) ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-900 text-cream-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG.enfoque} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.3em] text-cream-100 uppercase">
              {dict.impact.kicker}
            </p>
            <p className="mt-6 font-display text-2xl leading-relaxed font-medium sm:text-3xl">
              <Words text={dict.impact.text} />
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Regiones: dónde trabajamos (soporte visual) ────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.3em] text-forest-700 uppercase">
            {dict.regions.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            {dict.regions.title}
          </h2>
          <p className="mt-3 max-w-md text-lg text-forest-800/80">{dict.regions.text}</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {dict.regions.items.map((r, i) => (
            <Reveal key={r.name} delay={i * 100} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
              <figure className="group relative h-56 overflow-hidden rounded-2xl md:h-72">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={REGION_IMGS[i]}
                  alt={r.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-cream-50">
                    <path d="M12 21s-7-5.1-7-11a7 7 0 1114 0c0 5.9-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <p className="mt-1.5 font-display text-base leading-tight font-semibold text-cream-50">{r.name}</p>
                  <p className="text-[11px] text-cream-100/75">{r.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Estándares (marquee) ───────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <h2 className="text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">
            {dict.standards.title}
          </h2>
        </Reveal>
        <div className="marquee mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track flex w-max items-center gap-20">
            {[...dict.standards.items, ...dict.standards.items, ...dict.standards.items].map((s, i) => (
              <span key={i} className="font-display text-2xl font-semibold whitespace-nowrap text-forest-800/50">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog → LinkedIn (pedido del cliente) ───────────────────── */}
      <section className="bg-cream-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-24 text-center sm:px-6">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.3em] text-forest-700 uppercase">
              {dict.blog.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
              {dict.blog.title}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-forest-800/80">{dict.blog.text}</p>
          </Reveal>
          <Reveal delay={150}>
            <Link
              href={`/${lang}/blog/`}
              className="group flex cursor-pointer items-center gap-3 rounded-full bg-forest-900 py-3 pr-2.5 pl-7 font-semibold text-cream-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-forest-800 active:scale-[0.98]"
            >
              {dict.blog.button}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG.seedling} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">{dict.cta.title}</h2>
            <p className="mt-2 max-w-xl text-cream-100/80">{dict.cta.text}</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contacto"
                className="group flex shrink-0 cursor-pointer items-center gap-3 rounded-full bg-cream-50 py-3 pr-2.5 pl-7 font-semibold text-forest-950 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white active:scale-[0.98]"
              >
                {dict.cta.button}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-950/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-105">
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </a>
              <a
                href="mailto:info@saumamafoundation.org"
                className="cursor-pointer rounded-full border border-cream-100/40 px-7 py-3 font-semibold transition-all duration-500 hover:border-cream-50 hover:text-white"
              >
                {dict.cta.contact}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
