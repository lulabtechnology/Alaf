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

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="inicio" className="relative">
      {/* slider */}
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
              quality={95}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* contenido: panel legible */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-max">
          <div className="max-w-2xl hero-text-panel">
            <h1 className="h1 text-white">
              Aprender desde casa nunca fue tan emocionante.
            </h1>
            <p className="mt-3 text-white/95 text-[17px] leading-relaxed">
              En <b>ALAF International Academy</b> te acompañamos a construir un camino
              educativo flexible, moderno y lleno de propósito. Tu hijo aprende a
              su ritmo, con docentes atentos, recursos digitales interactivos y el
              respaldo de una escuela internacional <b>100% virtual y homeschool</b>.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="#contacto" className="btn btn-primary">✨ Enviar mensaje</Link>
              <Link href="#por-que-nosotros" className="btn btn-secondary">Saber más</Link>
            </div>
          </div>
        </div>
      </div>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-current={i === idx}
            aria-label={`slide ${idx + 1}`}
            className="dot"
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  );
}
