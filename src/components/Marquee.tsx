import { Sparkles } from "lucide-react";

const Marquee = () => {
  const items = [
    "🌾 Premium Indian Spices",
    "🪑 Quality Furniture",
    "💎 Exquisite Handicrafts",
    "👗 Fashion Garments",
    "🥬 Fresh Produce",
    "🍪 Authentic Namkeen",
    "📦 Reliable Packaging",
    "🏺 Ceramic Products"
  ];

  return (
    <div className="relative py-8 bg-[#0f2757] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      
      <div className="flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-8 text-white font-semibold text-lg md:text-xl"
            >
              <Sparkles className="w-5 h-5 mr-3 text-yellow-300" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {[...items, ...items].map((item, index) => (
            <div
              key={`duplicate-${index}`}
              className="inline-flex items-center mx-8 text-white font-semibold text-lg md:text-xl"
            >
              <Sparkles className="w-5 h-5 mr-3 text-yellow-300" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
