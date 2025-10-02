import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
  { title: "Wooden Handicrafts", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800", path: "/products/handicraft" },
  { title: "Metal Art", image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800", path: "/products/handicraft" },
  { title: "Textiles & Fabrics", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800", path: "/products/handicraft" },
  { title: "Pottery & Ceramics", image: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=800", path: "/products/handicraft" },
  { title: "Wall Decor", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=800", path: "/products/handicraft" },
  { title: "Traditional Crafts", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800", path: "/products/handicraft" },
];

const Handicraft = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-primary to-accent/80 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 crystal-shine"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sparkle">Handicraft Products</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Authentic handcrafted items preserving traditional Indian artistry
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-6">About Our Handicrafts</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our handicraft collection showcases the rich cultural heritage of India. Each piece is handcrafted by 
              skilled artisans using traditional techniques passed down through generations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work directly with local artisan communities to ensure fair trade practices while preserving 
              traditional crafts. Our collection includes wooden carvings, metal art, pottery, textiles, and more.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Handicraft;
