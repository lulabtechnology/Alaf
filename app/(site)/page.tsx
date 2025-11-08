// app/(site)/page.tsx
import { Navbar } from "./components/navbar";            // named export
import Hero from "./components/hero";                     // default export
import { About } from "./components/about";              // named export
import { WhyUs } from "./components/why-us";             // named export
import { Benefits } from "./components/benefits";        // named export
import { Services } from "./components/services";        // named export
import Gallery from "./components/gallery";              // default export
import { Testimonials } from "./components/testimonials";// named export
import { FAQ } from "./components/faq";                  // ⬅️ OJO: mayúsculas, named export
import { Contact } from "./components/contact";          // named export
import { Footer } from "./components/footer";            // named export

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <WhyUs />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
