import React from 'react';

const ServiceCard = ({ image, title, description }) => {
  if (!title && !description && !image) return null;

  return (
    <div
      className="bg-[#171717] border-2 border-[#2e2e2e] rounded-[40px] 
                 w-full max-w-[403px] h-auto pt-4 pr-4 pb-6 pl-4 
                 flex flex-col justify-between group 
                 hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] 
                 transition-all duration-300"
    >
      {/* Image */}
      {image ? (
        <img
          src={image}
          alt={title || 'Service image'}
          className="rounded-[30px] w-full h-[220px] sm:h-[260px] md:h-[290px] object-cover object-center mb-4"
          loading="lazy"
        />
      ) : (
        <div className="rounded-[30px] w-full h-[220px] bg-[#111] flex items-center justify-center mb-4">
          <span className="text-gray-500">Image coming soon</span>
        </div>
      )}

      {/* Title & Description */}
      <div>
        {title && (
          <h3 className="text-white font-bold text-lg sm:text-xl mb-2 tracking-wide">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-gray-400 text-sm sm:text-md leading-snug">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
