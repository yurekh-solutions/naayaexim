import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Search, Package, TrendingUp, Shield, Clock, FileCheck } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Product Research",
    description: "We identify and research products matching your specific requirements from verified suppliers."
  },
  {
    icon: Package,
    title: "Quality Inspection",
    description: "Rigorous quality checks and inspections to ensure products meet international standards."
  },
  {
    icon: TrendingUp,
    title: "Price Negotiation",
    description: "Leverage our market knowledge to negotiate the best prices and terms for your orders."
  },
  {
    icon: Shield,
    title: "Supplier Verification",
    description: "Complete due diligence and verification of manufacturers and suppliers."
  },
  {
    icon: Clock,
    title: "Logistics Coordination",
    description: "End-to-end logistics management from factory to your destination."
  },
  {
    icon: FileCheck, // <- new icon (lucide-react)
    title: "Customs & Compliance",
    description: "Expert guidance on documentation, customs clearance, and compliance with global trade regulations."
  }
];

const SourcingAgent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      

<section className="relative min-h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url('/src/assets/hero-logistics.jpg')] bg-cover bg-center" />

  {/* Blackish transparent overlay */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

  <div className="container relative z-10 mx-auto px-4">
    <h2 className="text-4xl md:text-6xl font-bold mb-6">
     Sourcing Agent Services
    </h2>
    <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Your trusted partner for efficient and reliable product sourcing from India

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
          <div className="glass-card p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose NaayaExim as Your Sourcing Agent?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              With deep market knowledge and an extensive network of verified suppliers across India, we simplify 
              your sourcing process. Whether you're looking for garments, handicrafts, leather products, or any 
              other Indian products, we handle everything from supplier identification to final shipment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experienced professionals ensures that you get the best quality products at competitive 
              prices, while maintaining complete transparency throughout the process.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="glass-card p-8 rounded-2xl crystal-shine hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Share Your Requirements</h3>
                  <p className="text-muted-foreground">Tell us what products you're looking for, including specifications, quantities, and quality standards.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Supplier Identification</h3>
                  <p className="text-muted-foreground">We identify and verify suitable suppliers from our extensive network across India.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Check & Negotiation</h3>
                  <p className="text-muted-foreground">We conduct thorough quality inspections and negotiate the best terms on your behalf.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Logistics & Delivery</h3>
                  <p className="text-muted-foreground">We manage the entire logistics process ensuring timely delivery to your destination.</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" p-8 md:p-12 rounded-2xl text-center bg-gradient-to-t from-[#151d2c] to-primary/90 text-white text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Sourcing?</h2>
            <p className="text-lg  text-white text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your sourcing requirements. Our team is ready to help you find the 
              perfect products at the best prices.
            </p>
            {/* <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Started
            </Button> */}
            <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 
                      bg-white/20 backdrop-blur-lg border border-white/50 
             hover:bg-white/30 hover:border-white/80 
             text-white font-semibold rounded-full shadow-lg transition-all"
          >
         Get Started
          </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SourcingAgent;
