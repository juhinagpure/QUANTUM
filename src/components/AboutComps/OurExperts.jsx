// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import Container from "../Container";

// Import your local images
import AmanImg from "../../assets/Experts/Aman.jpg";
import AryanImg from "../../assets/Experts/Aryan.jpg";
import AshwetImg from "../../assets/Experts/Ashwet.jpg";
import AyushiImg from "../../assets/Experts/Ayushi.jpg";
import HarshalImg from "../../assets/Experts/Harshal.jpg";
import Juhi1Img from "../../assets/Experts/Juhi1.jpg";
import OmImg from "../../assets/Experts/Om.jpg";
import PoojaImg from "../../assets/Experts/pooja.jpg";
import SachinImg from "../../assets/Experts/Sachin.jpg";
import ShriImg from "../../assets/Experts/Shri.jpg";
import SuhasImg from "../../assets/Experts/Suhas.jpg";
import VaibhavImg from "../../assets/Experts/Vaibhav.jpg";

const experts = [
  {
    name: "Aryan Ganeshkar",
    role: "Backend Developer",
    image: AryanImg,
    linkedin: "https://www.linkedin.com/in/aryan-ganeshkar-62a1a7277/",
  },
  {
    name: "Harshal Khapekar",
    role: "Backend Developer",
    image: HarshalImg,
    linkedin: "https://www.linkedin.com/in/harshal-khapekar-99418225b/",
  },
  {
    name: "Ashwet Harde",
    role: "Full-stack Developer",
    image: AshwetImg,
    linkedin: "https://www.linkedin.com/in/ashwetharde/",
  },
  {
    name: "Ayushi Bansod",
    role: "Frontend Developer",
    image: AyushiImg,
    linkedin: "https://www.linkedin.com/in/ayushibansod/",
  },
  {
    name: "Juhi Nagpure",
    role: "Frontend Developer",
    image: Juhi1Img,
    linkedin: "https://www.linkedin.com/in/juhi-nagpure-38108b21b/",
  },
  {
    name: "Om Devangan",
    role: "Frontend Developer",
    image: OmImg,
    linkedin: "https://www.linkedin.com/in/omkumar-devangan-47b273316/",
  },
  {
    name: "Vaibhav Hedaoo",
    role: "UI/UX Designer",
    image: VaibhavImg,
    linkedin: "https://www.linkedin.com/in/vaibhavhedaoo06/",
  },
  {
    name: "Sachin Chaurasiya",
    role: "Frontend Developer",
    image: SachinImg,
    linkedin: "https://www.linkedin.com/in/sachinchaurasiya434/",
  },
  {
    name: "Aman Sharma",
    role: "Backend Developer",
    image: AmanImg,
    linkedin: "https://www.linkedin.com/in/aman-sharma09/",
  },
  {
    name: "Pooja Biswas",
    role: "Social Media Manager",
    image: PoojaImg,
    linkedin: "https://linkedin.com/in/pooja",
  },
  {
    name: "Shri Sarkar",
    role: "Copywriter",
    image: ShriImg,
    linkedin: "https://linkedin.com/in/shri",
  },
  {
    name: "Suhas Shangrapawar",
    role: "Hiring Manager",
    image: SuhasImg,
    linkedin: "https://linkedin.com/in/suhas",
  },
];

const ExpertCard = ({ name, role, image, linkedin }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[260px] bg-zinc-800 rounded-3xl p-6 shadow-lg text-center"
    >
      <div className="flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-cover rounded-full mb-4 ring-4 ring-cyan-400 ring-offset-2 ring-offset-zinc-800 shadow-[0_0_15px_#22d3ee]"
        />
      </div>

      {/* Name + LinkedIn */}
      <div className="flex items-center justify-center gap-2 mb-1">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300"
          >
            <FaLinkedin size={20} />
          </a>
        )}
      </div>

      <p className="text-stone-400 text-sm">{role}</p>
    </motion.div>
  );
};

const OurExperts = () => {
  return (
    <section className="py-16 text-white">
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
              linkedin={expert.linkedin}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurExperts;
