// app/(site)/page.tsx
import { Navbar } from "./components/navbar";            // named export
import Hero from "./components/hero";                     // default export
import { About } from "./components/about";              // named export
import { Benefits } from "./components/benefits";        // named export  (renombrado visualmente a "Prioriza tu aprendizaje")
import { WhyUs } from "./components/why-us";             // named export
import { Services } from "./components/services";        // named export
import { Testimonials } from "./components/testimonials";// named export
import { FAQ } from "./components/faq";                  // named export (ojo mayúsculas)
import { Contact } from "./components/contact";          // named export
import { Footer } from "./components/footer";            // named export

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* ORDEN SOLICITADO */}
        <About />
        <Benefits />
        <WhyUs />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
