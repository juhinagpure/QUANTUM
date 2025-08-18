import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { PiStarFourFill } from "react-icons/pi";
import Container from "../../Container";
import Footer from "../../Footer";

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

const websiteTools = [
  { src: "/Smm/facebook.png", alt: "Facebook" },
  { src: "/Smm/instagram.jpg", alt: "Instagram" },
  { src: "/Smm/snap.png", alt: "Snapchat" },
  { src: "/Smm/youtube.png", alt: "Youtube" },
  { src: "/Smm/pintrest.png", alt: "Pintrest" },
  { src: "/Smm/audible.png", alt: "Twitter" },
  { src: "/Smm/wikipedia.png", alt: "Linkedin" },
  { src: "/Smm/safari.jpg", alt: "Discord" },
];

const features = [
  "Personalized Strategy",
  "Platform Specific Content",
  "Done-for-you Options",
  "Measurable Growth",
  "Build Trust And Credibility",
  "Across All Platforms All The Time",
];

const faqData = [
  {
    question: "Who needs personal branding?",
    answer:
      "Anyone who wants to build authority, attract opportunities, or grow a business online can benefit from personal branding.",
  },
  {
    question: "Do I need a huge following to start?",
    answer:
      "Not at all! You can start building your personal brand from scratch — we'll help you grow your audience over time.",
  },
  {
    question: "Can you manage everything for me?",
    answer:
      "Yes, we take care of everything — from content creation and captions to posting and scheduling.",
  },
  {
    question: "Is personal branding only for Instagram?",
    answer:
      "No, we can build your personal brand across multiple platforms like LinkedIn, Twitter, and Facebook too.",
  },
  {
    question: "How long does it take to see results from personal branding?",
    answer:
      "Results vary, but most clients begin to see growth and engagement improvements within 1–3 months of consistent effort.",
  },
];

const PersonalSecond = () => {
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
        {/* Platforms Section */}
        <motion.section
          className="text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold uppercase"
            variants={slideUp}
            transition={{ duration: 0.6 }}
          >
            PLATFORMS WE WORK ON
          </motion.h2>

          <motion.div className="relative w-full h-1 mt-4" variants={slideUp}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] rounded-full" />
          </motion.div>

          <motion.div
            className="w-full max-w-[1240px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center"
            variants={fadeIn}
          >
            {websiteTools.map((tool, index) => (
              <motion.img
                key={index}
                src={tool.src}
                alt={tool.alt}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-[28px] lg:rounded-[36px] cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  },
                }}
              />
            ))}
          </motion.div>
        </motion.section>

        {/* Why Choose Us Card */}
        <motion.section
          className="w-full max-w-[1240px] mx-auto bg-[#322B2B] rounded-[36px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 lg:h-[500px]"
          variants={slideUp}
          whileHover={{ y: -5 }}
        >
          {/* Image */}
          <div className="w-full aspect-[4/3] sm:aspect-[5/3] lg:h-full">
            <img
              src="/personalbrand/personalcard2.jpg"
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
                  className="flex justify-between items-center px-4 sm:px-6 py-6 cursor-pointer hover:bg-[#1a1a1a]"
                  onClick={() => toggleFaq(idx)}
                >
                  <p className="text-base sm:text-lg md:text-xl font-medium max-w-[280px] sm:max-w-full">
                    {faq.question}
                  </p>

                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 bg-[#222]"
                  >
                    {openIndex === idx ? <FiChevronDown /> : <FiChevronRight />}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === idx ? "auto" : 0,
                    opacity: openIndex === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="px-4 sm:px-6 overflow-hidden"
                >
                  <div className="pb-4 text-sm text-gray-400">{faq.answer}</div>
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
                  Ready to build your presence?
                </h2>
                <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-light">
                  Your voice deserves to be heard. Your story deserves to be
                  told. Let's build your personal brand that reflects who you
                  are.
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

export default PersonalSecond;
