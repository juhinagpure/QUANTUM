// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import Container from "../Container";

// const fadeUpVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const Connect = () => {
//   return (
//     <div className="w-full py-10 px-4">
//       <Container>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={fadeUpVariant}
//           className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 py-12 sm:py-16 bg-zinc-800 rounded-[36px] shadow-[inset_0px_-5px_50px_0px_rgba(0,255,255,0.25)] flex flex-col justify-center items-center gap-8"
//         >
//           <motion.div
//             variants={fadeUpVariant}
//             custom={1}
//             className="w-full flex flex-col justify-start items-center gap-6"
//           >
//             <motion.div
//               variants={fadeUpVariant}
//               custom={2}
//               className="text-center text-white text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug tracking-wide"
//             >
//               Ready to bring your vision to life?
//             </motion.div>
//             <motion.div
//               variants={fadeUpVariant}
//               custom={3}
//               className="text-center text-neutral-500 text-base sm:text-lg lg:text-xl font-normal leading-relaxed tracking-wide max-w-3xl"
//             >
//               Let’s build something impactful together. From idea to execution,
//               we turn visions into digital success.
//             </motion.div>
//           </motion.div>

//           <motion.div
//             variants={fadeUpVariant}
//             custom={4}
//             className="flex flex-wrap justify-center items-center gap-4 sm:gap-6"
//           >
//             <motion.div
//               variants={fadeUpVariant}
//               custom={5}
//               className="w-36 sm:w-44 h-12 sm:h-14 px-6 py-1.5 bg-cyan-400 rounded-[50px] flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
//             >
//               <div className="text-stone-900 text-base sm:text-lg font-semibold tracking-tight">
//                 Contact Us
//               </div>
//             </motion.div>
//             <motion.div
//               variants={fadeUpVariant}
//               custom={6}
//               className="w-36 sm:w-44 h-12 sm:h-14 px-6 py-1.5 bg-neutral-50 rounded-[50px] flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
//             >
//               <div className="text-stone-900 text-base sm:text-lg font-semibold tracking-tight">
//                 Join Us
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </Container>
//     </div>
//   );
// };

// export default Connect;

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../Container";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Connect = () => {
  return (
    <div className="w-full py-10 px-4">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUpVariant}
          className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 py-12 sm:py-16 bg-zinc-800 rounded-[36px] shadow-[inset_0px_-5px_50px_0px_rgba(0,255,255,0.25)] flex flex-col justify-center items-center gap-8"
        >
          <motion.div
            variants={fadeUpVariant}
            custom={1}
            className="w-full flex flex-col justify-start items-center gap-6"
          >
            <motion.div
              variants={fadeUpVariant}
              custom={2}
              className="text-center text-white text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug tracking-wide"
            >
              Ready to bring your vision to life?
            </motion.div>
            <motion.div
              variants={fadeUpVariant}
              custom={3}
              className="text-center text-neutral-500 text-base sm:text-lg lg:text-xl font-normal leading-relaxed tracking-wide max-w-3xl"
            >
              Let’s build something impactful together. From idea to execution,
              we turn visions into digital success.
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            custom={4}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-6"
          >
            {/* ✅ Contact Us Button with Link */}
            <a href="/contact">
              <motion.div
                variants={fadeUpVariant}
                custom={5}
                className="w-36 sm:w-44 h-12 sm:h-14 px-6 py-1.5 bg-cyan-400 rounded-[50px] flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="text-stone-900 text-base sm:text-lg font-semibold tracking-tight whitespace-nowrap">
                  Contact Us
                </div>
              </motion.div>
            </a>

            {/* Join Us Button */}
            <motion.div
              variants={fadeUpVariant}
              custom={6}
              className="w-36 sm:w-44 h-12 sm:h-14 px-6 py-1.5 bg-neutral-50 rounded-[50px] flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="text-stone-900 text-base sm:text-lg font-semibold tracking-tight">
                Join Us
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Connect;
