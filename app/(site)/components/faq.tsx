import { Accordion } from '@/components/ui/accordion';

const items = [
  {
    q: '¿Qué modalidades ofrecen?',
    a: 'Trabajamos con VirtualSchool y Homeschool. Ambas integran recursos multimedia e interacción con docentes, según el plan elegido.'
  },
  {
    q: '¿Qué niveles cubren?',
    a: 'Preescolar, Primaria y Secundaria. La ruta y los objetivos se adaptan a la etapa del estudiante.'
  },
  {
    q: '¿Manejan doble calendario escolar?',
    a: 'Sí. Contamos con doble calendario: Regular e Internacional. Esto facilita la continuidad académica y la movilidad de las familias.'
  },
  {
    q: '¿Incluyen idiomas?',
    a: 'El inglés es un eje central del programa y también contamos con aprendizaje de francés como complemento.'
  },
  {
    q: '¿Cómo es la metodología?',
    a: 'Aprendizaje activo con videos, simulaciones, podcasts, e-books interactivos y proyectos. Se combinan clases guiadas, práctica y evaluaciones periódicas.'
  },
  {
    q: '¿Cómo realizan el seguimiento?',
    a: 'Diagnóstico inicial, metas por períodos, simulacros y reportes de progreso para estudiantes y familias. Ofrecemos acompañamiento 1:1 cuando se requiere.'
  },
  {
    q: '¿Horarios y flexibilidad?',
    a: 'Proponemos una planificación base y opciones flexibles por familia. Las sesiones y materiales se ajustan a la disponibilidad del estudiante.'
  },
  {
    q: '¿Cómo puedo contactarlos o inscribirme?',
    a: 'Escríbenos por WhatsApp al +507 6399-3131 o por Instagram @alafinternationalacademy. También puedes usar el formulario de la web en la sección Contacto.'
  }
];

export function FAQ() {
  return (
    <section className="section">
      <div className="container-max">
        <h2 className="h2 mb-6">Preguntas frecuentes</h2>
        <Accordion items={items} />
      </div>
    </section>
  );
}
