// RUTA: /app/(site)/components/navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#about", label: "Acerca de" },
  { href: "#benefits", label: "Prioriza tu aprendizaje" },
  { href: "#por-que-nosotros", label: "¿Por qué nosotros?" },
  { href: "#servicios", label: "Servicios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  // Sincroniza con el hash actual (por si entras con #contacto, etc.)
  useEffect(() => {
    const sync = () => setActive(window.location.hash || "#inicio");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  // Scroll spy simple (pro) con IntersectionObserver (sin librerías)
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    let raf = 0;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        const best = visible.sort(
          (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0)
        )[0];

        const id = (best.target as HTMLElement).id;
        cancelAnimationFrame(raf);
        raf = window.requestAnimationFrame(() => setActive(`#${id}`));
      },
      {
        // Ajustado para navbar sticky (elige sección cuando entra en el “centro”)
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.12, 0.22, 0.35, 0.5],
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, []);

  // UX móvil: bloquear scroll + cerrar con Escape
  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="container-max flex h-20 items-center justify-between">
        <Link
          href="#inicio"
          className="flex items-center gap-3 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/alaf/logo.png"
            alt="ALAF International Academy"
            width={44}
            height={44}
            priority
          />
          <div className="leading-tight">
            <div className="font-semibold tracking-tight text-slate-900">
              ALAF International Academy
            </div>
            <div className="hidden text-xs text-slate-600 md:block">
              100% virtual + homeschool con acompañamiento humano
            </div>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "text-sm font-medium transition",
                  isActive
                    ? "text-slate-950 underline decoration-2 underline-offset-8"
                    : "text-slate-700 hover:text-slate-950"
                )}
              >
                {l.label}
              </a>
            );
          })}

          <a href="#contacto" className="btn btn-primary">
            Contáctenos
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/60 px-3 py-2 text-slate-800 shadow-sm backdrop-blur transition hover:bg-white/80"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile panel + backdrop */}
      {open && (
        <>
          <button
            aria-hidden
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav"
            className="md:hidden relative z-50 border-t bg-white/95 backdrop-blur"
          >
            <div className="container-max flex flex-col gap-2 py-3">
              {NAV_LINKS.map((l) => {
                const isActive = active === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "rounded-2xl px-3 py-3 text-sm font-medium transition",
                      isActive
                        ? "bg-slate-900/5 text-slate-950"
                        : "text-slate-800 hover:bg-slate-900/5"
                    )}
                  >
                    {l.label}
                  </a>
                );
              })}

              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-1"
              >
                Contáctenos
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
