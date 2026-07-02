"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Contador animado — la firma visual del sitio.
 * Recibe el valor tal como se muestra ("10.000+", "120K+", "+25.000")
 * y anima solo la parte numérica conservando prefijos/sufijos y separadores.
 */
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Descompone "≈prefijo + número + sufijo"
    const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
    if (!match) return;
    const [, prefix, numStr, suffix] = match;
    const separator = numStr.includes(".") && !numStr.includes(",") ? "." : numStr.includes(",") ? "," : "";
    const target = parseInt(numStr.replace(/[.,]/g, ""), 10);
    if (isNaN(target)) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        setStarted(true);

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplay(value);
          return;
        }

        const duration = 1800;
        const start = performance.now();
        const fmt = (n: number) =>
          separator ? n.toLocaleString("de-DE").replace(/\./g, separator) : String(n);

        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 4); // ease-out quart
          setDisplay(`${prefix}${fmt(Math.round(target * eased))}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {started ? display : value.replace(/[\d]/g, "0")}
    </span>
  );
}
