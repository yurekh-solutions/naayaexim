import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
  { title: "Living Room Sets", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800", path: "/products/furniture" },
  { title: "Bedroom Furniture", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800", path: "/products/furniture" },
  { title: "Dining Sets", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800", path: "/products/furniture" },
  { title: "Office Furniture", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800", path: "/products/furniture" },
  { title: "Outdoor Furniture", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800", path: "/products/furniture" },
  { title: "Storage Solutions", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800", path: "/products/furniture" },
];

const Furniture = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-primary to-accent/80 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 crystal-shine"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sparkle">Furniture</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Premium quality furniture combining style, comfort, and durability
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-6">About Our Furniture</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our furniture collection features contemporary and traditional designs crafted from premium materials. 
              We offer complete solutions for residential and commercial spaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each piece is designed with attention to detail, ensuring both aesthetic appeal and functional excellence. 
              From living room sets to office furniture, we provide comprehensive furnishing solutions.
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

export default Furniture;
