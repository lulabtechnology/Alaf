import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    img: "/alaf/servicios/serv-1.jpg",
    title: "Programa de admisión universitaria",
    desc: "Diagnóstico, plan de estudio y simulacros enfocados en tu examen objetivo."
  },
  {
    img: "/alaf/servicios/serv-2.jpg",
    title: "Mentorías de refuerzo por materias",
    desc: "Matemática, Lectura, Ciencias, Inglés… sesiones 1:1 o grupales con seguimiento."
  },
  {
    img: "/alaf/servicios/serv-3.jpg",
    title: "Preparación intensiva (bootcamps)",
    desc: "Rutas aceleradas con metas semanales y métricas de progreso."
  }
];

export function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container-max">
        <h2 className="h2 mb-8">Nuestros servicios</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader>
                <div className="relative w-full h-44 overflow-hidden rounded-xl">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
                <CardTitle className="mt-4">{s.title}</CardTitle>
                {/* forzamos color legible */}
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
