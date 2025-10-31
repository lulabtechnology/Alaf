'use client';
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';


const data = [
{ name: 'María Fernanda R.', program: 'Ingreso U. Nacional', rating: 5, text: 'TODO: Testimonio real desde Instagram o cliente.' },
{ name: 'José A.', program: 'Refuerzo Matemática', rating: 5, text: 'El seguimiento semanal marcó la diferencia.' },
{ name: 'Daniela C.', program: 'Bootcamp Intensivo', rating: 4, text: 'Me ayudó a organizar mi estudio y mejorar mi puntaje.' },
{ name: 'Luis G.', program: 'Inglés', rating: 5, text: 'Clases prácticas y métricas claras.' }
];


export function Testimonials() {
const [index, setIndex] = useState(0);
useEffect(() => {
const id = setInterval(() => setIndex((i) => (i + 1) % data.length), 5000);
return () => clearInterval(id);
}, []);


return (
<section id="testimonios" className="section">
<div className="container-max">
<h2 className="h2 mb-6">Testimonios</h2>
<div className="card p-6">
<div className="flex items-center gap-2 mb-2">
{Array.from({ length: 5 }).map((_, i) => (
<Star key={i} className={`w-5 h-5 ${i < data[index].rating ? 'fill-white' : 'opacity-30'}`} />
))}
</div>
<p className="text-lg mb-2">“{data[index].text}”</p>
<p className="muted">{data[index].name} · {data[index].program}</p>
<div className="mt-4 text-sm text-gray-400">Desliza para ver más (auto-avanza cada 5s)</div>
<div className="mt-3 flex gap-2">
{data.map((_, i) => (
<button key={i} onClick={() => setIndex(i)} aria-label={`Ir al testimonio ${i+1}`} className={`h-2 w-8 rounded ${i===index ? 'bg-white' : 'bg-white/20'}`} />
))}
</div>
</div>
</div>
</section>
);
}
