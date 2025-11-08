"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  subtitle: string;
  quote: string;
  rating: number; // 1..5
};

const DATA: Testimonial[] = [
  {
    name: "Mónica Mock",
    subtitle: "Mamá de mellizas • Homeschool",
    quote:
      "No puedo sentirme más satisfecha con la educación recibida por mis mellizas. Era exactamente lo que buscábamos: una educación de primer mundo.",
    rating: 5,
  },
  {
    name: "Julia Navarro",
    subtitle: "Familia ALAF • Programa bilingüe",
    quote:
      "Para nosotros era imprescindible el inglés y ahora incluso francés. Está aprendiendo de una manera estructurada y divertida.",
    rating: 5,
  },
  {
    name: "María G.",
    subtitle: "Mamá homeschool",
    quote:
      "Mi hija volvió a sonreír al estudiar. Ahora aprende sin estrés y con amor. El acompañamiento humano marca la diferencia.",
    rating: 5,
  },
  {
    name: "Diego",
    subtitle: "Secundaria • Plan personalizado",
    quote:
      "En ALAF encontré apoyo y estructura para organizar mi aprendizaje online. Los reportes me ayudan a ver mi progreso real.",
    rating: 4,
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

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  // auto-avance cada 5s
  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % DATA.length), 5000);
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
                <div className="mb-2">
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-slate-600 text-sm">{t.subtitle}</div>
                </div>

                <Stars value={t.rating} />

                <p className="text-slate-800 leading-relaxed mt-3">
                  {t.quote}
                </p>
              </article>
            ))}
          </div>

          {/* Dots */}
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
