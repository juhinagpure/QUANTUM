import DropResume from "../components/CareerComps/DropResume";
import HeroSection from "../components/CareerComps/HeroSection";
import JobListings from "../components/CareerComps/JobListings";
import WhyUs from "../components/CareerComps/WhyUs";
import Footer from "../components/Footer";

const CareersPage = () => {
  return (
    <div>
      <HeroSection />
      <WhyUs />
      <JobListings />
      <DropResume />
      <Footer />
    </div>
  );
};

export default CareersPage;
