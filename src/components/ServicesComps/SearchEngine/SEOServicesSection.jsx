/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import seoImg from "../../../assets/SeoAssets/SEO1.jpg"; // SEO-related image
import starImg from "../../../assets/SeoAssets/star.svg"; // star svg img
import Container from "../../Container";

const SEOServicesSection = () => {
  const features = [
    "Keyword research to target high-value search terms.",
    "On-page optimization for meta tags, headings, and content.",
    "Technical SEO ensures fast, mobile-friendly, and crawlable sites.",
    "Link building to increase domain authority and reach.",
  ];

  return (
    <div className="mt-24">
      <Container>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-zinc-800 rounded-[36px] overflow-hidden">
          {/* Text Block (LEFT) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col justify-center gap-8 p-6 lg:p-12 order-2 lg:order-1"
          >
            <h2 className="text-neutral-50 text-4xl md:text-5xl font-bold uppercase leading-tight">
              Why Our SEO Process Matters
            </h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {},
              }}
              className="flex flex-col gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 flex-shrink-0 mt-1">
                    <img src={starImg} alt="star" className="w-6 h-6" />
                  </div>
                  <p className="text-neutral-50 text-lg md:text-2xl leading-snug">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Block (RIGHT) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="h-full order-1 lg:order-2"
          >
            <img
              src={seoImg}
              alt="SEO Process Illustration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default SEOServicesSection;
