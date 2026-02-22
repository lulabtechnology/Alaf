// RUTA: /app/(site)/components/benefits.tsx
import { Target, Clock, LineChart } from "lucide-react";

export function Benefits() {
  return (
    <section
      id="benefits"
      className="relative py-10 md:py-14"
    >
      <div className="container-max">
        <div
          className="rounded-3xl border border-slate-900/5 bg-white/60 p-6 shadow-sm backdrop-blur md:p-10"
          data-reveal
          data-reveal-delay="0"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="h2">🌟 Prioriza tu aprendizaje</h2>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div
              className="card p-6 transition-transform duration-200 hover:-translate-y-1"
              data-reveal
              data-reveal-delay="80"
            >
              <div className="feature-icon mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">🎯 Aprende con propósito</h3>
              <p className="text-slate-600">
                En ALAF cada actividad tiene sentido. Diseñamos experiencias de aprendizaje que conectan con la vida real, desarrollando habilidades para el presente y el futuro.
              </p>
            </div>

            <div
              className="card p-6 transition-transform duration-200 hover:-translate-y-1"
              data-reveal
              data-reveal-delay="160"
            >
              <div className="feature-icon mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">⏰ Aprovecha tu tiempo</h3>
              <p className="text-slate-600">
                Nuestros programas se adaptan a ti. Ya sea en modalidad Virtual School o Homeschool, aprenderás a tu propio ritmo con guías claras, horarios flexibles y acompañamiento constante.
              </p>
            </div>

            <div
              className="card p-6 transition-transform duration-200 hover:-translate-y-1"
              data-reveal
              data-reveal-delay="240"
            >
              <div className="feature-icon mb-4">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">💰 Optimiza tus recursos</h3>
              <p className="text-slate-600">
                En ALAF estudias desde casa, evitando gastos de transporte y reduciendo costos excesivos en libros. Todo el material se encuentra disponible en formato digital, accesible y actualizado, para que inviertas en lo más importante una educación moderna y de calidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
