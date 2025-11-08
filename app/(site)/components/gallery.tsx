"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/alaf/exito-1.jpg",
  "/alaf/exito-2.jpg",
  "/alaf/exito-3.jpg",
  "/alaf/exito-4.jpg",
];

export default function Gallery() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="galeria" className="section container-max">
      <h2 className="h2 mb-6">Galería</h2>

      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
        {/* Contenedor con ratio fijo y margen (para que se vea “card”) */}
        <div className="relative aspect-[16/9]">
          {images.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
              aria-hidden={i !== idx}
            >
              <Image
                src={src}
                alt="ALAF – momentos de aprendizaje"
                fill
                quality={95}
                // Mantener recorte superior para mostrar caras
                className="object-cover object-top"
                sizes="(min-width:1280px) 1100px, 100vw"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              aria-current={i === idx}
              aria-label={`imagen ${idx + 1}`}
              className="h-2.5 w-6 rounded-full border border-slate-300 bg-slate-200 data-[current=true]:bg-[#AEE3EB] data-[current=true]:border-[#AEE3EB]"
              data-current={i === idx}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
