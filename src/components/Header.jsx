import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { PiCursorClick, PiPencilLineDuotone } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom";

const servicesList = [
  {
    icon: <PiPencilLineDuotone />,
    label: "UI/UX DESIGN",
    path: "/services/UiUx",
  },
  {
    icon: <IoCodeSlashOutline />,
    label: "DEVELOPMENT",
    path: "/services/development",
  },
  {
    icon: <FiSearch />,
    label: "SEO",
    path: "/services/seo",
  },
  {
    icon: <SlPeople />,
    label: "SMM",
    path: "/services/smm",
  },
  {
    icon: <PiCursorClick />,
    label: "PAY PER CLICK",
    path: "/services/pay-per-click",
  },
  {
    icon: <BsPersonCircle />,
    label: "PERSONAL BRANDING",
    path: "/services/personal-branding",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const toggleServices = (e) => {
    e.stopPropagation();
    setServicesOpen(!servicesOpen);
  };

  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
    setServicesOpen(false);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".mobile-toggle")
      ) {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-transparent">
        <div className="w-full flex justify-center px-2 py-2">
          <div className="w-full max-w-7xl">
            <div className="bg-stone-900/30 backdrop-blur-md rounded-[50px] shadow-lg border border-white/10 px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16 lg:h-20">
                <Link to="/" className="flex items-center cursor-pointer">
                  <div className="flex flex-col justify-center items-center">
                    <div className="inline-flex flex-col justify-center items-start gap-0.5">
                      <div className="justify-start text-cyan-400 text-5xl font-black">
                        NKB
                      </div>
                      <div className="justify-start">
                        <span className="text-white text-sm font-bold">
                          Quantum
                        </span>
                        <span className="text-white text-sm font-normal">
                          {" "}
                          Labs
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
                  <Link
                    to="/"
                    className={`transition-all duration-300 hover:text-cyan-400 ${
                      location.pathname === "/"
                        ? "font-bold text-cyan-400 text-xl xl:text-2xl"
                        : "text-neutral-50 font-medium text-lg xl:text-xl"
                    }`}
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className={`transition-all duration-300 hover:text-cyan-400 ${
                      location.pathname === "/about"
                        ? "font-bold text-cyan-400 text-xl xl:text-2xl"
                        : "text-neutral-50 font-medium text-lg xl:text-xl"
                    }`}
                  >
                    About Us
                  </Link>

                  <div className="relative">
                    <button
                      onClick={toggleServices}
                      className={`flex items-center gap-2 transition-all duration-300 hover:text-cyan-400 ${
                        location.pathname === "/services"
                          ? "font-bold text-cyan-400 text-xl xl:text-2xl"
                          : "text-neutral-50 font-medium text-lg xl:text-xl"
                      }`}
                    >
                      Services
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-10 mt-6 w-[95vw] max-w-[1200px] bg-[#252525] backdrop-blur-md rounded-[3rem] shadow-xl border border-white/10 z-50 px-6 py-10 overflow-x-hidden">
                        <h3 className="text-white text-2xl mb-4 text-center">
                          SERVICES
                        </h3>
                        <div className="border-t-4 border-cyan-400 w-[70%] mx-auto mb-6" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-4 mx-[200px]">
                          {servicesList.map((item, index) => (
                            <div
                              key={index}
                              onClick={() => handleServiceClick(item.path)}
                              className="w-full max-w-[240px] h-48 flex flex-col items-center justify-center rounded-[2.5rem] p-5 text-white bg-[#151515] border-[2px] border-gray-500 hover:shadow-[0_0_8px_#22d3ee] transition-all duration-300 group cursor-pointer hover:scale-105"
                            >
                              <div className="bg-gray-700 p-4 rounded-full mb-4 text-cyan-400 text-2xl transition-transform duration-300 group-hover:scale-120">
                                {item.icon}
                              </div>
                              <p className="text-sm font-semibold text-center break-words px-2 transition-transform duration-300 group-hover:scale-105">
                                {item.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    to="/blog"
                    className={`transition-all duration-300 hover:text-cyan-400 ${
                      location.pathname === "/blog"
                        ? "font-bold text-cyan-400 text-xl xl:text-2xl"
                        : "text-neutral-50 font-medium text-lg xl:text-xl"
                    }`}
                  >
                    Blogs
                  </Link>
                </nav>

                <div className="hidden lg:flex">
                  <Link
                    to="/contact"
                    className="w-48 h-14 px-8 py-1.5 bg-cyan-400 rounded-[50px] inline-flex justify-center items-center gap-2 hover:bg-cyan-300 transition-all duration-300"
                  >
                    <div className="text-stone-900 text-xl font-semibold tracking-tight">
                      Contact Us
                    </div>
                  </Link>
                </div>

                <div className="flex lg:hidden">
                  <button
                    onClick={toggleMenu}
                    className="mobile-toggle text-white hover:text-cyan-400 transition-colors duration-200 p-2 z-50 relative"
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen && (
        <div className="mobile-menu fixed top-20 left-1/2 transform -translate-x-1/2 w-[calc(100%-32px)] max-w-[calc(100%-32px)] bg-stone-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 z-50 lg:hidden">
          <div className="p-6">
            <nav className="space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left tracking-tight transition-all duration-200 hover:text-cyan-400 py-2 ${
                  location.pathname === "/"
                    ? "font-bold text-cyan-400 text-xl"
                    : "font-medium text-white text-lg"
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left tracking-tight transition-all duration-200 hover:text-cyan-400 py-2 ${
                  location.pathname === "/about"
                    ? "font-bold text-cyan-400 text-xl"
                    : "font-medium text-white text-lg"
                }`}
              >
                About Us
              </Link>

              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left tracking-tight transition-all duration-200 hover:text-cyan-400 py-2 ${
                  location.pathname === "/blog"
                    ? "font-bold text-cyan-400 text-xl"
                    : "font-medium text-white text-lg"
                }`}
              >
                Blogs
              </Link>

              <button
                onClick={toggleServices}
                className="w-full flex items-center justify-between text-white hover:text-cyan-400 text-lg font-medium"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {servicesList.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleServiceClick(item.path)}
                      className="bg-[#151515] p-4 rounded-xl flex flex-col items-center border border-gray-600 text-white cursor-pointer hover:border-cyan-400 hover:shadow-[0_0_8px_#22d3ee] transition-all duration-300"
                    >
                      <div className="text-cyan-400 text-2xl mb-2">
                        {item.icon}
                      </div>
                      <div className="text-sm font-medium text-center">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-stone-900 font-semibold text-lg tracking-tight px-6 py-4 rounded-[50px] transition-all duration-300 hover:shadow-lg mt-4 block text-center"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
