import PPCVideo from "../../../assets/PpcAssets/PPC.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={PPCVideo} type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-[1240px] backdrop-blur-[5px] flex flex-col items-center text-center space-y-6">
          <h1 className="text-white/75 text-6xl sm:text-8xl md:text-9xl font-bold uppercase">
            Pay per click
          </h1>
          <p className="text-white text-xl sm:text-2xl md:text-3xl leading-snug tracking-wide">
            Get instant traffic with high-performing PPC campaigns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
