// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import Container from "../Container";

// const leaders = [
//   {
//     name: "Dr. Sugat Chandrikapure",
//     role: "Founder",
//     image: "/AboutUs/Founder.png",
//   },
//   {
//     name: "Deepak Sarkar",
//     role: "Manager",
//     image: "/AboutUs/CoFounder.png",
//   },
// ];

// const LeaderShip = () => {
//   return (
//     <div className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 text-white">
//       <Container>
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center max-w-4xl mx-auto mb-10 xs:mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 lg:px-8"
//         >
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-neutral-50 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold Container uppercase text-center lg:text-right leading-tight"
//           >
//             Leadership at a glance
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mt-3 xs:mt-4 sm:mt-6 text-white/90 leading-relaxed max-w-3xl mx-auto"
//           >
//             Our leadership team brings passion, expertise, and vision to drive
//             innovation and deliver outstanding results.
//           </motion.p>
//         </motion.div>

//         {/* Cards */}
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8">
//           {leaders.map((leader, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow:
//                   "inset 5px 10px 40px rgba(0,255,255,0.35), 0 20px 40px rgba(0,255,255,0.15)",
//               }}
//               className="w-full max-w-[320px] xs:max-w-[340px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[400px] bg-neutral-900 px-6 xs:px-7 sm:px-8 md:px-10 py-8 xs:py-9 sm:py-10 md:py-12 rounded-3xl xs:rounded-4xl sm:rounded-[40px] shadow-[inset_5px_10px_30px_rgba(0,255,255,0.25)] outline outline-2 outline-zinc-800 flex flex-col items-center gap-4 xs:gap-5 sm:gap-6 md:gap-8 h-auto min-h-[380px] xs:min-h-[400px] sm:min-h-[420px] md:min-h-[440px] lg:min-h-[460px] transition-all duration-300"
//             >
//               {/* Image Container */}
//               <motion.div
//                 whileHover={{ rotate: 5, scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//                 className="w-36 xs:w-40 sm:w-44 md:w-48 lg:w-52 h-36 xs:h-40 sm:h-44 md:h-48 lg:h-52 p-2 xs:p-2.5 rounded-full outline outline-4 xs:outline-[5px] outline-zinc-800 flex-shrink-0"
//               >
//                 <img
//                   src={leader.image}
//                   alt={leader.name}
//                   className="w-full h-full object-cover rounded-full"
//                 />
//               </motion.div>

//               {/* Text Container - Fixed Height for Consistency */}
//               <div className="text-center flex-1 flex flex-col justify-center items-center gap-1 xs:gap-2 min-h-[80px] xs:min-h-[90px] sm:min-h-[100px]">
//                 {/* Name - Single Line with Same Font Size */}
//                 <motion.h3
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.3 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="font-bold uppercase leading-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-2"
//                   style={{
//                     fontSize: "clamp(0.875rem, 2.5vw, 1.5rem)",
//                   }}
//                 >
//                   {leader.name}
//                 </motion.h3>

//                 {/* Role */}
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.4 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl uppercase font-medium text-white/90 leading-tight"
//                 >
//                   {leader.role}
//                 </motion.p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default LeaderShip;
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../Container";

const leaders = [
  {
    name: "Dr. Sugat Chandrikapure",
    role: "Founder",
    image: "/AboutUs/Founder.png",
  },
  {
    name: "Deepak Sarkar",
    role: "Manager",
    image: "/AboutUs/CoFounder.png",
  },
];

const LeaderShip = () => {
  return (
    <div className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 text-white">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-10 xs:mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-neutral-50 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold uppercase text-center leading-tight"
          >
            Leadership at a glance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mt-3 xs:mt-4 sm:mt-6 text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            Our leadership team brings passion, expertise, and vision to drive
            innovation and deliver outstanding results.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "inset 5px 10px 40px rgba(0,255,255,0.35), 0 20px 40px rgba(0,255,255,0.15)",
              }}
              className="
                w-full max-w-[320px] xs:max-w-[340px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[400px]
                bg-neutral-900 px-6 xs:px-7 sm:px-8 md:px-10 
                py-6 xs:py-7 sm:py-8 md:py-12 
                rounded-3xl xs:rounded-4xl sm:rounded-[40px] 
                shadow-[inset_5px_10px_30px_rgba(0,255,255,0.25)] 
                outline outline-2 outline-zinc-800 
                flex flex-col items-center gap-4 xs:gap-5 sm:gap-6 md:gap-8 
                h-auto 
                min-h-[300px] xs320:min-h-[320px] xs375:min-h-[330px] xs425:min-h-[350px] 
                sm:min-h-[400px] md:min-h-[440px] lg:min-h-[460px] 
                transition-all duration-300
              "
            >
              {/* Image Container */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-28 xs:w-32 sm:w-40 md:w-44 lg:w-48 h-28 xs:h-32 sm:h-40 md:h-44 lg:h-48 p-2 rounded-full outline outline-4 outline-zinc-800 flex-shrink-0"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              {/* Text Container */}
              <div className="text-center flex-1 flex flex-col justify-center items-center gap-2 min-h-[80px]">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="font-bold uppercase leading-snug break-words text-base xs:text-lg sm:text-xl md:text-2xl"
                >
                  {leader.name}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase font-medium text-white/90"
                >
                  {leader.role}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LeaderShip;
