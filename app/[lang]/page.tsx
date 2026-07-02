import Link from "next/link";
import { DonationWidget } from "@/components/DonationWidget";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { IMG } from "@/lib/images";

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  book: <path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5v-15zM20 18v3" strokeLinecap="round" strokeLinejoin="round" />,
  hands: <path d="M12 21c-4-2.5-8-5.5-8-10a4 4 0 017-2.6A4 4 0 0118 11c0 4.5-4 7.5-6 10z" strokeLinecap="round" strokeLinejoin="round" />,
  leaf: <path d="M5 19c0-8 5-13 14-14-.5 9-5 14-12 14M5 19c2-4 5-7 9-9" strokeLinecap="round" strokeLinejoin="round" />,
};

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const gallery = [IMG.forestPath, IMG.leaves, IMG.hills, IMG.lake, IMG.field];
  const allies = ["Gold Standard", "Verra", "PwC", "Conservation Intl.", "The Nature Conservancy", "UNDP"];

  return (
    <>
      {/* ── Hero + widget de donación ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url(${IMG.heroRiver})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/60 to-forest-950/40" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:py-28">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-gold-400 uppercase">
              {dict.hero.kicker}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
              {dict.hero.title}
            </h1>
            <div className="mt-5 h-0.5 w-16 bg-gold-500" />
            <p className="mt-6 text-base leading-relaxed text-cream-100/85 sm:text-lg">
              {dict.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${lang}/nosotros/`}
                className="rounded-md bg-gold-500 px-6 py-3 font-semibold text-forest-950 transition-colors hover:bg-gold-400"
              >
                {dict.hero.cta1} →
              </Link>
              <Link
                href={`/${lang}/proyectos/`}
                className="rounded-md border border-cream-100/40 px-6 py-3 font-semibold transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                {dict.hero.cta2}
              </Link>
            </div>
            <p className="mt-10 inline-block rounded-lg border border-gold-500/30 bg-forest-900/70 px-4 py-3 text-sm text-cream-100/80">
              🌱 {dict.hero.badge}
            </p>
          </div>
          <div className="lg:pt-2">
            <DonationWidget dict={dict} />
          </div>
        </div>
      </section>

      {/* ── Barra de stats ────────────────────────────────────────── */}
      <section className="bg-forest-900 text-cream-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4">
          {dict.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-gold-400 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-cream-100/75">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quiénes somos ─────────────────────────────────────────── */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div>
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
            className="mt-6 inline-block font-semibold text-forest-700 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-forest-900"
          >
            {dict.about.link} →
          </Link>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.forestSun}
          alt="SAUMAMA"
          className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
        />
      </section>

      {/* ── Pilares ───────────────────────────────────────────────── */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">
            {dict.pillars.title}
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {dict.pillars.items.map((p) => (
              <div key={p.title} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-800 text-gold-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
                    {PILLAR_ICONS[p.icon]}
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-forest-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-800/75">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">
          {lang === "es" ? "Nuestra galería" : "Our gallery"}
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {gallery.map((src, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={i}
              src={src}
              alt=""
              className="aspect-[3/4] w-full rounded-lg object-cover transition-transform hover:scale-[1.02]"
            />
          ))}
        </div>
      </section>

      {/* ── Experiencia ───────────────────────────────────────────── */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">
            {dict.experience.title}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.experience.items.map((e) => (
              <div key={e.title} className="rounded-xl border border-cream-200 bg-cream-50 p-6">
                <h3 className="font-display text-xl font-semibold text-forest-900">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-800/75">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impacto ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${IMG.mountain})` }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-gold-400">{dict.impact.kicker}</h2>
            <p className="mt-4 text-sm leading-relaxed text-cream-100/80">{dict.impact.text}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {dict.impact.items.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-semibold">{s.value}</p>
                <p className="mt-1 text-xs text-cream-100/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aliados ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">
          {dict.allies.title}
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
          {allies.map((a) => (
            <span key={a} className="font-display text-xl font-semibold text-forest-800">
              {a}
            </span>
          ))}
        </div>
        <p className="mt-6 text-xs text-forest-800/50 italic">{dict.allies.note}</p>
      </section>

      {/* ── Noticias ──────────────────────────────────────────────── */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-sm font-semibold tracking-[0.3em] text-forest-800 uppercase">
            {dict.news.kicker}
          </h2>
          <div className="mt-4 h-0.5 w-12 bg-gold-500" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {dict.news.items.map((n, i) => (
              <article key={n.title} className="overflow-hidden rounded-xl border border-cream-200 bg-cream-50 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={gallery[i]} alt="" className="aspect-[16/9] w-full object-cover" />
                <div className="p-5">
                  <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">{n.tag}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-forest-900">{n.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-800/75">{n.text}</p>
                  <p className="mt-4 text-sm font-semibold text-gold-600">{dict.news.readMore} →</p>
                </div>
              </article>
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
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-3xl font-semibold">{dict.cta.title}</h2>
            <p className="mt-2 text-cream-100/80">{dict.cta.text}</p>
          </div>
          <Link
            href={`/${lang}/#donar`}
            className="shrink-0 rounded-md bg-gold-500 px-8 py-3.5 font-semibold text-forest-950 transition-colors hover:bg-gold-400"
          >
            {dict.cta.button} →
          </Link>
        </div>
      </section>
    </>
  );
}
