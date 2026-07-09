"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal: el elemento entra con fade + slide + blur cuando
 * cruza el viewport. `delay` (ms) permite escalonar hijos.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      // threshold bajo: dispara con el primer píxel visible, no con un % del
      // bloque completo (un bloque alto tardaba de más en juntar ese %).
      // rootMargin positivo: se revela un poco antes de entrar al viewport,
      // para que el texto ya esté listo cuando el usuario lo alcanza.
      { threshold: 0, rootMargin: "0px 0px 120px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
