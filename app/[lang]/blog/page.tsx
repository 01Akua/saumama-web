import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { DonationWidget } from "@/components/DonationWidget";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import { IMG, LINKEDIN_URL } from "@/lib/images";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const LinkedInIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.31h4.52V23H.24V8.31zM8.34 8.31h4.33v2h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.92V23h-4.5v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V23h-4.5V8.31z" />
  </svg>
);

/**
 * VERSIÓN BLOG — la página completa en formato revista/blog editorial.
 * Todo el contenido del sitio presentado como un feed de artículos con
 * sidebar, para que el cliente compare este enfoque con la versión clásica.
 */
export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const d = dict.blogPage;

  // El feed: cada sección del sitio, presentada como una entrada de blog
  type Entry = {
    tag: string;
    title: string;
    excerpt: string;
    img: string;
    href: string;
    external?: boolean;
    date?: string;
  };
  const feed: Entry[] = [
    { tag: d.posts[0].tag, date: d.posts[0].date, title: d.posts[0].title, excerpt: d.posts[0].excerpt, img: IMG.blogPosts[0], href: LINKEDIN_URL, external: true },
    { tag: d.sections.purpose, title: dict.about.title, excerpt: dict.about.p1, img: IMG.forestSun, href: `/${lang}/nosotros/` },
    { tag: d.sections.project, title: dict.projectsPage.projects[0].name, excerpt: dict.projectsPage.projects[0].text, img: IMG.proj[0], href: `/${lang}/proyectos/` },
    { tag: d.posts[1].tag, date: d.posts[1].date, title: d.posts[1].title, excerpt: d.posts[1].excerpt, img: IMG.blogPosts[1], href: LINKEDIN_URL, external: true },
    { tag: d.sections.what, title: dict.whatWeDo.title, excerpt: dict.whatWeDo.items[0].text, img: IMG.que[1], href: `/${lang}/proyectos/` },
    { tag: d.sections.project, title: dict.projectsPage.projects[1].name, excerpt: dict.projectsPage.projects[1].text, img: IMG.proj[1], href: `/${lang}/proyectos/` },
    { tag: d.sections.inspiration, title: dict.aboutPage.logoTitle, excerpt: dict.aboutPage.logoText, img: IMG.samauma, href: `/${lang}/nosotros/` },
    { tag: d.posts[2].tag, date: d.posts[2].date, title: d.posts[2].title, excerpt: d.posts[2].excerpt, img: IMG.blogPosts[2], href: LINKEDIN_URL, external: true },
    { tag: d.sections.project, title: dict.projectsPage.projects[2].name, excerpt: dict.projectsPage.projects[2].text, img: IMG.proj[2], href: `/${lang}/proyectos/` },
    { tag: d.sections.team, title: dict.aboutPage.teamTitle, excerpt: dict.aboutPage.team[0].bio, img: IMG.historia, href: `/${lang}/nosotros/` },
  ];

  return (
    <>
      {/* Aviso de versión alternativa */}
      <div className="bg-forest-950 pt-20 pb-3 text-center text-sm text-cream-100/80">
        {d.versionNote} ·{" "}
        <Link href={`/${lang}/`} className="cursor-pointer font-semibold text-cream-50 underline underline-offset-4 hover:text-white">
          {d.viewClassic}
        </Link>
      </div>

      {/* ── Masthead editorial ─────────────────────────────────────── */}
      <header className="border-b border-forest-100/10 bg-forest-950 text-cream-50">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <p className="hero-in text-sm font-semibold tracking-[0.35em] text-cream-100/70 uppercase">
            {d.kicker} — Saumama Foundation
          </p>
          <h1
            className="hero-in mt-4 font-display text-5xl leading-tight font-semibold sm:text-7xl"
            style={{ "--hero-delay": "120ms" } as React.CSSProperties}
          >
            {d.title}
          </h1>
          <div className="draw-line mx-auto mt-6 h-0.5 w-24 bg-cream-50" />
          <p
            className="hero-in mx-auto mt-5 max-w-2xl text-lg text-cream-100/85"
            style={{ "--hero-delay": "260ms" } as React.CSSProperties}
          >
            {d.subtitle}
          </p>
        </div>
      </header>

      {/* ── Artículo destacado (manifiesto) ────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url(${IMG.heroRiver})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-forest-950/70" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-end px-4 pb-16 text-center sm:px-6">
          <Reveal>
            <span className="rounded-full bg-cream-50 px-4 py-1.5 text-xs font-bold tracking-widest text-forest-950 uppercase">
              {d.featuredTag}
            </span>
            <h2 className="mt-6 font-display text-3xl leading-snug font-semibold sm:text-5xl">
              {dict.manifesto.quote}
            </h2>
            <p className="mt-5 text-sm font-semibold tracking-[0.2em] text-cream-100/80 uppercase">
              {dict.manifesto.line}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Feed + sidebar ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_21rem]">
          {/* Feed de artículos */}
          <div className="grid gap-6 sm:grid-cols-2">
            {feed.map((post, i) => {
              const inner = (
                <SpotlightCard className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10">
                  <div className="overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.img}
                      alt=""
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase">
                      <span className="rounded-full bg-forest-900 px-3 py-1 text-cream-50">{post.tag}</span>
                      {post.date && <span className="text-forest-800/60">{post.date}</span>}
                    </div>
                    <h3 className="mt-4 font-display text-2xl leading-snug font-semibold text-forest-900">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-forest-800/80">{post.excerpt}</p>
                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-700">
                      {post.external && <LinkedInIcon className="h-3.5 w-3.5" />}
                      {post.external ? d.readOn : d.readMore}
                      <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </p>
                  </div>
                </SpotlightCard>
              );
              return (
                <Reveal key={i} delay={(i % 2) * 110} className="h-full">
                  {post.external ? (
                    <a href={post.href} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
                      {inner}
                    </a>
                  ) : (
                    <Link href={post.href} className="block h-full cursor-pointer">
                      {inner}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* Sidebar tipo blog */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <div className="rounded-2xl bg-forest-900 p-7 text-center text-cream-50">
                <Logo dark horizontal={false} className="mx-auto h-28 w-auto" />
                <h3 className="mt-4 text-sm font-semibold tracking-[0.25em] text-cream-100/80 uppercase">
                  {d.aboutCard}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/85">{dict.footer.tagline}</p>
                <Link
                  href={`/${lang}/nosotros/`}
                  className="mt-5 inline-block cursor-pointer rounded-full bg-cream-50 px-6 py-2.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-white"
                >
                  {dict.about.link} →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl border border-cream-200 bg-cream-100 p-7">
                <h3 className="text-sm font-semibold tracking-[0.25em] text-forest-700 uppercase">
                  {d.figuresCard}
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-5">
                  {dict.stats.map((s) => (
                    <div key={s.label}>
                      <p className="font-display text-3xl font-semibold text-forest-900">
                        <CountUp value={s.value} />
                      </p>
                      <p className="mt-1 text-xs leading-snug text-forest-800/70">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <DonationWidget dict={dict} />
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-cream-200 bg-cream-100 p-7">
                <h3 className="text-sm font-semibold tracking-[0.25em] text-forest-700 uppercase">
                  {d.standardsCard}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {dict.standards.items.map((t) => (
                    <span key={t} className="rounded-full border border-forest-700/30 px-3 py-1 text-xs font-semibold text-forest-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-forest-900 px-6 py-4 font-semibold text-cream-50 transition-all duration-500 hover:bg-forest-800"
              >
                <LinkedInIcon />
                {d.follow}
              </a>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* ── Galería del territorio ─────────────────────────────────── */}
      <section className="bg-forest-950">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
              {d.galleryTitle}
            </h2>
            <div className="draw-on-reveal mt-4 h-0.5 w-14 bg-cream-50" />
            <p className="mt-4 max-w-md text-lg text-cream-100/80">{d.galleryText}</p>
          </Reveal>
          <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>div]:mb-4">
            {IMG.blogGal.map((src, i) => (
              <Reveal key={src} delay={(i % 4) * 90}>
                <div className="group overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-full transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ──────────────────────────────────────────────── */}
      <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-forest-900">{dict.cta.title}</h2>
          <p className="mt-3 max-w-xl text-lg text-forest-800/80">{dict.cta.text}</p>
        </Reveal>
        <Reveal delay={130}>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center gap-3 rounded-full bg-forest-900 py-3 pr-2.5 pl-7 font-semibold text-cream-50 transition-all duration-500 hover:bg-forest-800 active:scale-[0.98]"
            >
              {d.follow}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-105">
                <LinkedInIcon />
              </span>
            </a>
            <Link
              href={`/${lang}/`}
              className="cursor-pointer rounded-full border border-forest-800/30 px-7 py-3 font-semibold text-forest-900 transition-all duration-500 hover:border-forest-800"
            >
              {d.viewClassic}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
