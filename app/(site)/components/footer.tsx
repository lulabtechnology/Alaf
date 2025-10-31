import Image from 'next/image';


const links = [
{ href: '#inicio', label: 'Inicio' },
{ href: '#por-que-nosotros', label: '¿Por qué nosotros?' },
{ href: '#acerca', label: 'Acerca de' },
{ href: '#servicios', label: 'Servicios' },
{ href: '#testimonios', label: 'Testimonios' },
{ href: '#contacto', label: 'Contacto' }
];


export function Footer() {
return (
<footer className="mt-16 border-t border-white/10 bg-black/40">
<div className="container-max py-8 grid md:grid-cols-3 gap-8 items-center">
<div className="flex items-center gap-3">
<Image src="/alaf/logo.png" alt="ALAF logo" width={36} height={36} className="rounded" />
<span className="text-sm">© {new Date().getFullYear()} ALAF International Academy. Todos los derechos reservados.</span>
</div>
<nav className="flex flex-wrap gap-4 text-sm">
{links.map(l => <a key={l.href} href={l.href} className="hover:underline">{l.label}</a>)}
</nav>
<div className="text-sm text-right">
<a className="underline" href="https://www.instagram.com/alafinternationalacademy/" target="_blank" rel="noreferrer">Instagram</a>
</div>
</div>
</footer>
);
}
