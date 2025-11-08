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
        <h2 className="h2 mb-6">Preguntas frecuentes</h2>
        <div className="space-y-3">
          {items.map((it, idx) => (
            <details key={idx} className="faq-item bg-white/90">
              <summary className="faq-head">
                <span className="font-medium text-slate-900">{it.q}</span>
              </summary>
              <div className="faq-body">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
