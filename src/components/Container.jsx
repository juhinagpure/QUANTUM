// src/components/Container.jsx
const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[15px] sm:px-[30px] lg:px-[60px]">
      {children}
    </div>
  );
};

export default Container;
