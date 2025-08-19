import React from "react";
import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Container from "../../Container";
import Footer from "../../Footer";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const websiteTools = [
  { src: "/Dev/wordpress.png", alt: "WordPress" },
  { src: "/Dev/php.png", alt: "PHP" },
  { src: "/Dev/mongodb.png", alt: "MongoDB" },
  { src: "/Dev/nextjs.jpg", alt: "Next.js" },
  { src: "/Dev/firebase.png", alt: "Firebase" },
  { src: "/Dev/nodejs.png", alt: "Node.js" },
];

const appTools = [
  { src: "/Dev/firebase.png", alt: "Firebase" },
  { src: "/Dev/expo.png", alt: "Expo" },
  { src: "/Dev/onesignal.png", alt: "OneSignal" },
  { src: "/Dev/androidstudio.png", alt: "Android Studio" },
  { src: "/Dev/flutter.png", alt: "Flutter" },
  { src: "/Dev/reactnative.png", alt: "React Native" },
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
    question: "How long does it take to develop a website or app?",
    answer:
      "It depends on the features and complexity of your project. A simple website or app usually takes around 2 to 6 weeks, while more advanced platforms with custom features, integrations, and design can take longer. We also keep you updated throughout the process with clear milestones.",
  },
  {
    question: "Will my website or app work on all devices?",
    answer:
      "Yes, we make sure your website or app is fully responsive. This means it will adjust and work smoothly across all devices including mobiles, tablets, laptops, and desktops, ensuring a consistent user experience everywhere.",
  },
  {
    question: "Can I make changes on my app or website later?",
    answer:
      "Absolutely! You can request updates, new features, or design changes at any time. We provide ongoing support and maintenance so your app or website can evolve along with your business needs.",
  },
  {
    question: "Do you provide both front-end and back-end development?",
    answer:
      "Yes, we handle both parts. The front-end covers everything users see and interact with (design, layout, visuals), while the back-end manages the core logic, database, and server operations. Together, this ensures a seamless and efficient product.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with modern, industry-standard technologies such as React.js, HTML, CSS, JavaScript, Node.js, MongoDB, MySQL, and more. Based on your project’s requirements, we choose the most suitable tools to ensure performance, scalability, and security.",
  },
];


const Tools = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const toggleFaq = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <Container>
      <motion.div 
        className="w-full px-4 sm:px-8 md:px-16 text-white py-12 space-y-14"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Website Tools Section */}
        <motion.section 
          className="text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold uppercase"
            variants={slideUp}
          >
            TOOLS WE USE FOR WEBSITE
          </motion.h2>

          <motion.div 
            className="relative w-full h-1 mt-4"
            variants={slideUp}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] rounded-full" />
          </motion.div>

          <motion.div 
            className="w-full max-w-[1240px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center"
            variants={fadeIn}
          >
            {websiteTools.map((tool, index) => (
              <motion.img
                key={index}
                src={tool.src}
                alt={tool.alt}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-[28px] lg:rounded-[36px] cursor-pointer"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { 
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }
                }}
              />
            ))}
          </motion.div>
        </motion.section>

        {/* App Tools Section */}
        <motion.section 
          className="text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold uppercase"
            variants={slideUp}
          >
            TOOLS WE USE FOR APP
          </motion.h2>

          <motion.div 
            className="relative w-full h-1 mt-4"
            variants={slideUp}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] rounded-full" />
          </motion.div>

          <motion.div 
            className="w-full max-w-[1240px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center"
            variants={fadeIn}
          >
            {appTools.map((tool, index) => (
              <motion.img
                key={index}
                src={tool.src}
                alt={tool.alt}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-[28px] lg:rounded-[36px] cursor-pointer"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { 
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }
                }}
              />
            ))}
          </motion.div>
        </motion.section>
<br></br> <br></br> <br></br>
        {/* Why Choose Us Card */}
        <motion.section 
          className="w-full max-w-[1240px] mx-auto bg-[#322B2B] rounded-[36px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 lg:h-[500px]"
          variants={slideUp}
          whileHover={{ y: -5 }}
        >
          {/* Image */}
          <div className="w-full aspect-[4/3] sm:aspect-[5/3] lg:h-full">
            <img
              src="/Dev/whychooseus.jpg"
              alt="Why Choose Us"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-4 py-6 sm:px-8 sm:py-8 lg:px-10 space-y-4">
            <motion.h3 
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              WHY CHOOSE US
            </motion.h3>

            <motion.div 
              className="relative w-full h-1"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] rounded-full" />
            </motion.div>

            <ul className="space-y-3">
              {features.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-base md:text-lg"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <PiStarFourFill className="text-[#00FFD1] mt-1 text-lg flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* FAQ Section */}
       <motion.section className="space-y-8">
  <motion.div 
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold uppercase">
      FAQ'S
    </h1>
    <span className="block mt-1 h-[2px] w-3/4 mx-auto bg-gradient-to-r from-white/10 via-white/50 to-white/10" />
  </motion.div>

  <div className="space-y-4">
    {faqData.map((faq, idx) => (
      <motion.div
        key={idx}
        className="border border-[#666666] rounded-3xl bg-[#171717] overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        whileHover={{ y: -3 }}
      >
        <div
          className="flex justify-between items-center px-4 sm:px-6 py-6 cursor-pointer hover:bg-[#1a1a1a] gap-4"
          onClick={() => toggleFaq(idx)}
        >
          <p className="text-base sm:text-lg md:text-xl font-medium flex-1">
            {faq.question}
          </p>
          <motion.div
            animate={{ rotate: openIndex === idx ? 180 : 0 }}
            className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 bg-[#222]"
          >
            {openIndex === idx ? <FiChevronDown /> : <FiChevronRight />}
          </motion.div>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: openIndex === idx ? "auto" : 0, 
            opacity: openIndex === idx ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="px-4 sm:px-6 overflow-hidden"
        >
          <div className="pb-4 text-sm text-gray-400">
            {faq.answer}
          </div>
        </motion.div>
      </motion.div>
    ))}
  </div>
</motion.section>

        {/* CTA Section */}
        <motion.section 
          className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-[1200px] bg-[#2B2727] rounded-[36px] p-6 sm:p-10 md:p-16 relative overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-[inset_0_0_40px_#00ffe520] hover:shadow-[inset_0_0_60px_#00ffe560]">
            <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 lg:gap-16 text-center md:text-center lg:text-left">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-snug">
                  Building Powerful, User-First Digital Products
                </h2>
                <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-light">
                  At NKB Quantum Labs, we turn ideas into high-performance web & 
                  app solutions that engage users and deliver measurable growth.
                </p>
              </div>
              <button className="bg-[#00FFE0] hover:bg-[#00e6cc] text-black font-medium text-base sm:text-lg md:text-xl py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-colors duration-300">
                Book A Call
              </button>
            </div>
          </div>
        </motion.section>
      </motion.div>
      <Footer />
    </Container>
  );
};

export default Tools;