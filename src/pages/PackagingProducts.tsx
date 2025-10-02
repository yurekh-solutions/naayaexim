import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
  { title: "Corrugated ", image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800", path: "/products/packaging-products" },
  { title: "Eco-Friendly Packaging", image: "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=800", path: "/products/packaging-products" },
  { title: "Custom Boxes", image:"https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?w=800", path: "/products/packaging-products" },
  { title: "Gift Packaging", image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800", path: "/products/packaging-products" },
  { title: "Industrial Packaging", image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=800", path: "/products/packaging-products" },
  { title: "Food Packaging", image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800", path: "/products/packaging-products" },
];

const PackagingProducts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-primary to-accent/80 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 crystal-shine"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sparkle">Packaging Products</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Sustainable and innovative packaging solutions for all industries
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-6">About Our Packaging Products</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We offer comprehensive packaging solutions for various industries including food, pharmaceuticals, 
              e-commerce, and manufacturing. Our focus is on sustainable, eco-friendly materials without compromising quality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From corrugated boxes to custom-designed packaging, we provide solutions that protect products during 
              transit while enhancing brand presentation. All our packaging materials meet international quality standards.
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

export default PackagingProducts;
