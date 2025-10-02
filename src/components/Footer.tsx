import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import logo from "@/assets/naayaexim-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#0f2757] text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Naayaexim" className="h-16 w-auto bg-white p-2 rounded-lg" />
            <p className="text-primary-foreground/80 text-sm">
              Your trusted partner for quality import and export services worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
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
                <Mail size={20} className="mt-1 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80 text-sm">naayaexim@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80 text-sm">India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Naayaexim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
