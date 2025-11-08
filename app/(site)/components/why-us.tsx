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
        <h2 className="h2 mb-4">💡 Por qué elegir ALAF</h2>
        <p className="text-slate-700 mb-6">
          En ALAF creemos que cada estudiante tiene su propio ritmo, sus talentos y su historia.
          Por eso, nuestro modelo educativo está diseñado para acompañar, inspirar y guiar, no solo enseñar.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((t, i) => (
            <div key={i} className="flex items-start gap-3 card p-4">
              <span className="check-badge mt-1"><Check className="h-4 w-4" /></span>
              <p className="text-slate-700">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
