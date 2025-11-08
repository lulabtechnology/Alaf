import Image from "next/image";

export function About() {
  return (
    <section id="acerca" className="section">
      <div className="container-max grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="h2 mb-6">Acerca de ALAF</h2>
          <p className="text-slate-800">
            En <b>ALAF International Academy</b> acompañamos a cada familia con un modelo flexible y actual:
            <i> Virtual School y Homeschool</i>. Integramos contenidos multimedia —videos, simulaciones, podcasts y e-books
            interactivos— para que aprender sea atractivo y efectivo. Nuestro enfoque trabaja habilidades claves:
            tecnología, idiomas (inglés y también francés), pensamiento crítico y finanzas personales, dentro de una
            formación integral y en valores.
          </p>
          <p className="text-slate-800 mt-4">
            Contamos con <b>doble calendario escolar (Regular e Internacional)</b>, planes personalizados y
            acompañamiento cercano a las familias. La meta es la misma en todos los niveles (preescolar, primaria y
            secundaria): que el estudiante disfrute aprender y demuestre progreso real con métricas y evidencias.
          </p>
          <div className="mt-6 card p-4">
            <ul className="space-y-2 text-slate-800">
              <li>Mentorías y seguimiento 1:1 con reportes periódicos para la familia.</li>
              <li>Recursos digitales interactivos y metodología lúdica para mantener alta motivación.</li>
              <li>Doble calendario (Regular / Internacional) y horarios flexibles según tu necesidad.</li>
              <li>Idiomas: prioridad en <b>inglés</b> y programa de <b>francés</b>.</li>
            </ul>
          </div>
        </div>

        {/* IMAGEN LATERAL */}
        <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-white/60 h-[320px] md:h-[440px]">
          <Image
            src="/alaf/about/side.jpg"
            alt="Padres e hijos aprendiendo con ALAF"
            fill
            quality={95}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* FOTO DE CIERRE DE SECCIÓN */}
      <div className="container-max mt-8">
        <div className="relative rounded-xl overflow-hidden border border-[var(--border)] h-[300px] md:h-[420px]">
          <Image
            src="/alaf/about/familias.jpg"
            alt="Familias ALAF aprendiendo desde casa"
            fill
            quality={95}
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
