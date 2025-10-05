import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ChevronUp,
} from "lucide-react";
import logo from "@/assets/naayaexim-logo.jpg";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-[#0f2757] text-primary-foreground pt-16 pb-8">
        {/* Floating Buttons */}
        <div className="fixed right-3 bottom-20 sm:right-6 sm:bottom-6 flex flex-col items-center space-y-3 z-50">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+918657494046"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-orange-500 shadow-lg hover:shadow-xl backdrop-blur-xl text-white hover:scale-110 transition-all duration-300 animate-pulse-glow"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </a>

          {/* Phone */}
          <a
            href="tel:+918657494046"
            className="group w-14 h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-orange-500 shadow-lg hover:shadow-xl backdrop-blur-xl text-white hover:scale-110 transition-all duration-300"
            aria-label="Call us directly"
          >
            <Phone className="w-6 h-6" />
          </a>

          {/* Back to Top */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="group w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg hover:shadow-xl backdrop-blur-xl text-white hover:scale-110 transition-all duration-300 animate-bounce-in"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6" />
              <span className="absolute right-full mr-3 px-3 py-1 bg-background text-foreground text-xs sm:text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                Back to Top
              </span>
            </button>
          )}
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <img
                src={logo}
                alt="Naayaexim"
                className="h-16 w-auto bg-white p-2 rounded-lg"
              />
              <p className="text-primary-foreground/80 text-sm">
                Your trusted partner for quality import and export services
                worldwide.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/16zgKLjjQj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  <Facebook size={20} />
                </a>

                <a
                  href="https://www.instagram.com/naayaexim?igsh=MW44bjhwZ2w1emI2Nw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/company/naaya-business-venture-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sourcing-agent"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Sourcing Agent
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Products</h3>
              <ul className="space-y-2">
                <li className="text-primary-foreground/80">Spices</li>
                <li className="text-primary-foreground/80">Handicrafts</li>
                <li className="text-primary-foreground/80">Furniture</li>
                <li className="text-primary-foreground/80">Garments</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Mail
                    size={20}
                    className="mt-1 flex-shrink-0 text-accent"
                  />
                  <span className="text-primary-foreground/80 text-sm">
                    naayaexim@gmail.com
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin
                    size={20}
                    className="mt-1 flex-shrink-0 text-accent"
                  />
                  <span className="text-primary-foreground/80 text-sm">
                    India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Naayaexim. All rights reserved.
             
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
