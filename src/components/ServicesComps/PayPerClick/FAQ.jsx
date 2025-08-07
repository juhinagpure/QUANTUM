import { useState } from "react";
import arrow from "../../../assets/SeoAssets/arrow.svg"; // Adjust path if needed
import Container from "../../Container";

const faqs = [
  {
    question: "How soon will I see results from PPC?",
    answer:
      "PPC results are usually quick—you can start seeing traffic as soon as your ads go live. However, optimizing for the best ROI may take a few weeks of testing and adjusting.",
  },
  {
    question: "What platforms do you run PPC on?",
    answer:
      "We run PPC campaigns on platforms like Google Ads, Facebook, Instagram, LinkedIn, and YouTube—depending on where your target audience spends time.",
  },
  {
    question: "Do you provide performance reports?",
    answer:
      "Yes, we provide detailed performance reports that include ad spend, clicks, conversions, CTR, and suggestions for improving campaign performance.",
  },
  {
    question: "Is there a minimum budget required?",
    answer:
      "While there's no fixed minimum, we recommend a starting budget based on your goals and industry competitiveness. Typically, a budget of ₹10,000 to ₹30,000/month is a good starting point.",
  },
  {
    question: "How long does it take to see results from a PPC campaign?",
    answer:
      "You can begin seeing traffic almost immediately after launch, but achieving optimal performance may take 2-4 weeks of A/B testing and fine-tuning the campaign.",
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
