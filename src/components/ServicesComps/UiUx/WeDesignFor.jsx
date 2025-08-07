import Appgif from "/gifs/Apps.gif";
import Logogif from "/gifs/Logos.gif";
import Researchgif from "/gifs/Research.gif";
import Webgif from "/gifs/Websites.gif";

const Services = () => {
  const services = [
    { label: "Apps", gif: Appgif },
    { label: "Websites", gif: Webgif },
    { label: "Logos", gif: Logogif },
    { label: "User Research", gif: Researchgif },
  ];

  return (
    <div className="w-full px-4 py-12 sm:px-12 sm:pt-16 rounded-[36px]  flex flex-col items-center gap-16">
      {/* Heading */}
      <div className="max-w-[1240px] flex flex-col items-center gap-4">
        <h2 className="text-center text-neutral-50 text-4xl sm:text-5xl md:text-6xl font-bold  uppercase">
          we design for
        </h2>
        <div className="w-full h-[3px] bg-gradient-to-r from-zinc-800 via-stone-500 to-zinc-800" />
      </div>

      {/* Cards */}
      <div className="w-full max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-stone-900 p-10 rounded-3xl flex flex-col items-center gap-9 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.gif}
              alt={item.label}
              className="w-36 h-36 object-cover rounded-[36px]"
            />
            <div className="text-neutral-50 text-2xl sm:text-3xl md:text-4xl font-bold font-['Urbanist'] tracking-wide text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
