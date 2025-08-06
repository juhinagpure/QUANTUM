/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { PiStarFourFill } from "react-icons/pi";
import Container from "../../Container";
import Footer from "../../Footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

const websiteTools = [
  { src: "/tools/wordpress.png", alt: "WordPress" },
  { src: "/tools/php.png", alt: "PHP" },
  { src: "/tools/mongodb.png", alt: "MongoDB" },
  { src: "/tools/nextjs.jpg", alt: "Next.js" },
  { src: "/tools/firebase.png", alt: "Firebase" },
  { src: "/tools/nodejs.png", alt: "Node.js" },
];

const appTools = [
  { src: "/tools/firebase.png", alt: "Firebase" },
  { src: "/tools/expo.png", alt: "Expo" },
  { src: "/tools/onesignal.png", alt: "OneSignal" },
  { src: "/tools/androidstudio.png", alt: "Android Studio" },
  { src: "/tools/flutter.png", alt: "Flutter" },
  { src: "/tools/reactnative.png", alt: "React Native" },
];

const features = [
  "Tailored solutions for your goals",
  "Fast performance & optimized UI",
  "Cross-platform & responsive designs",
  "Transparent communication & timelines",
  "Post-launch support included",
  "Clean, Modular Code – Easy to maintain and expand over time.",
  "Your data and users' safety is our priority.",
];

const faqData = [
  {
    question: "How long does it take to develop  website or app?",
    answer:
      "it depends on the features, but usually it takes 2 to 6 weeksfor basic projects and longer for complex ones.",
  },
  {
    question: "Will my website or app work on all devices?",
    answer:
      "Yes, we make sure it's fully responsive and works well on mobiles, tablets, and desktops.",
  },
  {
    question: "Can I make changes on my app or website later?",
    answer: "Yes, you can request updates or new features anytime.",
  },
  {
    question: "Do you provide both front-end and back-end development?",
    answer:
      "Yes, we handle both front-end (what users see) and back-end (the logic and database).",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern tools like React.js, HTML/CSS, JavaScript, Node.js, MongoDB, MySQL, and more based on your needs.",
  },
];

const Tools = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <motion.div
        className="w-full px-4 sm:px-8 md:px-16 text-white py-12 space-y-14"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Website Tools */}
        <motion.div
          className="text-center space-y-8"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase"
            variants={fadeInUp}
          >
            TOOLS WE USE FOR WEBSITE
          </motion.h2>

          {/* Gradient Divider */}
          <motion.div className="relative w-full h-1 mt-4" variants={fadeInUp}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] rounded-full" />
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            className="w-full max-w-[1240px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center"
            variants={staggerContainer}
          >
            {websiteTools.map((tool, index) => (
              <motion.img
                key={index}
                src={tool.src}
                alt={tool.alt}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-[28px] lg:rounded-[36px] transition-transform duration-300 hover:scale-110 hover:rotate-1 cursor-pointer"
                variants={scaleUp}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.4 },
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* App Tools */}
        <motion.div
          className="text-center space-y-8"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase"
            variants={fadeInUp}
          >
            TOOLS WE USE FOR APP
          </motion.h2>

          {/* Gradient Divider */}
          <motion.div className="relative w-full h-1 mt-4" variants={fadeInUp}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] rounded-full" />
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            className="w-full max-w-[1240px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center"
            variants={staggerContainer}
          >
            {appTools.map((tool, index) => (
              <motion.img
                key={index}
                src={tool.src}
                alt={tool.alt}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-[28px] lg:rounded-[36px] transition-transform duration-300 hover:scale-110 hover:rotate-1 cursor-pointer"
                variants={scaleUp}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.4 },
                }}
              />
            ))}
            <br></br>
            <br></br>
            <br></br>
          </motion.div>
        </motion.div>

        {/* WHY CHOOSE US CARD */}
        <motion.div
          className="w-full max-w-[1240px] mx-auto bg-[#322B2B] rounded-[36px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-[48px]"
          variants={fadeInUp}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
        >
          {/* Left Image */}
          <motion.div
            className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/tools/whychooseus.jpg"
              alt="Why Choose Us"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex flex-col justify-center items-start px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-10 space-y-5 lg:space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full">
              <motion.h3
                className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight lg:leading-[1.2]"
                whileInView={{
                  opacity: [0, 1],
                  y: [10, 0],
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                WHY CHOOSE US
              </motion.h3>
              <motion.div
                className="relative w-full h-1 mt-4"
                initial={{ scaleX: 0 }}
                whileInView={{
                  scaleX: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] rounded-full animate-pulse" />
              </motion.div>
            </div>

            <motion.ul
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-4 text-white text-base sm:text-lg md:text-xl lg:text-[1.25rem] xl:text-2xl leading-normal"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PiStarFourFill className="text-[#00FFD1] mt-1 text-xl sm:text-2xl md:text-3xl flex-shrink-0" />
                  </motion.div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center"
            whileInView={{
              y: [20, 0],
              opacity: [0, 1],
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] 2xl:text-[56px] font-bold leading-tight tracking-[-0.02em] uppercase mb-2 whitespace-nowrap">
              FAQ'S
            </h1>
            <span className="block mt-1 h-[2px] w-3/4 mx-auto bg-gradient-to-r from-white/10 via-white/50 to-white/10 animate-shine" />
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqData.map((faq, idx) => (
              <motion.div
                key={idx}
                className="border border-[#666666] rounded-3xl bg-[#171717] overflow-hidden transition"
                variants={fadeInUp}
                whileHover={{ y: -3 }}
              >
                <div
                  className="flex justify-between items-center px-4 sm:px-6 py-6 sm:py-8 cursor-pointer hover:bg-[#1a1a1a] transition"
                  onClick={() => toggleFaq(idx)}
                >
                  <p className="text-base sm:text-lg md:text-xl font-medium">
                    {faq.question}
                  </p>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === idx ? (
                      <FiChevronDown className="text-xl sm:text-2xl" />
                    ) : (
                      <FiChevronRight className="text-xl sm:text-2xl" />
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === idx ? "auto" : 0,
                    opacity: openIndex === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-4 text-sm text-gray-400">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Glow Call-to-Action Section */}
        <motion.div
          className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-0"
          whileInView={{
            opacity: [0, 1],
            y: [20, 0],
            transition: { duration: 0.6 },
          }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full max-w-[1200px] bg-[#2B2727] rounded-[36px] p-6 sm:p-10 md:p-16 
            relative overflow-hidden transition-all duration-300 
            scale-100 hover:scale-[1.035] 
            shadow-[inset_0_0_40px_#00ffe520] hover:shadow-[inset_0_0_60px_#00ffe560]"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.4 },
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-8 md:gap-16 text-center md:text-left">
              <div className="flex-1">
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-5xl font-normal text-white leading-snug"
                  whileInView={{
                    opacity: [0, 1],
                    x: [-20, 0],
                    transition: { duration: 0.5, delay: 0.2 },
                  }}
                  viewport={{ once: true }}
                >
                  Building Powerful, User-First Digital Products
                </motion.h2>
                <motion.p
                  className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg md:text-2xl font-light leading-relaxed"
                  whileInView={{
                    opacity: [0, 1],
                    x: [-20, 0],
                    transition: { duration: 0.5, delay: 0.3 },
                  }}
                  viewport={{ once: true }}
                >
                  At NKB Quantum Labs, we turn ideas into high-performance web &
                  app solutions that engage users and deliver measurable growth.
                </motion.p>

                <div className="mt-6 hidden md:flex lg:hidden justify-center">
                  <motion.button
                    className="bg-[#00FFE0] hover:bg-[#00e6cc] text-black font-medium text-base sm:text-lg md:text-xl py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-md transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book A Call
                  </motion.button>
                </div>
              </div>

              <div className="flex-shrink-0 mt-6 md:mt-0 md:hidden lg:flex">
                <motion.button
                  className="bg-[#00FFE0] hover:bg-[#00e6cc] text-black font-medium text-base sm:text-lg md:text-xl py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-md transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book A Call
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </Container>
  );
};

export default Tools;
