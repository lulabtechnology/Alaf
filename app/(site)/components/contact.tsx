"use client";
import { useState } from "react";
import { Instagram, Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import Image from "next/image";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="section">
      <div className="container-max">
        <h2 className="h2 mb-2">Hablemos</h2>
        <p className="muted mb-6">
          Queremos conocerte y acompañarte en este nuevo comienzo. Completa el formulario o escríbenos por WhatsApp; estaremos encantados de responderte.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Datos */}
          <div className="card p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-slate-700">
              <Phone className="h-5 w-5" /> <span><b>Atención</b>: +507 6399-3131</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Phone className="h-5 w-5" /> <span><b>Admisión</b>: +507 6710-4100</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Phone className="h-5 w-5" /> <span><b>Administración</b>: +507 6613-8592</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Mail className="h-5 w-5" /> <span>admisiones@alaf.edu</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Mail className="h-5 w-5" /> <span>info@alafinternationalacademy.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Instagram className="h-5 w-5" /> <span>@alafinternationalacademy</span>
            </div>
            <div className="flex items-start gap-2 text-slate-700">
              <MapPin className="h-5 w-5 mt-0.5" />
              <span><b>Ubicación:</b> Panamá, Punta Pacífica, Grand Plaza</span>
            </div>

            <a
              href="https://wa.me/50763993131"
              className="btn btn-primary mt-2 inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Chatear ahora por WhatsApp
            </a>
          </div>

          {/* Formulario */}
          <div className="md:col-span-2 card p-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 3000);
              }}
              className="grid md:grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input placeholder="Tu nombre" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" placeholder="correo@ejemplo.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Teléfono</label>
                <input placeholder="+507 ..." required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Mensaje</label>
                <textarea rows={4} placeholder="Cuéntanos sobre tu caso" />
              </div>
              <div className="md:col-span-2">
                <button className="btn btn-primary inline-flex items-center gap-2">
                  <Send className="h-5 w-5" /> ✨ Enviar mensaje
                </button>
                {sent && (
                  <span className="ml-3 text-green-700">Mensaje enviado ✅</span>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Imagen adicional bajo “Hablemos!” */}
        <div className="mt-8">
          <div className="relative h-[240px] md:h-[340px] rounded-2xl overflow-hidden card">
            <Image
              src="/alaf/contacto/extra.jpg"   // SUBIR esta imagen
              alt="ALAF – comunidad y espacios de aprendizaje"
              fill
              className="object-cover"
              quality={90}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
