import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpenCheck, GraduationCap, School } from "lucide-react";

type Service = { icon: React.ElementType; title: string; desc: string; badge?: string };

const services: Service[] = [
  {
    icon: School,
    title: "Primaria",
    desc: "Acompañamiento integral, hábitos de estudio y bases sólidas en lectura, escritura, matemáticas y ciencias."
  },
  {
    icon: BookOpenCheck,
    title: "Secundaria",
    desc: "Plan por objetivos, seguimiento semanal, recursos multimedia y reforzamiento por materias."
  },
  {
    icon: GraduationCap,
    title: "Preuniversitario",
    desc: "Ruta enfocada en exámenes de admisión: diagnóstico, plan de estudio, simulacros y métricas de avance."
  }
];

export function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container-max">
        <h2 className="h2 mb-3">Nuestros servicios</h2>
        <p className="text-slate-600 mb-8">
          Programas sin fricción y orientados a resultados. Elige el nivel y personaliza la intensidad de acuerdo a tu meta.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader>
                <div className="service-icon">
                  <s.icon className="w-6 h-6" />
                </div>
                <CardTitle className="mt-4">{s.title}</CardTitle>
                <CardDescription className="text-slate-600">{s.desc}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
