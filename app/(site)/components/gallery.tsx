"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const pics = [
  "/alaf/galeria/gal-1.jpg",
  "/alaf/galeria/gal-2.jpg",
  "/alaf/galeria/gal-3.jpg",
  "/alaf/galeria/gal-4.jpg",
];

export function Gallery() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % pics.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="galeria" className="section">
      <div className="container-max">
        <h2 className="h2 mb-4">Galería</h2>

        <div className="relative mx-auto max-w-3xl">
          <div className="relative h-[220px] md:h-[320px] rounded-2xl overflow-hidden card">
            {pics.map((src, idx) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-500 ${i === idx ? "opacity-100" : "opacity-0"}`}
                aria-hidden={i !== idx}
              >
                <Image
                  src={src}
                  alt={`Galería ALAF ${idx + 1}`}
                  fill
                  className="object-cover"
                  quality={90}
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* dots */}
          <div className="mt-3 flex items-center justify-center gap-2">
            {pics.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Foto ${idx + 1}`}
                aria-current={i === idx}
                className="dot"
                onClick={() => setI(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
