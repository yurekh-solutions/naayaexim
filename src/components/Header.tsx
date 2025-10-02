// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import logo from "@/assets/naaya-exim-logo.png";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   const aboutLinks = [
//     { name: "Company", path: "/about/company" },
//     { name: "Certification", path: "/about/certification" },
//     { name: "Key Person", path: "/about/key-person" },
//   ];

//   const productCategories = [
//     {
//       name: "Food Products",
//       path: "/products/food-products",
//       subcategories: [
//         { name: "Fruits & Vegetables", path: "/products/fruits-vegetables" },
//         { name: "Grocery", path: "/products/grocery" },
//         { name: "Spices", path: "/products/spices" },
//         { name: "Namkeen & Frozen", path: "/products/namkeen-frozen" },
//       ],
//     },
//     { name: "Garments", path: "/products/garments" },
//     { name: "Leather Products", path: "/products/leather-products" },
//     { name: "Imitation Jewellery", path: "/products/imitation-jewellery" },
//     { name: "Handicraft", path: "/products/handicraft" },
//     { name: "Furniture", path: "/products/furniture" },
//     { name: "Ceramic & Stone", path: "/products/ceramic-stone" },
//     { name: "Copper Products", path: "/products/copper-products" },
//     { name: "Packaging Products", path: "/products/packaging-products" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 glass-effect border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           <Link to="/" className="flex items-center">
//             <img src={logo} alt="NaayaExim" className="h-12 w-auto" />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-8">
//             <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">
//               HOME
//             </Link>

//             <div
//               className="relative"
//               onMouseEnter={() => setActiveDropdown("about")}
//               onMouseLeave={() => setActiveDropdown(null)}
//             >
//               <button className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors">
//                 ABOUT <ChevronDown className="h-4 w-4" />
//               </button>
//               {activeDropdown === "about" && (
//                 <div className="absolute top-full left-0 mt-2 w-56 glass-card rounded-xl shadow-lg py-2 border border-accent/20">
//                   <Link to="/about" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors rounded">Company</Link>
//                   {aboutLinks.map((link) => (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors rounded"
//                     >
//                       {link.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link to="/sourcing-agent" className="text-sm font-medium hover:text-accent transition-colors">
//               SOURCING AGENT
//             </Link>

//             <div
//               className="relative"
//               onMouseEnter={() => setActiveDropdown("products")}
//               onMouseLeave={() => setActiveDropdown(null)}
//             >
//               <button className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors">
//                 PRODUCTS <ChevronDown className="h-4 w-4" />
//               </button>
//               {activeDropdown === "products" && (
//                 <div className="absolute top-full right-0 mt-2 w-[800px] glass-card rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-4 crystal-shine border-2 border-accent/20">
//                   {productCategories.map((category) => (
//                     <Link
//                       key={category.path}
//                       to={category.path}
//                       className="group/item p-4 hover:bg-accent/10 rounded-xl transition-all duration-300 hover:scale-105"
//                     >
//                       <span className="font-semibold text-sm block mb-1 group-hover/item:text-accent transition-colors">{category.name}</span>
//                       <p className="text-xs text-muted-foreground">Explore range →</p>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link to="/gallery" className="text-sm font-medium hover:text-accent transition-colors">
//               GALLERY
//             </Link>

//             <Link to="/blog" className="text-sm font-medium hover:text-accent transition-colors">
//               BLOG
//             </Link>

//             <Link to="/contact" className="text-sm font-medium hover:text-accent transition-colors">
//               CONTACT US
//             </Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <nav className="lg:hidden py-4 space-y-2">
//             <Link to="/" className="block py-2 text-sm font-medium hover:text-accent">
//               HOME
//             </Link>
//             <div className="space-y-2">
//               <p className="font-medium text-sm">ABOUT</p>
//               {aboutLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className="block pl-4 py-1 text-sm hover:text-accent"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//             <Link to="/sourcing-agent" className="block py-2 text-sm font-medium hover:text-accent">
//               SOURCING AGENT
//             </Link>
//             <div className="space-y-2">
//               <p className="font-medium text-sm">PRODUCTS</p>
//               {productCategories.map((category) => (
//                 <Link
//                   key={category.path}
//                   to={category.path}
//                   className="block pl-4 py-1 text-sm hover:text-accent"
//                 >
//                   {category.name}
//                 </Link>
//               ))}
//             </div>
//             <Link to="/gallery" className="block py-2 text-sm font-medium hover:text-accent">
//               GALLERY
//             </Link>
//             <Link to="/blog" className="block py-2 text-sm font-medium hover:text-accent">
//               BLOG
//             </Link>
//             <Link to="/contact" className="block py-2 text-sm font-medium hover:text-accent">
//               CONTACT US
//             </Link>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "@/assets/naaya-exim-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const productCategories = [
    { name: "Food Products", path: "/products/food-products" },
    { name: "Garments", path: "/products/garments" },
    { name: "Leather Products", path: "/products/leather-products" },
    { name: "Imitation Jewellery", path: "/products/imitation-jewellery" },
    { name: "Handicraft", path: "/products/handicraft" },
    { name: "Furniture", path: "/products/furniture" },
    { name: "Ceramic & Stone", path: "/products/ceramic-stone" },
    { name: "Copper Products", path: "/products/copper-products" },
    { name: "Packaging Products", path: "/products/packaging-products" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="NaayaExim" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-accent">
              HOME
            </Link>

            <Link to="/about" className="text-sm font-medium hover:text-accent">
              ABOUT
            </Link>

            <Link
              to="/sourcing-agent"
              className="text-sm font-medium hover:text-accent"
            >
              SOURCING AGENT
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-accent transition">
                PRODUCTS <ChevronDown className="h-4 w-4" />
              </button>

              {activeDropdown === "products" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 border border-gray-200">
                  {productCategories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="flex justify-between items-center px-4 py-2 text-sm hover:bg-accent/10 hover:text-accent transition"
                    >
                      {category.name}
                      <ChevronRight className="h-3 w-3 opacity-70" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-sm font-medium hover:text-accent"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-2">
            <Link to="/" className="block py-2 text-sm font-medium hover:text-accent">
              HOME
            </Link>
            <Link to="/about" className="block py-2 text-sm font-medium hover:text-accent">
              ABOUT
            </Link>
            <Link
              to="/sourcing-agent"
              className="block py-2 text-sm font-medium hover:text-accent"
            >
              SOURCING AGENT
            </Link>

            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === "products" ? null : "products")
                }
                className="flex items-center justify-between w-full py-2 text-sm font-medium hover:text-accent"
              >
                PRODUCTS
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activeDropdown === "products" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "products" && (
                <div className="pl-4 border-l border-gray-200 mt-2">
                  {productCategories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="flex justify-between items-center py-2 pr-2 text-sm hover:text-accent"
                    >
                      {category.name}
                      <ChevronRight className="h-3 w-3 opacity-70" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="block py-2 text-sm font-medium hover:text-accent"
            >
              CONTACT US
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
