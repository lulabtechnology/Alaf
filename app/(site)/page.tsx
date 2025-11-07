import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import Benefits from "./components/benefits";
import { WhyUs } from './components/why-us';
import { About } from './components/about';
import { Services } from './components/services';
import { Successes } from './components/successes';
import { Testimonials } from './components/testimonials';
import { FAQ } from './components/faq';
import { Contact } from './components/contact';
import { Footer } from './components/footer';


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
<Successes />
<Testimonials />
<FAQ />
<Contact />
</main>
<Footer />
</>
);
}
