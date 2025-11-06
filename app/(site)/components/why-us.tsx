import { Check } from "lucide-react";

const bullets = [
  "Mentores con experiencia comprobada y acompañamiento 1:1.",
  "Planes personalizados según diagnóstico inicial y metas por periodo.",
  "Simulacros y rúbricas de evaluación periódicas.",
  "Recursos digitales: videos, simulaciones, podcasts y e-books interactivos.",
  "Horarios flexibles y modalidad virtual/homeschool.",
  "Idiomas como eje formativo: inglés y francés.",
  // Bloque legal solicitado:
  "ALAF Panamá forma parte de los países adheridos al Convenio de La Haya. Nuestra validación internacional proveniente de Estados Unidos se realiza mediante Notarización y Apostilla, por lo que los estudiantes pueden continuar sus estudios en cualquier parte del mundo."
];

export function WhyUs() {
  return (
    <section id="por-que-nosotros" className="section">
      <div className="container-max">
        <h2 className="h2 mb-6">¿Por qué estudiar en ALAF?</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 bg-white/70 rounded-xl border border-[var(--border)] p-4">
              <Check className="mt-1 text-[var(--brand-teal)]" />
              <span className="text-slate-800">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
