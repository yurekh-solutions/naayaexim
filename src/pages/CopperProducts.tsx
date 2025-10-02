import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
  { title: "Copper Utensils", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800", path: "/products/copper-products" },
  { title: "Copper Bottles", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800", path: "/products/copper-products" },
  { title: "Decorative Items", image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800", path: "/products/copper-products" },
  { title: "Copper Cookware", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800", path: "/products/copper-products" },
  { title: "Traditional Sets", image: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=800", path: "/products/copper-products" },
  { title: "Gift Items", image: "https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?w=800", path: "/products/copper-products" },
];

const CopperProducts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-primary to-accent/80 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 crystal-shine"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sparkle">Copper Products</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Handcrafted copper items combining health benefits with traditional beauty
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-6">About Our Copper Products</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Copper has been used for centuries in Indian households for its health benefits and antimicrobial properties. 
              Our copper product range includes traditional utensils, water bottles, cookware, and decorative items.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each piece is handcrafted by skilled artisans, combining traditional techniques with modern designs. 
              Our copper products are made from pure copper and are perfect for daily use or as elegant gifts.
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

export default CopperProducts;
