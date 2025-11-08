import { Check } from "lucide-react";

const bullets = [
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
        <h2 className="h2 mb-2">¿Por qué elegir ALAF?</h2>
        <p className="muted mb-8 max-w-3xl">
          En ALAF creemos que cada estudiante tiene su propio ritmo, sus talentos y su historia.
          Por eso, nuestro modelo educativo está diseñado para acompañar, inspirar y guiar, no solo enseñar.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/90 rounded-xl border border-[var(--border)] p-4">
              <span className="check-badge mt-0.5">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-slate-800">{b}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white/90 rounded-xl border border-[var(--border)] p-4">
          <p className="text-slate-800">
            <b>ALAF Panamá</b> forma parte de los países adheridos al <b>Convenio de La Haya</b>.
            Nuestra validación internacional proveniente de Estados Unidos se realiza mediante
            <b> Notarización y Apostilla</b>, por lo que los estudiantes pueden continuar sus
            estudios en cualquier parte del mundo.
          </p>
        </div>
      </div>
    </section>
  );
}
