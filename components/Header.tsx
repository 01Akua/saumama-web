"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { Logo } from "./Logo";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: `/${lang}/`, label: dict.nav.home },
    { href: `/${lang}/nosotros/`, label: dict.nav.about },
    { href: `/${lang}/proyectos/`, label: dict.nav.projects },
  ];

  // Cambia /es/... por /en/... conservando la ruta actual
  const otherLang: Locale = lang === "es" ? "en" : "es";
  const basePath = process.env.NODE_ENV === "production" ? "/saumama-web" : "";
  const currentPath = pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;
  const switchHref = currentPath.replace(`/${lang}`, `/${otherLang}`) || `/${otherLang}/`;

  return (
    <header className="sticky top-0 z-50 border-b border-forest-800/60 bg-forest-900/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${lang}/`} aria-label="SAUMAMA Foundation">
          <Logo dark />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-cream-100/90 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-gold-400">
              {l.label}
            </Link>
          ))}
          <Link
            href={switchHref}
            className="rounded-full border border-cream-100/25 px-3 py-1 text-xs tracking-widest uppercase transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            {otherLang}
          </Link>
          <Link
            href={`/${lang}/#donar`}
            className="rounded-md bg-gold-500 px-4 py-2 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
          >
            {dict.nav.donate}
          </Link>
        </nav>

        <button
          className="text-cream-50 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-forest-800 px-4 pt-2 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 text-cream-100 hover:bg-forest-800"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-3 px-2">
            <Link
              href={switchHref}
              className="rounded-full border border-cream-100/25 px-3 py-1 text-xs tracking-widest text-cream-100 uppercase"
            >
              {otherLang}
            </Link>
            <Link
              href={`/${lang}/#donar`}
              onClick={() => setOpen(false)}
              className="rounded-md bg-gold-500 px-4 py-2 text-sm font-semibold text-forest-950"
            >
              {dict.nav.donate}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
