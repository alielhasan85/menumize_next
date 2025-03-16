// app/(marketing)/page.tsx

import AnimatedPage from "./components/animated-page";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";

import PricingSection from "./components/PricingSection";
import RestaurantDirectorySection from "./components/RestaurantDirectorySection";

export default function MarketingPage() {
  return (
    <AnimatedPage>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <RestaurantDirectorySection />
    </AnimatedPage>
  );
}
