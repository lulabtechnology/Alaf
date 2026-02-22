// RUTA: /app/(site)/components/why-us.tsx
import Image from "next/image";
import { Check } from "lucide-react";
import { MediaBlock } from "./media-block";

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
        <div className="rounded-3xl border border-slate-900/5 bg-white/60 p-6 shadow-sm backdrop-blur md:p-10">
          <MediaBlock
            left={
              <div
                className="relative overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5"
                data-reveal
                data-reveal-delay="0"
              >
                <div className="relative aspect-[4/3] w-full md:aspect-[16/11]">
                  <Image
                    src="/alaf/servicios/serv-2.jpg"
                    alt="Acompañamiento y aprendizaje en ALAF"
                    fill
                    sizes="(min-width: 1024px) 560px, (min-width: 768px) 520px, 100vw"
                    className="object-cover [object-position:center_35%]"
                    quality={88}
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/5 to-slate-900/20" />
                </div>
              </div>
            }
            right={
              <div>
                <div className="max-w-prose" data-reveal data-reveal-delay="80">
                  <h2 className="h2 mb-4">💡 Por qué elegir ALAF</h2>
                  <p className="mb-6 text-slate-700">
                    En ALAF creemos que cada estudiante tiene su propio ritmo, sus talentos y su historia.
                    Por eso, nuestro modelo educativo está diseñado para acompañar, inspirar y guiar, no solo enseñar.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {items.map((t, i) => (
                    <div
                      key={i}
                      className="card flex items-start gap-3 p-4 transition-transform duration-200 hover:-translate-y-0.5"
                      data-reveal
                      data-reveal-delay={String(120 + i * 60)}
                    >
                      <span className="check-badge mt-1">
                        <Check className="h-4 w-4" />
                      </span>
                      <p className="text-slate-700">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
