// import Container from "../../Container"; // adjust path if needed

// const SEOInfoSection = () => {
//   return (
//     <Container>
//       <div className="w-full mt-16 flex flex-col md:flex-row justify-start items-stretch gap-5">
//         {/* What is SEO Card */}
//         <div className="flex-1 flex flex-col">
//           <div className="flex-1 bg-zinc-800 rounded-[36px] px-4 sm:px-4 md:px-6 py-9 flex">
//             <div className="w-full px-0 sm:px-4 md:px-6 flex flex-col justify-start items-start gap-4">
//               <h3 className="text-2xl md:text-3xl font-bold text-neutral-50 leading-snug tracking-wide">
//                 What is SEO?
//               </h3>
//               <p className="text-base md:text-lg font-normal text-neutral-50">
//                 SEO is the process of improving your website's visibility on
//                 search engines like Google. It helps your site rank higher so
//                 more people can find you organically—without paid ads.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Why SEO Matters Card */}
//         <div className="flex-1 flex flex-col">
//           <div className="flex-1 bg-zinc-800 rounded-[36px] px-4 sm:px-4 md:px-6 py-9 flex">
//             <div className="w-full px-0 sm:px-4 md:px-6 flex flex-col justify-start items-start gap-4">
//               <h3 className="text-2xl md:text-3xl font-bold text-neutral-50 leading-snug tracking-wide">
//                 Why SEO Matters:
//               </h3>
//               <p className="text-base md:text-lg font-normal text-neutral-50">
//                 75% of users never scroll past the first page of search results.
//                 SEO builds trust and credibility.
//                 <br />
//                 It brings long-term, cost-effective traffic.
//                 <br />
//                 Helps you compete and win against larger brands.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default SEOInfoSection;

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../../Container";

const SEOInfoSection = () => {
  return (
    <Container>
      <motion.div
        className="w-full mt-20 flex flex-col md:flex-row justify-start items-stretch gap-5 "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* What is SEO Card */}
        <motion.div
          className="flex-1 flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          <div className="flex-1 bg-zinc-800 rounded-[36px] px-4 sm:px-4 md:px-6 py-9 flex">
            <div className="w-full px-0 sm:px-4 md:px-6 flex flex-col justify-start items-start gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-50 leading-snug tracking-wide">
                What is SEO?
              </h3>
              <p className="text-base md:text-lg font-normal text-neutral-50">
                SEO is the process of improving your website's visibility on
                search engines like Google. It helps your site rank higher so
                more people can find you organically—without paid ads.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why SEO Matters Card */}
        <motion.div
          className="flex-1 flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex-1 bg-zinc-800 rounded-[36px] px-4 sm:px-4 md:px-6 py-9 flex">
            <div className="w-full px-0 sm:px-4 md:px-6 flex flex-col justify-start items-start gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-50 leading-snug tracking-wide">
                Why SEO Matters:
              </h3>
              <p className="text-base md:text-lg font-normal text-neutral-50">
                75% of users never scroll past the first page of search results.
                SEO builds trust and credibility.
                <br />
                It brings long-term, cost-effective traffic.
                <br />
                Helps you compete and win against larger brands.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default SEOInfoSection;
