// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";
import smmVideo from "../../../assets/smmbg.mp4";
import Container from "../../Container";
import Smmsecond from "./Smmsecond";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

// Offerings List
const offerings = [
  {
    title: "Social Media Strategy",
    description:
      "Custom strategies tailored to your industry, audience, and platform.",
  },
  {
    title: "Content Creation & Scheduling",
    description:
      "Engaging graphics, videos, captions, and reels—all scheduled for peak performance.",
  },
  {
    title: "Performance Tracking & Reporting",
    description:
      "Monthly reports with insights, trends & data-backed decisions.",
  },
  {
    title: "Paid Ad Campaigns",
    description: "Maximize ROI with targeted paid media campaigns.",
  },
  {
    title: "Community management",
    description:
      "We monitor your pages, respond to comments ,and manage customer intractions to build trust and loyalty.",
  },
];

const Smm = () => {
  return (
    <div className="w-full -mt-24">
      {/* HERO SECTION */}
      <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={smmVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-0" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            SMM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl mt-4 max-w-2xl mx-auto"
          >
            Build your brand where your audience scrolls.
          </motion.p>
        </div>
      </div>

      {/* INTRO SECTION */}
      <Container>
        <motion.div
          className="px-6 sm:px-10 md:px-16 lg:px-20 py-20 space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Dots + Heading */}
          <motion.div
            className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-10"
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col items-start md:w-1/3"
              variants={fadeInLeft}
            >
              {/* Animated Dots */}
              <div className="flex mb-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 bg-cyan-400 rounded-full mx-1"
                    variants={scaleIn}
                    custom={i}
                  />
                ))}
              </div>
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
                Social Media Marketing <br /> That Builds Brands & <br /> Sparks
                Engagement
              </h2>
            </motion.div>

            {/* Paragraph */}
            <motion.div
              className="md:col-span-7 text-gray-300 text-lg sm:text-xl md:text-[1.25rem] lg:text-[1.5rem] leading-relaxed text-left md:mt-8 md:ml-8"
              variants={fadeInRight}
            >
              <p>
                Your audience is scrolling—are you showing up? Our Social
                <br></br> Media Marketing helps your brand stand out, stay
                relevant, and <br></br> connect. From growing followers to
                driving conversions, we <br></br> combine creativity and data
                for results that count.
              </p>
            </motion.div>
          </motion.div>

          {/* FEATURE CARDS */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-[#322B2B] rounded-3xl p-8 min-h-[300px] flex flex-col justify-center text-left shadow-lg hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
                Social Media Marketing
              </h3>
              <p className="text-gray-300 text-lg sm:text-xl">
                At N&B Quantum Labs, we create data-driven, visually compelling
                social media campaigns that connect with your target audience
                and turn followers into loyal customers.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#322B2B] rounded-3xl p-8 min-h-[300px] flex flex-col justify-center text-left shadow-lg hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
                Why SMM Matters:
              </h3>
              <ul className="text-gray-300 text-lg sm:text-xl space-y-3 pl-5">
                {[
                  "Helps you reach a larger audience and get noticed faster.",
                  "Builds real-time connections with your followers.",
                  "Delivers high ROI with low investment compared to traditional ads.",
                  "Lets you reach specific demographics and interests.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="relative pl-5 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-white before:rounded-full"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* WHAT WE OFFER SECTION */}
          <motion.div
            className="w-full max-w-[1300px] xl:max-w-[1240px] mx-auto bg-[#322B2B] rounded-[36px] overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[580px] xl:h-[657px] mt-20 shadow-2xl"
            variants={fadeInUp}
          >
            {/* Image */}
            <motion.div
              className="w-full lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-full order-1 lg:order-2 relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/Smm/smmcard1.jpg"
                alt="What We Offer"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Text Content - Scrollable if needed */}
            <motion.div
              className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center items-start px-6 py-8 sm:px-10 md:px-12 space-y-4 lg:space-y-4 overflow-y-auto"
              variants={fadeInLeft}
              style={{ maxHeight: "657px" }} // Match xl height
            >
              <div className="sticky top-0 pt-4 bg-[#322B2B] z-10 pb-2 w-full">
                <h3 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold mb-4">
                  WHAT WE OFFER
                </h3>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>

              <ul className="space-y-3 w-full pb-4">
                {offerings.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 group"
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, delay: idx * 0.1 },
                      },
                    }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <PiStarFourFill className="text-[#00FFD1] text-lg sm:text-xl" />
                    </motion.div>
                    <div className="group-hover:translate-x-2 transition-transform duration-200">
                      <p className="text-white text-base sm:text-lg md:text-lg font-semibold">
                        {item.title}
                      </p>
                      <p className="text-gray-300 text-xs sm:text-sm md:text-sm mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
      <Smmsecond />
    </div>
  );
};

export default Smm;
