import Container from "../Container";
import ServiceCard from "../HomeComps/ServicesHome";

const services = [
  {
    title: "UI/UX DESIGN",
    image: "Home/uiux.jpg",
    description:
      "We craft modern, user-centric designs that not only look amazing but also enhance usability and engagement across all platforms.",
  },
  {
    title: "DEVELOPMENT",
    image: "Home/dev.jpg",
    description:
      "From responsive websites to scalable mobile apps, we develop solutions tailored to your needs using the latest tech and clean code.",
  },
  {
    title: "SEO",
    image: "Home/seo.jpg",
    description:
      "Optimize online presence with SEO strategies that skyrocket rankings. This card comes with smart on-page and off-page tactics that boost traffic.",
  },
  {
    title: "Social Media Market",
    image: "Home/social.jpg",
    description:
      "Build a strong social presence with engaging content strategies and data-driven campaigns that grow your audience.",
  },
  {
    title: "PAY PER CLICK",
    image: "Home/ppc.jpg",
    description:
      "Reach the right customers fast with high-converting PPC ads across Google, Meta, and more — optimized for maximum ROI.",
  },
  {
    title: "PERSONAL BRANDING",
    image: "Home/personal.jpg",
    description:
      "Stand out online with a powerful personal brand that builds trust, boosts visibility, and connects with your audience.",
  },
];

const ServicesSection = () => {
  return (
    <Container>
      <section className="text-white py-12 px-6">
        <h2 className="text-[48px] sm:text-[56px] md:text-[64px] 2xl:text-[56px] font-bold leading-[100%] tracking-[-0.02em] uppercase mb-8">
          SERVICES WE PROVIDE
          <span className="block mt-1 h-[2px] w-full bg-gradient-to-r from-white via-white/50 to-white/10 animate-shine" />
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default ServicesSection;
