"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { Logo } from "./Logo";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body con el menú abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: `/${lang}/`, label: dict.nav.home },
    { href: `/${lang}/nosotros/`, label: dict.nav.about },
    { href: `/${lang}/proyectos/`, label: dict.nav.projects },
    { href: `/${lang}/blog/`, label: dict.nav.blog },
  ];

  // Cambia /es/... por /en/... conservando la ruta actual
  const otherLang: Locale = lang === "es" ? "en" : "es";
  const basePath = process.env.NODE_ENV === "production" ? "/saumama-web" : "";
  const currentPath = pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;
  const switchHref = currentPath.replace(`/${lang}`, `/${otherLang}`) || `/${otherLang}/`;

  return (
    <>
      {/* Nav isla flotante */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled ? "px-3 pt-3 sm:px-6" : "px-0 pt-0"
        }`}
      >
        <div
          className={`mx-auto flex h-16 max-w-6xl items-center justify-between border-forest-100/10 px-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] sm:px-6 ${
            scrolled
              ? "rounded-2xl border bg-forest-950/85 shadow-2xl shadow-forest-950/40 backdrop-blur-xl"
              : "border-b bg-gradient-to-b from-forest-950/70 to-transparent"
          }`}
        >
          <Link href={`/${lang}/`} aria-label="SAUMAMA Foundation" className="cursor-pointer">
            <Logo dark className="h-11 w-auto" />
          </Link>

          <nav className="hidden items-center gap-7 text-base text-cream-100/90 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link cursor-pointer transition-colors duration-300 hover:text-cream-100">
                {l.label}
              </Link>
            ))}
            <Link
              href={switchHref}
              className="cursor-pointer rounded-full border border-cream-100/25 px-3 py-1 text-xs tracking-widest uppercase transition-all duration-300 hover:border-cream-50 hover:text-cream-100"
            >
              {otherLang}
            </Link>
            {/* CTA botón-en-botón */}
            <a
              href={`/${lang}/#contacto`}
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-gold-500 py-1.5 pr-1.5 pl-5 text-sm font-semibold text-forest-950 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gold-400 active:scale-[0.98]"
            >
              {dict.nav.donate}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest-950/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </nav>

          <button
            className="relative h-10 w-10 cursor-pointer text-cream-50 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {/* Hamburguesa que muta a X */}
            <span
              className={`absolute left-2 block h-px w-6 bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "top-5 rotate-45" : "top-4"
              }`}
            />
            <span
              className={`absolute left-2 block h-px w-6 bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "top-5 -rotate-45" : "top-6"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Overlay móvil a pantalla completa */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-forest-950/90 px-8 backdrop-blur-2xl transition-opacity duration-500 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {[...links, { href: switchHref, label: otherLang.toUpperCase() }].map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`cursor-pointer py-3 font-display text-4xl font-semibold text-cream-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-cream-100 ${
                open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${100 + i * 70}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`/${lang}/#contacto`}
            onClick={() => setOpen(false)}
            className={`mt-6 inline-flex w-max cursor-pointer items-center gap-3 rounded-full bg-gold-500 px-7 py-3.5 font-semibold text-forest-950 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: open ? "400ms" : "0ms" }}
          >
            {dict.nav.donate}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>
      </div>
    </>
  );
}
