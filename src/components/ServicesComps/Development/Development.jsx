import React from 'react';
import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";
import DevV from "/Dev/DevV.mp4";
import Container from "../../Container";
import Tools from "./Tools";

const offerings = [
  {
    title: "Custom Website Development",
    description: "Built for performance, SEO, and user experience.",
  },
  {
    title: "Mobile App Development",
    description: "Fast, smooth, and optimized experiences.",
  },
  {
    title: "Responsive Design",
    description:
      "Beautiful interfaces powered by smart tech. Looks great on all devices.",
  },
  {
    title: "E-Commerce & CMS",
    description: "Easy-to-manage platforms that grow with your business.",
  },
];

// Animation variants with faster durations
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
    transition: { duration: 0.4 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
    transition: { duration: 0.4 },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
    transition: { duration: 0.4 },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.4 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Development = () => {
  return (
    <div className="w-full -mt-24">
      {/* Section 1: Hero with Background Video */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
          src={DevV}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40 z-[-1]" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg"
          >
            DEVELOPMENT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 drop-shadow"
          >
            Web and app development, done with precision.
          </motion.p>
        </div>
      </div>

      {/* Section 2: Content */}
      <div className="w-full">
        <Container>
          <motion.div
            className="px-6 sm:px-10 md:px-16 lg:px-20 py-20 space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Heading + Paragraph */}
            <motion.div
              className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-10 gap-6 items-start"
              variants={staggerContainer}
            >
              <motion.div
                className="md:col-span-3 flex flex-col items-start text-left mb-6 md:mb-0"
                variants={fadeInLeft}
              >
                <div className="flex mb-4">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 bg-cyan-400 rounded-full mx-1"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.1,
                        ease: "backOut",
                      }}
                      viewport={{ once: false }}
                    />
                  ))}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-[1.8rem] lg:text-3xl font-semibold text-white leading-snug">
                  App & Website Development That  Brings Your
                  Vision
                  <br /> to Life
                </h2>
              </motion.div>
              <motion.div
                className="md:col-span-7 text-gray-300 text-lg sm:text-xl md:text-[1.25rem] lg:text-[1.5rem] leading-relaxed text-left md:mt-8 md:ml-8"
                variants={fadeInRight}
              >
                <p>
                  We don't just code—we build digital products that scale,
                  perform, and impress. From websites to mobile apps, our expert
                  team delivers clean code, smart architecture, and future-ready
                  tech to bring your ideas to life. With global experience, we
                  ensure your product is fast, secure, and built for growth.
                </p>
              </motion.div>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-4"
              variants={staggerContainer}
            >
              <motion.div
                className="bg-[#322B2B] rounded-3xl p-8 min-h-[300px] flex flex-col justify-center items-start text-left shadow-md hover:shadow-lg transition w-full"
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="w-full px-2 sm:px-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    Web Development
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-4">
                    We build responsive, fast and SEO-friendly websites tailored
                    to your brand—ranging from landing pages to full-scale web
                    apps.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-[#322B2B] rounded-3xl p-8 min-h-[300px] flex flex-col justify-center items-start text-left shadow-md hover:shadow-lg transition w-full"
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="w-full px-2 sm:px-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    App Development
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-2">
                    We create sleek, user-friendly mobile apps for iOS and
                    Android, designed to deliver seamless performance and an
                    engaging user experience.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* What We Offer Card */}
            <motion.div
              className="w-full max-w-[1300px] mx-auto bg-[#322B2B] rounded-[36px] overflow-hidden flex flex-col lg:flex-row lg:h-[580px]"
              variants={fadeInUp}
            >
              {/* Image - Top on small screens, right on large */}
              <motion.div
                className="w-full lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-full order-1 lg:order-2"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <img
                  src="/Dev/whatweoffer.jpg"
                  alt="What We Offer"
                  className="w-full h-full object-cover object-[25%_center]"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center items-start px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 space-y-6"
                variants={fadeInLeft}
              >
                <div className="w-full">
                  <h3 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-white">
                    WHAT WE OFFER
                  </h3>
                  <motion.div
                    className="relative w-full h-1 mt-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] rounded-full animate-pulse" />
                  </motion.div>
                </div>

                <ul className="space-y-5">
                  {offerings.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3"
                      variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.5,
                            delay: idx * 0.1,
                          },
                        },
                      }}
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          rotate: 180,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <PiStarFourFill className="text-[#00FFD1] text-xl sm:text-2xl mt-1 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="text-white text-lg sm:text-xl font-semibold">
                          {item.title}
                        </p>
                        <p className="text-gray-300 text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
          <br />
          <br />
          <br />
        </Container>

        <Tools />
      </div>
    </div>
  );
};

export default Development;