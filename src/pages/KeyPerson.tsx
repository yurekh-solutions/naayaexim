import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Linkedin, Mail } from "lucide-react";

const KeyPerson = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-primary to-accent/80 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 crystal-shine"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 sparkle">Key Person</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Meet the visionary leader behind NaayaExim's success
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl crystal-shine">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-6xl font-bold flex-shrink-0">
                  NE
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-2">Founder & Managing Director</h2>
                  <p className="text-xl text-muted-foreground mb-4">NaayaExim</p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a href="mailto:info@naayaexim.com" className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <Mail className="h-5 w-5 text-accent" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <Linkedin className="h-5 w-5 text-accent" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">About</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With over a decade of experience in international trade and export-import operations, our founder 
                    has been instrumental in establishing NaayaExim as a trusted name in the industry. Their vision 
                    and leadership have driven the company's growth and expansion into multiple product categories.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Expertise</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Specialized in:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>International trade regulations and compliance</li>
                    <li>Supply chain management and logistics</li>
                    <li>Quality assurance and product sourcing</li>
                    <li>Market analysis and business development</li>
                    <li>Building strategic partnerships globally</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "Our goal is to showcase the best of Indian products to the world while maintaining the highest 
                    standards of quality and ethics in all our operations. We believe in creating value for our 
                    clients, partners, and communities through sustainable and responsible trade practices."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KeyPerson;
