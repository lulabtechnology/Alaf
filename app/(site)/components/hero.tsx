"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  "/alaf/hero/slide-1.jpg",
  "/alaf/hero/slide-2.jpg",
  "/alaf/hero/slide-3.jpg",
  "/alaf/hero/slide-4.jpg",
];

// Sirve la imagen ORIGINAL (evita /_next/image → más nítido)
// Cambia a false si luego quieres el optimizer de Next.
const USE_UNOPTIMIZED = true;

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="inicio" className="relative">
      {/* SLIDES */}
      <div className="relative h-[64vh] md:h-[82vh] overflow-hidden">
        {slides.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== idx}
          >
            <Image
              src={src}
              alt="ALAF – estudiantes felices por sus logros"
              fill
              priority={idx === 0}
              quality={100}
              // ⚠️ Ajusta SIEMPRE la imagen al contenedor completo (puede distorsionar un poco)
              className="object-fill"
              // tamaños grandes para desktop
              sizes="(min-width:1600px) 1600px, (min-width:1280px) 1280px, (min-width:1024px) 1024px, 100vw"
              unoptimized={USE_UNOPTIMIZED}
            />
          </div>
        ))}
      </div>

      {/* CONTENIDO */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-max">
          <div className="max-w-2xl rounded-2xl border border-white/20 bg-[rgba(8,21,36,.55)] backdrop-blur-md p-5 shadow-[0_24px_60px_-28px_rgba(2,8,23,.45)]">
            <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
              Aprender desde casa nunca fue tan emocionante.
            </h1>

            {/* Oculto en móvil: SOLO sale el título */}
            <p className="mt-3 text-white/95 text-[17px] leading-relaxed hidden md:block">
              En <b>ALAF International Academy</b> te acompañamos a construir un camino educativo
              flexible, moderno y lleno de propósito. Tu hijo aprende a su ritmo, con docentes
              atentos, recursos digitales interactivos y el respaldo de una escuela internacional
              <b> 100% virtual y homeschool</b>.
            </p>

            <div className="mt-5 hidden md:flex flex-wrap gap-3">
              <Link href="#contacto" className="btn btn-primary">✨ Enviar mensaje</Link>
              <Link href="#por-que-nosotros" className="btn btn-secondary">Saber más</Link>
            </div>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-current={i === idx}
            aria-label={`slide ${idx + 1}`}
            className="h-2.5 w-6 rounded-full border border-slate-300 bg-slate-200 data-[current=true]:bg-[#AEE3EB] data-[current=true]:border-[#AEE3EB]"
            data-current={i === idx}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  );
}
export default Hero;
