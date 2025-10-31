'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';


export function Contact() {
const [sent, setSent] = useState(false);


function onSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
setSent(true);
setTimeout(() => setSent(false), 4000);
}


return (
<section id="contacto" className="section">
<div className="container-max grid md:grid-cols-2 gap-8 items-start">
<div>
<h2 className="h2 mb-4">Contacto</h2>
<p className="text-gray-200 mb-6">Escríbenos y te responderemos pronto. También puedes contactarnos por <a className="underline" href="https://www.instagram.com/alafinternationalacademy/" target="_blank" rel="noreferrer">Instagram</a> o WhatsApp: <span className="font-mono">TODO: +507-XXXX-XXXX</span>.</p>
<ul className="text-gray-300 space-y-1">
<li>Email: <span className="font-mono">TODO: contacto@alaf.edu</span></li>
<li>WhatsApp: <span className="font-mono">TODO: +507-XXXX-XXXX</span></li>
<li>Instagram: <span className="font-mono">@alafinternationalacademy</span></li>
</ul>
</div>
<form onSubmit={onSubmit} className="card p-6 space-y-4">
<div>
<Label htmlFor="name">Nombre</Label>
<Input id="name" name="name" placeholder="Tu nombre" required />
</div>
<div>
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" name="email" placeholder="tu@email.com" required />
</div>
<div>
<Label htmlFor="phone">Teléfono</Label>
<Input id="phone" name="phone" placeholder="(+507) 6000-0000" />
</div>
<div>
<Label htmlFor="msg">Mensaje</Label>
<Textarea id="msg" name="message" rows={4} placeholder="Cuéntanos tu objetivo" />
</div>
<Button type="submit">Enviar mensaje</Button>
{sent && (
<div role="status" className="rounded-xl bg-green-600/20 border border-green-500/40 p-3 text-sm">✅ Mensaje enviado (demo). Gracias por contactarnos.</div>
)}
</form>
</div>
</section>
);
}
