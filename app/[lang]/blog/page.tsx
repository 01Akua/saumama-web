import Link from "next/link";
import { CommunityJoin } from "@/components/Community";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import { IMG, LINKEDIN_URL } from "@/lib/images";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const POST_IMGS = [IMG.historia, IMG.seedling, IMG.samauma];

const LinkedInIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.31h4.52V23H.24V8.31zM8.34 8.31h4.33v2h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.92V23h-4.5v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V23h-4.5V8.31z" />
  </svg>
);

export default async function BlogIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const d = dict.blogPage;
  const [featured, ...rest] = d.posts;

  return (
    <>
      {/* Hero del blog */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="slow-zoom absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${IMG.seedling})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 to-forest-950/40" />
        <div className="relative mx-auto max-w-6xl px-4 pt-40 pb-20 sm:px-6">
          <p className="hero-in text-sm font-semibold tracking-[0.3em] text-cream-100 uppercase">{d.kicker}</p>
          <h1
            className="hero-in mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold sm:text-6xl"
            style={{ "--hero-delay": "120ms" } as React.CSSProperties}
          >
            {d.title}
          </h1>
          <div className="draw-line mt-6 h-0.5 w-16 bg-cream-50" />
          <p
            className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-cream-100/90"
            style={{ "--hero-delay": "280ms" } as React.CSSProperties}
          >
            {d.subtitle}
          </p>
        </div>
      </section>

      {/* Entrada destacada */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <Link href={`/${lang}/blog/${featured.slug}/`} className="block cursor-pointer">
            <article className="group grid overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10 lg:grid-cols-2">
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={POST_IMGS[0]}
                  alt=""
                  className="h-full max-h-[420px] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-widest uppercase">
                  <span className="rounded-full bg-forest-900 px-3 py-1 text-cream-50">{d.featuredLabel}</span>
                  <span className="text-forest-800/60">{featured.tag} · {featured.date}</span>
                </div>
                <h2 className="mt-4 font-display text-3xl leading-snug font-semibold text-forest-950 sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-forest-800/80">{featured.excerpt}</p>
                <p className="mt-6 inline-flex items-center gap-2 font-semibold text-forest-700">
                  {d.readMore}
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </p>
              </div>
            </article>
          </Link>
        </Reveal>
      </section>

      {/* Resto de entradas */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 120} className="h-full">
              <Link href={`/${lang}/blog/${post.slug}/`} className="block h-full cursor-pointer">
                <SpotlightCard className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10">
                  <div className="overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={POST_IMGS[i + 1]}
                      alt=""
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase">
                      <span className="rounded-full bg-forest-900 px-3 py-1 text-cream-50">{post.tag}</span>
                      <span className="text-forest-800/60">{post.date}</span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl leading-snug font-semibold text-forest-950">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-forest-800/80">{post.excerpt}</p>
                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-700">
                      {d.readMore}
                      <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </p>
                  </div>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comunidad: registro */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Reveal>
          <CommunityJoin dict={dict} />
        </Reveal>
      </section>

      {/* Galería del territorio */}
      <section className="bg-forest-950">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
              {d.galleryTitle}
            </h2>
            <div className="draw-on-reveal mt-4 h-0.5 w-14 bg-cream-50" />
            <p className="mt-4 max-w-md text-lg text-cream-100/80">{d.galleryText}</p>
          </Reveal>
          <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>div]:mb-4">
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

      {/* LinkedIn */}
      <section className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6">
        <Reveal>
          <p className="text-lg text-forest-800/80">{d.followText}</p>
        </Reveal>
        <Reveal delay={120}>
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
        </Reveal>
      </section>
    </>
  );
}
