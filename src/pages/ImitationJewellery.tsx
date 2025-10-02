import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
  { title: "Necklace Sets", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800", path: "/products/imitation-jewellery" },
  { title: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800", path: "/products/imitation-jewellery" },
  { title: "Bracelets & Bangles", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800", path: "/products/imitation-jewellery" },
  { title: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800", path: "/products/imitation-jewellery" },
  { title: "Anklets", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800", path: "/products/imitation-jewellery" },
  { title: "Bridal Sets", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800", path: "/products/imitation-jewellery" },
];

const ImitationJewellery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-primary to-accent/80 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 crystal-shine"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sparkle">Imitation Jewellery</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Exquisite designs and stunning craftsmanship in affordable luxury jewelry
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-6">About Our Imitation Jewellery</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our imitation jewellery collection combines traditional Indian craftsmanship with contemporary designs. 
              Each piece is carefully crafted to offer the look and feel of precious jewelry at accessible prices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From elegant necklace sets to delicate earrings, our collection caters to various occasions including 
              weddings, festivals, and everyday wear. We use high-quality materials to ensure durability and lasting shine.
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

export default ImitationJewellery;
