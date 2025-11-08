"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

/**
 * Rutas locales sugeridas para fotos:
 * /public/alaf/testimonios/autor-1.jpg
 * /public/alaf/testimonios/autor-2.jpg
 * /public/alaf/testimonios/autor-3.jpg
 * /public/alaf/testimonios/autor-4.jpg
 * ... (puedes añadir más)
 */

type Testimonial = {
  name: string;
  subtitle: string; // programa/objetivo
  quote: string;
  rating: number; // 1..5
  photo?: string; // ruta local opcional
};

const DATA: Testimonial[] = [
  {
    name: "Mónica Mock",
    subtitle: "Mamá de mellizas • Homeschool",
    quote:
      "No puedo sentirme más satisfecha con la educación recibida por mis mellizas. Era exactamente lo que buscábamos: una educación de primer mundo.",
    rating: 5,
    photo: "/alaf/testimonios/autor-1.jpg",
  },
  {
    name: "Julia Navarro",
    subtitle: "Familia ALAF • Programa bilingüe",
    quote:
      "Para nosotros era imprescindible el inglés y ahora incluso francés. Está aprendiendo de una manera estructurada y divertida.",
    rating: 5,
    photo: "/alaf/testimonios/autor-2.jpg",
  },
  {
    name: "María G.",
    subtitle: "Mamá homeschool",
    quote:
      "Mi hija volvió a sonreír al estudiar. Ahora aprende sin estrés y con amor. El acompañamiento humano marca la diferencia.",
    rating: 5,
    photo: "/alaf/testimonios/autor-3.jpg",
  },
  {
    name: "Diego",
    subtitle: "Secundaria • Plan personalizado",
    quote:
      "En ALAF encontré apoyo y estructura para organizar mi aprendizaje online. Los reportes me ayudan a ver mi progreso real.",
    rating: 4,
    photo: "/alaf/testimonios/autor-4.jpg",
  },
  {
    name: "Valentina R.",
    subtitle: "Primaria • Virtual School",
    quote:
      "Las clases son dinámicas y las tareas tienen propósito. Se nota el avance en lectura y matemáticas.",
    rating: 5,
  },
];

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          style={{
            color: i < value ? "var(--celeste)" : "#e2e8f0",
            fill: i < value ? "var(--celeste)" : "transparent",
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function Avatar({ name, photo }: { name: string; photo?: string }) {
  const initials = useMemo(
    () =>
      name
        .split(" ")
        .map((p) => p[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [name]
  );

  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[var(--border)] bg-white">
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          sizes="48px"
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full grid place-items-center text-slate-700">
          <span className="text-sm font-semibold">{initials}</span>
        </div>
      )}
    </div>
  );
}

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  // auto-avance cada 5s
  useEffect(() => {
    const id = setInterval(
      () => setIdx((p) => (p + 1) % DATA.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonios" className="section">
      <div className="container-max">
        <h2 className="h2 mb-6">Testimonios</h2>

        <div className="relative">
          {/* Slides */}
          <div className="overflow-hidden">
            {DATA.map((t, i) => (
              <article
                key={t.name + i}
                className={`card p-6 md:p-8 transition-opacity duration-500 ${
                  idx === i ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Avatar name={t.name} photo={t.photo} />
                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-slate-600 text-sm">{t.subtitle}</div>
                  </div>
                </div>

                <Stars value={t.rating} />

                <p className="text-slate-800 leading-relaxed mt-3">
                  {t.quote}
                </p>
              </article>
            ))}
          </div>

          {/* Dots (sin texto auxiliar) */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {DATA.map((_, i) => (
              <button
                key={i}
                className="dot"
                aria-current={idx === i}
                aria-label={`testimonio ${i + 1}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
