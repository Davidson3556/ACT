import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const outreachArticles = [
  {
    image: "/wuse1.png",
    image2: "/wuse2.png",
    title: "Spreading love and sustenance",
    description: "From uplifting spirits at the Motherless Babies Home to providing essential nourishment through our Community Food Support program, our team is dedicated to holistic care. We believe in showing up for the vulnerable not just with supplies, but with presence, compassion, and a helping hand.",
    href: "/outreach/spreading-love",
  },
];

export default function OutreachPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FBF4EF]">
        <div className="container-max section-padding text-center">
          {/* Heading - Familjen Grotesk Bold */}
          <h1 className="text-[36px] md:text-[48px] font-bold text-[#212121] mb-6 font-familjen leading-[110%]">
            Moments That Move<br className="hidden md:block" /> Communities
          </h1>
          {/* Subtext */}
          <p className="text-[#212121] text-[14px] md:text-[16px] max-w-2xl mx-auto leading-[160%] font-bricolage">
            Every ACT event is built around connection, clarity, and care. Join us as we turn conversations into understanding and compassion into action.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outreachArticles.map((article, index) => (
              <div key={index} className="max-w-sm">
                {/* Images - Side by side at the top */}
                <div className="grid grid-cols-2 gap-1 mb-4">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                    <Image
                      src={article.image2}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  {/* Title - Familjen Grotesk SemiBold */}
                  <h3 className="text-[16px] md:text-[18px] font-semibold text-[#212121] mb-2 font-familjen leading-[120%]">
                    {article.title}
                  </h3>
                  {/* Description - Jost Regular smaller text */}
                  <p className="text-[#212121] text-[12px] md:text-[14px] leading-[160%] mb-4">
                    {article.description}
                  </p>
                  {/* Read full article link */}
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 text-[#9D2227] text-[14px] font-medium hover:underline"
                  >
                    Read full article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
