import Brands from "./components/Brands.jsx";
import BreathingSection from "./components/BreathingSection.jsx";
import CapnoTrainerFeatures from "./components/CapnoTrainerFeatures.jsx";
import CapnoTrainerHowItWorks from "./components/CapnoTrainerHowItWorks.jsx";
import CapnoTrainerSection from "./components/CapnoTrainerSection.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import HeaderSection from "./components/HeaderSection.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ImageGallery from "./components/ImageGallery.jsx";
import KeyFeatures from "./components/KeyFeatures.jsx";
import PromotionalBanner from "./components/PromotionalBanner.jsx";
import ServiceSection from "./components/ServiceSection.jsx";
import SuccessStories from "./components/SuccessStories.jsx";
import TwoColumnSection from "./components/TwoColumnSection.jsx";

function App() {
  return (
    <>
      <HeaderSection />
      <Brands />
      <BreathingSection />
      <CapnoTrainerSection />
      <CapnoTrainerFeatures />
      <CapnoTrainerHowItWorks />
      <TwoColumnSection />
      <ImageGallery />
      <SuccessStories />
      <KeyFeatures />
      <ServiceSection />
      <HeroSection />
      <FAQ />
      <PromotionalBanner />
      <Footer />
    </>
  );
}

export default App;
