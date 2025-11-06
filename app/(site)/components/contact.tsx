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

  function messagePreview(form: HTMLFormElement) {
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value || '';
    const msg = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';
    return `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${msg}`;
  }

  function openWhatsApp(form: HTMLFormElement) {
    const body = messagePreview(form);
    // Botón SOLO para Atención:
    const wa = `https://wa.me/50763993131?text=${encodeURIComponent(body)}`;
    window.location.href = wa;
  }

  function openMailto(form: HTMLFormElement) {
    const body = messagePreview(form);
    window.location.href = `mailto:TODO-correo@alaf.edu?subject=Contacto%20ALAF&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contacto" className="section">
      <div className="container-max grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="h2 mb-4">Contacto</h2>
          <p className="text-slate-700 mb-4">
            Escríbenos y te responderemos pronto. También puedes contactarnos por{' '}
            <a className="underline text-[var(--brand)]" href="https://www.instagram.com/alafinternationalacademy/" target="_blank" rel="noreferrer">Instagram</a>.
          </p>

          <div className="card p-4 space-y-2">
            <p className="text-slate-800"><strong>Atención:</strong> <a className="underline" href="https://wa.me/50763993131" target="_blank" rel="noreferrer">+507 6399-3131</a></p>
            <p className="text-slate-800"><strong>Admisión:</strong> <a className="underline" href="https://wa.me/50767104100" target="_blank" rel="noreferrer">+507 6710-4100</a></p>
            <p className="text-slate-800"><strong>Administración:</strong> <a className="underline" href="https://wa.me/50766138592" target="_blank" rel="noreferrer">+507 6613-8592</a></p>
            <p className="text-slate-700">Email: <span className="font-mono">TODO: contacto@alaf.edu</span></p>
          </div>
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
            <Input id="phone" name="phone" placeholder="(+507) 6399-3131" defaultValue="+507 6399-3131" />
          </div>
          <div>
            <Label htmlFor="msg">Mensaje</Label>
            <Textarea id="msg" name="message" rows={4} placeholder="Cuéntanos tu objetivo" />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit" className="btn-primary">Enviar (demo)</Button>
            <Button type="button" variant="secondary" onClick={(e) => openWhatsApp(e.currentTarget.form!)}>
              Enviar por WhatsApp
            </Button>
            <Button type="button" variant="ghost" onClick={(e) => openMailto(e.currentTarget.form!)}>
              Enviar por Email
            </Button>
          </div>

          {sent && (
            <div role="status" className="rounded-xl bg-green-600/10 border border-green-500/30 p-3 text-sm text-green-800">
              ✅ Mensaje enviado (demo). Gracias por contactarnos.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
