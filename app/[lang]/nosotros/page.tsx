import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import { IMG } from "@/lib/images";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Avatar con iniciales — sin fotos falsas hasta tener las reales de la fundación
function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  return (
    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-cream-100/40 bg-forest-800 font-display text-2xl font-semibold text-cream-100">
      {initials}
    </span>
  );
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const d = getDictionary(lang).aboutPage;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="slow-zoom absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${IMG.heroValley})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 to-forest-950/30" />
        <div className="relative mx-auto max-w-6xl px-4 pt-40 pb-24 sm:px-6">
          <p className="hero-in text-sm font-semibold tracking-[0.3em] text-cream-100 uppercase">{d.kicker}</p>
          <h1
            className="hero-in mt-4 max-w-3xl font-display text-3xl leading-tight font-semibold sm:text-5xl"
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
        </div>
      </section>

      {/* Historia */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.3em] text-forest-700 uppercase">{d.historyKicker}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            {d.historyTitle}
          </h2>
          <p className="mt-6 leading-relaxed text-forest-800/80">{d.historyP1}</p>
          <p className="mt-4 leading-relaxed text-forest-800/80">{d.historyP2}</p>
        </Reveal>
        <Reveal delay={150}>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.historia}
              alt=""
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105"
            />
          </div>
        </Reveal>
      </section>

      {/* Misión / Visión 2030 */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-24 sm:px-6 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="h-full rounded-2xl bg-forest-900 p-8 text-cream-50">
            <h3 className="text-sm font-semibold tracking-[0.25em] text-cream-100 uppercase">{d.mission.title}</h3>
            <p className="mt-4 leading-relaxed text-cream-100/90">{d.mission.text}</p>
          </div>
        </Reveal>
        <Reveal delay={150} className="h-full">
          <div className="h-full rounded-2xl border border-cream-200 bg-cream-100 p-8">
            <h3 className="text-sm font-semibold tracking-[0.25em] text-forest-700 uppercase">{d.vision.title}</h3>
            <p className="mt-4 leading-relaxed text-forest-800/85">{d.vision.text}</p>
          </div>
        </Reveal>
      </section>

      {/* Equipo */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal className="text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-forest-700 uppercase">{d.teamKicker}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
              {d.teamTitle}
            </h2>
            <div className="draw-on-reveal mx-auto mt-5 h-0.5 w-12 bg-forest-700" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {d.team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 2) * 130} className="h-full">
                <SpotlightCard className="h-full rounded-2xl border border-cream-200 bg-cream-50 p-7 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-cream-100/40 hover:shadow-lg hover:shadow-forest-900/5">
                  <div className="flex items-start gap-4">
                    <Initials name={m.name} />
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-forest-900">{m.name}</h3>
                      <p className="mt-1 text-xs font-semibold tracking-wide text-forest-700 uppercase">{m.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-forest-800/80">{m.bio}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiración del logo — la Samauma */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${IMG.samauma})` }}
        />
        <div className="aurora-orb h-96 w-96" style={{ top: "-8rem", left: "-8rem", "--orb-color": "rgba(246,242,234,0.15)" } as React.CSSProperties} />
        <div className="relative mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.3em] text-cream-100 uppercase">{d.logoKicker}</p>
            <h2 className="mt-4 font-display text-3xl leading-snug font-semibold sm:text-4xl">
              {d.logoTitle}
            </h2>
            <div className="draw-on-reveal mx-auto mt-6 h-0.5 w-16 bg-cream-50" />
            <p className="mt-6 text-lg leading-relaxed text-cream-100/85">{d.logoText}</p>
          </Reveal>
        </div>
      </section>

      {/* Cierre */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
        <Reveal>
          <p className="font-display text-2xl leading-snug font-medium text-forest-900 sm:text-3xl">
            “{d.closing}”
          </p>
          <Link
            href={`/${lang}/proyectos/`}
            className="mt-10 inline-block cursor-pointer rounded-full bg-cream-50 px-8 py-3.5 font-semibold text-forest-950 transition-all duration-500 hover:bg-white active:scale-[0.98]"
          >
            {getDictionary(lang).hero.cta2} →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
