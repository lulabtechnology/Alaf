"use client";
import { useState } from "react";

export function Contact() {
  const [ok, setOk] = useState(false);

  const wpAttention = "50763993131"; // Atención
  const wpUrl = `https://wa.me/${wpAttention}?text=Hola%20ALAF%2C%20quisiera%20hablar%20con%20un%20asesor%20acad%C3%A9mico.`;

  return (
    <section id="contacto" className="section">
      <div className="container-max grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="h2 mb-3">¡Hablemos!</h2>
          <p className="text-slate-700">
            Queremos conocerte y acompañarte en este nuevo comienzo. Completa el formulario
            o escríbenos por WhatsApp; estaremos encantados de responderte.
          </p>

          <div className="mt-4 text-slate-800 space-y-1">
            <div>📞 <b>Atención:</b> +507 6399-3131</div>
            <div>📞 <b>Admisión:</b> +507 6710-4100</div>
            <div>📞 <b>Administración:</b> +507 6613-8592</div>
            <div>📧 <b>Correo:</b> <a className="underline" href="mailto:admisiones@alaf.edu">admisiones@alaf.edu</a></div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setOk(true); setTimeout(() => setOk(false), 4000); }}
          className="card p-4"
        >
          <div className="grid gap-3">
            <label className="text-sm">Nombre
              <input placeholder="Tu nombre" required />
            </label>
            <label className="text-sm">Email
              <input type="email" placeholder="tu@email.com" required />
            </label>
            <label className="text-sm">Teléfono
              <input placeholder="+507 ..." />
            </label>
            <label className="text-sm">Mensaje
              <textarea rows={5} placeholder="Cuéntanos tu objetivo" />
            </label>

            <div className="flex gap-3 pt-2">
              <button className="btn btn-primary" type="submit">✨ Enviar mensaje</button>
              <a href={wpUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                💬 Chatear ahora por WhatsApp
              </a>
            </div>

            {ok && (
              <div className="text-green-700 bg-green-50 border border-green-200 rounded-xl px-3 py-2">
                ¡Mensaje enviado (demo)!
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
