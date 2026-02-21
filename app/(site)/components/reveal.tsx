// RUTA: /app/(site)/components/reveal.tsx  (NUEVO ARCHIVO)
"use client";

import { useEffect } from "react";

/**
 * Reveal (sutil): agrega la clase `js` al <html> y revela elementos con [data-reveal]
 * cuando entran al viewport, respetando prefers-reduced-motion.
 *
 * Uso: añade `data-reveal` (opcional: data-reveal-delay="120") en cualquier elemento.
 */
export default function Reveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    root.classList.add("js");

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    // Setea delays (CSS variable) desde data-reveal-delay
    for (const el of elements) {
      const raw = el.dataset.revealDelay;
      if (!raw) continue;
      const v = raw.trim();
      el.style.setProperty("--reveal-delay", v.endsWith("ms") ? v : `${v}ms`);
    }

    // Si el usuario prefiere menos movimiento, mostramos todo inmediato.
    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.classList.add("is-revealed");
          obs.unobserve(el);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      }
    );

    elements.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return null;
}
