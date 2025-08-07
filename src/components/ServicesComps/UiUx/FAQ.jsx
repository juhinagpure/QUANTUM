import { useState } from "react";
import arrow from "../../../assets/SeoAssets/arrow.svg"; // Adjust path if needed
import Container from "../../Container";

const faqs = [
  {
    question: "What is the difference between UI/UX Design?",
    answer:
      "UI focuses on the visual elements like layout and colors. UX is about the user’s journey and overall experience. Together, they create a seamless product.",
  },
  {
    question: "Do we create wireframes and prototypes?",
    answer:
      "Yes, we create detailed wireframes and interactive prototypes. These help visualize the design and user flow. It ensures clarity before development begins.",
  },
  {
    question: "Can you redesign my existing app/website?",
    answer:
      "Absolutely! We can revamp your current website or app. Our team enhances both visual appeal and user experience. We focus on modern, responsive design.",
  },
  {
    question: "Will the design be responsive for mobile and tablet?",
    answer:
      "Yes, all our designs are fully responsive. They adapt beautifully across mobile, tablet, and desktop screens. User experience is consistent on all devices.",
  },
  {
    question: "How long does a UI/UX design project take?",
    answer:
      "It depends on the project scope and requirements. On average, it takes 2 to 6 weeks. We ensure timely delivery without compromising quality.",
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
