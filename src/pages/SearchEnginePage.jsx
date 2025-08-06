import Footer from "../components/Footer";
import CTASection from "../components/ServicesComps/SearchEngine/CTASection";
import FAQSection from "../components/ServicesComps/SearchEngine/FAQ";
import HeroSection from "../components/ServicesComps/SearchEngine/HeroSection";
import MainContentSection from "../components/ServicesComps/SearchEngine/MainContentSection";
import SEOProcessSection from "../components/ServicesComps/SearchEngine/SEOProcessSection";
import SEOServicesSection from "../components/ServicesComps/SearchEngine/SEOServicesSection";
import WhatIsSEOSection from "../components/ServicesComps/SearchEngine/WhatIsSEOSection";
import WhyChooseUsSection from "../components/ServicesComps/SearchEngine/WhyChooseUsSection";

const SearchEnginePage = () => {
  return (
    <div>
      <HeroSection />
      <MainContentSection />
      <WhatIsSEOSection />
      <SEOServicesSection />
      <SEOProcessSection />
      <WhyChooseUsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default SearchEnginePage;
