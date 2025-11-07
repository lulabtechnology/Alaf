import { Clock, PiggyBank, LineChart } from "lucide-react";

const items = [
  {
    icon: PiggyBank,
    title: "Invierte donde impacta",
    desc: "Asignamos esfuerzo a lo que trae resultados: diagnóstico, plan y métrica."
  },
  {
    icon: Clock,
    title: "Ahorra tiempo",
    desc: "Rutas claras y sesiones efectivas para avanzar sin fricción."
  },
  {
    icon: LineChart,
    title: "Mide el progreso",
    desc: "Simulacros y reportes para decidir con datos."
  }
];

export function PriorizaTuDinero() {
  return (
    <section className="section" aria-labelledby="prioriza-title">
      <div className="container-max">
        <h2 id="prioriza-title" className="h2 mb-8">Prioriza tu dinero</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="card p-6">
              <div className="feature-icon mb-4">
                <it.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{it.title}</h3>
              <p className="text-slate-600 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
