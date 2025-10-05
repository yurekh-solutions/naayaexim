import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import naayatradeLogo from "@/assets/Naayatradelogo.png";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import yuvi from "@/assets/yuvi.png";

import { Award, Globe, Users, TrendingUp, Shield, Zap , ExternalLink } from "lucide-react";

const About = () => {
    const stats = [
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "99%", label: "Success Rate" },
  ];
    const naayatradeRef = useRef(null);
  const isNaayatradeInView = useInView(naayatradeRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
<section className="relative min-h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url('/src/assets/16.png')] bg-cover bg-center" />

  {/* Blackish transparent overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

  <div className="container relative z-10 mx-auto px-4">
    <h2 className="text-4xl md:text-6xl  text-white font-bold mb-6">
      Ready to Grow with Us?
    </h2>
    <p className="text-lg md:text-xl opacity-90 mb-8  text-gray-200 max-w-2xl mx-auto">
      Let’s connect and make your international trade journey seamless.
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
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              NaayaExim is a leading export-import company based in India. We specialize in 
              connecting global markets with premium Indian products across multiple categories including garments, 
              leather products, handicrafts, food products, and more.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our commitment to quality, reliability, and customer satisfaction has made us a preferred partner for 
              businesses worldwide. We maintain stringent quality control measures and work directly with manufacturers 
              and artisans to ensure the best products reach our clients.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a focus on sustainable and ethical sourcing practices, we aim to promote Indian craftsmanship and 
              products on the global stage while ensuring fair trade practices for our suppliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="glass-card p-8 rounded-2xl text-center crystal-shine">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Quality First</h3>
              <p className="text-muted-foreground">Certified products meeting international standards</p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center crystal-shine">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">Serving clients across multiple continents</p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center crystal-shine">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Experienced professionals dedicated to excellence</p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center crystal-shine">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth Focus</h3>
              <p className="text-muted-foreground">Continuously expanding our product range</p>
            </div>
          </div>

        
        </div>
      </section>
      <section className="py-20 relative bg-gradient-to-br from-muted/80 to-gray-300">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent " />
        <div className="container mx-auto px-4 relative z-10 ">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 ">
            <div>
              <h2 className="text-4xl font-bold mb-6">About NaayaExim</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Naayaexim. Thank you for your interest in our Company. We have
                  established a strong goodwill and reputation in the global trade industry.
                </p>
                <p>
                  We are exporters of premium Wooden Handicraft products, handmade decorative
                  items, photo frames, handmade clothes, and more.
                </p>
                <p>
                  With elegance, style and quality at our core, we ensure products meet the
                  highest global standards.
                </p>
              </div>
            </div>
            <GlassCard className="p-8 bg-gradient-to-tr from-[#f8f8f8] to-gray-300 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                Delivering premium products worldwide while maintaining ethical business
                practices and long-term relationships.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a globally recognized import-export leader known for reliability,
                innovation, and excellence.
              </p>
            </GlassCard>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 ">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <GlassCard
                  key={index}
                  className="text-center  bg-gradient-to-tr from-[#f8f8f8] to-gray-300  p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </GlassCard>
              );
            })}
          </div>
<section ref={naayatradeRef} className="py-16 lg:py-20 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Content */}
      <div className="space-y-6 order-2 lg:order-1">
        <h2 className="text-3xl lg:text-3xl font-bold mb-4">
          <span className="">
           NaayaExim, a proud division of Naayatrade
          </span>
        </h2>

        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
         NaayaExim proudly operates as part of Naayatrade, the world’s emerging powerhouse in global wholesale and digital trade. This association reflects our steadfast commitment to delivering the same excellence, innovation, and forward-thinking approach that define Naayatrade.
        </p>

        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
         By drawing on Naayatrade’s expertise in building scalable marketplaces, supply chain networks, and cutting-edge digital ecosystems, NaayaExim serves as a trusted import-export partner—connecting global markets and delivering unmatched value to businesses worldwide.
        </p>

        <div className="pt-4">
          <Button
            variant="outline"
            size="lg"
            className="glass-morphism border-primary/30 text-primary hover:bg-primary/10 rounded-full text-lg px-6 py-3 group"
            onClick={() => window.open('https://naayatrade.com/', '_blank')}
          >
            <ExternalLink className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Know More
          </Button>
        </div>
      </div>

      {/* Right Side - NaayaExim Logo and Branding */}
      <div className="relative order-1 lg:order-2">
        <GlassCard variant="premium" className="p-8 lg:p-12 text-center">
          <div className="relative mb-6">
            <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 relative">
              <img
                src={ yuvi }
                alt="NaayaExim Logo"
                className="w-full h-full  object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/30 rounded-full blur-xl" />
            </div>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            <span className="text-orange-500 ">
              NAAYATRADE
            </span>
          </h3>

          <p className="text-muted-foreground text-sm lg:text-base mb-6">
           Global Wholesale & Digital Trade Platform
          </p>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-xs text-muted-foreground">Countries</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">
                <AnimatedCounter end={10000} suffix="+" />
              </div>
              <p className="text-xs text-muted-foreground">Trade Partners</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  </div>
</section>

          {/* Why Choose Us Section */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8 " >
              <GlassCard className="p-6  bg-gradient-to-tr from-[#f8f8f8] to-gray-300 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Every product is tested against international standards.
                </p>
              </GlassCard>
              <GlassCard className="p-6  bg-gradient-to-tr from-[#f8f8f8] to-gray-300  backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Timely Delivery</h3>
                <p className="text-muted-foreground">
                  Our logistics network ensures reliable and on-time shipping.
                </p>
              </GlassCard>
              <GlassCard className="p-6 bg-gradient-to-tr from-[#f8f8f8] to-gray-300  backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Global Network</h3>
                <p className="text-muted-foreground">
                  Trusted partners across the globe for smooth international trade.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
{/* Company Journey */}
<div className="container mx-auto m-8 p-6 md:p-12 rounded-2xl text-center 
                bg-gradient-to-t from-[#151d2c] to-primary/90 text-white">
  <h2 className="text-2xl text-white md:text-3xl font-bold mb-4">           Ready to Grow with Us?
</h2>
  
  <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Let’s connect and make your international trade journey seamless.

  </p>
  
  <a
    href="/contact"
    className="inline-flex items-center px-6 md:px-8 py-3 
               bg-white/20 backdrop-blur-lg border border-white/50 
               hover:bg-white/30 hover:border-white/80 
               text-white font-semibold rounded-full shadow-lg transition-all"
  >
    Get Started
  </a>
</div>

      {/* CTA Banner */}
      {/* <section className="relative py-20 bg-gradient-to-t from-[#151d2c] to-primary/90 text-white text-center">
        <div className="absolute inset-0 bg-[url('/images/crystal-bg.png')] opacity-20 bg-cover" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ready to Grow with Us?</h2>
          <p className="text-lg opacity-90 mb-6">
            Let’s connect and make your international trade journey seamless.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 
                      bg-white/20 backdrop-blur-lg border border-white/50 
             hover:bg-white/30 hover:border-white/80 
             text-white font-semibold rounded-full shadow-lg transition-all"
          >
            Contact Us
          </a>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default About;
