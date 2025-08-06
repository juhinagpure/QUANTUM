// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../Container";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden -mt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-neutral-900 to-stone-900">
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent "></div>
        <div
          className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[775px] mb-0"
          style={{
            backgroundImage: 'url("/Blog/Blog1.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20 sm:pt-24">
        <Container>
          <div className="text-left">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold Container uppercase"
            >
              Blogs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.5 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-[2px] mt-3 mb-4 bg-gradient-to-r from-white via-cyan-400 to-transparent w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[700px]"
            >
              Get the latest News in Tech, Crypto, AI, and Business
            </motion.p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
