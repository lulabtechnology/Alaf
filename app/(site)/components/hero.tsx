"use client";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="inicio" className="relative">
      {/* Imagen estática (sube /public/alaf/hero/hero.jpg) */}
      <div className="relative h-[60vh] md:h-[78vh] overflow-hidden">
        <Image
          src="/alaf/hero/hero.jpg"
          alt="ALAF – estudiantes aprendiendo con propósito"
          fill
          priority
          quality={95}
          sizes="(min-width:1536px) 1536px, (min-width:1280px) 1280px, (min-width:1024px) 1024px, 100vw"
          className="object-cover object-center md:[object-position:center_30%]"
          unoptimized
        />
      </div>

      {/* Contenido con panel más compacto en móvil */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-max">
          <div className="max-w-xl md:max-w-2xl hero-text-panel md:p-5 p-3">
            <h1 className="h1 text-white">
              Aprender desde casa nunca fue tan emocionante.
            </h1>
            <p className="mt-2 md:mt-3 text-white/95 text-[15px] md:text-[17px] leading-relaxed">
              En <b>ALAF International Academy</b> te acompañamos a construir un camino educativo
              flexible, moderno y lleno de propósito. Tu hijo aprende a su ritmo, con docentes
              atentos, recursos digitales interactivos y el respaldo de una escuela internacional
              <b> 100% virtual y homeschool</b>.
            </p>
            <div className="mt-4 md:mt-5 flex flex-wrap gap-3">
              <Link href="#contacto" className="btn btn-primary">✨ Enviar mensaje</Link>
              <Link href="#por-que-nosotros" className="btn btn-secondary">Saber más</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
