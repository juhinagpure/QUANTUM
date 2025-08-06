// import Container from "../../Container";

// const SeoProcess = () => {
//   return (
//     <Container>
//       <div className="w-full flex flex-col items-center gap-10 mt-10">
//         {/* Heading */}
//         <div className="text-center text-neutral-50 text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold font-['IBM_Plex_Sans_Condensed'] uppercase">
//           Our SEO Process
//         </div>

//         <div className="w-full h-[3px] bg-gradient-to-r from-zinc-800 via-stone-500 to-zinc-800" />

//         {/* Cards Grid */}
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
//           {[
//             {
//               number: "1",
//               title: "Research & Audit",
//               desc: "We dive deep to understand your goals, audience, and challenges through research and collaboration.",
//             },
//             {
//               number: "2",
//               title: "Strategy Planning",
//               desc: "Based on insights, we create a custom SEO roadmap with goals, target keywords, and content direction.",
//             },
//             {
//               number: "3",
//               title: "On-Page Optimization",
//               desc: "We optimize website structure, content, meta tags, images, and internal links to align with search engine.",
//             },
//             {
//               number: "4",
//               title: "Technical SEO Fixes",
//               desc: "We improve site speed, mobile responsiveness, crawlability, indexing, and fix any backend issues.",
//             },
//             {
//               number: "5",
//               title: "Content Creation",
//               desc: "We create or refine high-quality, keyword-rich content that ranks and resonates with your audience.",
//             },
//             {
//               number: "6",
//               title: "Reporting & Optimization",
//               desc: "We monitor rankings and traffic, share monthly performance reports, and tweak strategies to keep improving.",
//             },
//           ].map((item) => (
//             <div
//               key={item.number}
//               className="bg-zinc-800 p-6 rounded-xl flex flex-col items-center gap-6"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="text-neutral-500 text-7xl md:text-8xl font-extrabold Container">
//                   {item.number}
//                 </div>
//                 <div className="w-5 h-5 bg-teal-200 rounded-full" />
//               </div>
//               <div className="text-center text-neutral-50 text-2xl md:text-3xl font-semibold leading-snug">
//                 {item.title}
//               </div>
//               <div className="text-center text-neutral-400 text-lg md:text-xl leading-relaxed">
//                 {item.desc}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default SeoProcess;

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../../Container";

const SeoProcess = () => {
  const processItems = [
    {
      number: "1",
      title: "Research & Audit",
      desc: "We dive deep to understand your goals, audience, and challenges through research and collaboration.",
    },
    {
      number: "2",
      title: "Strategy Planning",
      desc: "Based on insights, we create a custom SEO roadmap with goals, target keywords, and content direction.",
    },
    {
      number: "3",
      title: "On-Page Optimization",
      desc: "We optimize website structure, content, meta tags, images, and internal links to align with search engine.",
    },
    {
      number: "4",
      title: "Technical SEO Fixes",
      desc: "We improve site speed, mobile responsiveness, crawlability, indexing, and fix any backend issues.",
    },
    {
      number: "5",
      title: "Content Creation",
      desc: "We create or refine high-quality, keyword-rich content that ranks and resonates with your audience.",
    },
    {
      number: "6",
      title: "Reporting & Optimization",
      desc: "We monitor rankings and traffic, share monthly performance reports, and tweak strategies to keep improving.",
    },
  ];

  return (
    <Container>
      <div className="w-full flex flex-col items-center gap-10 mt-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center text-neutral-50 text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold font-['IBM_Plex_Sans_Condensed'] uppercase"
        >
          Our SEO Process
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full h-[3px] bg-gradient-to-r from-zinc-800 via-stone-500 to-zinc-800 origin-left"
        />

        {/* Cards Grid */}
        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {processItems.map((item) => (
            <motion.div
              key={item.number}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-zinc-800 p-6 rounded-xl flex flex-col items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="text-neutral-500 text-7xl md:text-8xl font-extrabold Container">
                  {item.number}
                </div>
                <div className="w-5 h-5 bg-teal-200 rounded-full" />
              </div>
              <div className="text-center text-neutral-50 text-2xl md:text-3xl font-semibold leading-snug">
                {item.title}
              </div>
              <div className="text-center text-neutral-400 text-lg md:text-xl leading-relaxed">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default SeoProcess;
