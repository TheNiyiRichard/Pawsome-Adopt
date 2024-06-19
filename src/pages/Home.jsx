import AdoptionJourney from "../components/AdoptionJourney";
import AvailablePets from "../components/AvailablePets";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import OurSupporters from "../components/OurSupporters";
import Reviews from "../components/Reviews";
import HeroImage from "../components/hero/HeroImage";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center overflow-hidden">
      <Hero />
      <HeroImage />
      <AvailablePets />
      <OurSupporters />
      <AdoptionJourney />
      <HowItWorks />
      <Reviews />
      <Footer />
    </div>
  );
}
