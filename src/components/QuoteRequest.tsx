import { useState } from "react";
import { FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const QuoteRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote request sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 crystal-shine sparkle"
        aria-label="Request Quote"
      >
        <FileText className="h-8 w-8" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="glass-card rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Product</label>
                <Input placeholder="Which product?" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <Input placeholder="How many units?" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea placeholder="Additional details..." rows={3} />
              </div>
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteRequest;
