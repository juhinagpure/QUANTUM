import { ChevronUp, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { ImPinterest2 } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  // State for button visibility
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll to show/hide button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left items-center sm:items-start">
          {/* Brand Section */}
          <div className="space-y-4 mx-auto sm:mx-0">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-6xl font-black text-cyan-400">
                NKB
              </div>
              <div className="text-base sm:text-lg lg:text-xl">
                <span className="font-bold">Quantum</span>
                <span className="font-normal"> Labs</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-medium text-neutral-50">
                Subscribe to our newsletter
              </h3>
              <div className="flex flex-col sm:flex-row w-full max-w-md mx-auto sm:max-w-none">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 bg-zinc-800/20 border-b-2 border-cyan-400 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none text-base text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-400 hover:border-cyan-300 transition-colors focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
                />
                <button className="px-4 py-3 bg-cyan-400 text-black rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-cyan-300 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold uppercase text-neutral-50 py-2 underline underline-offset-4 decoration-cyan-400">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Blogs", href: "/blog" },
                // { name: "FAQ's", href: "/faq" },
                { name: "Career", href: "/career" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm sm:text-base font-medium text-neutral-50 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold uppercase text-neutral-50 py-2 underline underline-offset-4 decoration-cyan-400">
              Services
            </h3>
            <nav className="space-y-2">
              {[
                { name: "UI/UX Design", href: "/services/UiUx" },
                { name: "Development", href: "/services/development" },
                { name: "SEO", href: "/services/seo" },
                { name: "Social Media Marketing", href: "/services/smm" },
                { name: "Pay Per Click", href: "/services/pay-per-click" },
                {
                  name: "Personal Branding",
                  href: "/services/personal-branding",
                },
              ].map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="block text-sm sm:text-base font-medium text-neutral-50 hover:text-cyan-400 transition-colors"
                >
                  {service.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mx-auto sm:mx-0">
            <div className="space-y-3">
              <h3 className="text-sm sm:text-base font-bold uppercase text-white py-2 underline underline-offset-4 decoration-cyan-400">
                Get in touch
              </h3>
              <div className="flex justify-center sm:justify-start flex-wrap gap-3">
                {[
                  {
                    Icon: ImPinterest2,
                    href: "https://www.pinterest.com/nkbquantumlabs/",
                  },
                  { Icon: FaXTwitter, href: "https://x.com/NKBQuantumLabs" },
                  {
                    Icon: LuInstagram,
                    href: "https://www.instagram.com/nkbquantumlabs/",
                  },
                  // { Icon: Linkedin, href: "https://www.linkedin.com" },
                  // { Icon: SlSocialYoutube, href: "https://www.youtube.com" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-cyan-400 transition-colors"
                  >
                    <Icon className="w-full h-full" />
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3 flex flex-col items-center sm:items-start">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-50 mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/NKB+QUANTUM+LABS/@21.1113596,78.9964186,13z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-medium text-neutral-50 leading-relaxed hover:underline text-left"
                >
                  27, Janhit Society, Near London Street, NIT Complex, Nagpur,
                  440025.
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-50 flex-shrink-0" />
                <a
                  href="mailto:support@nkbquantumlabs.com"
                  className="text-sm sm:text-base font-medium text-neutral-50 hover:text-cyan-400 transition-colors"
                >
                  nkb@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-stone-500">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-y-4 sm:gap-y-0 text-center">
            <p className="text-xs sm:text-sm text-white">
              NKB Quantum Labs © 2025. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 sm:gap-x-6">
                <a
                  href="#"
                  className="text-xs sm:text-sm text-white hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-white hover:text-cyan-400 transition-colors"
                >
                  Terms and Conditions
                </a>
              </div>

              {/* Scroll to Top Button */}
              {isVisible && (
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="mt-3 sm:mt-0 w-9 h-9 sm:w-10 sm:h-10 
                    bg-white/10 backdrop-blur-md border border-cyan-400/30 rounded-full 
                    flex items-center justify-center shadow-md hover:shadow-cyan-400/50 
                    transition-all duration-500 ease-in-out 
                    focus:outline-none focus:ring-2 focus:ring-cyan-400 
                    focus:ring-offset-2 focus:ring-offset-zinc-900 group hover:scale-105"
                  aria-label="Scroll to top of page"
                >
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:text-white transition-all duration-300 group-hover:-translate-y-1" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
