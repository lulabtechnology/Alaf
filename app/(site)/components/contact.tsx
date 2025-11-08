// app/(site)/components/contact.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Contacto ALAF
 * - WhatsApp (Atención)
 * - Correos clicables (mailto)
 * - Iconos con enlaces a Instagram y TikTok
 * - Imagen final que SIEMPRE se ajusta al marco
 */
export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="section">
      <div className="container-max">
        <h2 className="h2 mb-6">Hablemos</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Columna izquierda: datos y redes */}
          <div className="card p-5">
            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>Atención:</strong>{" "}
                <a href="https://wa.me/50763993131" className="underline">
                  +507 6399-3131
                </a>
              </li>
              <li>
                <strong>Admisión:</strong>{" "}
                <a href="https://wa.me/50767104100" className="underline">
                  +507 6710-4100
                </a>
              </li>
              <li>
                <strong>Administración:</strong>{" "}
                <a href="https://wa.me/50766138592" className="underline">
                  +507 6613-8592
                </a>
              </li>
              <li>
                <strong>Correo:</strong>{" "}
                <a
                  href="mailto:info@alafinternationalacademy.com"
                  className="underline"
                >
                  info@alafinternationalacademy.com
                </a>
              </li>
            </ul>

            {/* Redes */}
            <div className="mt-4 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/alafinternationalacademy/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de ALAF"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50"
                title="Instagram"
              >
                {/* Icono Instagram (SVG inline, liviano) */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-slate-700"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zM17.8 6.2a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@alafiacademy"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok de ALAF"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50"
                title="TikTok"
              >
                {/* Icono TikTok (SVG inline) */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                  className="text-slate-700"
                >
                  <path d="M34.6 13.7c2.4 1.9 5.1 3 8.2 3.1v6.4c-3.1.1-6.1-.8-8.9-2.5v10.8c0 6.6-5.4 12-12 12s-12-5.4-12-12 5.4-12 12-12c1 0 2 .1 3 .4v6.8a6 6 0 10-3 .8v7.6c-7.4 0-13.4-6-13.4-13.4S14.5 8.9 21.9 8.9c4.6 0 8.6 2.3 11 4.8l1.7 0z" />
                </svg>
              </a>
            </div>

            {/* Botón WhatsApp principal (Atención) */}
            <a
              href="https://wa.me/50763993131"
              target="_blank"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white"
            >
              Chatear ahora por WhatsApp
            </a>
          </div>

          {/* Columna derecha: formulario (demo) */}
          <form
            className="card md:col-span-2 p-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 2200);
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-xl border px-4 py-3"
                placeholder="Tu nombre"
                name="name"
                required
              />
              <input
                className="rounded-xl border px-4 py-3"
                placeholder="correo@ejemplo.com"
                type="email"
                name="email"
                required
              />
              <input
                className="rounded-xl border px-4 py-3"
                placeholder="+507 ..."
                name="phone"
              />
              <textarea
                className="rounded-xl border px-4 py-3 md:col-span-2"
                rows={4}
                placeholder="Cuéntanos tu caso"
                name="message"
              />
            </div>
            <div className="mt-4 flex gap-3">
              <button
                type="submit"
                className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white"
              >
                ✉️ Enviar mensaje
              </button>
              {sent && (
                <span className="self-center text-sm text-emerald-600">
                  Mensaje enviado ✓
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Imagen extra que SIEMPRE se ajusta */}
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
