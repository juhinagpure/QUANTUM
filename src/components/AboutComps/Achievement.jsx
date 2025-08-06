// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Container from "../Container";

export default function Achievement() {
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("achievement");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setStartCounter(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { number: 45, suffix: "+", label: "Happy", sub: "Clients" },
    { number: 74, suffix: "+", label: "Projects", sub: "Delivered" },
    { number: 15, suffix: "+", label: "Industries", sub: "Served" },
    { number: 95, suffix: "%", label: "Client", sub: "Retention" },
  ];

  return (
    <div
      id="achievement"
      className="text-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-20 min-h-[600px]"
    >
      <Container>
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 sm:mb-16"
        >
          <div className="space-y-5 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start space-x-3 mt-4 sm:mt-8">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-cyan-400 rounded-full"
                />
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              WE ARE NKB
              <br />
              QUANTUM LABS
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center lg:text-left space-y-4"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-300">
              We provide results-driven digital marketing services worldwide,
              helping businesses grow. Our team of creative minds is dedicated
              to delivering smart, user-focused solutions that inspire trust,
              drive meaningful results, and create lasting value.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-5 sm:p-6 lg:p-8 text-center hover:bg-gray-800/70 transition duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                {startCounter ? (
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2.5}
                    suffix={item.suffix}
                  />
                ) : (
                  "0" + item.suffix
                )}
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium">
                {item.label}
                <br />
                {item.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
