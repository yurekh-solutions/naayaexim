import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800", category: "Leather" },
  { url: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800", category: "Garments" },
  { url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800", category: "Handicraft" },
  { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800", category: "Furniture" },
  { url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800", category: "Jewellery" },
  { url: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800", category: "Food" },
  { url: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800", category: "Ceramic" },
  { url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800", category: "Copper" },
  { url: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=800", category: "Packaging" },
];

const categories = ["All", "Leather", "Garments", "Handicraft", "Furniture", "Jewellery", "Food", "Ceramic", "Copper", "Packaging"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* <section className="bg-gradient-to-r from-primary to-accent/80 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 crystal-shine"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sparkle">Product Gallery</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Explore our diverse range of premium products
          </p>
        </div>
      </section> */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url('/src/assets/about.png')] bg-cover bg-center" />

  {/* Blackish transparent overlay */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

  <div className="container relative z-10 mx-auto px-4">
            <h1 className="text-4xl  md:text-5xl font-bold mb-4 sparkle">Product Gallery</h1>

    <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Explore our diverse range of premium products

    </p>
    <a
      href="/contact"
      className="inline-flex items-center px-8 py-3 
backdrop-blur-lg border border-white/50 
             hover:bg-white/30 hover:border-white/80 
             text-white font-semibold rounded-full shadow-lg transition-all"
    >
      Contact Us
    </a>
  </div>
</section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground shadow-lg scale-105"
                    : "glass-effect hover:bg-accent/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square crystal-shine"
              >
                <img
                  src={image.url}
                  alt={image.category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-semibold text-xl">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
