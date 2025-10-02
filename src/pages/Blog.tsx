import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Export: Trends in Global Trade 2024",
    excerpt: "Discover the latest trends shaping international trade and how businesses can adapt to the changing landscape.",
    image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=800",
    date: "March 15, 2024",
    author: "NaayaExim Team",
    category: "Industry Insights"
  },
  {
    id: 2,
    title: "Quality Standards in Leather Products Manufacturing",
    excerpt: "Learn about the stringent quality control measures we implement to ensure premium leather products.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
    date: "March 10, 2024",
    author: "Quality Team",
    category: "Manufacturing"
  },
  {
    id: 3,
    title: "Sustainable Sourcing: Our Commitment to Eco-Friendly Practices",
    excerpt: "Explore how NaayaExim is leading the way in sustainable and ethical sourcing practices.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    date: "March 5, 2024",
    author: "Sustainability Team",
    category: "Sustainability"
  },
  {
    id: 4,
    title: "From Farm to Fashion: The Journey of Cotton Products",
    excerpt: "Follow the complete supply chain of our premium cotton garments from field to finished product.",
    image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=800",
    date: "February 28, 2024",
    author: "Supply Chain",
    category: "Products"
  },
  {
    id: 5,
    title: "Expanding into New Markets: Tips for Export Success",
    excerpt: "Essential strategies for businesses looking to expand their reach into international markets.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    date: "February 20, 2024",
    author: "Business Development",
    category: "Business Tips"
  },
  {
    id: 6,
    title: "The Art of Handicraft: Preserving Traditional Skills",
    excerpt: "How we work with local artisans to preserve traditional craftsmanship while meeting modern demands.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800",
    date: "February 15, 2024",
    author: "Artisan Relations",
    category: "Handicraft"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-primary to-accent/80 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="crystal-shine w-full h-full"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sparkle">Our Blog</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and news from the world of international trade
          </p>
        </div>
      </section> */}
            <section className="relative min-h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url('/src/assets/hero-spices.jpg')] bg-cover bg-center" />

  {/* Blackish transparent overlay */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

  <div className="container relative z-10 mx-auto px-4">
            <h1 className="text-4xl  md:text-5xl font-bold mb-4 sparkle">Our Blog</h1>

    <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                       Stay updated with the latest insights, trends, and news from the world of international trade


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

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card className="group overflow-hidden border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-xl crystal-shine">
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                      </div>
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-semibold text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
