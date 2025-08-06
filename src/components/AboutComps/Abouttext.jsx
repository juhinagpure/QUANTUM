// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../Container";

export function AboutComp() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[775px] mb-0 -mt-32">
      <img
        src="/AboutUs/About.jpg"
        alt="About us"
        className="w-full h-full object-cover translate-y-10 sm:translate-y-0"
      />

      {/* Motion-wrapped text content */}
      <div className="absolute inset-0 flex flex-col justify-center mt-[80px] sm:mt-0">
        <Container>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight sm:leading-snug"
          >
            ABOUT US
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.5 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[2px] mt-3 mb-4 bg-gradient-to-r from-white via-white/70 to-transparent w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[700px]"
          >
            We blend creativity, technology, and strategy to deliver powerful
            digital solutions.
          </motion.p>
        </Container>
      </div>
    </div>
  );
}
