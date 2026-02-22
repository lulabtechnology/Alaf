// RUTA: /app/(site)/components/testimonials.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
          className="h-4 w-4"
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

  const total = DATA.length;
  const prev = () => setIdx((p) => (p - 1 + total) % total);
  const next = () => setIdx((p) => (p + 1) % total);

  const active = useMemo(() => DATA[idx], [idx]);

  // auto-avance cada 5s
  useEffect(() => {
    const id = window.setInterval(() => setIdx((p) => (p + 1) % total), 5000);
    return () => window.clearInterval(id);
  }, [total]);

  return (
    <section id="testimonios" className="section">
      <div className="container-max">
        <div
          className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5 md:p-10"
          data-reveal
          data-reveal-delay="0"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="h2">Testimonios</h2>

            <div className="flex items-center gap-3">
              {/* Muñequito/extra movido aquí (solo en desktop para microdetalle) */}
              <div className="hidden md:block">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white/80 shadow-sm ring-1 ring-black/5">
                  <div className="absolute inset-2">
                    <Image
                      src="/alaf/contacto/extra.jpg"
                      alt="ALAF"
                      fill
                      sizes="64px"
                      className="object-contain"
                      priority={false}
                      quality={85}
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={prev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm backdrop-blur transition hover:bg-white"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-5 w-5 text-slate-800" />
              </button>
              <button
                type="button"
                onClick={next}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm backdrop-blur transition hover:bg-white"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="h-5 w-5 text-slate-800" />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <article
              className="card min-h-[240px] p-6 md:p-8"
              data-reveal
              data-reveal-delay="120"
            >
              <div className="mb-2">
                <div className="font-semibold text-slate-900">{active.name}</div>
                <div className="text-sm text-slate-600">{active.subtitle}</div>
              </div>

              <Stars value={active.rating} />

              <p className="mt-3 leading-relaxed text-slate-800">{active.quote}</p>
            </article>

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
      </div>
    </section>
  );
}

export default Testimonials;
