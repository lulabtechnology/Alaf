// app/(site)/components/navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  // cierra el menú al navegar
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#about", label: "Acerca de" },
    { href: "#benefits", label: "Prioriza tu aprendizaje" },
    { href: "#por-que-nosotros", label: "¿Por qué nosotros?" },
    { href: "#servicios", label: "Servicios" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4"
           style={{height:"80px"}}> {/* top bar más grande */}
        <Link href="#inicio" className="flex items-center gap-3">
          <Image
            src="/alaf/logo.png"
            alt="ALAF International Academy"
            width={44}
            height={44}
            priority
          />
          <span className="font-semibold tracking-tight text-slate-800">
            ALAF International Academy
          </span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
               className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Contáctenos
          </a>
        </nav>

        <button
          className="md:hidden rounded-xl border px-3 py-2 text-slate-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* móvil */}
      {open && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                 className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50">
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Contáctenos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
