import Image from 'next/image';
import { Button } from '@/components/ui/button';


export function Hero() {
return (
<section id="inicio" className="relative h-[70vh] md:h-[80vh] w-full">
<Image src="/alaf/hero.jpg" alt="ALAF hero" fill priority className="object-cover" />
<div className="absolute inset-0 bg-black/50" />
<div className="absolute inset-0 flex items-center">
<div className="container-max">
<div className="max-w-2xl space-y-6 text-white">
<h1 className="h1 font-[family-name:var(--font-libre)]">Impulsa tu rendimiento académico con mentores expertos.</h1>
<p className="text-lg text-gray-100">Planes de estudio personalizados que maximizan tus resultados. TODO: reemplazar por copy de Instagram.</p>
<div className="flex gap-3">
<a href="#contacto"><Button>Contáctenos</Button></a>
<a href="#por-que-nosotros"><Button variant="secondary">Saber más</Button></a>
</div>
</div>
</div>
</div>
</section>
);
}
