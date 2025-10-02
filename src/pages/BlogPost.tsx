import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full mb-4">
              Industry Insights
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Future of Export: Trends in Global Trade 2024
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                March 15, 2024
              </span>
              <span className="flex items-center gap-2">
                <User className="h-5 w-5" />
                NaayaExim Team
              </span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=1200"
              alt="Global Trade"
              className="w-full h-96 object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The landscape of international trade is evolving rapidly, driven by technological advancements, 
                changing consumer preferences, and global economic shifts. At NaayaExim, we stay ahead of these 
                trends to provide our clients with the best possible service and insights.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Digital Transformation in Trade</h2>
              <p className="leading-relaxed mb-6">
                Digital platforms are revolutionizing how businesses conduct international trade. From blockchain-based 
                supply chain tracking to AI-powered market analysis, technology is making trade more efficient, 
                transparent, and accessible than ever before.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Sustainability Takes Center Stage</h2>
              <p className="leading-relaxed mb-6">
                Consumers and businesses alike are demanding more sustainable and ethical sourcing practices. 
                Companies that can demonstrate their commitment to environmental and social responsibility are 
                gaining a competitive advantage in the global marketplace.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Regional Trade Agreements</h2>
              <p className="leading-relaxed mb-6">
                New trade agreements are opening up opportunities for businesses to expand into previously 
                challenging markets. Understanding these agreements and how to leverage them is crucial for 
                export success.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>
              <p className="leading-relaxed mb-6">
                As we move forward, adaptability and innovation will be key. At NaayaExim, we're committed to 
                helping our clients navigate these changes and capitalize on new opportunities in the global market.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
