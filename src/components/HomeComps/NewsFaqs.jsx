import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Container from "../Container";

const faqData = [
  {
    question: "What makes NKB Quantam Lab different from other agencies?",
    answer:
      "At NKB Quantum Lab, we don’t just deliver services—we craft digital experiences. Our unique blend of innovation, data-driven strategies, and creative design ensures that every solution is not only effective but also tailored to set your business apart from the competition.",
  },
  {
    question: "Do you offer personalised solutions for every business?",
    answer:
      "Absolutely! Every business is unique, and so are its challenges. We take the time to understand your goals, target audience, and industry landscape, then build strategies and solutions that are specifically designed to help you succeed.",
  },
  {
    question: "What kind of support do you provide after project completion?",
    answer:
      "Our work doesn’t end at delivery. We offer ongoing support, regular maintenance, and timely updates to keep your product secure, functional, and aligned with the latest trends—ensuring long-term success and peace of mind.",
  },
  {
    question: "What if I face issues or need changes later?",
    answer:
      "No worries! You can reach out to us anytime. Whether it’s bug fixes, design tweaks, or feature enhancements, we’re committed to providing quick resolutions and continuous improvements whenever you need them.",
  },
  {
    question: "Do you offer training or documentation?",
    answer:
      "Yes, we make sure you and your team feel confident using the product. Along with detailed documentation, we also provide step-by-step training sessions so your team can manage, update, and scale the solution with ease.",
  },
];


const NewsFaqSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllNews, setShowAllNews] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=8ada7e0140354834baea55dfbd9c3c72"
        );
        const data = await response.json();
        if (data.articles) {
          // Filter out articles without images and format the data
          const formattedNews = data.articles
            .filter(article => article.urlToImage)
            .map((article, index) => ({
              id: index,
              title: article.title,
              description: article.description || "No description available",
              image: article.urlToImage,
              url: article.url
            }));
          setNewsData(formattedNews);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        // Fallback data in case API fails
        setNewsData([
          {
            id: 1,
            title: "Technology News Update",
            description: "Stay tuned for the latest in technology news and updates.",
            image: "https://via.placeholder.com/400x220?text=Tech+News",
            url: "#"
          },
          {
            id: 2,
            title: "Innovations in AI",
            description: "Discover the latest advancements in artificial intelligence.",
            image: "https://via.placeholder.com/400x220?text=AI+News",
            url: "#"
          },
          {
            id: 3,
            title: "Tech Industry Trends",
            description: "Learn about the current trends shaping the technology industry.",
            image: "https://via.placeholder.com/400x220?text=Tech+Trends",
            url: "#"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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

  const handleViewAll = () => {
    setShowAllNews(!showAllNews);
  };

  const visibleNews = showAllNews ? newsData : newsData.slice(startIndex, startIndex + cardsPerPage);

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
              <button 
                className="px-6 py-4 w-44 bg-white text-black rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-white transition duration-300"
                onClick={handleViewAll}
              >
                {showAllNews ? "Show Less" : "View All"}
              </button>
              {!showAllNews && (
                <div className="flex gap-4">
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-full border border-white transition hover:bg-white/10 ${
                      startIndex === 0 || loading
                        ? "opacity-30 pointer-events-none"
                        : "cursor-pointer"
                    }`}
                    onClick={handlePrev}
                  >
                    <FaArrowLeft className="text-3xl hover:text-[#ffc65c]" />
                  </div>
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-full border border-white transition hover:bg-white/10 ${
                      (startIndex + cardsPerPage >= newsData.length) || loading
                        ? "opacity-30 pointer-events-none"
                        : "cursor-pointer"
                    }`}
                    onClick={handleNext}
                  >
                    <FaArrowRight className="text-3xl hover:text-[#ffc65c]" />
                  </div>
                </div>
              )}
            </div>
          </div>

          <span className="block mt-1 h-[2px] w-full bg-gradient-to-r from-white via-white/50 to-white/10 animate-shine" />

          {/* NEWS CARDS */}
          <div className="relative">
            {loading ? (
              <div className="flex gap-6">
                {[...Array(cardsPerPage)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-[#171717] border border-[#322B2B] rounded-[30px] p-4 flex-1 min-w-0 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition duration-300"
                  >
                    <div className="animate-pulse">
                      <div className="rounded-xl h-[220px] w-full bg-gray-700 mb-4"></div>
                      <div className="h-6 bg-gray-700 rounded mb-2 w-3/4"></div>
                      <div className="h-4 bg-gray-700 rounded w-full"></div>
                      <div className="h-4 bg-gray-700 rounded w-5/6 mt-2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {/* Mobile Cards */}
                <div className={`${showAllNews ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex lg:hidden w-full'}`}>
                  {visibleNews.map((item) => (
                    <div
                      key={item.id}
                      className={`bg-[#171717] border border-[#322B2B] rounded-[30px] p-4 ${showAllNews ? '' : 'w-full max-w-[400px] mx-auto'} hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition duration-300`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-xl h-[220px] w-full object-cover mb-4"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x220?text=News+Image";
                        }}
                      />
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-md text-gray-400">{item.description}</p>
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline mt-2 inline-block"
                      >
                        Read more
                      </a>
                    </div>
                  ))}
                </div>

                {/* Desktop Cards - Only shown when not in "View All" mode */}
                {!showAllNews && (
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
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/400x220?text=News+Image";
                          }}
                        />
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-md text-gray-400">{item.description}</p>
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:underline mt-2 inline-block"
                        >
                          Read more
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Mobile/Tablet Navigation */}
            <div className="flex lg:hidden items-center justify-center gap-6 mt-8">
              <button 
                className="px-4 py-2 w-32 bg-white text-black rounded-full text-sm font-medium hover:bg-cyan-400 hover:text-white transition duration-300"
                onClick={handleViewAll}
              >
                {showAllNews ? "Show Less" : "View All"}
              </button>
              {!showAllNews && (
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full border border-white transition hover:bg-white/10 ${
                      startIndex === 0 || loading
                        ? "opacity-30 pointer-events-none"
                        : "cursor-pointer"
                    }`}
                    onClick={handlePrev}
                  >
                    <FaArrowLeft className="text-base hover:text-[#ffc65c]" />
                  </div>
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full border border-white transition hover:bg-white/10 ${
                      (startIndex + cardsPerPage >= newsData.length) || loading
                        ? "opacity-30 pointer-events-none"
                        : "cursor-pointer"
                    }`}
                    onClick={handleNext}
                  >
                    <FaArrowRight className="text-base hover:text-[#ffc65c]" />
                  </div>
                </div>
              )}
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
          {/* Added padding-right to prevent overlap */}
          <p className="text-base sm:text-lg md:text-xl font-medium pr-4 sm:pr-6">
            {faq.question}
          </p>

          {openIndex === idx ? (
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-500 shrink-0">
              <FiChevronDown className="text-lg sm:text-xl" />
            </div>
          ) : (
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-500 shrink-0">
              <FiChevronRight className="text-lg sm:text-xl" />
            </div>
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