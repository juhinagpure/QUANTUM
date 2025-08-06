// import stackedImage from "../../../assets/SeoAssets/Group.svg"; // replace with your image path
// import Container from "../../Container"; // adjust path as needed

// const MainContentSection = () => {
//   return (
//     <Container>
//       <div className="w-full flex flex-col lg:flex-row justify-start items-start lg:items-end gap-6 sm:gap-8 lg:gap-[77px] mt-8 sm:mt-12 lg:mt-16">
//         {/* Left Section */}
//         <div className="flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-[43px] w-full lg:w-[430px] flex-shrink-0">
//           <img
//             src={stackedImage}
//             alt="SEO Visual"
//             className="w-[100px] h-[28px] sm:w-[126px] sm:h-[36px] object-contain"
//           />

//           <h1 className="text-[#FAFAFA] text-[24px] sm:text-[36px] font-bold leading-[140%] tracking-[0.72px] Container">
//             SEO That Drives Visibility, Traffic, and Growth
//           </h1>
//         </div>

//         {/* Right Section */}
//         <div className="text-[#FAFAFA] Container text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-normal leading-[1.5] lg:leading-[1.5] tracking-[0.02em] w-full lg:flex-1 max-w-none lg:max-w-[735px]">
//           Your website deserves visibility. Our SEO services boost your
//           rankings, visibility, and conversions—organically. No gimmicks, just
//           proven strategies tailored to your business. From audits to ongoing
//           optimization, we drive long-term, sustainable traffic.
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default MainContentSection;

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import stackedImage from "../../../assets/SeoAssets/Group.svg";
import Container from "../../Container";

const MainContentSection = () => {
  return (
    <Container>
      <motion.div
        className="w-full flex flex-col lg:flex-row justify-start items-start lg:items-end gap-6 sm:gap-8 lg:gap-[77px] mt-8 sm:mt-12 lg:mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Left Section */}
        <motion.div
          className="flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-[43px] w-full lg:w-[430px] flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          <motion.img
            src={stackedImage}
            alt="SEO Visual"
            className="w-[100px] h-[28px] sm:w-[126px] sm:h-[36px] object-contain"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
          />

          <motion.h1
            className="text-[#FAFAFA] text-[24px] sm:text-[36px] font-bold leading-[140%] tracking-[0.72px] Container"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            SEO That Drives Visibility, Traffic, and Growth
          </motion.h1>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="text-[#FAFAFA] Container text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-normal leading-[1.5] lg:leading-[1.5] tracking-[0.02em] w-full lg:flex-1 max-w-none lg:max-w-[735px]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          Your website deserves visibility. Our SEO services boost your
          rankings, visibility, and conversions—organically. No gimmicks, just
          proven strategies tailored to your business. From audits to ongoing
          optimization, we drive long-term, sustainable traffic.
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default MainContentSection;
