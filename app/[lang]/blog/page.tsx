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

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const d = getDictionary(lang).blogPage;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="slow-zoom absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url(${IMG.seedling})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 to-forest-950/40" />
        <div className="relative mx-auto max-w-6xl px-4 pt-40 pb-24 sm:px-6">
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
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-in mt-8 inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-cream-50 px-7 py-3 font-semibold text-forest-950 transition-all duration-500 hover:bg-white active:scale-[0.98]"
            style={{ "--hero-delay": "420ms" } as React.CSSProperties}
          >
            <LinkedInIcon />
            {d.follow}
          </a>
        </div>
      </section>

      {/* Entradas */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {d.posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 130} className="h-full">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full cursor-pointer"
              >
                <SpotlightCard className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10">
                  <div className="overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={IMG.blogPosts[i]}
                      alt=""
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase">
                      <span className="rounded-full bg-forest-900 px-3 py-1 text-cream-50">{post.tag}</span>
                      <span className="text-forest-800/60">{post.date}</span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl leading-snug font-semibold text-forest-900">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-forest-800/80">{post.excerpt}</p>
                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-700">
                      <LinkedInIcon className="h-3.5 w-3.5" />
                      {d.readOn}
                      <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </p>
                  </div>
                </SpotlightCard>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Galería del blog */}
      <section className="bg-forest-950">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
              {d.galleryTitle}
            </h2>
            <div className="draw-on-reveal mt-4 h-0.5 w-14 bg-cream-50" />
            <p className="mt-4 max-w-md text-lg text-cream-100/80">{d.galleryText}</p>
          </Reveal>
          {/* Masonry con CSS columns — cero JS */}
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

      {/* CTA LinkedIn */}
      <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-forest-900">{d.follow}</h2>
          <p className="mt-3 text-lg text-forest-800/80">{d.followText}</p>
        </Reveal>
        <Reveal delay={130}>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex cursor-pointer items-center gap-3 rounded-full bg-forest-900 py-3 pr-2.5 pl-7 font-semibold text-cream-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-forest-800 active:scale-[0.98]"
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
