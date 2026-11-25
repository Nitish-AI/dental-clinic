import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/about/AboutSection";
import ServicesSection from "@/components/sections/services/ServicesSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
