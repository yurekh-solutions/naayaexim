import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import towle from "@/assets/towle.png"
const Garments = () => {
  const garmentCategories = [
    {
      title: "Bed Sheets",
      subcategories: ["Cotton Blend Bed Sheets", "Polyester Bed Sheets", "Egyptian Bed Sheets", "Linen Bed Sheets"],
    },
    {
      title: "Towels",
      subcategories: ["Bath Towels", "Hand Towels", "Finger Towels", "Wash Cloths"],
    },
    {
      title: "Jeans",
      subcategories: ["Slim Fit Jeans", "Boot cut Jeans", "Skinny Jeans", "High Rise Jeans"],
    },
    {
      title: "Cotton Products",
      subcategories: ["Shirts", "T-shirts", "Trousers", "Tops", "Kurti", "Saree"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-primary to-accent/80 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garments</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Quality textile products for every need
          </p>
        </div>
      </section> */}

  <section className="relative min-h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url('/src/assets/abouts.png')] bg-cover bg-center" />

  {/* Blackish transparent overlay */}
  <div className="absolute inset-0  backdrop-blur-sm" />

  <div className="container relative z-10 mx-auto px-4">
    <h2 className="text-4xl md:text-6xl font-bold mb-6">
    Garments
    </h2>
    <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Quality textile products for every need

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
      {/* Bed Sheets Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
                alt="Bed Sheets"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">About Bed Sheet Products</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A person spends around one-third of their life in bed, and making that third as comfortable as possible has a lot to do with their choice of bed sheet. Having a great mattress, or your ideal duvet and pillows can be negatively affected if the sheets you're covering them with are wrong.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Cotton, polyester, fiber, Egyptian cotton, linen, silk, modal, Tencel and various other types of materials are available in the market. Egyptian or Pima cotton are both a more luxurious type of cotton. Cotton is a very popular choice when it comes to bed sheets, and has been used for at least 7000 years.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {garmentCategories[0].subcategories.map((sub) => (
                  <div key={sub} className="glass-card p-4 rounded-lg text-center">
                    <p className="font-medium">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Towels Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Towel Products</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A towel is a piece of absorbent fabric or paper used for drying or wiping a body or a surface. It draws moisture through direct contact, often using a blotting or a rubbing motion.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                In households, several types of fabric towels are used, including hand towels, bath towels and kitchen towels. Bath Towels for drying your body, Beach Towels when you are going to a beach, Hand Towels for drying your hands, Face Towels for cleaning your face.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {garmentCategories[1].subcategories.map((sub) => (
                  <div key={sub} className="glass-card p-4 rounded-lg text-center">
                    <p className="font-medium">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
           <img
  src={towle}       // Correct usage of JS variable
  alt="Towels"
  className="rounded-2xl shadow-2xl w-full"
/>

            </div>
          </div>
        </div>
      </section>

      {/* Jeans Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80"
                alt="Jeans"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">About Jeans Products</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                It's hard to imagine a world without jeans. Aside from the physical benefits of wearing a great pair of jeans, there are many reasons this item of clothing is more popular than any other.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Jeans provide convenience, comfort, versatility, casual and relaxed feel, easy maintenance, and are long-lasting. Jeans are marked with labels like skinny, slim or straight – these are an indication of the body type the jeans are designed for.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {garmentCategories[2].subcategories.map((sub) => (
                  <div key={sub} className="glass-card p-4 rounded-lg text-center">
                    <p className="font-medium">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cotton Products Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Cotton Products</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Cotton is a natural product and because of the way it is designed and manufactured into clothing, it has many advantages, such as its ability to control moisture, insulate, provide comfort and it is also hypoallergenic, weatherproof and is a durable fabric.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Cotton is known for its cooling properties. Wear a cotton shirt on a warm day and your skin will still be able to breathe and keep cool. A cotton shirt will also take moisture away from the skin, making it ideal for T-shirts that need to withstand regular washing.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {garmentCategories[3].subcategories.map((sub) => (
                  <div key={sub} className="glass-card p-4 rounded-lg text-center">
                    <p className="font-medium">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80"
                alt="Cotton Products"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Garments;
