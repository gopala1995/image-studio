import Footer from "@/components/ui/Footer";
import GalleryShowcaseSection from "@/components/ui/GalleryShowcaseSection";
import HomeHeroSection from "@/components/ui/HomeHeroSection";
import HowItWorksSection from "@/components/ui/HowItWorksSection";
import PricingSection from "@/components/ui/PricingSection";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
      <HomeHeroSection />
      <GalleryShowcaseSection />
      <HowItWorksSection />
      <PricingSection/>
      <Testimonials />
      <Footer/>
    </div>
  );
}
