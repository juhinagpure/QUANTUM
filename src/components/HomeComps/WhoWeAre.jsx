import { PiStarFourFill } from "react-icons/pi";
import Container from "../Container";
import Mask from "../Mask";

const WhoWeAre = () => {
  return (
    <Container>
      <section className="px-4 py-12 md:px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 text-white">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 max-w-2xl 2xl:w-[60%]">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] 2xl:text-[56px] font-bold leading-[110%] tracking-[-0.02em] uppercase mb-6 text-center lg:text-left lg:whitespace-nowrap">
            WHAT WE DO
          </h2>

          <p className="text-sm sm:text-base md:text-lg 2xl:text-2xl font-light text-gray-300 leading-relaxed mb-8 text-center lg:text-left">
            At NKB Quantum Labs, we provide results-driven digital marketing
            services worldwide to help businesses grow online. We blend
            creativity, technology, and strategy to deliver powerful digital
            solutions. With a focus on innovation and results, we help brands
            grow, engage, and lead in the digital world.
          </p>

          <ul className="space-y-5 sm:space-y-6">
            <li className="flex items-start gap-3 sm:gap-4">
              <PiStarFourFill className="text-cyan-400 text-lg sm:text-xl mt-1" />
              <div>
                <p className="font-semibold text-sm sm:text-base md:text-lg">
                  Proven Experience
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  5+ years delivering exceptional digital solutions
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <PiStarFourFill className="text-cyan-400 text-lg sm:text-xl mt-1" />
              <div>
                <p className="font-semibold text-sm sm:text-base md:text-lg">
                  Client-Centric Approach
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Customized solutions tailored to your specific needs
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <PiStarFourFill className="text-cyan-400 text-lg sm:text-xl mt-1" />
              <div>
                <p className="font-semibold text-sm sm:text-base md:text-lg">
                  Results-Driven
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Focus on metrics that matter to your business
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Content - SVG Shape Mask with Video */}
        {/* <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          <div className="relative w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] aspect-square">
            <img
              src="Home/shape.png" // <== Replace this path with your actual image path
              alt="Shape Mask"
              className="absolute w-full h-full object-contain z-10"
            />
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute w-full h-full object-cover z-0"
              src="Home/v1.mp4"
            />
          </div>
        </div> */}
        <Mask />
      </section>
    </Container>
  );
};

export default WhoWeAre;
