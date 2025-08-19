import React from 'react';
import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Container from "../../Container";
import Footer from "../../Footer";

// Animation variants optimized for performance
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] // Custom bezier for smoothness
    } 
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "backOut"
    }
  }
};

const websiteTools = [
  { src: "/Smm/facebook.webp", alt: "Facebook" },
  { src: "/Smm/instagram.webp", alt: "Instagram" },
  { src: "/Smm/snap.webp", alt: "Snapchat" },
  { src: "/Smm/youtube.webp", alt: "Youtube" },
  { src: "/Smm/pintrest.webp", alt: "Pintrest" },
  { src: "/Smm/twitter.webp", alt: "Twitter" },
  { src: "/Smm/linkedin.webp", alt: "Linkedin" },
  { src: "/Smm/discord.webp", alt: "Discord" },
];

const features = [
  "Data-Driven Campaigns",
  "Custom Creative Assets",
  "Transparent Analytics",
  "Trend-Based Content Ideas",
  "Real Engagement with Real People",
  "Platform-Specific Expertise",
];

const faqData = [
  {
    question: "How often will you post?",
    answer:
      "We usually post 3–5 times per week to keep your audience consistently engaged. However, the posting frequency can be fully customized depending on your goals, audience activity, and content strategy.",
  },
  {
    question: "Can I approve content before it's posted?",
    answer:
      "Yes, absolutely. You’ll always have the chance to review and approve all graphics, captions, and posts before we publish them, ensuring everything matches your brand voice and vision.",
  },
  {
    question: "Do you create graphics and captions?",
    answer:
      "Yes, we handle both the visuals and the written content. Our team designs engaging graphics and crafts compelling captions tailored to your brand style and target audience.",
  },
  {
    question: "What if I don't have a social media presence yet?",
    answer:
      "No problem at all! We can create and set up your social media accounts from scratch, design branded profile/cover images, and help you establish a consistent online identity.",
  },
  {
    question: "Do you run ads too?",
    answer:
      "Yes, we also plan, run, and manage paid ad campaigns. From audience targeting to performance tracking, we ensure your ads maximize reach, engagement, and conversions.",
  },
];


const Smmsecond = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const toggleFaq = (index) => setOpenIndex(openIndex === index ? null : index);

  // Reduced motion preference detection
  const [reducedMotion, setReducedMotion] = React.useState(false);
  React.useEffect(() => {
    setReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  return (
    <Container>
      <motion.div 
        className="w-full px-4 sm:px-8 text-white py-12 space-y-14"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Platforms Section */}
        <motion.section 
          className="text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: reducedMotion ? "0px" : "-100px" }}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase"
            variants={slideUp}
          >
            PLATFORMS WE WORK ON
          </motion.h2>

          <motion.div 
            className="relative w-full h-1 mt-4"
            variants={slideUp}
          >
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
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-[24px] lg:rounded-[32px] cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 150,
                    damping: 10
                  }
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: reducedMotion ? 1 : 1.1,
                  rotate: reducedMotion ? 0 : [0, -2, 2, 0],
                  transition: { 
                    duration: 0.4 
                  }
                }}
                loading="lazy"
              />
            ))}
          </motion.div>
        </motion.section>

        {/* Why Choose Us Card */}
        <motion.section 
          className="w-full max-w-[1240px] mx-auto bg-[#322B2B] rounded-[32px] lg:rounded-[36px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 lg:h-[500px]"
          variants={slideUp}
          whileHover={reducedMotion ? {} : { y: -5 }}
        >
          {/* Image */}
          <div className="w-full aspect-[4/3] lg:h-full">
            <motion.img
              src="/Smm/smmcard2.webp"
              alt="Why Choose Us"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10 space-y-4">
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
                  whileHover={reducedMotion ? {} : { x: 5 }}
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
  transition={{ duration: 0.6 }}
>
  <div className="w-full max-w-[1200px] bg-[#2B2727] rounded-[36px] p-6 sm:p-10 md:p-16 relative overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-[inset_0_0_40px_#00ffe520] hover:shadow-[inset_0_0_60px_#00ffe560]">
    <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 lg:gap-16 text-center md:text-center lg:text-left">
      <div className="flex-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-snug">
          Ready to grow your online community?
        </h2>
        <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-light">
          The right social presence builds awareness, trust and growth.
          Whether you're starting fresh or scaling up—we'll help you grow with purpose.
        </p>
      </div>
      <button 
        className="bg-[#00FFE0] hover:bg-[#00e6cc] text-black font-medium text-base sm:text-lg md:text-xl py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-colors duration-300"
        aria-label="Book a call"
      >
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

export default Smmsecond;