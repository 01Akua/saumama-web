import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { DonationWidget } from "@/components/DonationWidget";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { IMG } from "@/lib/images";

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  book: <path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5v-15zM20 18v3" strokeLinecap="round" strokeLinejoin="round" />,
  hands: <path d="M12 21c-4-2.5-8-5.5-8-10a4 4 0 017-2.6A4 4 0 0118 11c0 4.5-4 7.5-6 10z" strokeLinecap="round" strokeLinejoin="round" />,
  leaf: <path d="M5 19c0-8 5-13 14-14-.5 9-5 14-12 14M5 19c2-4 5-7 9-9" strokeLinecap="round" strokeLinejoin="round" />,
};

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

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const gallery = [IMG.forestPath, IMG.leaves, IMG.hills, IMG.lake, IMG.field];
  const allies = ["Gold Standard", "Verra", "PwC", "Conservation Intl.", "The Nature Conservancy", "UNDP"];

  return (
    <>
      {/* ── Hero editorial centrado (aurora + text reveal) ────────── */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="slow-zoom absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${IMG.heroRiver})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/55 to-forest-950/90" />
        {/* Orbes aurora */}
        <div className="aurora-orb h-[28rem] w-[28rem] bg-gold-500/25" style={{ top: "-8rem", left: "-6rem" }} />
        <div className="aurora-orb h-[24rem] w-[24rem] bg-forest-600/50" style={{ bottom: "-6rem", right: "-4rem", animationDelay: "-6s" }} />
        <div className="aurora-orb h-72 w-72 bg-gold-400/15" style={{ top: "30%", right: "18%", animationDelay: "-12s" }} />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-28 pb-24 text-center sm:px-6">
          <p className="hero-in inline-flex items-center gap-2.5 rounded-full border border-gold-500/30 bg-forest-900/60 px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold-400 uppercase backdrop-blur-sm">
            <LeafIcon className="h-3.5 w-3.5 shrink-0" />
            {dict.hero.kicker}
          </p>
          {/* Título con reveal palabra por palabra */}
          <h1 className="mt-7 font-display text-4xl leading-tight font-semibold sm:text-6xl lg:text-7xl">
            {dict.hero.title.split(" ").map((word, i) => (
              <span
                key={i}
                className="hero-in inline-block"
                style={{ "--hero-delay": `${150 + i * 70}ms` } as React.CSSProperties}
              >
                {word}
                {i < dict.hero.title.split(" ").length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <div className="draw-line mt-7 h-0.5 w-20 bg-gold-500" />
          <p
            className="hero-in mt-7 max-w-2xl text-base leading-relaxed text-cream-100/85 sm:text-lg"
            style={{ "--hero-delay": "700ms" } as React.CSSProperties}
          >
            {dict.hero.subtitle}
          </p>
          <div
            className="hero-in mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ "--hero-delay": "850ms" } as React.CSSProperties}
          >
            <a
              href="#donar"
              className="group shimmer-btn flex cursor-pointer items-center gap-2 rounded-full bg-gold-500 py-3 pr-2.5 pl-7 font-semibold text-forest-950 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gold-400 active:scale-[0.98]"
            >
              {dict.nav.donate}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-950/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-105">
                <ArrowIcon className="h-4 w-4" />
              </span>
            </a>
            <Link
              href={`/${lang}/proyectos/`}
              className="cursor-pointer rounded-full border border-cream-100/40 px-7 py-3 font-semibold transition-all duration-500 hover:border-gold-400 hover:text-gold-400"
            >
              {dict.hero.cta2}
            </Link>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
          <div className="scroll-hint flex h-10 w-6 items-start justify-center rounded-full border border-cream-100/30 pt-2">
            <span className="h-2 w-1 rounded-full bg-gold-400" />
          </div>
        </div>
      </section>

      {/* ── Barra de stats (contadores animados — firma visual) ───── */}
      <section className="bg-forest-900 text-cream-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          {dict.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120} className="text-center">
              <p className="font-display text-3xl font-semibold text-gold-400 sm:text-4xl">
                <CountUp value={s.value} />
              </p>
              <div className="draw-on-reveal mx-auto mt-2 h-px w-8 bg-gold-500/60" />
              <p className="mt-2 text-sm text-cream-100/75">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Quiénes somos ─────────────────────────────────────────── */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.3em] text-gold-600 uppercase">
            {dict.about.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            {dict.about.title}
          </h2>
          <p className="mt-6 leading-relaxed text-forest-800/80">{dict.about.p1}</p>
          <p className="mt-4 leading-relaxed text-forest-800/80">{dict.about.p2}</p>
          <Link
            href={`/${lang}/nosotros/`}
            className="group mt-6 inline-flex cursor-pointer items-center gap-2 font-semibold text-forest-700 underline decoration-gold-500 decoration-2 underline-offset-4 transition-colors hover:text-forest-900"
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
              alt="Bosque — SAUMAMA Foundation"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105"
            />
          </div>
        </Reveal>
      </section>

      {/* ── Pilares ───────────────────────────────────────────────── */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <h2 className="text-center text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">
              {dict.pillars.title}
            </h2>
            <div className="draw-on-reveal mx-auto mt-3 h-0.5 w-12 bg-gold-500" />
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {dict.pillars.items.map((p, i) => (
              <Reveal key={p.title} delay={i * 150} className="group text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-800 text-gold-400 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
                    {PILLAR_ICONS[p.icon]}
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-forest-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-800/75">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <h2 className="text-center text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">
            {lang === "es" ? "Nuestra galería" : "Our gallery"}
          </h2>
          <div className="draw-on-reveal mx-auto mt-3 h-0.5 w-12 bg-gold-500" />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {gallery.map((src, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Experiencia ───────────────────────────────────────────── */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <h2 className="text-center text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">
              {dict.experience.title}
            </h2>
            <div className="draw-on-reveal mx-auto mt-3 h-0.5 w-12 bg-gold-500" />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.experience.items.map((e, i) => (
              <Reveal key={e.title} delay={i * 120} className="h-full">
                <SpotlightCard className="h-full rounded-2xl border border-cream-200 bg-cream-50 p-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lg hover:shadow-forest-900/5">
                  <h3 className="font-display text-xl font-semibold text-forest-900">{e.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-forest-800/75">{e.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impacto (contadores — firma visual) ───────────────────── */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${IMG.mountain})` }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-gold-400">{dict.impact.kicker}</h2>
            <div className="draw-on-reveal mt-3 h-0.5 w-12 bg-gold-500" />
            <p className="mt-4 text-sm leading-relaxed text-cream-100/80">{dict.impact.text}</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {dict.impact.items.map((s, i) => (
              <Reveal key={s.label} delay={i * 120} className="text-center">
                <p className="font-display text-3xl font-semibold">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-1 text-xs text-cream-100/70">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donación (después de mostrar impacto, se pide apoyo) ──── */}
      <section className="relative overflow-hidden bg-forest-900">
        <div className="aurora-orb h-96 w-96 bg-gold-500/15" style={{ top: "-6rem", right: "-8rem" }} />
        <div className="aurora-orb h-80 w-80 bg-forest-600/40" style={{ bottom: "-8rem", left: "-6rem", animationDelay: "-9s" }} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-32">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold-400 uppercase">
              {dict.donation.kicker}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-cream-50 sm:text-5xl">
              {dict.donation.sectionTitle}
            </h2>
            <div className="draw-on-reveal mt-5 h-0.5 w-16 bg-gold-500" />
            <p className="mt-6 max-w-md leading-relaxed text-cream-100/80">
              {dict.donation.sectionText}
            </p>
          </Reveal>
          <Reveal delay={200}>
            {/* Beam border orbitando el widget */}
            <div className="relative rounded-[2.1rem] p-px">
              <div className="beam-border absolute inset-0 rounded-[2.1rem]" />
              <div className="relative">
                <DonationWidget dict={dict} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Aliados (marquee) ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <h2 className="text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">
            {dict.allies.title}
          </h2>
        </Reveal>
        <div className="marquee mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track flex w-max items-center gap-16">
            {[...allies, ...allies].map((a, i) => (
              <span key={i} className="font-display text-xl font-semibold whitespace-nowrap text-forest-800/50">
                {a}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs text-forest-800/50 italic">{dict.allies.note}</p>
      </section>

      {/* ── Noticias ──────────────────────────────────────────────── */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <h2 className="text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">
              {dict.news.kicker}
            </h2>
            <div className="draw-on-reveal mt-3 h-0.5 w-12 bg-gold-500" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {dict.news.items.map((n, i) => (
              <Reveal key={n.title} delay={i * 130}>
                <article className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10">
                  <div className="overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={gallery[i]}
                      alt=""
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">{n.tag}</span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-forest-900">{n.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest-800/75">{n.text}</p>
                    <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600">
                      {dict.news.readMore}
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${IMG.seedling})` }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">{dict.cta.title}</h2>
            <p className="mt-2 text-cream-100/80">{dict.cta.text}</p>
          </Reveal>
          <Reveal delay={150}>
            <a
              href={`/${lang}/#donar`}
              className="group flex shrink-0 cursor-pointer items-center gap-3 rounded-full bg-gold-500 py-3 pr-2.5 pl-7 font-semibold text-forest-950 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gold-400 active:scale-[0.98]"
            >
              {dict.cta.button}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-950/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-105">
                <ArrowIcon className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
