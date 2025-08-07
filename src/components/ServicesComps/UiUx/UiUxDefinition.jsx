/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Container from "../../Container";

const UiUxDefinition = () => {
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
                What is UI Design?
              </h3>
              <p className="text-base md:text-lg font-normal text-neutral-50">
                The visual layout of a digital product. We design buttons,
                typography, colors, icons, spacing, and everything the user
                interacts with.
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
                What is UX Design?
              </h3>
              <p className="text-base md:text-lg font-normal text-neutral-50">
                The overall feel of the experience. It includes wireframes,
                navigation flows, user journeys, and interaction patterns to
                make your product easy and enjoyable to use.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default UiUxDefinition;
