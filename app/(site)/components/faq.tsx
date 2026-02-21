import { Plus } from "lucide-react";

export function FAQ() {
  const items = [
    {
      q: "¿Qué diferencia a ALAF de otras escuelas virtuales?",
      a: "Nuestro acompañamiento humano. Detrás de cada estudiante hay un equipo real que guía, escucha y celebra cada avance.",
    },
    {
      q: "¿Necesito experiencia previa en homeschool?",
      a: "No. Te guiamos paso a paso con recursos, tutorías y orientación para padres.",
    },
    {
      q: "¿Ofrecen doble calendario?",
      a: "Sí. Puedes elegir entre el calendario panameño o el internacional, según tus necesidades.",
    },
    {
      q: "¿Cómo se evalúa el aprendizaje?",
      a: "Con diagnósticos, proyectos, rúbricas y reportes que muestran progreso real, no solo calificaciones.",
    },
    {
      q: "¿Los títulos son válidos?",
      a: "Sí. Los certificados pueden ser notarizados y apostillados para estudios en el extranjero.",
    },
  ];

  return (
    <section id="faq" className="section">
      <div className="container-max">
        <div className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5 md:p-10">
          <h2 className="h2 mb-6">Preguntas frecuentes</h2>

          <div className="space-y-3">
            {items.map((it, idx) => (
              <details
                key={idx}
                className="faq-item group bg-white/90 transition-colors open:bg-white"
              >
                <summary className="faq-head">
                  <span className="font-medium text-slate-900">{it.q}</span>
                  <span
                    className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <div className="faq-body">{it.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
