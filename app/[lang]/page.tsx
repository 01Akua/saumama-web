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

// Iconos específicos por causa (feedback: iconografía con significado)
const CAUSE_ICONS: React.ReactNode[] = [
  // Restauración: árbol renaciendo
  <path key="c0" d="M12 22v-8m0 0c-3.5-.5-6-3-6-6.5 0-1 .2-2 .6-2.9C8.5 6 10 7.5 12 7.5S15.5 6 17.4 4.6c.4.9.6 1.9.6 2.9 0 3.5-2.5 6-6 6.5zM7 22h10" strokeLinecap="round" strokeLinejoin="round" />,
  // Biodiversidad: colibrí
  <path key="c1" d="M4 8c3-4 8-4 10 0l6-2-4 5c1 4-2 8-7 8-2 0-3.5-.8-4.5-2L3 19l2.5-4C4 13 3.5 10 4 8zm9 3h.01" strokeLinecap="round" strokeLinejoin="round" />,
  // Carbono: nube CO2
  <path key="c2" d="M7 18a4 4 0 01-.9-7.9 5.5 5.5 0 0110.7-1.2A4.5 4.5 0 0116.5 18H7zm3-6.5c-.8 0-1.5.7-1.5 1.7s.7 1.8 1.5 1.8m3.5-3.5c-.8 0-1.5.7-1.5 1.7s.7 1.8 1.5 1.8 1.5-.8 1.5-1.8-.7-1.7-1.5-1.7z" strokeLinecap="round" strokeLinejoin="round" />,
  // Agroforestería: surcos con brotes
  <path key="c3" d="M3 20h18M6 20v-4m0 0c-1.5-.5-2.5-2-2.2-3.6C5.4 12.5 6.6 13 6 16zm0 0c1.5-.5 2.5-2 2.2-3.6C6.6 12.5 5.4 13 6 16zm6 4v-6m0 0c-2-.7-3.2-2.7-2.8-4.8C11.2 9.5 12.8 10.2 12 14zm0 0c2-.7 3.2-2.7 2.8-4.8C12.8 9.5 11.2 10.2 12 14zm6 6v-4m0 0c-1.5-.5-2.5-2-2.2-3.6C17.4 12.5 18.6 13 18 16zm0 0c1.5-.5 2.5-2 2.2-3.6C18.6 12.5 17.4 13 18 16z" strokeLinecap="round" strokeLinejoin="round" />,
  // Cacao: mazorca
  <path key="c4" d="M12 3c3.5 0 5.5 3.5 5.5 8s-2 10-5.5 10-5.5-5.5-5.5-10S8.5 3 12 3zm0 0c0 2-1 3-3 3m3 1v11" strokeLinecap="round" strokeLinejoin="round" />,
  // Café: grano
  <path key="c5" d="M12 4c4 0 7 3.6 7 8s-3 8-7 8-7-3.6-7-8 3-8 7-8zm0 0c2 3 2 5-.5 8s-2.5 5-.5 8" strokeLinecap="round" strokeLinejoin="round" />,
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
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream-50 text-forest-900 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-105">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                      {CAUSE_ICONS[i]}
                    </svg>
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
