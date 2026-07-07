import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import { IMG } from "@/lib/images";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const d = dict.projectsPage;
  const projectImgs = IMG.proj;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="slow-zoom absolute inset-0 bg-cover bg-center opacity-55"
          style={{ backgroundImage: `url(${IMG.mountain})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 to-forest-950/30" />
        <div className="relative mx-auto max-w-6xl px-4 pt-40 pb-24 sm:px-6">
          <p className="hero-in text-sm font-semibold tracking-[0.3em] text-cream-100 uppercase">{d.kicker}</p>
          <h1
            className="hero-in mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold sm:text-5xl"
            style={{ "--hero-delay": "120ms" } as React.CSSProperties}
          >
            {d.title}
          </h1>
          <div className="draw-line mt-6 h-0.5 w-16 bg-cream-50" />
          <p
            className="hero-in mt-6 max-w-xl leading-relaxed text-cream-100/85"
            style={{ "--hero-delay": "280ms" } as React.CSSProperties}
          >
            {d.subtitle}
          </p>
          <a
            href="#destacados"
            className="hero-in mt-8 inline-block cursor-pointer rounded-full bg-cream-50 px-7 py-3 font-semibold text-forest-950 transition-all duration-500 hover:bg-white active:scale-[0.98]"
            style={{ "--hero-delay": "420ms" } as React.CSSProperties}
          >
            {d.cta} →
          </a>
        </div>
      </section>

      {/* Proyecto insignia: El ancestro que seremos */}
      <section id="destacados" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl bg-forest-900 text-cream-50 shadow-xl lg:grid-cols-2">
            <div className="relative min-h-[320px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG.heroValley}
                alt={d.featuredProject.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest-900/40" />
            </div>
            <div className="p-8 lg:p-10">
              <span className="rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold tracking-widest text-forest-950 uppercase">
                {d.featuredProject.stage}
              </span>
              <h2 className="mt-4 font-display text-3xl leading-snug font-semibold sm:text-4xl">
                {d.featuredProject.name}
              </h2>
              <p className="mt-1 text-xs font-semibold tracking-wide text-gold-400 uppercase">
                {d.featuredProject.category}
              </p>
              <p className="mt-4 text-base leading-relaxed text-cream-100/85">{d.featuredProject.text}</p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                {d.featuredProject.facts.map((f) => (
                  <div key={f.label} className="rounded-xl border border-cream-100/15 bg-forest-950/50 p-4">
                    <dt className="text-[10px] font-bold tracking-widest text-gold-400 uppercase">{f.label}</dt>
                    <dd className="mt-1 text-sm leading-snug text-cream-100/90">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Otros proyectos */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <Reveal>
          <h2 className="text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">{d.featured}</h2>
          <div className="draw-on-reveal mt-3 h-0.5 w-12 bg-forest-700" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {d.projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 140} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10">
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={projectImgs[i]}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded bg-forest-900/90 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-cream-100 uppercase">
                    {d.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold text-forest-900">{p.name}</h3>
                  <p className="mt-1 text-xs font-semibold tracking-wide text-forest-700 uppercase">{p.category}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-800/75">{p.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.3em] text-forest-700 uppercase">
              {dict.services.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
              {dict.services.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-forest-800/80">{dict.services.intro}</p>
            <div className="draw-on-reveal mt-5 h-0.5 w-12 bg-forest-700" />
          </Reveal>
          <div className="mt-12 space-y-4">
            {dict.services.items.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <SpotlightCard className="grid gap-4 rounded-2xl border border-cream-200 bg-cream-50 p-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:border-cream-100/40 hover:shadow-md md:grid-cols-[3.5rem_1fr_16rem] md:items-center">
                  <span className="font-display text-3xl font-semibold text-forest-700/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-forest-900">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-forest-800/75">{s.text}</p>
                  </div>
                  <p className="rounded-xl bg-forest-800/5 px-4 py-3 text-xs font-semibold text-forest-800">
                    ✦ {s.benefit}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Salvaguardas */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div className="aurora-orb h-96 w-96" style={{ top: "-8rem", right: "-8rem", "--orb-color": "rgba(246,242,234,0.12)" } as React.CSSProperties} />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.3em] text-cream-100 uppercase">
              {d.safeguardsKicker}
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold sm:text-4xl">
              {d.safeguardsTitle}
            </h2>
            <div className="draw-on-reveal mt-5 h-0.5 w-12 bg-cream-50" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {d.safeguards.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 130} className="h-full">
                <div className="h-full rounded-2xl border border-cream-100/10 bg-forest-900 p-7 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-cream-100/40">
                  <h3 className="font-display text-xl font-semibold text-cream-100">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-100/80">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="relative overflow-hidden bg-forest-900 text-cream-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG.donacion} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl leading-snug font-semibold sm:text-4xl">“{d.closing}”</h2>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href={`/${lang}/nosotros/`}
                className="cursor-pointer rounded-full bg-cream-50 px-7 py-3 font-semibold text-forest-950 transition-all duration-500 hover:bg-white active:scale-[0.98]"
              >
                {d.closingCta1}
              </Link>
              <a
                href={`/${lang}/#donar`}
                className="cursor-pointer rounded-full border border-cream-100/40 px-7 py-3 font-semibold transition-all duration-500 hover:border-cream-50 hover:text-cream-100"
              >
                {d.closingCta2}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
