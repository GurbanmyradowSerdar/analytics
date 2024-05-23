import useWindowWidth from "hooks/useWindowWidth";
import Footer from "components/shared/Footer";
import HeroSection from "components/sections/HeroSection";
import FeaturesSection from "components/sections/FeaturesSection";
import ThirdHomeSection from "components/sections/ThirdHomeSection";
import Header from "components/shared/Header";
import MobilePage from "components/mobile";
import PricingSection from "components/sections/pricing-section";

function App() {
  const windowWidth = useWindowWidth();

  if (windowWidth <= 1020) {
    return <MobilePage />;
  }

  return (
    <div className="font-Roboto flex flex-col text-text-secondary-color min-h-screen">
      <main className="flex-grow">
        <HeroSection>
          <Header />
        </HeroSection>
        <FeaturesSection />
        <ThirdHomeSection />
      </main>
      <PricingSection>
        <Footer />
      </PricingSection>
    </div>
  );
}

export default App;
