export function About() {
  return (
    <section id="acerca" className="section">
      <div className="container-max grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="h2 mb-4">Acerca de ALAF</h2>
          <p className="text-gray-200 mb-4">
            En <strong>ALAF International Academy</strong> acompañamos a cada familia con un
            modelo flexible y actual: <em>VirtualSchool</em> y <em>Homeschool</em>. Integramos
            contenidos multimedia —videos, simulaciones, podcasts y e-books interactivos— para
            que aprender sea atractivo y efectivo. Nuestro enfoque trabaja habilidades claves:
            tecnología, idiomas (inglés y también francés), pensamiento crítico y finanzas
            personales, dentro de una formación integral y en valores.
          </p>
          <p className="text-gray-200">
            Contamos con <strong>doble calendario escolar (Regular e Internacional)</strong>,
            planes personalizados y acompañamiento cercano a las familias. La meta es la misma en
            todos los niveles (preescolar, primaria y secundaria): que el estudiante <em>disfrute
            aprender</em> y demuestre progreso real con métricas y evidencias.
          </p>
        </div>

        <div className="card p-6 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🧑‍🏫</span>
            <p className="text-gray-200">
              Mentorías y seguimiento 1:1 con reportes periódicos para la familia.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌐</span>
            <p className="text-gray-200">
              Recursos digitales interactivos y metodología lúdica para mantener alta motivación.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📅</span>
            <p className="text-gray-200">
              Doble calendario (Regular / Internacional) y horarios flexibles según tu necesidad.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🗣️</span>
            <p className="text-gray-200">
              Idiomas: prioridad en <strong>inglés</strong> y programa de <strong>francés</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
