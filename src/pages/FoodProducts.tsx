import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

// const products = [
//   { title: "Fresh Fruits", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800", path: "/products/food-products" },
//   { title: "Vegetables", image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=800", path: "/products/food-products" },
//   { title: "Grocery Items", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800", path: "/products/food-products" },
//   { title: "Premium Spices", image: "https://images.unsplash.com/photo-1596040033229-a0b800c51c9f?w=800", path: "/products/food-products" },
//   { title: "Namkeen", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", path: "/products/food-products" },
//   { title: "Frozen Foods", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800", path: "/products/food-products" },
// ];
const products = [
  { title: "Fresh Fruits", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800", path: "/products/food-products" },
  { title: "Vegetables", image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=800", path: "/products/food-products" },
  { title: "Confectionery", image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800", path: "/products/food-products" },
  { title: "Namkeen", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", path: "/products/food-products" },
  { title: "Frozen Foods", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800", path: "/products/food-products" },
  { title: "Grocery Items", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800", path: "/products/food-products" },

  // ✅ More Items
  // { title: "Dairy Products", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800", path: "/products/food-products" },
  // { title: "Bakery Items", image: "https://images.unsplash.com/photo-1608198093002-ad4e005484b7?w=800", path: "/products/food-products" },
  // { title: "Dry Fruits", image: "https://images.unsplash.com/photo-1605025188739-7d2b81b88b6d?w=800", path: "/products/food-products" },
  // { title: "Pickles & Chutneys", image: "https://images.unsplash.com/photo-1617196036037-b62dbd33e0e9?w=800", path: "/products/food-products" },
  // { title: "Beverages", image: "https://images.unsplash.com/photo-1600271881535-83c5e86f45f3?w=800", path: "/products/food-products" },
  // { title: "Tea & Coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800", path: "/products/food-products" },
  // { title: "Rice & Grains", image: "https://images.unsplash.com/photo-1600326146083-cf0a4f69a6cf?w=800", path: "/products/food-products" },
  // { title: "Pulses & Lentils", image: "https://images.unsplash.com/photo-1605478571928-cb1f3790e939?w=800", path: "/products/food-products" },
  // { title: "Herbal Products", image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800", path: "/products/food-products" },
  // { title: "Organic Products", image: "https://images.unsplash.com/photo-1592933936735-4c2a67ffb196?w=800", path: "/products/food-products" },
  // { title: "Cereals", image: "https://images.unsplash.com/photo-1512058564366-c9e3e0463f51?w=800", path: "/products/food-products" },
  // { title: "Honey", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800", path: "/products/food-products" },
  // { title: "Snacks", image: "https://images.unsplash.com/photo-1604908812794-eec9c9f2fc0e?w=800", path: "/products/food-products" },
  // { title: "Edible Oils", image: "https://images.unsplash.com/photo-1627483262504-7a7d1a9fc0da?w=800", path: "/products/food-products" },
  // { title: "Confectionery", image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800", path: "/products/food-products" },
];

const FoodProducts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* <section className="bg-gradient-to-r from-primary to-accent/80 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 crystal-shine"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sparkle">Food Products</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Premium quality fruits, vegetables, spices, and grocery items sourced from the finest suppliers
          </p>
        </div>
      </section> */}
  <section className="relative min-h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url('/src/assets/hero-spices.jpg')] bg-cover bg-center" />

  {/* Blackish transparent overlay */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

  <div className="container relative z-10 mx-auto px-4">
    <h2 className="text-4xl md:text-6xl font-bold mb-6">
   Food Products
    </h2>
    <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Premium quality fruits, vegetables, spices, and grocery items sourced from the finest suppliers

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
          <div className="glass-card p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-6">About Our Food Products</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              NaayaExim offers a wide range of food products including fresh fruits and vegetables, premium spices, 
              grocery essentials, and frozen foods. We maintain strict quality control measures to ensure that all 
              products meet international food safety standards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our food products are sourced directly from trusted farmers and manufacturers, ensuring freshness, 
              quality, and competitive pricing for our global clients.
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

export default FoodProducts;
