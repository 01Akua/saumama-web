import React from "react";
import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { DonationWidget } from "@/components/DonationWidget";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { IMG, LINKEDIN_URL } from "@/lib/images";

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

  return (
    <>
      {/* ── Hero editorial (aurora + text reveal) ─────────────────── */}
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
            <a
              href="#donar"
              className="group shimmer-btn flex cursor-pointer items-center gap-2 rounded-full bg-cream-50 py-3 pr-2.5 pl-7 font-semibold text-forest-950 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white active:scale-[0.98]"
            >
              {dict.nav.donate}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-950/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-105">
                <ArrowIcon className="h-4 w-4" />
              </span>
            </a>
            <Link
              href={`/${lang}/proyectos/`}
              className="cursor-pointer rounded-full border border-cream-100/40 px-7 py-3 font-semibold transition-all duration-500 hover:border-cream-50 hover:text-cream-100"
            >
              {dict.hero.cta2}
            </Link>
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
          <span className="font-display text-6xl leading-none text-forest-700">“</span>
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
                  <h3 className="font-display text-2xl font-semibold text-forest-900">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-forest-800/80">{item.text}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Galería ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
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
            {dict.businessLines.items.map((line, i) => (
              <Reveal key={line.title} delay={i * 140} className="h-full">
                <div className="group h-full rounded-2xl border border-cream-100/10 bg-forest-900 p-7 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-cream-100/40">
                  <span className="font-display text-4xl font-semibold text-cream-100/40 transition-colors duration-500 group-hover:text-cream-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-2xl leading-snug font-semibold">{line.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-100/75">{line.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {line.tags.map((t) => (
                      <span key={t} className="rounded-full border border-cream-100/30 px-3 py-1 text-[11px] text-cream-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enfoque (cita de impacto) ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-900 text-cream-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${IMG.enfoque})` }}
        />
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

      {/* ── Donación ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-950">
        <div className="aurora-orb h-96 w-96" style={{ top: "-6rem", right: "-8rem", "--orb-color": "rgba(246,242,234,0.14)" } as React.CSSProperties} />
        <div className="aurora-orb h-80 w-80" style={{ bottom: "-8rem", left: "-6rem", animationDelay: "-9s", "--orb-color": "rgba(58,106,78,0.38)" } as React.CSSProperties} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-32">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.3em] text-cream-100 uppercase">
              {dict.donation.kicker}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-cream-50 sm:text-5xl">
              {dict.donation.sectionTitle}
            </h2>
            <div className="draw-on-reveal mt-5 h-0.5 w-16 bg-cream-50" />
            <p className="mt-6 max-w-md leading-relaxed text-cream-100/80">
              {dict.donation.sectionText}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative rounded-[2.1rem] p-px">
              <div className="beam-clip" />
              <div className="relative">
                <DonationWidget dict={dict} />
              </div>
            </div>
          </Reveal>
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
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center gap-3 rounded-full bg-forest-900 py-3 pr-2.5 pl-7 font-semibold text-cream-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-forest-800 active:scale-[0.98]"
            >
              {dict.blog.button}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.31h4.52V23H.24V8.31zM8.34 8.31h4.33v2h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.92V23h-4.5v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V23h-4.5V8.31z" />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${IMG.seedling})` }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">{dict.cta.title}</h2>
            <p className="mt-2 max-w-xl text-cream-100/80">{dict.cta.text}</p>
          </Reveal>
          <Reveal delay={150}>
            <a
              href="#donar"
              className="group flex shrink-0 cursor-pointer items-center gap-3 rounded-full bg-cream-50 py-3 pr-2.5 pl-7 font-semibold text-forest-950 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white active:scale-[0.98]"
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
