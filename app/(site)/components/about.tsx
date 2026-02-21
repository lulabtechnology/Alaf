import Image from "next/image";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-max">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="max-w-prose">
            <h2 className="h2 mb-4">Acerca de ALAF</h2>
            <h3 className="mb-2 text-lg font-semibold">💡 Aprender para la vida real</h3>
            <p className="leading-relaxed text-slate-700">
              En ALAF International Academy preparamos a nuestros estudiantes para el mundo actual, desarrollando no solo conocimientos académicos, sino también habilidades esenciales para el futuro.
              Desde los primeros años, integramos educación financiera, pensamiento lógico y programación, fomentando la creatividad, la toma de decisiones y la mentalidad emprendedora.
              Nuestros jóvenes aprenden a planificar, crear y ejecutar proyectos reales de emprendimiento, fortaleciendo su autonomía, liderazgo y confianza.
              Aquí no solo estudiamos: formamos ciudadanos digitales capaces de construir su propio camino.
            </p>
          </div>

          {/* Imagen lateral */}
          <div className="relative overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5">
            <div className="relative h-[260px] md:h-[360px]">
              <Image
                src="/alaf/about/side.jpg"
                alt="Familias aprendiendo con ALAF"
                fill
                sizes="(min-width: 768px) 520px, 100vw"
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Imagen de cierre grande justo ANTES de “Por qué elegir ALAF” */}
        <div className="mt-10">
          <div className="relative overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5">
            <div className="relative h-[300px] md:h-[420px]">
              <Image
                src="/alaf/about/familias.jpg"
                alt="Familias y estudiantes en ALAF"
                fill
                sizes="(min-width: 768px) 1280px, 100vw"
                className="object-cover md:[object-position:center_40%]"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
