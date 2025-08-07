import { useState } from "react";
import arrow from "../../../assets/SeoAssets/arrow.svg"; // Adjust path if needed
import Container from "../../Container";

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO results typically take 3 to 6 months to become noticeable. It depends on your competition, website history, and content quality. Consistency and strategy play a key role.",
  },
  {
    question: "Can you guarantee #1 ranking on Google?",
    answer:
      "No agency can guarantee #1 ranking due to ever-changing algorithms. We focus on sustainable strategies that increase visibility and traffic. Our goal is long-term success, not quick hacks.",
  },
  {
    question: "Do you work with local SEO or only global?",
    answer:
      "We specialize in both local and global SEO strategies. Whether you're targeting your city or the world, we tailor campaigns accordingly. Local listings, map packs, and keywords are handled in detail.",
  },
  {
    question: "Will you provide SEO reports?",
    answer:
      "Yes, we provide monthly SEO performance reports. These include traffic stats, keyword rankings, and improvement suggestions. Transparency is part of our process.",
  },
  {
    question: "Do you optimize for mobile SEO?",
    answer:
      "Absolutely! Mobile SEO is crucial in today’s digital space. We ensure fast loading, mobile-friendly layouts, and optimized content. Your site will perform well on all devices.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mt-20">
      <Container>
        <div className="w-full flex flex-col items-start gap-14">
          {/* Heading */}
          <div className="w-full flex flex-col items-center gap-4">
            <h2 className="text-center text-neutral-50 text-4xl md:text-6xl font-bold  uppercase">
              FAQ
            </h2>
            <div className="w-full h-[3px] bg-gradient-to-r from-stone-900 via-stone-500 to-stone-900" />
          </div>

          {/* FAQ List */}
          <div className="w-full flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="w-full px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-9 rounded-[36px] shadow-[0px_5px_16px_0px_rgba(8,15,52,0.06)] outline outline-2 outline-offset-[-2px] outline-stone-500 flex flex-col gap-4 transition-all duration-300 ease-in-out"
              >
                {/* Question */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="text-neutral-50 text-lg sm:text-xl md:text-2xl font-medium Container tracking-wide">
                    {faq.question}
                  </div>

                  {/* Arrow Image (rotates on open) */}
                  <img
                    src={arrow}
                    alt="Toggle"
                    className={`w-10 h-10 md:w-[60px] md:h-[60px] transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Answer */}
                {activeIndex === index && (
                  <div className="text-neutral-300 Container mt-2 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQSection;
