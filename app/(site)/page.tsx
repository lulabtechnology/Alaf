// app/(site)/page.tsx
import Navbar from "./components/navbar";
import Hero from "./components/hero";           // ✅ default import
import About from "./components/about";
import WhyUs from "./components/why-us";
import Benefits from "./components/benefits";
import Services from "./components/services";
import Gallery from "./components/gallery";     // ✅ default import
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Footer from "./components/footer";

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
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
