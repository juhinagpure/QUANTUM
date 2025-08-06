// import React from "react";
// import SEO from "../../../assets/SeoAssets/SEO1.jpg";
// import StarIcon from "../../../assets/SeoAssets/star.svg";
// import Container from "../../Container";

// const SEOServices = () => {
//   const services = [
//     {
//       title: "On-Page SEO",
//       description:
//         "Optimizing meta tags, headers, and content structure\nKeyword research and implementation",
//     },
//     {
//       title: "Technical SEO",
//       description:
//         "Website speed optimization\nMobile-friendliness\nStructured data & schema markup",
//     },
//     {
//       title: "Off-Page SEO",
//       description: "Link building\nContent promotion\nInfluencer outreach",
//     },
//     {
//       title: "SEO Audits & Strategy",
//       description:
//         "In-depth site analysis\nCompetitor analysis\nCustom roadmap for improvements",
//     },
//   ];

//   return (
//     <Container>
//       <div className="flex flex-col xl:flex-row mt-8 sm:mt-12 xl:mt-16">
//         {/* Left Section - Services */}
//         <div className="flex-1 xl:h-[660px] px-4 sm:px-6 xl:px-8 py-8 xl:py-12 bg-zinc-800 rounded-t-[36px] xl:rounded-tl-[36px] xl:rounded-bl-[36px] xl:rounded-tr-none flex flex-col justify-center items-center overflow-hidden">
//           <div className="w-full max-w-[522px] flex flex-col justify-start items-center gap-4 xl:gap-6">
//             <h2 className="text-center text-neutral-50 text-2xl sm:text-3xl xl:text-4xl font-bold font-mono uppercase leading-tight tracking-tight">
//               Our SEO Services
//             </h2>
//             <div className="flex flex-col gap-4 xl:gap-5 w-full">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-4 xl:gap-5 group hover:scale-[1.01] xl:hover:scale-[1.02] transition-all duration-300"
//                 >
//                   <img
//                     src={StarIcon}
//                     alt="star"
//                     className="w-5 h-5 xl:w-6 xl:h-6 mt-1"
//                   />
//                   <div className="flex-1 flex flex-col gap-2 xl:gap-4">
//                     <h3 className="text-neutral-50 text-lg sm:text-xl xl:text-2xl font-bold group-hover:text-cyan-100 transition-colors">
//                       {service.title}
//                     </h3>
//                     <p className="text-neutral-50 text-sm sm:text-sm xl:text-base opacity-90 group-hover:opacity-100 transition-opacity">
//                       {service.description.split("\n").map((line, i) => (
//                         <React.Fragment key={i}>
//                           {line}
//                           {i < service.description.split("\n").length - 1 && (
//                             <br />
//                           )}
//                         </React.Fragment>
//                       ))}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Analytics Dashboard */}
//         <img
//           className="w-[585px] h-[660px] rounded-tr-[36px] rounded-br-[36px]"
//           src={SEO}
//           alt="card"
//         />
//       </div>
//     </Container>
//   );
// };

// export default SEOServices;

import React from "react";
import SEO from "../../../assets/SeoAssets/SEO1.jpg";
import StarIcon from "../../../assets/SeoAssets/star.svg";
import Container from "../../Container";

const SEOServices = () => {
  const services = [
    {
      title: "On-Page SEO",
      description:
        "Optimizing meta tags, headers, and content structure\nKeyword research and implementation",
    },
    {
      title: "Technical SEO",
      description:
        "Website speed optimization\nMobile-friendliness\nStructured data & schema markup",
    },
    {
      title: "Off-Page SEO",
      description: "Link building\nContent promotion\nInfluencer outreach",
    },
    {
      title: "SEO Audits & Strategy",
      description:
        "In-depth site analysis\nCompetitor analysis\nCustom roadmap for improvements",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col xl:flex-row items-start gap-10 xl:gap-20 mt-12 xl:mt-20 bg-zinc-900 rounded-[36px] px-6 sm:px-10 py-12">
        {/* Left: Text + Services */}
        <div className="w-full xl:w-1/2 pt-0">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight mb-8 leading-tight">
            Our SEO Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-3 group hover:scale-[1.02] transition-transform duration-300"
              >
                <img src={StarIcon} alt="star" className="w-5 h-5 mt-1" />
                <div>
                  <h3 className="text-lg xl:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm xl:text-base text-white/80 mt-1 leading-relaxed">
                    {service.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < service.description.split("\n").length - 1 && (
                          <br />
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full xl:w-[550px] flex-shrink-0">
          <img
            src={SEO}
            alt="SEO Visual"
            className="w-full h-auto object-cover rounded-[36px] shadow-xl"
          />
        </div>
      </div>
    </Container>
  );
};

export default SEOServices;
