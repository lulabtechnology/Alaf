import { Check } from 'lucide-react';


const bullets = [
'Mentores con experiencia comprobada. TODO: reemplazar con logros reales.',
'Planes personalizados según diagnóstico inicial.',
'Simulacros y rúbricas de evaluación periódicas.',
'Seguimiento 1:1 y reportes a familias (si aplica).',
'Horarios flexibles y modalidad presencial/virtual.',
'Recursos propios y banco de preguntas. TODO:',
'Acompañamiento hasta el día del examen.',
'Comunidad de apoyo y sesiones de refuerzo.'
];


export function WhyUs() {
return (
<section id="por-que-nosotros" className="section">
<div className="container-max">
<h2 className="h2 mb-6">¿Por qué estudiar en ALAF?</h2>
<ul className="grid md:grid-cols-2 gap-4">
{bullets.map((b, i) => (
<li key={i} className="flex items-start gap-3">
<Check className="mt-1" /> <span>{b}</span>
</li>
))}
</ul>
</div>
</section>
);
}
