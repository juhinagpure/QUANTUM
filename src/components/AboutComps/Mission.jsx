// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../Container";

const Mission = () => {
  return (
    <div className="mb-6 xs:mb-8 sm:mb-10 md:mb-14 lg:mb-20 xl:mb-24 2xl:mb-32 mt-9">
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-6 lg:px-8 -mt-8 xs:-mt-10 sm:-mt-12">
          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-1/2 xl:w-[55%] flex justify-center lg:justify-start"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/AboutUs/mission.jpg"
              alt="Our Mission"
              className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] 2xl:max-w-[650px] h-auto rounded-xl xs:rounded-2xl sm:rounded-3xl md:rounded-[36px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>

          {/* Text Right */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-1/2 xl:w-[45%] flex flex-col justify-center lg:justify-start items-center lg:items-end gap-3 xs:gap-4 sm:gap-5 md:gap-6 mt-4 xs:mt-6 sm:mt-8 md:mt-10 lg:mt-16 xl:mt-20 2xl:mt-24"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-neutral-50 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold Container uppercase text-center lg:text-right leading-tight"
            >
              Our Mission
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-neutral-50 text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-normal leading-relaxed xs:leading-[1.6] sm:leading-[1.7] tracking-wide text-center lg:text-right max-w-full xs:max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[550px] px-2 xs:px-4 sm:px-6 lg:px-0"
            >
              Our mission is to empower businesses of all sizes with
              cutting-edge digital solutions that drive growth, visibility, and
              lasting impact. Where design meets performance — and ideas turn
              into impact.
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Mission;
