import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Heart, Lightbulb } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: "/guide-heart.svg",
    iconBg: "#FFEAEC",
    title: "Practical compassion",
    description: "We believe care should be useful, not just well-intentioned.",
  },
  {
    icon: "/consistency.svg",
    iconBg: "#FFF8E6",
    title: "Consistency",
    description: "Trust is built by being present again and again.",
  },
  {
    icon: "/community.svg",
    iconBg: "#FFF8E6",
    title: "Community",
    description: "No one should navigate health challenges alone.",
  },
  {
    icon: "/hope.svg",
    iconBg: "#FFF8E6",
    title: "Hope",
    description: "Hope grows when help is close and understandable.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FBF4EF]">
        <div className="container-max section-padding text-center">
          {/* Heading - Familjen Grotesk Bold 64px #212121 */}
          <h1 className="text-[40px] md:text-[64px] font-bold text-[#212121] mb-6 font-familjen leading-[100%]">
            Explore our story and the purpose<br className="hidden md:block" /> behind our mission
          </h1>
          {/* Subtext - Jost Regular 24px #212121 */}
          <p className="text-[#212121] text-[18px] md:text-[24px] max-w-3xl mx-auto leading-[100%]">
            we build comprehensive support systems for individuals and families impacted by Sickle Cell Disease and Cancer
          </p>
        </div>
      </section>


      {/* Story Section */}
      <section className="py-16 md:py-24 bg-[#FFFFFF]">
        <div className="container-max section-padding">
          <div className="relative max-w-6xl mx-auto px-12">
            {/* Opening Quote - quote-up.svg 40x40px */}
            <div className="absolute left-0 -top-2">
              <Image 
                src="/quote-up.svg" 
                alt="" 
                width={40} 
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            
            <div className="px-4 md:px-8">
              {/* Story text - Jost Light 20px #484242 */}
              <p className="text-[#484242] text-[16px] md:text-[20px] font-light leading-[140%] mb-12">
                The Alex Clinton Tanko Foundation began after the loss of Alex Clinton Tanko to Renal Medullary Carcinoma, a rare and highly aggressive kidney cancer strongly associated with the sickle cell gene. His passing exposed a painful reality. There is limited awareness of RMC, little accessible information for families, and almost no structured community support. That moment became the foundation&apos;s starting point and its driving force. ACT was created so that no one else would have to face illness alone.
              </p>
            </div>
            
            {/* Closing Quote - quote-down.svg 40x40px */}
            <div className="absolute right-0 -bottom-8">
              <Image 
                src="/quote-down.svg" 
                alt="" 
                width={40} 
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-20">
            {/* Our Mission Card */}
            <div className="bg-[#822224] rounded-3xl p-8 md:p-10 text-white">
              <div className="w-10 h-10 bg-[#FCF0D969]/41 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <h3 className="text-[24px] md:text-[28px] font-bold mb-4 font-familjen">Our Mission</h3>
              <p className="text-white/90 text-[16px] md:text-[18px] leading-[150%]">
                To create accessible care and awareness, one person, one family, one neighbourhood at a time.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="bg-[#FAFAFA] rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="w-10 h-10 bg-[#B3766E] rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-5 h-5 text-[#9D2227] fill-[#822224]" />
              </div>
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#212121] mb-4 font-familjen">Our Vision</h3>
              <p className="text-[#212121] text-[16px] md:text-[18px] leading-[150%]">
                A future where no one faces illness alone and where information, care, and compassion are always within reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-[#FFFFFF]">
        <div className="container-max section-padding">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#212121] mb-4 font-familjen leading-[100%]">
              What guides our <span className="font-playfair italic text-[#F4AF25]">work</span>
            </h2>
            <p className="text-[#212121] text-[14px] md:text-[16px] max-w-xl mx-auto font-bricolage leading-[162%]">
              Our values guide how we show up, how we work, and how we support others.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-[#FBF4EF] rounded-2xl p-6 shadow-sm"
              >
                <div 
                  className="w-[44px] h-[44px] rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: value.iconBg }}
                >
                  <Image 
                    src={value.icon} 
                    alt={value.title} 
                    width={24} 
                    height={24}
                    className="w-6 h-6 md:w-10 md:h-10"
                  />
                </div>
                <h4 className="text-[14px] md:text-[18px] font-semibold text-[#212121] mb-2 font-familjen">
                  {value.title}
                </h4>
                <p className="text-[#666] text-[12px] md:text-[18px] font-light leading-[150%]">
                  {value.description}
                </p>
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
