import Image from "next/image";

export function About() {
  return (
    <section id="acerca" className="section">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="h2 mb-4">Acerca de ALAF</h2>
            <h3 className="text-lg font-semibold mb-2">💡 Aprender para la vida real</h3>
            <p className="text-slate-700 leading-relaxed">
              En ALAF International Academy preparamos a nuestros estudiantes para el mundo actual, desarrollando no solo conocimientos académicos, sino también habilidades esenciales para el futuro.
              Desde los primeros años, integramos educación financiera, pensamiento lógico y programación, fomentando la creatividad, la toma de decisiones y la mentalidad emprendedora.
              Nuestros jóvenes aprenden a planificar, crear y ejecutar proyectos reales de emprendimiento, fortaleciendo su autonomía, liderazgo y confianza.
              Aquí no solo estudiamos: formamos ciudadanos digitales capaces de construir su propio camino.
            </p>
          </div>

          {/* Imagen lateral (si quieres mostrar una en paralelo) */}
          <div className="relative h-[260px] md:h-[360px] rounded-2xl overflow-hidden card">
            <Image
              src="/alaf/about/side.jpg" // súbela si quieres usarla; si no, quedará espacio elegante
              alt="Familias aprendiendo con ALAF"
              fill
              className="object-cover"
              quality={90}
              unoptimized
            />
          </div>
        </div>

        {/* Imagen de cierre grande justo ANTES de “Por qué elegir ALAF” */}
        <div className="mt-10">
          <div className="relative h-[300px] md:h-[420px] rounded-2xl overflow-hidden card">
            <Image
              src="/alaf/about/familias.jpg"  // SUBIR: 2560x1440 ideal
              alt="Familias y estudiantes en ALAF"
              fill
              className="object-cover md:[object-position:center_40%]"
              quality={90}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
