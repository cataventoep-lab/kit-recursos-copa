import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Deliverables from "./components/Deliverables";
import Resources from "./components/Resources";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Creators from "./components/Creators";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Deliverables />
        <Resources />
        <Testimonials />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Creators />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
