import React from "react";
import videoSrc from "../assets/v1.mp4";
import maskShape from "../assets/Group.png";

export default function MaskedVideo() {
  return (
    <div
      className="w-full max-w-[426px] aspect-square mx-auto lg:ml-6 bg-black"
      style={{
        WebkitMaskImage: `url(${maskShape})`,
        maskImage: `url(${maskShape})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    >
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
