import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
  { title: "Floor Tiles", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800", path: "/products/ceramic-stone" },
  { title: "Wall Tiles", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800", path: "/products/ceramic-stone" },
  { title: "Marble Slabs", image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800", path: "/products/ceramic-stone" },
  { title: "Granite Stone", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800", path: "/products/ceramic-stone" },
  { title: "Decorative Tiles", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800", path: "/products/ceramic-stone" },
  { title: "Natural Stone", image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800", path: "/products/ceramic-stone" },
];

const CeramicStone = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-primary to-accent/80 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 crystal-shine"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sparkle">Ceramic & Stone Products</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Premium tiles and natural stone for elegant spaces
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-6">About Ceramic & Stone Products</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our ceramic and stone collection includes premium tiles, marble, granite, and natural stone products. 
              Perfect for both residential and commercial applications, our products combine beauty with durability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We source the finest materials and offer a wide range of colors, patterns, and finishes to suit any 
              design aesthetic. From classic marble to contemporary ceramic tiles, we have solutions for every project.
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

export default CeramicStone;
