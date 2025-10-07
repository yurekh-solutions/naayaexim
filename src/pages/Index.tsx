import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {  Autoplay } from "swiper/modules";
import GlassCard from "@/components/GlassCard";
import { Award, Globe, Users, TrendingUp, Shield, Zap , BookOpen ,ShoppingCart} from "lucide-react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroLogistics from "@/assets/hero-logistics.jpg";
import heroSpices from "@/assets/hero-spices.jpg";
import gallery from "@/assets/gallery.png";
import product from  "@/assets/product.png";
import furniture from "@/assets/Furniture.webp"
import heroFurniture from "@/assets/hero-furniture.jpg";
import Marquee from "@/components/Marquee";
import apedaLogo from "@/assets/certifications/apeda.png";
import fieoLogo from "@/assets/certifications/fieo.png";
import dgftLogo from "@/assets/certifications/dgft.png";
import msmeLogo from "@/assets/certifications/msme.png";
import gstLogo from "@/assets/certifications/gst.png";
import isoLogo from "@/assets/certifications/iso.png";
import fssaiLogo from "@/assets/certifications/fssai.png";
import halalLogo from "@/assets/certifications/halal.png";
import makeInIndiaLogo from "@/assets/certifications/make-in-india.png";
import iecLogo from "@/assets/certifications/iec.png";
import spicesBoardLogo from "@/assets/certifications/spices-board.png";
import teaBoardLogo from "@/assets/certifications/tea-board.png";
import about from "@/assets/about.png"
import abouts from "@/assets/abouts.png"
import aboutss from "@/assets/aboutss.png"
import aboutsss from "@/assets/aboutsss.png"


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Testimonials from "@/components/Testimonials";
import ExportProcess from "@/components/ExportProcess";

const Index = () => {
  const featuredProducts = [
    {
      title: "Garments",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
      path: "/products/garments",
    },
    {
      title: "Leather Products",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
      path: "/products/leather-products",
    },
    {
      title: "Imitation Jewellery",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      path: "/products/imitation-jewellery",
    },
    {
      title: "Handicraft",
      image:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      path: "/products/handicraft",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroLogistics,
      title: "Welcome to NaayaExim",
      subtitle: "Your Global Trade Partner",
    },
    {
      image: heroSpices,
      title: "We Export Indian Spices",
      subtitle: "Premium Quality Worldwide",
    },
    {
      image: furniture,
      title: "We Export Furniture Products",
      subtitle: "Crafted with Excellence",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const products = [
    { title: "Fruits & Vegetables", description: "Fresh and hygienic fruits and vegetables with important vitamins and minerals" },
    { title: "Spices Products", description: "Premium spices used for flavoring and coloring food with unique Indian flavors" },
    { title: "Grocery Products", description: "Variety of grocery products including dal, flours and pulses" },
    { title: "Namkeen & Frozen", description: "Indian salted snacks with unique mix of sweet, salty, tangy and spicy flavours" },
    { title: "Handicraft Products", description: "Artisanal handicrafts with elegance, style and superior quality" },
    { title: "Copper Products", description: "Quality copper products for health and wellness" },
    { title: "Imitation Jewellery", description: "Beautiful costume jewellery loved for its beauty and pocket-friendly prices" },
    { title: "Furniture", description: "High-quality furniture for every home and office need" },
    { title: "Leather Products", description: "Coveted leather products known for their classy look and feel" },
    { title: "Garment Products", description: "Quality garments for every occasion and style" },
    { title: "Ceramic & Stone", description: "Essential ceramic and stone materials for daily lifestyle" },
    { title: "Packaging Products", description: "Quality, durable and precise packaging solutions" },
  ];
  const stats = [
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "99%", label: "Success Rate" },
  ];
  const certifications = [
    { image: apedaLogo, name: "APEDA" },
    { image: fieoLogo, name: "FIEO" },
    { image: dgftLogo, name: "DGFT" },
    { image: msmeLogo, name: "MSME" },
    { image: gstLogo, name: "GST Council" },
    { image: isoLogo, name: "ISO Certified" },
    { image: fssaiLogo, name: "FSSAI" },
    { image: halalLogo, name: "Halal Certified" },
    { image: makeInIndiaLogo, name: "Make in India" },
    { image: iecLogo, name: "IEC" },
    { image: spicesBoardLogo, name: "Spices Board" },
    { image: teaBoardLogo, name: "Tea Board" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen pt-20 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black/60 " />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-6 px-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-3xl font-light">{slide.subtitle}</p>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 bg-white/20 backdrop-blur-lg border border-white/50 
                           hover:bg-white/30 hover:border-white/80 
                           text-white font-semibold rounded-full shadow-lg transition-all"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Marquee />
<section className="py-20 relative bg-gradient-to-b from-white to-secondary/10">
  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent " />
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      {/* Left Side - Text */}
      <div>
        <h2 className="text-4xl font-bold mb-6">About NaayaExim</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            NaayaExim is a global trade division of Naayatrade, specializing in the export of premium wooden handicrafts, handmade decorative items, photo frames, apparel, and other artisan products. We are redefining international trade by combining traditional craftsmanship with modern quality standards, ensuring a seamless and reliable sourcing experience for our clients worldwide.
          </p>
          <p>
            Our team is dedicated to delivering elegance, style, and quality in every product, while maintaining ethical and sustainable practices across our operations. More than just exporters, NaayaExim provides an integrated global trade ecosystem — connecting artisans and buyers, offering curated product selections, and ensuring end-to-end support for international clients.
          </p>
        </div>

        {/* Button */}
        <Button
          className="w-48 bg-[#0f2757]/80 backdrop-blur-md border border-white/40 mt-6
                     text-white font-semibold rounded-full shadow-lg transition-all 
                     hover:bg-orange-500 hover:border-orange-500 hover:text-white"
        >
          <Link to="/about" className="block w-full h-full text-center">
            More Info
          </Link>
        </Button>
      </div>

      {/* Right Side - Export / Import Images */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { src: abouts},
          { src: about},
          { src: aboutss},
          { src: aboutsss },
        ].map((img, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg group h-60 sm:h-72 md:h-64"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0  opacity-100 flex items-center justify-center">
              <p className="text-white font-semibold text-lg">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    <section
      className="relative py-20 ">
          <div className="absolute inset-0 bg-[url('/src/assets/about.png')] bg-cover bg-center" />

      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What We Do
          </h2>
          <p className=" text-gray-200 text-muted-foreground text-lg">
            Delivering excellence in global trade and consultancy
          </p>
        </div>

        {/* Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Export
</h3>
              <p className="text-muted-foreground">
                We are Exporting best quality product around the world, You need best product on time you are at right place @ NaayaExim Export import
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sourcing Agent</h3>
              <p className="text-muted-foreground">
             We are working as local partner of our foreign client to source best quality product from India as per client requirement and Specification

              </p>
            </div>
                 <div className="glass-card p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Import agent
(for foreign client)</h3>
              <p className="text-muted-foreground">
                We help foreign company to introduce his best quality product in India and help them to find local partners in India
              </p>
            </div> 

            <div className="glass-card p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Product Verification & Quality Inspection
</h3>
              <p className="text-muted-foreground">
                Quality matters in international trade. We provide supplier audits verification before shipment to ensure the goods meet your specifications
              </p>
            </div>
          
              <div className="glass-card p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Training & consultancy</h3>
              <p className="text-muted-foreground">
                We are promoting global business, to make it easy we are giving Practical Export import training visit www.naayaexim.com
              </p>
            </div>
            
               <div className="glass-card p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Clearance & Logistics Support</h3>
              <p className="text-muted-foreground">
                We simplify your global trade operations by offering reliable customs clearance and logistics services. 
              </p>
            </div>
          </div>
      </div>
    </section>


      {/* Features Section */}
     
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of quality products for import and export
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.path} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/products/garments" className="flex items-center gap-2">
                View All Products <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
       <section className="py-20 bg-[#f4f5f7]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What We Export
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Premium quality products for global markets
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group border border-white/50 rounded-2xl p-6 
                           bg-white/20 backdrop-blur-lg shadow-lg 
                           hover:border-white/80 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                
              </div>
            ))}
          </div>
        </div>
      </section>
        <ExportProcess />

      

      {/* Featured Products */}
    
    

      {/* What We Export */}
     
         <section className="py-16 bg-[#f4f5f7]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Membership & Certification
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Trusted by leading authorities and certified for excellence
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="pb-12"
        >
          {certifications.map((cert, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                {/* Image wrapper with fixed aspect ratio */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center mb-3 bg-[#f9f9f9] rounded-lg">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-center text-gray-600 px-2">
                  {cert.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  
<Testimonials />
<div className="container mx-auto m-8 p-6 md:p-12 rounded-2xl text-center 
                bg-gradient-to-t from-[#151d2c] to-primary/90 text-white">
  <h2 className="text-2xl text-white md:text-3xl font-bold mb-4">            Ready to Start Trading?
</h2>
  
  <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
               Connect with us today for your import and export needs

  </p>
  
  <a
    href="/contact"
    className="inline-flex items-center px-6 md:px-8 py-3 
               bg-white/20 backdrop-blur-lg border border-white/50 
               hover:bg-white/30 hover:border-white/80 
               text-white font-semibold rounded-full shadow-lg transition-all"
  >
    Get Started
  </a>
</div>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-t from-[#151d2c] to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Trading?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with us today for your import and export needs
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white/20 backdrop-blur-lg border border-white/50 
                       hover:bg-white/30 hover:border-white/80 
                       text-white font-semibold rounded-full shadow-lg transition-all"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Index;
