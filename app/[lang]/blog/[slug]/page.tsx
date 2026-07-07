import Link from "next/link";
import { notFound } from "next/navigation";
import { Comments, CommunityJoin } from "@/components/Community";
import { Reveal } from "@/components/Reveal";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import { IMG } from "@/lib/images";

const POST_IMGS: Record<string, string> = {
  "nabusimake-escuchar": IMG.historia,
  "consejos-juveniles": IMG.seedling,
  "la-samauma": IMG.samauma,
};

export function generateStaticParams() {
  const slugs = getDictionary("es").blogPage.posts.map((p) => p.slug);
  return locales.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: langParam, slug } = await params;
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  const d = dict.blogPage;
  const post = d.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = d.posts.filter((p) => p.slug !== slug).slice(0, 2);
  const minutes = Math.max(2, Math.round(post.body.join(" ").split(" ").length / 200));

  return (
    <>
      {/* Portada del artículo */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url(${POST_IMGS[slug] ?? IMG.seedling})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-forest-950/70" />
        <div className="relative mx-auto flex min-h-[55vh] max-w-3xl flex-col justify-end px-4 pt-40 pb-12 sm:px-6">
          <Link
            href={`/${lang}/blog/`}
            className="hero-in inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-cream-100/80 transition-colors hover:text-cream-50"
          >
            ← {d.backToBlog}
          </Link>
          <div
            className="hero-in mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold tracking-widest uppercase"
            style={{ "--hero-delay": "100ms" } as React.CSSProperties}
          >
            <span className="rounded-full bg-cream-50 px-3 py-1 text-forest-950">{post.tag}</span>
            <span className="text-cream-100/80">{post.date}</span>
            <span className="text-cream-100/60">· {minutes} {d.minRead}</span>
          </div>
          <h1
            className="hero-in mt-4 font-display text-3xl leading-tight font-semibold sm:text-5xl"
            style={{ "--hero-delay": "200ms" } as React.CSSProperties}
          >
            {post.title}
          </h1>
          <p
            className="hero-in mt-4 text-sm font-semibold text-cream-100/80"
            style={{ "--hero-delay": "300ms" } as React.CSSProperties}
          >
            {post.author}
          </p>
        </div>
      </section>

      {/* Cuerpo del artículo */}
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Reveal>
          <p className="font-display text-xl leading-relaxed font-medium text-forest-900 sm:text-2xl">
            {post.excerpt}
          </p>
        </Reveal>
        <div className="mt-8 space-y-6">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={i === 0 ? 100 : 0}>
              <p className="text-lg leading-relaxed text-forest-800/90">{para}</p>
            </Reveal>
          ))}
        </div>

        {/* Comentarios con moderación */}
        <Comments dict={dict} slug={slug} />
      </article>

      {/* Más historias */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-forest-950">
              {lang === "es" ? "Más historias" : "More stories"}
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120} className="h-full">
                <Link href={`/${lang}/blog/${p.slug}/`} className="block h-full cursor-pointer">
                  <article className="group flex h-full gap-4 rounded-2xl border border-cream-200 bg-cream-50 p-4 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md">
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={POST_IMGS[p.slug] ?? IMG.seedling}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold tracking-widest text-forest-700 uppercase">
                        {p.tag} · {p.date}
                      </p>
                      <h3 className="mt-1 font-display text-lg leading-snug font-semibold text-forest-950">
                        {p.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comunidad */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <CommunityJoin dict={dict} />
        </Reveal>
      </section>
    </>
  );
}
