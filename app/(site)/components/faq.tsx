'use client';
import { useState } from "react";

const items = [
  { q: "¿Qué modalidades ofrecen?", a: "VirtualSchool y Homeschool, ambas con recursos multimedia y docentes." },
  { q: "¿Qué niveles cubren?", a: "Primaria, Secundaria y Preuniversitario (ruta por objetivos y reforzamiento por materias)." },
  { q: "¿Manejan doble calendario escolar?", a: "Sí, Regular e Internacional, facilitando la continuidad académica." },
  { q: "¿Incluyen idiomas?", a: "Inglés como eje central y francés como complemento." },
  { q: "¿Cómo es la metodología?", a: "Aprendizaje activo con videos, simulaciones, podcasts y e-books; evaluaciones periódicas." },
  { q: "¿Cómo realizan el seguimiento?", a: "Diagnóstico inicial, metas por período, simulacros, reportes a familias y tutorías 1:1." },
  { q: "¿Horarios y flexibilidad?", a: "Planificación base y opciones flexibles según disponibilidad del estudiante." },
  { q: "¿Cómo contacto e inscribo?", a: "WhatsApp Atención: +507 6399-3131. También Instagram @alafinternationalacademy o el formulario." }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container-max">
        <h2 className="h2 mb-6">Preguntas frecuentes</h2>

        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`faq-item ${isOpen ? "faq-open" : ""}`}>
                <button
                  className={`faq-head ${isOpen ? "text-slate-900" : "text-slate-800"}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{it.q}</span>
                  <span aria-hidden>{isOpen ? "−" : "+"}</span>
                </button>
                <div className={`faq-body ${isOpen ? "block" : "hidden"}`}>{it.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
