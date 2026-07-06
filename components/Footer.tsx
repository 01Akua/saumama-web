import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { LINKEDIN_URL } from "@/lib/images";
import { Logo } from "./Logo";

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const nav = [
    { href: `/${lang}/`, label: dict.nav.home },
    { href: `/${lang}/nosotros/`, label: dict.nav.about },
    { href: `/${lang}/proyectos/`, label: dict.nav.projects },
    { href: `/${lang}/#donar`, label: dict.nav.donate },
  ];

  return (
    <footer className="bg-forest-950 text-cream-100/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <Logo dark className="h-14 w-auto" />
          <p className="mt-4 text-sm leading-relaxed">{dict.footer.tagline}</p>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">
            {dict.footer.navTitle}
          </h3>
          <ul className="space-y-2 text-sm">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-400">
                {dict.nav.blog} (LinkedIn)
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">
            {dict.footer.resourcesTitle}
          </h3>
          <ul className="space-y-2 text-sm">
            {dict.footer.resources.map((r) => (
              <li key={r} className="cursor-default opacity-80">
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">
            {dict.footer.newsletterTitle}
          </h3>
          <p className="text-sm">{dict.footer.newsletterText}</p>
          <form className="mt-4 flex overflow-hidden rounded-md border border-cream-100/20" action="#">
            <input
              type="email"
              placeholder={dict.footer.newsletterPlaceholder}
              className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-cream-100/40"
            />
            <button type="button" className="bg-gold-500 px-4 text-forest-950" aria-label="OK">
              →
            </button>
          </form>
          <div className="mt-5 space-y-1 text-sm">
            <p>info@saumamafoundation.org</p>
            <p>+57 300 123 4567</p>
            <p>Bogotá, Colombia · Lima, Perú</p>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-100/10 py-5 text-center text-xs text-cream-100/50">
        © {year} SAUMAMA Foundation. {dict.footer.rights}{" "}
        <span className="text-gold-400/70">{dict.footer.prototype}</span>
      </div>
    </footer>
  );
}
