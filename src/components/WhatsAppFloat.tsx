import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phoneNumber = "917021341409";
  const message = encodeURIComponent("Hello! I'm interested in your products.");
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 crystal-shine sparkle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-ping"></span>
    </button>
  );
};

export default WhatsAppFloat;
