import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
      <BriefStorySection />
      <EducationalSection />
      <WhatActDoesSection />
      <AwarenessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
