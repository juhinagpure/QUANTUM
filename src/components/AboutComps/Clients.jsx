import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      rating: 4,
      title: "User interface is beyond amazing.",
      quote:
        "NKB transformed our digital presence completely. Their UI/UX design skills are exceptional, and our conversion rates have doubled since working with them.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b9a5f335?w=60&h=60&fit=crop&crop=face&auto=format&q=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, StartupX",
      rating: 4,
      title: "It was a very good experience",
      quote:
        "From development to digital marketing, NKB has been our go-to partner for years. Their expertise in SEO has significantly grown our organic traffic.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=72&h=72&fit=crop&crop=face&auto=format&q=80",
      featured: true,
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      role: "CEO, FashionE",
      rating: 4,
      title: "Without a doubt, The results exceeds all expectations.",
      quote:
        "The personal branding service helped me establish myself as an industry expert. NKB's strategic approach to social media has been game-changing.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face&auto=format&q=80",
    },
  ];

  const StarRating = ({ rating, size = "sm" }) => {
    const starSize = size === "lg" ? "w-5 h-5" : "w-3.5 h-3.5";

    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${starSize} ${
              star <= rating
                ? "fill-orange-400 text-orange-400"
                : "text-orange-400"
            }`}
          />
        ))}
      </div>
    );
  };

  const TestimonialCard = ({ testimonial }) => {
    const { name, role, rating, title, quote, avatar, featured } = testimonial;

    if (featured) {
      return (
        <div className="w-96 px-6 pt-12 pb-16 bg-neutral-900 rounded-xl shadow-lg shadow-black/10 border-2 border-zinc-800 flex flex-col items-center gap-6 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4">
            <img
              className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
              src={avatar}
              alt={name}
            />
            <div className="text-center">
              <div className="text-neutral-50 text-2xl font-semibold ">
                {name}
              </div>
              <div className="text-neutral-50 text-lg font-normal ">{role}</div>
            </div>
          </div>

          <StarRating rating={rating} size="lg" />

          <div className="text-center space-y-4">
            <div className="text-neutral-50 text-2xl font-medium ">{title}</div>
            <div className="text-neutral-50 text-lg font-normal  leading-relaxed">
              "{quote}"
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="w-72 px-5 pt-7 pb-9 bg-neutral-900 rounded-xl shadow-lg shadow-black/10 border-2 border-zinc-800 flex flex-col gap-3 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center gap-3">
          <img
            className="w-14 h-14 rounded-full object-cover"
            src={avatar}
            alt={name}
          />
          <div className="flex-1">
            <div className="text-neutral-50 text-lg font-semibold ">{name}</div>
            <div className="text-neutral-50 text-xs font-normal ">{role}</div>
          </div>
        </div>

        <div className="flex justify-center">
          <StarRating rating={rating} />
        </div>

        <div className="text-center space-y-3">
          <div className="text-neutral-50 text-lg font-medium ">{title}</div>
          <div className="text-neutral-50 text-sm font-normal  leading-tight">
            "{quote}"
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-16 py-16 px-4">
      {/* Header Section */}
      <div className="max-w-4xl text-center space-y-4">
        <h2 className="text-neutral-50 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold Container uppercase text-center lg:text-right leading-tight">
          What Our Clients Say
        </h2>
        <p className="text-neutral-50 font-normal leading-relaxed tracking-wide text-center lg:text-right w-full whitespace-normal px-4 sm:px-6 lg:px-0 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.3rem] 2xl:text-2xl">
          Don't just take our word for it — hear from our satisfied clients
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap justify-center items-center gap-14 max-w-full">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
