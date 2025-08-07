import Footer from "../components/Footer";
import CTA from "../components/ServicesComps/UiUx/CTA";
import FAQSection from "../components/ServicesComps/UiUx/FAQ";
import HeroSection from "../components/ServicesComps/UiUx/HeroSection";
import IntroSection from "../components/ServicesComps/UiUx/IntroSection";
import UiTools from "../components/ServicesComps/UiUx/UiTools";
import UiUxDefinition from "../components/ServicesComps/UiUx/UiUxDefinition";
import WeDesignFor from "../components/ServicesComps/UiUx/WeDesignFor";
import WhyChooseUs from "../components/ServicesComps/UiUx/WhyChooseUs";
import WhyUiUxMatters from "../components/ServicesComps/UiUx/WhyUiUxMatters";

const UiUxPage = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <UiUxDefinition />
      <WhyUiUxMatters />
      <WeDesignFor />
      <UiTools />
      <WhyChooseUs />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default UiUxPage;
