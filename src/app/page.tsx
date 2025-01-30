import { CTASection } from "@/components/sections/CTASection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {" "}
      <HeroSection id="hero" />
      <FeaturesSection id="features" />
      <TestimonialSection id="testimonials" />
      <CTASection id="analyze" />
    </main>
  );
}
