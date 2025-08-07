// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../../Container"; // adjust path if needed

const ReadyToGetFound = () => {
  return (
    <div className="mt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full px-6 sm:px-10 md:px-24 py-16 md:py-28 bg-zinc-800 rounded-[36px] shadow-[inset_0px_-5px_50px_0px_rgba(0,255,255,0.25)] flex flex-col justify-center items-center gap-6"
        >
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex flex-col justify-start items-start gap-4"
            >
              <div className="text-white text-3xl sm:text-4xl md:text-5xl font-medium Container leading-snug tracking-wide">
                Ready to Get Found Online?
              </div>
              <div className="text-neutral-500 text-base sm:text-xl md:text-2xl font-normal Container leading-relaxed tracking-wide">
                Boost your presence, build trust, and grow your business with a
                standout personal brand.
              </div>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <button className="w-48 h-16 px-8 py-1.5 bg-cyan-400 rounded-full flex justify-center items-center">
                <span className="text-stone-900 text-xl font-semibold Container tracking-tight">
                  Book A Call
                </span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ReadyToGetFound;
