"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides: string[][] = [
  ["/alaf/galeria/slide-1-1.jpg", "/alaf/galeria/slide-1-2.jpg", "/alaf/galeria/slide-1-3.jpg"],
  ["/alaf/galeria/slide-2-1.jpg", "/alaf/galeria/slide-2-2.jpg", "/alaf/galeria/slide-2-3.jpg"],
  ["/alaf/galeria/slide-3-1.jpg", "/alaf/galeria/slide-3-2.jpg", "/alaf/galeria/slide-3-3.jpg"],
  ["/alaf/galeria/slide-4-1.jpg", "/alaf/galeria/slide-4-2.jpg", "/alaf/galeria/slide-4-3.jpg"],
  ["/alaf/galeria/slide-5-1.jpg", "/alaf/galeria/slide-5-2.jpg", "/alaf/galeria/slide-5-3.jpg"],
  ["/alaf/galeria/slide-6-1.jpg", "/alaf/galeria/slide-6-2.jpg", "/alaf/galeria/slide-6-3.jpg"],
];

// aplanado para escritorio (grilla)
const allImages = slides.flat();

export default function Gallery() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="galeria" className="section container-max">
      <h2 className="h2 mb-6">Galería</h2>

      {/* ==== MÓVIL: carrusel 3 imágenes por slide ==== */}
      <div className="md:hidden">
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm p-3">
          {/* alto fijo para que las 3 imágenes quepan; cada item usa object-fill */}
          <div className="relative h-[52vw] min-h-[210px]">
            {slides.map((triple, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
                aria-hidden={i !== idx}
              >
                <div className="grid grid-cols-3 gap-2 h-full">
                  {triple.map((src) => (
                    <div key={src} className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={src}
                        alt="Galería ALAF"
                        fill
                        quality={90}
                        /* 🚩 AJUSTE FORZADO: SIEMPRE llena el espacio, aunque se pixele */
                        className="object-fill"
                        sizes="(max-width: 768px) 33vw, 33vw"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        {/* dots */}
          <div className="mt-3 flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`slide ${idx + 1}`}
                aria-current={i === idx}
                className={`h-2.5 w-6 rounded-full border ${i === idx ? "bg-[#AEE3EB] border-[#AEE3EB]" : "bg-slate-200 border-slate-300"}`}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ==== ESCRITORIO: grilla 3×N (sin recortar cabezas excesivamente) ==== */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {allImages.map((src) => (
          <div key={src} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src={src}
              alt="Galería ALAF"
              fill
              quality={90}
              /* Para desktop priorizamos la parte superior (caras) */
              className="object-cover object-top"
              sizes="(min-width:1280px) 420px, 33vw"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
}
