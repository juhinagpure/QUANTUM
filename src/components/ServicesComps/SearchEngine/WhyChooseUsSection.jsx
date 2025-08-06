// import SEOImg from "../../../assets/SeoAssets/SEO.jpg";
// import Container from "../../Container";

// const WhyChooseUs = () => {
//   const features = [
//     "Expert analysis tailored to your industry",
//     "Fast performance & optimized UI",
//     "Cross-platform & responsive designs",
//     "Transparent communication & timelines",
//     "Post-launch support included",
//     "Clean, Modular Code – Easy to maintain and expand over time.",
//     "Your data and users’ safety is our priority.",
//   ];

//   return (
//     <Container>
//       <div className="w-full mt-32 grid grid-cols-1 lg:grid-cols-2 bg-zinc-800 rounded-[36px] overflow-hidden">
//         {/* Image Block */}
//         <div className="h-full">
//           <img
//             src={SEOImg}
//             alt="Why Choose Us"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Text Block */}
//         <div className="flex flex-col justify-center gap-8 p-6 lg:p-12">
//           <h2 className="text-neutral-50 text-4xl md:text-5xl font-bold font-['IBM_Plex_Sans_Condensed'] uppercase leading-tight">
//             Why Choose Us
//           </h2>

//           <div className="flex flex-col gap-6">
//             {features.map((feature, index) => (
//               <div key={index} className="flex items-start gap-4">
//                 <div className="w-6 h-6 flex-shrink-0 mt-1">
//                   <svg
//                     fill="#22d3ee"
//                     viewBox="0 0 24 24"
//                     className="w-6 h-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M12 2L14.09 8.26H20.82L15.36 12.74L17.45 19L12 14.52L6.55 19L8.64 12.74L3.18 8.26H9.91L12 2Z" />
//                   </svg>
//                 </div>
//                 <p className="text-neutral-50 text-lg md:text-2xl Container leading-snug">
//                   {feature}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default WhyChooseUs;

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SEOImg from "../../../assets/SeoAssets/SEO.jpg";
import Container from "../../Container";

const WhyChooseUs = () => {
  const features = [
    "Expert analysis tailored to your industry",
    "Fast performance & optimized UI",
    "Cross-platform & responsive designs",
    "Transparent communication & timelines",
    "Post-launch support included",
    "Clean, Modular Code – Easy to maintain and expand over time.",
    "Your data and users’ safety is our priority.",
  ];

  return (
    <Container>
      <div className="w-full mt-32 grid grid-cols-1 lg:grid-cols-2 bg-zinc-800 rounded-[36px] overflow-hidden">
        {/* Image Block with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="h-full"
        >
          <img
            src={SEOImg}
            alt="Why Choose Us"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Block with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col justify-center gap-8 p-6 lg:p-12"
        >
          <h2 className="text-neutral-50 text-4xl md:text-5xl font-bold font-['IBM_Plex_Sans_Condensed'] uppercase leading-tight">
            Why Choose Us
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
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
                  <svg
                    fill="#22d3ee"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L14.09 8.26H20.82L15.36 12.74L17.45 19L12 14.52L6.55 19L8.64 12.74L3.18 8.26H9.91L12 2Z" />
                  </svg>
                </div>
                <p className="text-neutral-50 text-lg md:text-2xl Container leading-snug">
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
