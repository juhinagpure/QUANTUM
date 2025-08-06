import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TopStories = () => {
  const technologyStories = [
    "GTA 6 at 60 FPS? Only PS5 Pro may unlock the ultimate gaming experience",
    "Perplexity CEO to youngsters: Spend less time on instagram and more on AI Tools",
    "How Apple trains its large language models without any data scraping",
    "Wiz Research discovered a critical Container escape vulnerability in the NVIDIA Container Toolkit",
    "Turn Off Your Phone If You Don't Want To Kill Focus: Former Google CEO Eric Schmidt",
  ];

  const generalStories = [
    "Japan Prime Minister Shigeru Ishiba May Quit After Poll Debacle",
    "Trump announces trade deal with Japan including 15% tariff",
    "Talent winning out at Indian gaming companies as focus shifts to high-end titles",
    "Earth will spin faster on 22 July to create 2nd-shortest day in history",
    "Fire still burns as Venus Williams becomes oldest WTA match-winner since 2004",
  ];

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 min-h-screen mt-12">
      {/* Top Stories Header */}
      <div className="w-full px-6 py-2 border-l-[3px] border-cyan-400 inline-flex justify-start items-center gap-3.5 mb-6">
        <div className="justify-start text-neutral-50 text-2xl sm:text-4xl font-medium font-sans uppercase leading-tight tracking-wide">
          Top Stories
        </div>
        <div className="flex-1 h-[3px] relative">
          <div className="w-full h-[3px] bg-gradient-to-r from-stone-500 to-stone-900/0" />
        </div>
      </div>

      {/* Technology Stories Row */}
      <div className="w-full mb-12">
        <ScrollableStories stories={technologyStories} />
      </div>

      {/* General News Header */}
      <div className="w-full px-6 py-2 border-l-[3px] border-cyan-400 inline-flex justify-start items-center gap-3.5 mb-6">
        <div className="justify-start text-neutral-50 text-xl sm:text-3xl font-medium font-sans uppercase leading-tight tracking-wide">
          General News
        </div>
        <div className="flex-1 h-[3px] relative">
          <div className="w-full h-[3px] bg-gradient-to-r from-stone-500 to-stone-900/0" />
        </div>
      </div>

      {/* General Stories Row */}
      <div className="w-full">
        <ScrollableStories stories={generalStories} />
      </div>
    </div>
  );
};

const ScrollableStories = ({ stories }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [showIndicators, setShowIndicators] = useState(false);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      setShowIndicators(scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    checkScrollability();
    const handleResize = () => checkScrollability();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group">
      {/* Left Scroll Indicator */}
      {showIndicators && canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center">
          <button
            onClick={() => scroll("left")}
            className="ml-2 p-2 bg-black/70 hover:bg-black/90 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 text-cyan-400" />
          </button>
          <div className="w-8 h-full pointer-events-none" />
        </div>
      )}

      {/* Right Scroll Indicator */}
      {showIndicators && canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center justify-end group">
          <div className="w-8 h-full pointer-events-none" />
          <button
            onClick={() => scroll("right")}
            className="mr-2 p-2 bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 text-cyan-400" />
          </button>
        </div>
      )}

      {/* Stories Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
        onScroll={checkScrollability}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitScrollbar: { display: "none" },
        }}
      >
        {stories.map((story, index) => (
          <StoryCard key={index} title={story} />
        ))}
      </div>

      {/* Bottom Scroll Dots Indicator */}
      {showIndicators && (
        <div className="flex justify-center mt-4 space-x-2">
          <div className="flex space-x-1">
            {[...Array(Math.ceil(stories.length / 3))].map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-stone-600 opacity-50"
              />
            ))}
            <div
              className="w-2 h-2 rounded-full bg-cyan-400 absolute transition-transform duration-300"
              style={{
                transform: `translateX(${
                  Math.floor((scrollRef.current?.scrollLeft || 0) / 300) * 12
                }px)`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const StoryCard = ({ title }) => {
  return (
    <div className="w-72 flex-shrink-0 relative group cursor-pointer">
      <div className="relative">
        <div className="w-72 h-96 rounded-[36px] overflow-hidden">
          <img
            className="w-full h-full object-cover border-[3px] border-zinc-800 rounded-[36px]"
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=500&fit=crop&crop=center"
            alt="News story"
          />
        </div>

        <div className="absolute inset-0 w-72 h-96 px-5 py-12 bg-gradient-to-b from-neutral-900/0 to-neutral-900/60 rounded-[36px] border-[3px] border-zinc-800 backdrop-blur-[5px] flex flex-col justify-end items-center gap-2">
          <div className="w-64 text-center">
            <div className="text-neutral-50 text-base font-medium font-sans leading-normal tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
              {title}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-[36px] border-[3px] border-transparent group-hover:border-cyan-400 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default TopStories;
