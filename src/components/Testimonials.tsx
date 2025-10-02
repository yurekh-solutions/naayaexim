import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      company: "Global Retail Inc.",
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      rating: 4,
      text: "Naayaexim has been our trusted partner for 5 years. Their quality control and timely deliveries are exceptional. Highly recommend for any business looking for reliable Indian exports.",
    },
    {
      name: "Sarah Williams",
      company: "European Imports Ltd.",
      country: "UK",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      rating: 4,
      text: "Outstanding service from start to finish. The team handles all documentation seamlessly and the product quality exceeds expectations. We've increased our order volume by 200%.",
    },
    {
      name: "Ahmed Al-Rashid",
      company: "Dubai Trading Co.",
      country: "UAE",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      rating: 3,
      text: "Professional, reliable, and transparent. Naayaexim understands the Middle East market well and provides competitive pricing without compromising on quality.",
    },
    {
      name: "Emma Thompson",
      company: "Thompson & Sons",
      country: "Australia",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      rating: 4.5,
      text: "The best export partner we've worked with. Their custom solutions and 24/7 support make international trade feel effortless. The spices quality is top-notch!",
    },
    {
      name: "Carlos Rodriguez",
      company: "Latin American Distributors",
      country: "Brazil",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      rating: 3.8,
      text: "Naayaexim helped us expand our product line with authentic Indian handicrafts and textiles. Their expertise in international logistics saved us time and money.",
    },
    {
      name: "Yuki Tanaka",
      company: "Tokyo Imports",
      country: "Japan",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      rating: 5,
      text: "Excellent communication and attention to detail. Every shipment arrives on time with all certifications in order. Truly a world-class export company.",
    },
  ];

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses worldwide for quality exports and reliable service
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-card border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                <Quote className="h-10 w-10 text-accent/20 mb-4" />

                {/* Dynamic Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "fill-accent text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                    <div className="text-xs text-accent">
                      {testimonial.country}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
