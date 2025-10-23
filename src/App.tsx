import { HeroSection } from "./components/HeroSection";
import { BrandTrustBar } from "./components/BrandTrustBar";
import { ProductGrid } from "./components/ProductGrid";
import { OurStory } from "./components/OurStory";
import { WhyDifferent } from "./components/WhyDifferent";
import { StoresSection } from "./components/StoresSection";
import { Testimonials } from "./components/Testimonials";
import { BlogSection } from "./components/BlogSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      <HeroSection />
      <BrandTrustBar />
      <ProductGrid />
      <OurStory />
      <WhyDifferent />
      <StoresSection />
      <Testimonials />
      <BlogSection />
      <Footer />
    </div>
  );
}
