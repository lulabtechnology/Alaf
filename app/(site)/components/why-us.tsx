import { Check } from "lucide-react";
import Image from "next/image";

const bullets = [
  "Educación 100% virtual y homeschool con guía personalizada.",
  "Horarios flexibles para adaptarse a la rutina familiar.",
  "Acompañamiento docente y emocional permanente.",
  "Inglés desde inicial y un programa progresivo de francés.",
  "Doble calendario: Panamá (marzo–diciembre) y calendario internacional (agosto–junio).",
  "Certificaciones válidas a nivel nacional e internacional (notarización y apostilla).",
];

export function WhyUs() {
  return (
    <section id="por-que-nosotros" className="section">
      <div className="container-max">
        <h2 className="h2 mb-2">¿Por qué elegir ALAF?</h2>
        <p className="muted mb-8 max-w-3xl">
          En ALAF creemos que cada estudiante tiene su propio ritmo, sus talentos y su historia.
          Por eso, nuestro modelo educativo está diseñado para acompañar, inspirar y guiar, no solo enseñar.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/90 rounded-xl border border-[var(--border)] p-4">
              <span className="check-badge mt-0.5">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-slate-800">{b}</span>
            </div>
          ))}
        </div>

        {/* Bloque extra con el texto legal/validación internacional */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-white/90 rounded-xl border border-[var(--border)] p-4">
            <p className="text-slate-800">
              <b>ALAF Panamá</b> forma parte de los países adheridos al <b>Convenio de La Haya</b>.
              Nuestra validación internacional proveniente de Estados Unidos se realiza mediante
              <b> Notarización y Apostilla</b>, por lo que los estudiantes pueden continuar sus
              estudios en cualquier parte del mundo.
            </p>
          </div>

          {/* ESPACIO CON FOTO (según tu pedido) */}
          <div className="relative rounded-xl overflow-hidden border border-[var(--border)] bg-white/60">
            <Image
              src="/alaf/por-que/side.jpg"
              alt="Familia estudiando en casa con ALAF"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Historias que inspiran */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">Historias que inspiran</h3>
          <p className="text-slate-700 mb-4">
            Cada familia que confía en ALAF tiene una historia que nos llena de orgullo.
            Estudiantes que mejoraron su desempeño, encontraron motivación y volvieron a disfrutar el aprendizaje desde casa.
          </p>
          <ul className="space-y-2 text-slate-800">
            <li>“Mi hija volvió a sonreír al estudiar. Ahora aprende sin estrés y con amor.” — <b>María G.</b>, mamá homeschool ALAF.</li>
            <li>“En ALAF encontré apoyo y estructura para organizar mi aprendizaje online.” — <b>Diego</b>, estudiante de secundaria.</li>
          </ul>
          <a href="#testimonios" className="btn btn-secondary mt-4">💖 Conoce más testimonios</a>
        </div>
      </div>
    </section>
  );
}
