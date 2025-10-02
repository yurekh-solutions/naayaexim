
import emailjs from "emailjs-com";

import { useState } from "react";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   // Create WhatsApp message
  //   const whatsappNumber = "917021314409";
  //   const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
  //   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
  //   // Open WhatsApp in new tab
  //   window.open(whatsappUrl, '_blank');
    
  //   toast({
  //     title: "Redirecting to WhatsApp!",
  //     description: "You'll be connected with our team shortly.",
  //   });
    
  //   setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  // };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const mailtoLink = `mailto:naayaexim@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
  )}`;
  window.location.href = mailtoLink;
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      {/* <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help your business grow globally
            </p>
          </div>
        </div>
      </section> */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url('/src/assets/contact.png')] bg-cover bg-center" />

  {/* Blackish transparent overlay */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

  <div className="container relative z-10 mx-auto px-4">
    <h2 className="text-4xl md:text-6xl font-bold mb-6">
     Contact Us
    </h2>
    <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                    Let's discuss how we can help your business grow globally

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


      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our products or services? Fill out the form and our team will respond within 24 hours.
                </p>
              </div>

              <GlassCard className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">info@naayaexim.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">+91 99306 70707</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">India</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">10:00 AM - 3:00 PM</span>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <GlassCard className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/50 backdrop-blur-sm border-white/30"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/50 backdrop-blur-sm border-white/30"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/50 backdrop-blur-sm border-white/30"
                        placeholder="+91 XXX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-white/50 backdrop-blur-sm border-white/30"
                        placeholder="Product Inquiry"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white/50 backdrop-blur-sm border-white/30 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
