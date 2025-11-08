// app/(site)/components/hero.tsx
"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-lg">
          {/* Imagen única del hero */}
          <div className="relative h-[58vh] min-h-[360px] w-full md:h-[72vh]">
            <Image
              src="/alaf/hero/hero.jpg"
              alt="Estudiantes felices en ALAF"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Oscurecedor para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/25" />
          </div>

          {/* Texto */}
          <div className="pointer-events-none absolute inset-0 flex items-center">
            <div className="pointer-events-auto mx-4 w-full md:mx-10 lg:mx-16">
              <div className="max-w-2xl rounded-3xl bg-slate-900/55 p-5 backdrop-blur md:bg-slate-900/40 md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Aprender desde casa nunca fue tan emocionante.
                </h1>
                {/* Oculto en móvil */}
                <p className="mt-4 hidden text-slate-100/90 md:block">
                  En <strong>ALAF International Academy</strong> te acompañamos a
                  construir un camino educativo flexible, moderno y lleno de
                  propósito. Tu hijo aprende a su ritmo, con docentes atentos,
                  recursos digitales interactivos y el respaldo de una escuela
                  internacional <strong>100% virtual y homeschool</strong>.
                </p>

                <div className="mt-6 flex gap-3">
                  <a
                    href="#contacto"
                    className="rounded-2xl bg-white/95 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
                  >
                    ✨ Enviar mensaje
                  </a>
                  <a
                    href="#about"
                    className="rounded-2xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20"
                  >
                    Saber más
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* fin texto */}
        </div>
      </div>
    </section>
  );
}
