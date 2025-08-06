// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../Container"; // Adjust the path as per your project

const experts = [
  {
    name: "Mr. Martin Bankar",
    role: "CTO / Developer",
    image:
      "https://images.unsplash.com/photo-1533656812321-1868a4d2b72a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVlc2lvbmFsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", // square placeholder
  },
  {
    name: "Dr. Sneha Deshmukh",
    role: "AI Specialist",
    image:
      "https://images.unsplash.com/photo-1579958634859-06a8bb76ee35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Mr. Rakesh Jain",
    role: "Senior Designer",
    image:
      "https://images.unsplash.com/photo-1548412542-fe1d1181336c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Ms. Anjali Sharma",
    role: "Marketing Head",
    image:
      "https://plus.unsplash.com/premium_photo-1672373830660-4655ca9de6c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnMlMjBpbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Mr. Sahil Mehta",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1579958634859-06a8bb76ee35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Ms. Priya Singh",
    role: "Data Analyst",
    image:
      "https://images.unsplash.com/photo-1533656812321-1868a4d2b72a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVlc2lvbmFsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", // square placeholder
  },
];

const ExpertCard = ({ name, role, image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[260px] bg-zinc-800 rounded-2xl p-4 shadow-lg text-center"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[240px] object-cover rounded-xl mb-4"
      />
      <h3 className="text-white text-lg font-semibold">{name}</h3>
      <p className="text-stone-400 text-sm">{role}</p>
    </motion.div>
  );
};

const OurExperts = () => {
  return (
    <section className="py-16  text-white">
      <Container>
        <h2 className="text-center mb-12 text-3xl sm:text-4xl md:text-5xl text-neutral-50 xs:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold Container uppercase leading-tight -mt-12">
          Meet Our Experts
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {experts.map((expert, idx) => (
            <ExpertCard
              key={idx}
              name={expert.name}
              role={expert.role}
              image={expert.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurExperts;
