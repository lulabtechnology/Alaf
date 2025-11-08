// app/(site)/components/contact.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="section">
      <div className="container-max">
        <h2 className="h2 mb-6">Hablemos</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* datos */}
          <div className="card p-5">
            <ul className="space-y-2 text-slate-700">
              <li><strong>Atención:</strong> +507 6399-3131</li>
              <li><strong>Admisión:</strong> +507 6710-4100</li>
              <li><strong>Administración:</strong> +507 6613-8592</li>
              <li><strong>Correo:</strong> admisiones@alaf.edu</li>
            </ul>
            <a
              href="https://wa.me/50763993131"
              target="_blank"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white"
            >
              Chatear ahora por WhatsApp
            </a>
          </div>

          {/* formulario */}
          <form
            className="card md:col-span-2 p-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 2200);
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border px-4 py-3" placeholder="Tu nombre" />
              <input className="rounded-xl border px-4 py-3" placeholder="correo@ejemplo.com" type="email" />
              <input className="rounded-xl border px-4 py-3" placeholder="+507 ..." />
              <textarea className="rounded-xl border px-4 py-3 md:col-span-2" rows={4} placeholder="Cuéntanos tu caso" />
            </div>
            <div className="mt-4 flex gap-3">
              <button className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">
                ✉️ Enviar mensaje
              </button>
              {sent && <span className="self-center text-sm text-emerald-600">Mensaje enviado ✓</span>}
            </div>
          </form>
        </div>

        {/* imagen extra que SIEMPRE se ajusta */}
        <div className="mt-6 overflow-hidden rounded-3xl">
          <div className="relative aspect-[16/7] w-full">
            <Image
              src="/alaf/contacto/extra.jpg"
              alt="ALAF – acompañamiento real"
              fill
              sizes="100vw"
              className="object-cover"
              priority={false}
              quality={88}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
