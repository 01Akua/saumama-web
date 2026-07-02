import Link from "next/link";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import { IMG } from "@/lib/images";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const d = getDictionary(lang).aboutPage;
  const approachImgs = [IMG.leaves, IMG.forestPath, IMG.seedling, IMG.hills];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${IMG.heroValley})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 to-forest-950/30" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold-400 uppercase">{d.kicker}</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold sm:text-5xl">
            {d.title}
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-cream-100/85">{d.subtitle}</p>
        </div>
      </section>

      {/* Historia */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-gold-600 uppercase">{d.historyKicker}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            {d.historyTitle}
          </h2>
          <p className="mt-6 leading-relaxed text-forest-800/80">{d.historyText}</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG.heroRiver} alt="" className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
      </section>

      {/* Misión / Visión */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-20 sm:px-6 md:grid-cols-2">
        <div className="rounded-xl bg-forest-900 p-8 text-cream-50">
          <h3 className="text-sm font-semibold tracking-[0.25em] text-gold-400 uppercase">{d.mission.title}</h3>
          <p className="mt-4 leading-relaxed text-cream-100/90">{d.mission.text}</p>
        </div>
        <div className="rounded-xl border border-cream-200 bg-cream-100 p-8">
          <h3 className="text-sm font-semibold tracking-[0.25em] text-gold-600 uppercase">{d.vision.title}</h3>
          <p className="mt-4 leading-relaxed text-forest-800/85">{d.vision.text}</p>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">
            {d.valuesTitle}
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-gold-500" />
          <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {d.values.map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="text-sm font-bold tracking-widest text-forest-900 uppercase">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enfoque */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-center text-xs font-semibold tracking-[0.3em] text-gold-600 uppercase">
          {d.approachKicker}
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
          {d.approachTitle}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {d.approach.map((a, i) => (
            <div key={a.title} className="overflow-hidden rounded-xl border border-cream-200 bg-cream-50 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={approachImgs[i]} alt="" className="aspect-[16/10] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-forest-900">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/70">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Big stats */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid grid-cols-2 gap-8 rounded-2xl bg-forest-900 px-6 py-12 text-cream-50 md:grid-cols-4">
          {d.bigStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-gold-400 sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs text-cream-100/75">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cierre */}
      <section className="relative overflow-hidden bg-forest-950 text-center text-cream-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${IMG.mountain})` }}
        />
        <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl leading-snug font-semibold sm:text-4xl">{d.closing}</h2>
          <Link
            href={`/${lang}/proyectos/`}
            className="mt-8 inline-block rounded-md bg-gold-500 px-8 py-3.5 font-semibold text-forest-950 transition-colors hover:bg-gold-400"
          >
            {getDictionary(lang).hero.cta2} →
          </Link>
        </div>
      </section>
    </>
  );
}
