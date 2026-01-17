import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FoundationQuoteSection from "@/components/FoundationQuoteSection";
import BriefStorySection from "@/components/BriefStorySection";
import WhatActDoesSection from "@/components/WhatActDoesSection";
import EducationalSection from "@/components/EducationalSection";
import AwarenessSection from "@/components/AwarenessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FoundationQuoteSection />
      <BriefStorySection />
      <WhatActDoesSection />
      <AwarenessSection />
            <EducationalSection />

      <CTASection />
      <Footer />
    </main>
  );
}
