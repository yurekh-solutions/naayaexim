import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

// Import local asset
import leatherBelt from "../assets/image.png"; // Adjust path if needed

const LeatherProducts = () => {
  const products = [
    {
      title: "Leather Shoes",
      image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&q=80",
      path: "/products/leather-products",
    },
    {
      title: "Leather Sandals",
      image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&q=80",
      path: "/products/leather-products",
    },
    {
      title: "Leather Chappals",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&q=80",
      path: "/products/leather-products",
    },
    {
      title: "Leather Bags",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
      path: "/products/leather-products",
    },
    {
      title: "Leather Wallets",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
      path: "/products/leather-products",
    },
    {
      title: "Leather Belt",
      image: leatherBelt, // Local image imported
      path: "/products/leather-products",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/aboutsss.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        <div className="container relative z-10 mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Leather Products</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Premium quality leather products for lasting elegance
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 backdrop-blur-lg border border-white/50 hover:bg-white/30 hover:border-white/80 text-white font-semibold rounded-full shadow-lg transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80"
                alt="Leather Products"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Leather Products</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                NaayaExim is well known for the quality of leather and is one of the highly regarded leather product companies of India.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Leather products are highly coveted for their classy look and feel. Be it shoes, bags or jackets, pure leather products can always be set apart from the synthetics and the faux leather.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Leather is a strong, flexible and durable material obtained from the tanning, or chemical treatment, of animal skins and hides to prevent decay.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Leather can be used to make a variety of items, including clothing, footwear, handbags, furniture, tools and sports equipment, and lasts for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leather Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default LeatherProducts;
