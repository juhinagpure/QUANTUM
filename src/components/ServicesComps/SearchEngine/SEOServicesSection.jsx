/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import checkIcon from "../../../assets/SeoAssets/star.svg"; // 👈 import your svg
import bookImg from "../../../assets/uiuxAssets/img1.jpg";
import Container from "../../Container";

const WhyUIUXMatters = () => {
  return (
    <Container>
      <motion.div
        className="w-[1240px] inline-flex justify-start items-center mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Side */}
        <motion.div
          className="flex-1 h-[660px] px-14 py-14 bg-zinc-800 rounded-tl-[36px] rounded-bl-[36px] inline-flex flex-col justify-between items-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-[522px] flex flex-col justify-start items-center gap-14">
            <div className="self-stretch justify-start text-neutral-50 text-5xl font-bold font-['IBM_Plex_Sans_Condensed'] uppercase leading-[57.60px]">
              Why UI/UX Matters
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-9">
              {/* Card 1 */}
              <div className="self-stretch inline-flex justify-between items-start">
                {/* 👇 SVG instead of bg-cyan-400 box */}
                <img src={checkIcon} alt="check" className="w-6 h-6" />
                <div className="w-[485px] inline-flex flex-col justify-center items-start gap-4">
                  <div className="self-stretch justify-start text-neutral-50 text-3xl font-bold font-['Urbanist'] leading-10">
                    First Impression Counts
                  </div>
                  <div className="self-stretch justify-start text-neutral-50 text-lg font-normal font-['Urbanist'] leading-relaxed tracking-tight">
                    94% of first impressions are design-related.
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="self-stretch inline-flex justify-between items-start">
                <img src={checkIcon} alt="check" className="w-6 h-6" />
                <div className="w-[485px] inline-flex flex-col justify-center items-start gap-4">
                  <div className="self-stretch justify-start text-neutral-50 text-3xl font-bold font-['Urbanist'] leading-10">
                    Better Conversion
                  </div>
                  <div className="self-stretch justify-start text-neutral-50 text-lg font-normal font-['Urbanist'] leading-relaxed tracking-tight">
                    Great design improves user trust and boosts conversion
                    rates.
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="self-stretch inline-flex justify-between items-start">
                <img src={checkIcon} alt="check" className="w-6 h-6" />
                <div className="w-[485px] inline-flex flex-col justify-center items-start gap-4">
                  <div className="self-stretch justify-start text-neutral-50 text-3xl font-bold font-['Urbanist'] leading-10">
                    Lower Bounce Rates
                  </div>
                  <div className="self-stretch justify-start text-neutral-50 text-lg font-normal font-['Urbanist'] leading-relaxed tracking-tight">
                    Intuitive interfaces keep users engaged longer.
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="self-stretch inline-flex justify-between items-start">
                <img src={checkIcon} alt="check" className="w-6 h-6" />
                <div className="w-[485px] inline-flex flex-col justify-center items-start gap-4">
                  <div className="self-stretch justify-start text-neutral-50 text-3xl font-bold font-['Urbanist'] leading-10">
                    Fewer Support Queries
                  </div>
                  <div className="self-stretch justify-start text-neutral-50 text-lg font-normal font-['Urbanist'] leading-relaxed tracking-tight">
                    Simple flows mean less confusion and more satisfaction.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side image */}
        <motion.img
          className="w-[585px] h-[660px] rounded-tr-[36px] rounded-br-[36px]"
          src={bookImg}
          alt="UI/UX Illustration"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </Container>
  );
};

export default WhyUIUXMatters;
