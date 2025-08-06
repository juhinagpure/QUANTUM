// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import Container from "../Container";

// export default function HeroSection() {
//   return (
//     <div className="relative w-full min-h-[700px] sm:min-h-[750px] md:min-h-[800px] overflow-hidden">
//       {/* Gradient Blob */}
//       <div className="absolute w-[600px] h-[600px] right-[-200px] top-[-300px] rounded-full bg-cyan-600/60 blur-[250px] z-0" />

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col justify-center h-full pt-[350px] pb-20 px-4 sm:px-6 md:px-10 lg:px-16">
//         <Container>
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight sm:leading-snug text-center sm:text-left"
//           >
//             CAREER
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, scaleX: 0.5 }}
//             whileInView={{ opacity: 1, scaleX: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="h-[3px] mt-4 mb-5 bg-gradient-to-r from-white via-white/70 to-transparent w-28 sm:w-36 md:w-52 lg:w-72 xl:w-96 mx-auto sm:mx-0"
//           />

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[720px] leading-relaxed text-center sm:text-left"
//           >
//             We blend creativity, technology, and strategy to deliver powerful
//             digital solutions.
//           </motion.p>
//         </Container>
//       </div>
//     </div>
//   );
// }

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../Container";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[750px] overflow-hidden">
      {/* Gradient Blob */}
      <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] right-[-150px] sm:right-[-200px] top-[-200px] sm:top-[-250px] md:top-[-300px] rounded-full bg-cyan-600/60 blur-[200px] sm:blur-[250px] z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center h-full pt-[250px] sm:pt-[300px] md:pt-[350px] pb-16 sm:pb-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <Container>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-center sm:text-left"
          >
            CAREER
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.5 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[2px] sm:h-[3px] mt-3 sm:mt-4 mb-4 sm:mb-5 bg-gradient-to-r from-white via-white/70 to-transparent w-20 sm:w-28 md:w-36 lg:w-52 xl:w-72 mx-auto sm:mx-0"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-full sm:max-w-[95%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[720px] leading-relaxed text-center sm:text-left"
          >
            We blend creativity, technology, and strategy to deliver powerful
            digital solutions.
          </motion.p>
        </Container>
      </div>
    </div>
  );
}
