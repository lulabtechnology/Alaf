// RUTA: /app/(site)/components/hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-4 md:pt-6">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-3xl bg-white/55 shadow-lg ring-1 ring-black/5">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-0">
            {/* Texto (izquierda) */}
            <div className="relative z-10 flex items-center p-5 md:p-10 lg:col-span-5 lg:p-12">
              <div
                className="hero-text-panel w-full max-w-xl"
                data-reveal
                data-reveal-delay="0"
              >
                <h1 className="hero-title text-3xl font-semibold leading-tight md:text-5xl">
                  Aprender desde casa nunca fue tan emocionante.
                </h1>

                {/* Oculto en móvil (tu decisión original, la mantengo) */}
                <p className="mt-4 hidden text-slate-100/90 md:block">
                  En <strong>ALAF International Academy</strong> te acompañamos a
                  construir un camino educativo flexible, moderno y lleno de
                  propósito. Tu hijo aprende a su ritmo, con docentes atentos,
                  recursos digitales interactivos y el respaldo de una escuela
                  internacional <strong>100% virtual y homeschool</strong>.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#contacto"
                    className="btn bg-white/95 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white"
                  >
                    ✨ Enviar mensaje
                  </a>
                  <a
                    href="#about"
                    className="btn border border-white/35 bg-white/10 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    Saber más
                  </a>
                </div>
              </div>
            </div>

            {/* Media (derecha) */}
            <div className="relative lg:col-span-7 lg:p-6">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-sm">
                <div className="relative aspect-[4/5] w-full md:aspect-[16/9] lg:aspect-[16/10]">
                  {/* Desktop image (md+) */}
                  <Image
                    src="/alaf/hero/hero-desktop.jpg"
                    alt="Estudiantes felices en ALAF"
                    fill
                    priority
                    sizes="(min-width: 1280px) 820px, (min-width: 1024px) 58vw, (min-width: 768px) 92vw, 100vw"
                    className="hidden md:block object-cover object-center"
                  />

                  {/* Mobile image (<md) */}
                  <Image
                    src="/alaf/hero/hero-mobile.jpg"
                    alt="Estudiantes felices en ALAF"
                    fill
                    priority
                    sizes="100vw"
                    className="md:hidden object-cover object-center"
                  />

                  {/* Overlay sutil para look premium */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/15 via-slate-900/15 to-slate-900/25" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
