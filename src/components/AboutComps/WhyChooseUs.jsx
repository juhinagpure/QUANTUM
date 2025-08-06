// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../Container";

import {
  Lightbulb,
  Settings,
  ShieldCheck,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";

const chooseData = [
  {
    title: "Expertise & Industry Knowledge",
    description:
      "Our seasoned professionals bring years of industry-specific expertise, ensuring tailored and effective strategies.",
    icon: <UserCheck className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Client-Centric Approach",
    description:
      "We listen, understand, and craft solutions that align perfectly with your business goals and vision.",
    icon: <Users className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Quality & Reliability",
    description:
      "We are committed to delivering premium solutions with precision, consistency, and excellence.",
    icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Innovation-Driven Solutions",
    description:
      "We embrace cutting-edge technology and creativity to develop forward-thinking, market-leading solutions.",
    icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "End-to-End Support",
    description:
      "From planning to execution, we guide you every step of the way, ensuring a seamless journey to success.",
    icon: <Settings className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Seamless Collaboration",
    description:
      "We ensure smooth communication and teamwork for hassle-free project execution.",
    icon: <Workflow className="w-8 h-8 text-cyan-400" />,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-16 text-white w-full -mt-12">
      <Container>
        <div className="flex flex-col items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center flex flex-col gap-4 px-4 sm:px-8"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-neutral-50 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold uppercase text-center leading-tight"
            >
              Why Choose Us
            </motion.h2>

            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              We provide unparalleled expertise, reliability, and innovation to
              drive your success.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 sm:px-0">
            {chooseData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-neutral-900 px-6 py-10 rounded-3xl outline outline-2 outline-zinc-800 flex flex-col items-center"
              >
                <div className="w-full flex flex-col items-center gap-4">
                  <div className="w-12 h-12 relative">{item.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base font-normal text-center text-white/80">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
