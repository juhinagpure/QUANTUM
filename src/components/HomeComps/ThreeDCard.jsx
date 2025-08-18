/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const ThreeDCard = () => {
  // ✅ Random Image APIs
  const randomImg = `https://picsum.photos/400/500?random=${Math.floor(
    Math.random() * 1000
  )}`;

  return (
    <motion.div
      className="relative w-[300px] h-[400px] rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
      whileHover={{
        rotateX: 10,
        rotateY: -10,
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {/* Random API Image */}
      <img
        src={randomImg}
        alt="Random"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute bottom-0 w-full p-5 bg-black/40 backdrop-blur-md">
        <h2 className="text-cyan-400 text-2xl font-bold">Creative Design</h2>
        <p className="text-gray-200 text-sm mt-2">
          Blending innovation with technology.
        </p>
      </div>
    </motion.div>
  );
};

export default ThreeDCard;
