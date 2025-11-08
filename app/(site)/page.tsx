import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { WhyUs } from "./components/why-us";
import { Benefits } from "./components/benefits";
import { Services } from "./components/services"; // ahora "Modalidades"
import { Gallery } from "./components/gallery";   // NUEVO
import { Testimonials } from "./components/testimonials";
import { FAQ } from "./components/faq";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Orden solicitado */}
      <About />           {/* Acerca de ALAF */}
      <WhyUs />           {/* Por qué elegir ALAF */}
      <Benefits />        {/* Prioriza tu aprendizaje */}
      <Services />        {/* Modalidades ALAF */}
      <Gallery />         {/* Galería (reemplaza Éxitos académicos) */}
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
