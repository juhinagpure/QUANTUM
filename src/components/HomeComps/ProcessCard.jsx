import { useEffect, useRef, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import Container from "../Container";

const processSteps = [
  {
    id: 1,
    title: "Discover",
    description:
      "We dive deep to understand your goals, audience, and challenges through research and collaboration.",
  },
  {
    id: 2,
    title: "Define",
    description:
      "We outline the project scope, set clear objectives, and build a roadmap tailored to your vision.",
  },
  {
    id: 3,
    title: "Design",
    description:
      "Our creative team brings ideas to life with intuitive UI/UX designs and engaging visuals.",
  },
  {
    id: 4,
    title: "Develop",
    description:
      "We turn designs into functional, high-performing digital products using the latest technologies.",
  },
  {
    id: 5,
    title: "Deploy",
    description:
      "After rigorous testing, we launch your project smoothly across platforms with full support.",
  },
  {
    id: 6,
    title: "Deliver",
    description:
      "We ensure everything runs perfectly and provide ongoing optimization for lasting success.",
  },
  // {
  //   id: 7,
  //   title: "Deploy",
  //   description: "After rigorous testing, we launch your project smoothly across platforms with full support."
  // },
  // {
  //   id: 8,
  //   title: "Deliver",
  //   description: "We ensure everything runs perfectly and provide ongoing optimization for lasting success."
  // },
];

const Card = ({ id, title, description }) => {
  return (
    <div className="text-white border border-[#322B2B] rounded-[36px] p-6 sm:p-8 md:p-9 w-full h-auto flex-shrink-0">
      <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold opacity-30 mb-2">
        {id}.
      </h1>
      <p className="text-2xl md:text-3xl font-semibold mb-3">{title}</p>
      <p className="text-base md:text-lg text-white font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ProcessCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const dotsToShow = 6;

  const getVisibleDots = () => {
    const totalCards = processSteps.length;
    let startDot = 0;
    let endDot = Math.min(dotsToShow - 1, totalCards - 1);

    if (totalCards > dotsToShow) {
      if (activeIndex > dotsToShow - 3) {
        startDot = Math.min(activeIndex - 2, totalCards - dotsToShow);
        endDot = startDot + dotsToShow - 1;
      }
    }

    return { startDot, endDot };
  };

  const { startDot, endDot } = getVisibleDots();

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const Container = scrollRef.current;
    const cardWidth = Container.offsetWidth;
    Container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const Container = scrollRef.current;
    const cardWidth = Container.offsetWidth;
    const scrollPosition = Container.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const Container = scrollRef.current;
    if (!Container) return;

    Container.addEventListener("scroll", handleScroll);
    return () => Container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <div className="w-full text-white">
        <div className="w-full max-w-[1400px] mx-auto py-10 px-4">
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] 2xl:text-[56px] font-bold leading-tight tracking-[-0.02em] uppercase mb-2 whitespace-nowrap">
            OUR 6-D PROCESS
          </h1>

          <span className="block mt-1 mb-6 h-[2px] w-full bg-gradient-to-r from-white via-white/50 to-white/10 animate-shine" />

          {/* Mobile swipe layout */}
          <div className="block md:hidden">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory w-full no-scrollbar"
              style={{
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="w-full flex-shrink-0 snap-center px-2"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <Card {...step} />
                </div>
              ))}
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-[2px] mt-5">
              {Array.from({
                length: Math.min(dotsToShow, processSteps.length),
              }).map((_, index) => {
                const dotIndex = startDot + index;
                const isActive = activeIndex === dotIndex;
                return (
                  <button
                    key={dotIndex}
                    onClick={() => scrollToCard(dotIndex)}
                    className="p-[2px] focus:outline-none"
                  >
                    <RxDotFilled
                      className={`text-xl transition-colors duration-300 ${
                        isActive ? "text-blue-400" : "text-white/30"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {processSteps.map((step) => (
              <Card key={step.id} {...step} />
            ))}
          </div>
        </div>

        <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
          background: transparent;
        }
      `}</style>
      </div>
    </Container>
  );
};

export default ProcessCard;
