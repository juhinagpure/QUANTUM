import { useRef } from "react";
import Container from "../Container";

const Hero = () => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const ContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !ContainerRef.current) return;

    const ContainerRect = ContainerRef.current.getBoundingClientRect();
    const x = e.clientX - ContainerRect.left;
    const y = e.clientY - ContainerRect.top;
    const centerX = ContainerRect.width / 2;
    const centerY = ContainerRect.height / 2;

    const rotateY = (x - centerX) / 10;
    const rotateX = (centerY - y) / 10;
    const scale = 1.05;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(${scale})
    `;

    if (glowRef.current) {
      glowRef.current.style.opacity = "0.4";
      glowRef.current.style.transform = `
        translate(${rotateY * 5}px, ${-rotateX * 5}px)
        translateZ(-10px)
      `;
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(0)
      rotateY(0)
      scale(1)
    `;

    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
      glowRef.current.style.transform = "translate(0, 0)";
    }
  };

  return (
    <Container>
      <section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-12 py-10">
          {/* Left Text */}
          <div className="flex-1 min-w-[280px] text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Service <br /> Beyond <br /> Standards
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-md mb-6 leading-relaxed mx-auto lg:mx-0">
              We blend creativity, technology, and strategy to deliver powerful
              digital solutions.
            </p>
            <button className="bg-cyan-300 transition text-black px-6 py-3 text-lg rounded-full font-semibold hover:bg-cyan-400">
              Explore Services
            </button>
          </div>

          {/* Center Image with 3D Effect */}
          <div
            ref={ContainerRef}
            className="flex-1 flex justify-center items-center relative min-w-[280px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full max-w-[600px] md:max-w-[600px]">
              <img
                ref={cardRef}
                src="Home/card.png"
                alt="NKB Quantum Labs"
                className="rounded-xl w-full h-auto object-contain transition-all duration-300 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              />
              <div
                ref={glowRef}
                className="absolute inset-0 -z-10 rounded-xl opacity-0 transition-all duration-500 pointer-events-none"
                style={{
                  background: "transparent",
                  filter: "blur(25px)",
                  transform: "translateZ(-10px)",
                  willChange: "opacity, transform",
                }}
              />
            </div>
          </div>

          {/* Right Stats */}
          <div className="flex-1 text-center lg:text-right space-y-8 min-w-[200px]">
            <div>
              <p className="text-3xl lg:text-5xl font-bold">45+</p>
              <p className="text-gray-300 text-lg">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl lg:text-5xl font-bold">74+</p>
              <p className="text-gray-300 text-lg">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl lg:text-5xl font-bold">15+</p>
              <p className="text-gray-300 text-lg">Industries Served</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
