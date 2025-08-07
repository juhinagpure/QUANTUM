import {
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Youtube,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left items-center sm:items-start">
          {/* Brand Section */}
          <div className="space-y-6 mx-auto sm:mx-0">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-cyan-400">
                NKB
              </div>
              <div className="text-lg sm:text-xl">
                <span className="font-bold">Quantum</span>
                <span className="font-normal"> Labs</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-neutral-50">
                Subscribe to our newsletter
              </h3>
              <div className="flex flex-col sm:flex-row w-full">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 bg-zinc-800/20 border-b-2 border-zinc-800 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button className="px-4 py-3 bg-cyan-400 text-black rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-cyan-300 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold uppercase text-neutral-50 py-3 underline underline-offset-4 decoration-cyan-400">
              Quick Links
            </h3>

            <nav className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Process", href: "/process" },
                { name: "Our Blogs", href: "/blog" },
                { name: "FAQ's", href: "/faq" },
                { name: "Career", href: "/career" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-base font-medium text-neutral-50 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-base font-bold uppercase text-neutral-50 py-3 underline underline-offset-4 decoration-cyan-400">
              Services
            </h3>

            <nav className="space-y-3">
              {[
                { name: "UI/UX Design", href: "/services/UiUx" },
                { name: "Development", href: "/services/development" },
                { name: "SEO", href: "/services/seo" },
                {
                  name: "Social Media Marketing",
                  href: "/services/smm",
                },
                { name: "Pay Per Click", href: "/services/pay-per-click" },
                {
                  name: "Personal Branding",
                  href: "/services/personal-branding",
                },
              ].map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="block text-base font-medium text-neutral-50 hover:text-cyan-400 transition-colors"
                >
                  {service.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 mx-auto sm:mx-0">
            <div className="space-y-4">
              <h3 className="text-base font-bold uppercase text-white py-3 underline underline-offset-4 decoration-cyan-400">
                Get in touch
              </h3>

              {/* Social Media Icons */}
              <div className="flex justify-center sm:justify-start flex-wrap gap-4">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com" },
                  { Icon: FaXTwitter, href: "https://twitter.com" },
                  { Icon: Instagram, href: "https://www.instagram.com" },
                  { Icon: Linkedin, href: "https://www.linkedin.com" },
                  { Icon: Youtube, href: "https://www.youtube.com" },
                  // eslint-disable-next-line no-unused-vars
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 text-white hover:text-cyan-400 transition-colors"
                  >
                    <Icon className="w-full h-full" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 flex flex-col items-center sm:items-start">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-neutral-50 mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/NKB+QUANTUM+LABS/@21.1113596,78.9964186,13z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-neutral-50 leading-relaxed hover:underline text-left"
                >
                  27, Janhit Society, Near London Street, NIT Complex, Nagpur,
                  440025.
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-neutral-50 flex-shrink-0" />
                <a
                  href="mailto:support@nkbquantumlabs.com"
                  className="text-base font-medium text-neutral-50 hover:text-cyan-400 transition-colors"
                >
                  support@nkbquantumlabs.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-stone-500">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-y-4 sm:gap-y-0 text-center">
            <p className="text-sm text-white">
              NKB Quantum Labs © 2025. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-6">
              <a
                href="#"
                className="text-sm text-white hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-white hover:text-cyan-400 transition-colors"
              >
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="relative">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute -top-12 right-2 sm:right-8 w-14 h-14 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/35 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-zinc-800 group-hover:text-cyan-400 transition-colors duration-300" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
