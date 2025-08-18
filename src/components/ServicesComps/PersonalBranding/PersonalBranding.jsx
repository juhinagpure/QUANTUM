/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";
import personalBrandingVideo from "../../../assets/personalbrandingbg.mp4";
import Container from "../../Container";
import PersonalSecond from "./PersonalSecond";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const offerings = [
  {
    title: "Brand Identity Development",
    description:
      "Clarify your niche, values, tone, and messaging style to reflect your true self.",
  },
  {
    title: "Content Strategy & Planning",
    description:
      "Get a complete roadmap for social content, blogs, visuals, and more - tailored to your goals.",
  },
  {
    title: "Personal Website or Portfolio",
    description:
      "Professional site showcasing your work, story, testimonials, and services.",
  },
  {
    title: "Social Media Optimization",
    description:
      "We optimize your bio, posts, highlights, and designs to make your profiles shine",
  },
  {
    title: "Content Creation & Scheduling",
    description:
      "Photos, videos, quotes, reels - we create and post on your behalf (optional add-on).",
  },
];

const PersonalBranding = () => {
  return (
    <div className="w-full -mt-24">
      {/* Hero Section */}
      <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={personalBrandingVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideUp}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase"
          >
            Personal Branding
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mt-4 max-w-2xl"
          >
            From presence to impact — brand yourself boldly.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <Container>
        <motion.div
          className="px-4 sm:px-8 py-16 md:py-20 space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          {/* Intro Text */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
            <motion.div
              className="md:w-1/3"
              variants={slideLeft}
              transition={{ duration: 0.6 }}
            >
              <div className="flex mb-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 bg-cyan-400 rounded-full mx-1"
                    variants={scaleIn}
                    custom={i}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Personal Branding That Positions You With Purpose
              </h2>
            </motion.div>

            <motion.div
              className="mt-0 sm:mt-10 text-gray-300 text-lg md:text-xl md:w-2/3"
              variants={slideRight}
              transition={{ duration: 0.6 }}
            >
              <p>
                In today's digital world, people connect with people. Our
                Personal Branding Services help founders, creators, and
                professionals craft authentic, powerful identities that build
                trust and recognition. We turn your story and strengths into a
                standout digital presence.
              </p>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <motion.div
              className="bg-[#322B2B] rounded-3xl p-6 md:p-8 min-h-[300px] flex flex-col shadow-lg hover:shadow-xl transition-all"
              variants={slideUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Build Your Online Identity
              </h3>
              <p className="text-gray-300">
                We help strategize & execute personal brands that develop trust
                and open doors to new opportunities.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#322B2B] rounded-3xl p-6 md:p-8 min-h-[300px] flex flex-col shadow-lg hover:shadow-xl transition-all"
              variants={slideUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Why PB Matters
              </h3>
              <ul className="text-gray-300 space-y-3">
                {[
                  "Stand Out in a Crowded Market — Show your unique strengths.",
                  "Build trust & credibility.",
                  "Grow Your Audience & Influence — More visibility = more opportunities.",
                  "Open Professional Doors — Get clients, gigs, and collaborations.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="block w-2 h-2 bg-white rounded-full mt-2 mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* What We Offer Section */}
          <motion.div
            className="w-full max-w-[1300px] xl:max-w-[1240px] mx-auto bg-[#322B2B] rounded-[36px] overflow-hidden flex flex-col lg:flex-row h-auto 2xl:h-[600px] mt-20 shadow-2xl"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Image - will appear on right for lg screens */}
            <motion.div
              className="w-full lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-full order-1 lg:order-2 relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/personalbrand/Personalcard1.jpg"
                alt="What We Offer"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Text Content - will appear on left for lg screens */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col justify-start px-6 py-8 sm:px-10 md:px-10 space-y-5 lg:space-y-5 order-2 lg:order-1"
              variants={slideLeft}
            >
              <div className="sticky top-0 pt-4 bg-[#322B2B] z-10 pb-2 w-full flex flex-col items-center">
                <h3 className="text-xl sm:text-4xl md:text-[2.0rem] lg:text-[1.8rem] xl:text-[2.0rem] font-bold mb-4 text-center">
                  WHAT WE OFFER
                </h3>
                <motion.div
                  className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>

              <ul className="space-y-4 w-full pb-4 pr-2">
                {offerings.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: idx * 0.1 },
                    }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <PiStarFourFill className="text-[#00FFD1] text-xl sm:text-2xl lg:text-xl xl:text-2xl" />
                    </motion.div>
                    <div className="group-hover:translate-x-2 transition-transform duration-200">
                      <p className="text-white text-sm sm:text-xl lg:text-base xl:text-sm font-semibold">
                        {item.title}
                      </p>
                      <p className="text-gray-300 text-xs sm:text-base lg:text-sm xl:text-base mt-1">
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

      <PersonalSecond />
    </div>
  );
};

export default PersonalBranding;
