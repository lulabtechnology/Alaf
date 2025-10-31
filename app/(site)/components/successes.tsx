import Image from 'next/image';


const items = [
{ src: '/alaf/exito-1.jpg', caption: 'Admisión lograda' },
{ src: '/alaf/exito-2.jpg', caption: 'Mejora de puntaje' },
{ src: '/alaf/exito-3.jpg', caption: 'Beca obtenida' }
];


export function Successes() {
return (
<section className="section">
<div className="container-max">
<h2 className="h2 mb-8">Éxitos académicos</h2>
<div className="grid md:grid-cols-3 gap-6">
{items.map((it, i) => (
<figure key={i} className="card overflow-hidden">
<div className="relative w-full h-56">
<Image src={it.src} alt={it.caption} fill className="object-cover" />
</div>
<figcaption className="p-4 text-center text-gray-200">{it.caption}</figcaption>
</figure>
))}
</div>
</div>
</section>
);
}
