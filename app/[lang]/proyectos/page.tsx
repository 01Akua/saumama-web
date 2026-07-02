import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import { IMG } from "@/lib/images";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const d = getDictionary(lang).projectsPage;
  const projectImgs = [IMG.heroRiver, IMG.forestSun, IMG.forestPath];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="slow-zoom absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${IMG.mountain})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 to-forest-950/30" />
        <div className="relative mx-auto max-w-6xl px-4 pt-36 pb-24 sm:px-6">
          <p className="hero-in text-xs font-semibold tracking-[0.3em] text-gold-400 uppercase">{d.kicker}</p>
          <h1 style={{ "--hero-delay": "120ms" } as React.CSSProperties} className="hero-in mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold sm:text-5xl">
            {d.title}
          </h1>
          <p style={{ "--hero-delay": "260ms" } as React.CSSProperties} className="hero-in mt-6 max-w-xl leading-relaxed text-cream-100/85">{d.subtitle}</p>
          <a href="#destacados" style={{ "--hero-delay": "400ms" } as React.CSSProperties} className="hero-in mt-8 inline-block cursor-pointer rounded-full bg-gold-500 px-7 py-3 font-semibold text-forest-950 transition-all duration-500 hover:bg-gold-400 active:scale-[0.98]">{d.cta} →</a>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section id="destacados" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">{d.featured}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {d.projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 140} className="h-full"><article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10">
              <div className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" src={projectImgs[i]} alt={p.name} className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
                <span className="absolute top-3 left-3 rounded bg-forest-900/90 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-gold-400 uppercase">
                  {d.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-2xl font-semibold text-forest-900 uppercase">{p.name}</h3>
                <p className="mt-1 text-xs font-semibold tracking-wide text-gold-600 uppercase">{p.category}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-800/75">{p.text}</p>
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-cream-200 pt-4">
                  {p.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-display text-lg font-semibold text-forest-900"><CountUp value={s.value} /></p>
                      <p className="text-[10px] leading-tight text-forest-800/60 uppercase">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm font-semibold text-gold-600">{d.viewProject} →</p>
              </div>
            </article></Reveal>
          ))}
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-md">
            <h2 className="text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">{d.howTitle}</h2>
            <p className="mt-3 text-sm text-forest-800/70">{d.howText}</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {d.how.map((h, i) => (
              <Reveal key={h.title} delay={i * 120} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 font-display text-lg font-semibold text-gold-400">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold text-forest-900">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/70">{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de impacto */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">{d.areasTitle}</h2>
            <p className="mt-3 text-sm text-forest-800/70">{d.areasText}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {d.areas.map((a, i) => (
              <Reveal key={a} delay={i * 80}><div className="rounded-xl border border-cream-200 bg-cream-50 px-4 py-6 text-center text-sm font-semibold text-forest-900 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold-500/50 hover:shadow-md">{a}</div></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dónde trabajamos */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${IMG.heroValley})` }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold tracking-[0.3em] text-gold-400 uppercase">{d.whereTitle}</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-100/85">{d.whereText}</p>
            <ul className="mt-6 space-y-2">
              {d.regions.map((r) => (
                <li key={r} className="flex items-center gap-2 text-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-gold-400"><path d="M12 21s-7-5.1-7-11a7 7 0 1114 0c0 5.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg> {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <p className="rounded-xl border border-gold-500/30 bg-forest-900/80 p-6 font-display text-xl leading-relaxed text-cream-100 italic">
              “{d.whereNote}”
            </p>
          </div>
        </div>
      </section>

      {/* Salvaguardas */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-md">
          <h2 className="text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">
            {d.safeguardsTitle}
          </h2>
          <p className="mt-3 text-sm text-forest-800/70">{d.safeguardsText}</p>
        </div>
        <div className="mt-10 grid gap-8 divide-cream-200 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
          {d.safeguards.map((s, i) => (
            <Reveal key={s.title} delay={i * 110} className="lg:px-6 lg:first:pl-0">
              <h3 className="font-display text-xl font-semibold text-forest-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-800/70">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cierre */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${IMG.seedling})` }}
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-display text-3xl leading-snug font-semibold sm:text-4xl">{d.closing}</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={`/${lang}/nosotros/`}
              className="rounded-md bg-gold-500 px-6 py-3 font-semibold text-forest-950 transition-colors hover:bg-gold-400"
            >
              {d.closingCta1}
            </Link>
            <a
              href={`/${lang}/#donar`}
              className="rounded-md border border-cream-100/40 px-6 py-3 font-semibold transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              {d.closingCta2}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
