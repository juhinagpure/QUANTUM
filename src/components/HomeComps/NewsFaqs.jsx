import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Container from "../container";


const newsData = [
  {
    id: 1,
    title: "Introducing AI Chat 1",
    description:
      "We turn designs into functional, high-performing digital products using the latest technologies.",
    image: "Home/Aichat1.jpeg",
  },
  {
    id: 2,
    title: "Introducing AI Chat 2",
    description:
      "We turn designs into functional, high-performing digital products using the latest technologies.",
    image: "Home/Aichat2.jpg",
  },
  {
    id: 3,
    title: "Introducing AI Chat 3",
    description:
      "We turn designs into functional, high-performing digital products using the latest technologies.",
    image: "Home/Aichat3.jpg",
  },
  {
    id: 4,
    title: "Introducing AI Chat 4",
    description:
      "We turn designs into functional, high-performing digital products using the latest technologies.",
    image: "Home/Aichat4.jpg",
  },
  {
    id: 5,
    title: "Introducing AI Chat 5",
    description:
      "We turn designs into functional, high-performing digital products using the latest technologies.",
    image: "Home/Aichat5.jpg",
  },
  {
    id: 6,
    title: "Introducing AI Chat 6",
    description:
      "We turn designs into functional, high-performing digital products using the latest technologies.",
    image: "Home/Aichat5.jpg",
  },
];

const faqData = [
  {
    question: "What makes NKB Quantam Lab different from other agencies?",
    answer:
      "We blend innovation with performance to deliver unique digital solutions tailored to your business needs.",
  },
  {
    question: "Do you offer personalised solutions for every business?",
    answer:
      "Yes, we customize our services based on each client's specific goals, industry, and audience.",
  },
  {
    question: "What kind of support do you provide after project completion?",
    answer:
      "We provide continuous support, maintenance, and updates to ensure your product stays relevant and effective.",
  },
  {
    question: "What if I face issues or need changes later?",
    answer:
      "You can reach out anytime, and we'll assist with updates, bug fixes, or enhancements promptly.",
  },
  {
    question: "Do you offer training or documentation?",
    answer:
      "Yes, we provide comprehensive documentation and training sessions for your team to use the product efficiently.",
  },
];

const NewsFaqSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1440) {
        setCardsPerPage(3);
      } else if (width >= 768) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(1);
      }
      setStartIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (startIndex + cardsPerPage < newsData.length) {
      setStartIndex(startIndex + cardsPerPage);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    } else {
      const newStartIndex = Math.max(0, newsData.length - cardsPerPage);
      setStartIndex(newStartIndex);
    }
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleNews = newsData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <Container>
      <div className="text-white px-4 sm:px-6 lg:px-16 py-10 font-sans space-y-20">
        {/* LATEST NEWS SECTION */}
        <section className="space-y-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] 2xl:text-[56px] font-bold leading-tight tracking-[-0.02em] uppercase mb-2 whitespace-nowrap">
              LATEST NEWS
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-[75px]">
              <button className="px-6 py-4 w-44 bg-white text-black rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-white transition duration-300">
                View All
              </button>
              <div className="flex gap-4">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full border border-white transition hover:bg-white/10 ${
                    startIndex === 0
                      ? "opacity-30 pointer-events-none"
                      : "cursor-pointer"
                  }`}
                  onClick={handlePrev}
                >
                  <FaArrowLeft className="text-3xl hover:text-[#ffc65c]" />
                </div>
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full border border-white transition hover:bg-white/10 ${
                    startIndex + cardsPerPage >= newsData.length
                      ? "opacity-30 pointer-events-none"
                      : "cursor-pointer"
                  }`}
                  onClick={handleNext}
                >
                  <FaArrowRight className="text-3xl hover:text-[#ffc65c]" />
                </div>
              </div>
            </div>
          </div>

          <span className="block mt-1 h-[2px] w-full bg-gradient-to-r from-white via-white/50 to-white/10 animate-shine" />

          {/* NEWS CARDS */}
          <div className="relative">
            {/* Mobile Cards */}
            <div className="flex lg:hidden w-full">
              {visibleNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#171717] border border-[#322B2B] rounded-[30px] p-4 w-full max-w-[400px] mx-auto hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl h-[220px] w-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-md text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Desktop Cards */}
            <div className="hidden lg:flex w-full gap-6">
              {visibleNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#171717] border border-[#322B2B] rounded-[30px] p-4 flex-1 min-w-0 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl h-[220px] w-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-md text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Mobile/Tablet Navigation */}
            <div className="flex lg:hidden items-center justify-center gap-6 mt-8">
              <button className="px-4 py-2 w-32 bg-white text-black rounded-full text-sm font-medium hover:bg-cyan-400 hover:text-white transition duration-300">
                View All
              </button>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full border border-white transition hover:bg-white/10 ${
                    startIndex === 0
                      ? "opacity-30 pointer-events-none"
                      : "cursor-pointer"
                  }`}
                  onClick={handlePrev}
                >
                  <FaArrowLeft className="text-base hover:text-[#ffc65c]" />
                </div>
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full border border-white transition hover:bg-white/10 ${
                    startIndex + cardsPerPage >= newsData.length
                      ? "opacity-30 pointer-events-none"
                      : "cursor-pointer"
                  }`}
                  onClick={handleNext}
                >
                  <FaArrowRight className="text-base hover:text-[#ffc65c]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="space-y-8">
          <div>
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] 2xl:text-[56px] font-bold leading-tight tracking-[-0.02em] uppercase mb-2 whitespace-nowrap">
              FAQ'S
            </h1>

            <span className="block mt-1 h-[2px] w-full bg-gradient-to-r from-white via-white/50 to-white/10 animate-shine" />
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#666666] rounded-3xl bg-[#171717] overflow-hidden transition"
              >
                <div
                  className="flex justify-between items-center px-4 sm:px-6 py-6 sm:py-8 cursor-pointer hover:bg-[#1a1a1a] transition"
                  onClick={() => toggleFaq(idx)}
                >
                  <p className="text-base sm:text-lg md:text-xl font-medium">
                    {faq.question}
                  </p>
                  {openIndex === idx ? (
                    <FiChevronDown className="text-xl sm:text-2xl" />
                  ) : (
                    <FiChevronRight className="text-xl sm:text-2xl" />
                  )}
                </div>

                {openIndex === idx && (
                  <div className="px-4 sm:px-6 pb-4 text-sm text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
};

export default NewsFaqSection;
