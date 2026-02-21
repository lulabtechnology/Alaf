// RUTA: /app/(site)/components/why-us.tsx
import { Check } from "lucide-react";

const items = [
  "Educación 100% virtual y homeschool con guía personalizada.",
  "Horarios flexibles para adaptarse a la rutina familiar.",
  "Acompañamiento docente y emocional permanente.",
  "Inglés desde inicial y un programa progresivo de francés.",
  "Doble calendario: Panamá (marzo–diciembre) y calendario internacional (agosto–junio).",
  "Certificaciones válidas a nivel nacional e internacional (notarización y apostilla).",
];

export function WhyUs() {
  return (
    <section id="por-que-nosotros" className="section">
      <div className="container-max">
        <div className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5 md:p-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="max-w-prose" data-reveal data-reveal-delay="0">
              <h2 className="h2 mb-4">💡 Por qué elegir ALAF</h2>
              <p className="mb-6 text-slate-700">
                En ALAF creemos que cada estudiante tiene su propio ritmo, sus talentos y su historia.
                Por eso, nuestro modelo educativo está diseñado para acompañar, inspirar y guiar, no solo enseñar.
              </p>
            </div>

            <div className="grid gap-4">
              {items.map((t, i) => (
                <div
                  key={i}
                  className="card flex items-start gap-3 p-4 transition-transform duration-200 hover:-translate-y-0.5"
                  data-reveal
                  data-reveal-delay={String(80 + i * 60)}
                >
                  <span className="check-badge mt-1">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-slate-700">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
