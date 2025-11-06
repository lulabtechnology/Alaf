'use client';
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

type Testimonial = {
  name: string;
  program: string;
  rating: number;
  text: string;
};

const data: Testimonial[] = [
  {
    name: 'Mónica Mock',
    program: 'Madre de mellizas · Programa académico',
    rating: 5,
    text:
      'No puedo sentirme más satisfecha con la educación recibida por mis mellizas. Me encanta porque era lo que buscaba, una educación de primer mundo.'
  },
  {
    name: 'Julia Navarro',
    program: 'Madre de estudiante · Idiomas',
    rating: 5,
    text:
      'Para nosotros era imprescindible que aprendiera inglés y en estos momentos hasta francés está aprendiendo de una manera divertida.'
  },
  { name: 'Luis G.', program: 'Bootcamp de refuerzo', rating: 5, text: 'El seguimiento semanal y los simulacros me ayudaron a organizar el estudio y subir mi puntaje.' }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % data.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonios" className="section">
      <div className="container-max">
        <h2 className="h2 mb-6">Testimonios</h2>

        <div className="card p-6">
          <div className="flex items-center gap-2 mb-2" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < data[index].rating ? 'fill-[var(--brand)] text-[var(--brand)]' : 'text-slate-300'}`} />
            ))}
          </div>

          <p className="text-lg mb-2 text-slate-800">“{data[index].text}”</p>
          <p className="muted">{data[index].name} · {data[index].program}</p>

          <div className="mt-4 text-sm text-slate-500">Desliza los puntos para ver más (auto-avanza cada 5s)</div>

          <div className="mt-3 flex gap-2">
            {data.map((_, i) => {
              const active = i === index;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  aria-current={active ? 'true' : 'false'}
                  className={[
                    "h-2.5 w-8 rounded-full border transition",
                    active
                      ? "bg-[var(--brand)] border-[color:var(--brand)]"
                      : "bg-slate-300 border-slate-400 hover:bg-slate-400"
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
