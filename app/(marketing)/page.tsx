"use client";

import { ScrollIndicator } from "@/components/marketing/ScrollIndicator";
import { ScrollToTop } from "@/components/marketing/ScrollToTop";
import { HeroSection } from "@/components/marketing/HeroSection";
import { FeaturesSection } from "@/components/marketing/FeaturesSection";
import { CTASection } from "@/components/marketing/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <ScrollIndicator />
      <ScrollToTop />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
