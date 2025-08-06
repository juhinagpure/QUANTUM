import Footer from "../components/Footer";
import CTASection from "../components/ServicesComps/PayPerClick/CTASection";
import FAQSection from "../components/ServicesComps/PayPerClick/FAQ";
import HeroSection from "../components/ServicesComps/PayPerClick/HeroSection";
import MainContentSection from "../components/ServicesComps/PayPerClick/MainContentSection";
import PPCProcessSection from "../components/ServicesComps/PayPerClick/PPCProcessSection";
import PPCServicesSection from "../components/ServicesComps/PayPerClick/PPCServicesSection";
import WhatIsPPCSection from "../components/ServicesComps/PayPerClick/WhatIsPPCSection";
import WhyChooseUsSection from "../components/ServicesComps/PayPerClick/WhyChooseUsSection";

const PayPerClickPage = () => {
  return (
    <div>
      <HeroSection />
      <MainContentSection />
      <WhatIsPPCSection />
      <PPCServicesSection />
      <PPCProcessSection />
      <WhyChooseUsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default PayPerClickPage;
