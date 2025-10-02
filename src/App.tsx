import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";
import QuoteRequest from "./components/QuoteRequest";
import Index from "./pages/Index";
import Garments from "./pages/Garments";
import LeatherProducts from "./pages/LeatherProducts";
import FoodProducts from "./pages/FoodProducts";
import ImitationJewellery from "./pages/ImitationJewellery";
import Handicraft from "./pages/Handicraft";
import Furniture from "./pages/Furniture";
import CeramicStone from "./pages/CeramicStone";
import CopperProducts from "./pages/CopperProducts";
import PackagingProducts from "./pages/PackagingProducts";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Certification from "./pages/Certification";
import KeyPerson from "./pages/KeyPerson";
import SourcingAgent from "./pages/SourcingAgent";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/garments" element={<Garments />} />
          <Route path="/products/leather-products" element={<LeatherProducts />} />
          <Route path="/products/food-products" element={<FoodProducts />} />
          <Route path="/products/imitation-jewellery" element={<ImitationJewellery />} />
          <Route path="/products/handicraft" element={<Handicraft />} />
          <Route path="/products/furniture" element={<Furniture />} />
          <Route path="/products/ceramic-stone" element={<CeramicStone />} />
          <Route path="/products/copper-products" element={<CopperProducts />} />
          <Route path="/products/packaging-products" element={<PackagingProducts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/certification" element={<Certification />} />
          <Route path="/about/key-person" element={<KeyPerson />} />
          <Route path="/sourcing-agent" element={<SourcingAgent />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <WhatsAppFloat /> */}
        <ScrollToTop />
        {/* <QuoteRequest /> */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
