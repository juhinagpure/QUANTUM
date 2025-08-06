// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../Container";

const WhyUs = () => {
  const features = [
    {
      title: "Innovative Culture",
      desc: "We thrive on fresh ideas, bold thinking, and continuous learning. Your voice matters here.",
      icon: "M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z",
    },
    {
      title: "Togetherness",
      desc: "Join a team that lifts each other up. We celebrate wins together and learn from every challenge.",
      icon: "M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.993 1.993 0 0 0 18.07 7c-.68 0-1.27.34-1.61.86L14.92 10.5l1.42 1.42 1.11-1.55L18.5 16v6h1.5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zm1.5 1h-3c-.83 0-1.5.67-1.5 1.5v6h1.5v7h3v-7H15v-6c0-.83-.67-1.5-1.5-1.5zM6.5 6C7.33 6 8 5.33 8 4.5S7.33 3 6.5 3 5 3.67 5 4.5 5.67 6 6.5 6zm2.5 6h-3C5.17 12 4.5 12.67 4.5 13.5v6H6v7h3v-7h1.5v-6C10.5 12.67 9.83 12 9 12z",
    },
    {
      title: "Learn & Grow",
      desc: "From mentorship to masterclasses, we invest in your personal and professional development.",
      icon: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
    },
  ];

  return (
    <div className="-mt-20 mb-12">
      <Container>
        <div className="w-full flex flex-col items-center gap-12">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center"
          >
            Why NKB Quantum Labs
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {features.map(({ title, desc, icon }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ amount: 0.2 }}
                className="bg-[#171717] border border-[#322B2B] rounded-2xl md:rounded-3xl p-6 flex flex-col items-center text-center gap-5 min-h-[300px] md:min-h-[340px] lg:min-h-[380px]"
              >
                {/* Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 text-cyan-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d={icon} />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-[#FAFAFA] text-lg md:text-xl lg:text-2xl font-semibold">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-[#FAFAFA] text-sm md:text-base lg:text-lg font-normal leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
