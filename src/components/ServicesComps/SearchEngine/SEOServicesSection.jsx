// import Container from "../../Container"; // adjust the path if needed

// const DesignBenefits = () => {
//   return (
//     <div className="mt-20">
//       <Container>
//         <div className="w-full flex flex-wrap justify-center gap-4">
//           {/* Row 1: Image | Text | Image | Text */}
//           <div className="w-[300px] h-[300px]">
//             <img
//               className="w-full h-full rounded-3xl border-2 border-stone-500 object-cover"
//               src="https://plus.unsplash.com/premium_photo-1661762710287-27923a334564?w=600&auto=format&fit=crop&q=60"
//               alt="First Impression"
//             />
//           </div>

//           <div className="w-[300px] h-[300px] px-6 py-6 bg-zinc-800 rounded-3xl outline outline-2 outline-offset-[-2px] outline-stone-500 flex flex-col justify-center items-start">
//             <h3 className="text-neutral-50 text-xl font-bold mb-2">
//               First Impression Counts
//             </h3>
//             <p className="text-neutral-50 text-sm">
//               94% of first impressions are design-related.
//             </p>
//           </div>

//           <div className="w-[300px] h-[300px]">
//             <img
//               className="w-full h-full rounded-3xl border-2 border-stone-500 object-cover"
//               src="https://plus.unsplash.com/premium_photo-1661632329237-c3181a43fe88?w=600&auto=format&fit=crop&q=60"
//               alt="Better Conversion"
//             />
//           </div>

//           <div className="w-[300px] h-[300px] px-6 py-6 bg-zinc-800 rounded-3xl outline outline-2 outline-offset-[-2px] outline-stone-500 flex flex-col justify-center items-start">
//             <h3 className="text-neutral-50 text-xl font-bold mb-2">
//               Better Conversion
//             </h3>
//             <p className="text-neutral-50 text-sm">
//               Great design improves user trust and boosts conversion rates.
//             </p>
//           </div>

//           {/* Row 2: Text | Image | Text | Image */}
//           <div className="w-[300px] h-[300px] px-6 py-6 bg-zinc-800 rounded-3xl outline outline-2 outline-offset-[-2px] outline-stone-500 flex flex-col justify-center items-start">
//             <h3 className="text-neutral-50 text-xl font-bold mb-2">
//               Lower Bounce Rates
//             </h3>
//             <p className="text-neutral-50 text-sm">
//               Intuitive interfaces keep users engaged longer.
//             </p>
//           </div>

//           <div className="w-[300px] h-[300px]">
//             <img
//               className="w-full h-full rounded-3xl border-2 border-stone-500 object-cover"
//               src="https://plus.unsplash.com/premium_photo-1661611565504-61ae8325d069?w=600&auto=format&fit=crop&q=60"
//               alt="Lower Bounce Rates"
//             />
//           </div>

//           <div className="w-[300px] h-[300px] px-6 py-6 bg-zinc-800 rounded-3xl outline outline-2 outline-offset-[-2px] outline-stone-500 flex flex-col justify-center items-start">
//             <h3 className="text-neutral-50 text-xl font-bold mb-2">
//               Fewer Support Queries
//             </h3>
//             <p className="text-neutral-50 text-sm">
//               Simple flows mean less confusion and more satisfaction.
//             </p>
//           </div>

//           <div className="w-[300px] h-[300px]">
//             <img
//               className="w-full h-full rounded-3xl border-2 border-stone-500 object-cover"
//               src="https://plus.unsplash.com/premium_photo-1664297560573-b31a89601583?w=600&auto=format&fit=crop&q=60"
//               alt="Fewer Support Queries"
//             />
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default DesignBenefits;

import { useEffect, useState } from "react";
import Container from "../../Container";

const DesignBenefits = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      type: "image",
      src: "https://plus.unsplash.com/premium_photo-1661762710287-27923a334564?w=600",
    },
    {
      type: "text",
      title: "First Impression",
      desc: "94% of first impressions are design-related.",
    },
    {
      type: "image",
      src: "https://plus.unsplash.com/premium_photo-1661632329237-c3181a43fe88?w=600",
    },
    {
      type: "text",
      title: "Better Conversion",
      desc: "Good design boosts trust & conversions.",
    },
    {
      type: "image",
      src: "https://plus.unsplash.com/premium_photo-1661611565504-61ae8325d069?w=600",
    },
    {
      type: "text",
      title: "Lower Bounce Rate",
      desc: "Intuitive interfaces keep users longer.",
    },
    {
      type: "image",
      src: "https://plus.unsplash.com/premium_photo-1664297560573-b31a89601583?w=600",
    },
    {
      type: "text",
      title: "Fewer Queries",
      desc: "Simple UI = fewer support questions.",
    },
  ];

  const radius = 420;

  return (
    <div className="mt-20">
      <Container>
        {/* Desktop View (3D Centered Carousel) */}
        <div className="hidden md:flex items-center justify-center w-full perspective-[1600px] h-[800px]">
          <div className="relative w-[800px] h-[700px]">
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                transformStyle: "preserve-3d",
                transform: `translate(-50%, -50%) rotateY(${angle}deg)`,
                transition: "transform 0.3s linear",
              }}
            >
              {items.map((item, i) => {
                const rotationY = (360 / items.length) * i;
                const transform = `rotateY(${rotationY}deg) translateZ(${radius}px)`;

                return (
                  <div
                    key={i}
                    className="absolute w-[260px] h-[260px] flex items-center justify-center"
                    style={{
                      transform,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={`carousel-${i}`}
                        className="w-full h-full object-cover rounded-2xl border-2 border-stone-500"
                      />
                    ) : (
                      <div className="bg-zinc-800 text-white p-5 rounded-2xl border border-stone-500 text-center text-base w-full h-full flex flex-col justify-center items-center">
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile View (Horizontally Scrollable Cards) */}
        <div className="md:hidden w-full overflow-x-auto flex gap-4 px-[15px] py-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] h-[280px] flex-shrink-0 flex items-center justify-center"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`scroll-${i}`}
                  className="w-full h-full object-cover rounded-2xl border-2 border-stone-500"
                />
              ) : (
                <div className="bg-zinc-800 text-white p-5 rounded-2xl border border-stone-500 text-center text-base w-full h-full flex flex-col justify-center items-center">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DesignBenefits;
