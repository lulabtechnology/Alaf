"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative">
      {/* Imagen única y estática */}
      <div className="relative h-[64vh] md:h-[82vh] overflow-hidden">
        <Image
          src="/alaf/hero/hero.jpg"
          alt="ALAF – estudiantes felices por sus logros"
          fill
          priority
          quality={100}
          /* AJUSTE FORZADO: SIEMPRE rellena el cuadro, aunque se distorsione */
          className="object-fill"
          /* tamaños grandes para desktop */
          sizes="(min-width:1600px) 1600px, (min-width:1280px) 1280px, (min-width:1024px) 1024px, 100vw"
          unoptimized
        />
      </div>

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-max">
          <div className="max-w-2xl rounded-2xl border border-white/20 bg-[rgba(8,21,36,.55)] backdrop-blur-md p-5 shadow-[0_24px_60px_-28px_rgba(2,8,23,.45)]">
            <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
              Aprender desde casa nunca fue tan emocionante.
            </h1>

            {/* En móvil se oculta: SOLO el título */}
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
    </section>
  );
}
