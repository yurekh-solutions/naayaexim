import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, CheckCircle, Shield, FileCheck } from "lucide-react";

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management System", icon: Award },
  { name: "ISO 14001:2015", description: "Environmental Management", icon: Shield },
  { name: "FSSAI Certified", description: "Food Safety Standards", icon: CheckCircle },
  { name: "Export License", description: "Authorized Export Operations", icon: FileCheck },
];

const Certification = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-primary to-accent/80 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 crystal-shine"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sparkle">Our Certifications</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Quality assurance through internationally recognized standards
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Quality & Compliance</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              At NaayaExim, we maintain the highest standards of quality and compliance. Our certifications reflect 
              our commitment to excellence and adherence to international standards across all our operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We continuously invest in training, quality control systems, and compliance measures to ensure that 
              our products and services meet or exceed global standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="glass-card p-8 rounded-2xl crystal-shine hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                      <p className="text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Our Quality Commitment</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Regular quality audits and inspections at every stage</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Direct collaboration with certified manufacturers and suppliers</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Compliance with international trade regulations and standards</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Continuous improvement through feedback and market research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certification;
