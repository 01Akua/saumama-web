"use client";

import { useEffect } from "react";

/**
 * Smooth scroll propio para anclas de la misma página (#donar).
 * Se implementa con requestAnimationFrame + scroll instantáneo por frame
 * porque el `scroll-behavior: smooth` nativo es cancelable por Chrome
 * y quedaba interrumpido en esta página.
 */
export function SmoothScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;

      const url = new URL(a.href, location.href);
      if (url.pathname !== location.pathname || !url.hash) return;
      const el = document.querySelector<HTMLElement>(url.hash);
      if (!el) return;

      e.preventDefault();
      history.pushState(null, "", url.hash);

      const targetY = el.getBoundingClientRect().top + window.scrollY - 88; // deja espacio al nav
      // Salto directo si el usuario prefiere menos movimiento o si la
      // pestaña está oculta (rAF no corre en pestañas en segundo plano)
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.hidden) {
        window.scrollTo({ top: targetY, behavior: "instant" as ScrollBehavior });
        return;
      }

      const startY = window.scrollY;
      const dist = targetY - startY;
      const duration = Math.min(1300, Math.max(600, Math.abs(dist) * 0.35));
      const t0 = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 4); // ease-out quart

      const step = (now: number) => {
        const t = Math.min((now - t0) / duration, 1);
        window.scrollTo({ top: startY + dist * ease(t), behavior: "instant" as ScrollBehavior });
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
