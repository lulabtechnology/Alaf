export function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container-max">
        <div className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5 md:p-10">
          <h2 className="h2 mb-6">🎓 Modalidades Educativas ALAF International Academy</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-6 transition-transform duration-200 hover:-translate-y-1">
              <h3 className="mb-2 text-xl font-semibold">🖥️ Virtual School</h3>
              <p className="leading-relaxed text-slate-700">
                Nuestra modalidad Virtual School ofrece una experiencia escolar en vivo, donde los estudiantes se conectan en tiempo real con sus docentes y compañeros de lunes a jueves.
                El horario de clases se adapta a la etapa de desarrollo de cada alumno, garantizando sesiones dinámicas, interactivas y acordes a su edad.
                Aquí, los estudiantes disfrutan de un ambiente cercano, acompañamiento continuo, trabajo guiado y actividades colaborativas que fortalecen sus habilidades académicas, sociales y digitales.
                Es la opción ideal para familias que desean estructura, acompañamiento y conexión diaria.
              </p>
            </div>

            <div className="card p-6 transition-transform duration-200 hover:-translate-y-1">
              <h3 className="mb-2 text-xl font-semibold">🏡 Homeschool Acompañado</h3>
              <p className="leading-relaxed text-slate-700">
                En nuestra modalidad Homeschool, las familias disfrutan de la libertad de aprender a su propio ritmo, con la guía, supervisión y recursos educativos de ALAF.
                Los estudiantes trabajan de manera flexible, avanzando según su estilo y ritmo personal, con fechas tope para entrega de actividades y presentación de evaluaciones, asegurando continuidad y progreso académico.
                La familia recibe orientación, planificación y acompañamiento, mientras el estudiante desarrolla autonomía, disciplina y amor por aprender.
                Es la opción perfecta para quienes valoran flexibilidad, independencia y una educación personalizada desde casa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
