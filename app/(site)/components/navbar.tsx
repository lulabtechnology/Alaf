'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';


const nav = [
{ href: '#inicio', label: 'Inicio' },
{ href: '#por-que-nosotros', label: '¿Por qué nosotros?' },
{ href: '#acerca', label: 'Acerca de' },
{ href: '#servicios', label: 'Servicios' },
{ href: '#testimonios', label: 'Testimonios' },
{ href: '#contacto', label: 'Contacto' },
];


export function Navbar() {
const [open, setOpen] = useState(false);
return (
<header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-base-bg/70">
<div className="container-max flex items-center justify-between py-3">
<Link href="#inicio" className="flex items-center gap-3">
<Image src="/alaf/logo.png" alt="ALAF logo" width={44} height={44} className="rounded" />
<span className="font-semibold">ALAF International Academy</span>
</Link>
<nav className="hidden md:flex items-center gap-6">
{nav.map((n) => (
<a key={n.href} href={n.href} className="text-sm text-gray-200 hover:text-white">{n.label}</a>
))}
<a href="#contacto"><Button>Contáctenos</Button></a>
</nav>
<button className="md:hidden" aria-label="Abrir menú" onClick={() => setOpen(!open)}>
<Menu />
</button>
</div>
{open && (
<div className="md:hidden border-t border-white/10">
<div className="container-max py-3 flex flex-col gap-3">
{nav.map((n) => (
<a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm">{n.label}</a>
))}
<a href="#contacto" onClick={() => setOpen(false)}><Button className="w-full">Contáctenos</Button></a>
</div>
</div>
)}
</header>
);
}
