import { Accordion } from '@/components/ui/accordion';


const items = [
{ q: '¿Cómo me inscribo?', a: 'TODO: Detallar proceso de matrícula y requisitos.' },
{ q: '¿Qué programas ofrecen?', a: 'TODO: Lista de programas y modalidades.' },
{ q: '¿Horarios?', a: 'TODO: Horarios disponibles y flexibilidad.' },
{ q: '¿Modalidad virtual/presencial?', a: 'TODO: Explicar opciones.' },
{ q: '¿Formas de pago?', a: 'TODO: Transferencia, Yappy, etc.' },
{ q: '¿Políticas de cancelación?', a: 'TODO: Indicar términos.' }
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
