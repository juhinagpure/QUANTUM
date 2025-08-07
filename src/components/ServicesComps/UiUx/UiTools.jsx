import AI from "../../../assets/uiuxAssets/AI.png";
import figma from "../../../assets/uiuxAssets/figma.png";
import framer from "../../../assets/uiuxAssets/framer.png";
import inLogo from "../../../assets/uiuxAssets/in.png";
import maze from "../../../assets/uiuxAssets/maze.png";
import miro from "../../../assets/uiuxAssets/miro.png";

const UiTools = () => {
  const tools = [
    { src: figma, alt: "Figma" },
    { src: AI, alt: "Adobe Illustrator" },
    { src: framer, alt: "Framer" },
    { src: miro, alt: "Miro" },
    { src: maze, alt: "Maze" },
    { src: inLogo, alt: "LinkedIn" },
  ];

  return (
    <div className="w-full px-4 py-12 sm:px-12 sm:pt-16 rounded-[36px] flex flex-col items-center gap-14 sm:gap-16 -mt-12">
      {/* Title */}
      <div className="text-center text-neutral-50 text-4xl sm:text-5xl md:text-6xl font-bold uppercase font-['IBM_Plex_Sans_Condensed']">
        Tools we use
      </div>

      {/* Gradient Line */}
      <div className="w-full h-[3px] bg-gradient-to-r from-zinc-800 via-stone-500 to-zinc-800" />

      {/* Tools Grid */}
      <div className="w-full max-w-[1240px] grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6 place-items-center">
        {tools.map((tool, i) => (
          <img
            key={i}
            src={tool.src}
            alt={tool.alt}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 object-contain rounded-[24px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:rotate-[1.5deg]"
          />
        ))}
      </div>
    </div>
  );
};

export default UiTools;
