import { motion } from "framer-motion";
import Container from "../Container";

const PrivacyPolicyhead = () => {
  return (
   <div className="relative w-full overflow-hidden -mt-24">
  {/* Gradient Blob */}
  <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] right-[-150px] sm:right-[-200px] top-[-200px] sm:top-[-250px] md:top-[-300px] rounded-full bg-cyan-600/60 blur-[200px] sm:blur-[250px] z-0" />

  {/* Main Content */}
  <div className="relative z-10 flex flex-col justify-center pt-40 sm:pt-48 md:pt-56 pb-16 sm:pb-20 px-4 sm:px-6 md:px-10 lg:px-16">
    <Container>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-left uppercase"
      >
        PRIVACY POLICY
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0.5 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-[2px] sm:h-[3px] mt-3 sm:mt-4 mb-4 sm:mb-5 bg-gradient-to-r from-white via-white/70 to-transparent w-full"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-full sm:max-w-[95%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[720px] leading-relaxed text-left"
      >
        Join Our Creative Tribe and build, grow, and innovate with a team that
        values passion, ideas, and impact.
      </motion.p>
    </Container>
  </div>
</div>

  );
};

export default PrivacyPolicyhead;