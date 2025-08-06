import { AboutComp } from "../components/AboutComps/Abouttext"; // Adjust path if needed
import Achievement from "../components/AboutComps/Achievement";
import Clients from "../components/AboutComps/Clients";
import Connect from "../components/AboutComps/Connect";
import LeaderShip from "../components/AboutComps/LeaderShip";
import Mission from "../components/AboutComps/Mission";
import OurExperts from "../components/AboutComps/OurExperts";
import WhyChooseUs from "../components/AboutComps/WhyChooseUs";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  return (
    <div>
      <h1></h1>
      <AboutComp />
      <Achievement />
      <Mission />
      <WhyChooseUs />
      <LeaderShip />
      <OurExperts />
      <Clients />
      <Connect />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
