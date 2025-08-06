// components/Navigation.jsx

import Container from "../Container"; // Update this path if needed

const Navigation = () => {
  return (
    <Container>
      <div className="mt-12 w-full px-12 py-4 bg-cyan-400/25 rounded-[50px] outline outline-[3px] outline-offset-[-3px] outline-stone-900 backdrop-blur-[30px] flex justify-center items-center flex-nowrap overflow-hidden gap-x-10">
        <div className="text-neutral-50 text-xl font-bold uppercase tracking-wide px-6 whitespace-nowrap">
          Home
        </div>
        <div className="text-neutral-50 text-xl font-medium uppercase tracking-wide px-6 whitespace-nowrap">
          Technology
        </div>
        <div className="text-neutral-50 text-xl font-medium uppercase tracking-wide px-6 whitespace-nowrap">
          Startups
        </div>
        <div className="text-neutral-50 text-xl font-medium uppercase tracking-wide px-6 whitespace-nowrap">
          Artificial Intelligence
        </div>
        <div className="text-neutral-50 text-xl font-medium uppercase tracking-wide px-6 whitespace-nowrap">
          Cryptocurrency
        </div>
        <div className="text-neutral-50 text-xl font-medium uppercase tracking-wide px-6 whitespace-nowrap">
          About
        </div>
      </div>
    </Container>
  );
};

export default Navigation;
