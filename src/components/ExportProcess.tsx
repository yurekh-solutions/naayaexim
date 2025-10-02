import { CheckCircle, ClipboardList, FileCheck, Package, Ship, MessageSquare } from "lucide-react";

const ExportProcess = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Inquiry",
      description: "Share your requirements and we'll provide expert consultation",
    },
    {
      icon: ClipboardList,
      title: "Quotation",
      description: "Receive detailed pricing and terms within 24 hours",
    },
    {
      icon: CheckCircle,
      title: "Order Confirmation",
      description: "Finalize specifications and secure your order",
    },
    {
      icon: Package,
      title: "Quality Check",
      description: "Rigorous inspection ensuring premium standards",
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "Complete export paperwork and customs clearance",
    },
    {
      icon: Ship,
      title: "Shipping & Delivery",
      description: "Safe delivery to your destination worldwide",
    },
  ];

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent, and efficient - from inquiry to delivery
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-accent/20" />
            <div className="absolute top-16 left-0 h-1 bg-accent w-0 animate-[width_2s_ease-out_forwards]" 
                 style={{ width: '100%' }} />

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-card border-4 border-accent rounded-full flex items-center justify-center mb-4 shadow-lg z-10 hover:scale-110 transition-transform">
                      <step.icon className="h-12 w-12 text-accent" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet: Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-card border-4 border-accent rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="h-8 w-8 md:h-10 md:w-10 text-accent" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 flex-1 bg-accent/20 mt-2" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportProcess;
