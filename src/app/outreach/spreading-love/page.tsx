import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";

const outreachImages = [
  "/outreach2.png",
  "/outreach3.png",
  "/outreach4.png",
  "/outreach5.png",
  "/outreach6.png",
  "/outreach7.png",
  "/outreach8.png",
  "/outreach9.png",
];

const communityImages = [
  "/community2.png",
  "/community3.png",
  "/community4.png",
  "/community1.png",
];

export default function SpreadingLovePage() {
  return (
    <main>
      <Navbar />
      
      {/* Article Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-white">
        <div className="container-max section-padding">
          {/* Title - Familjen Grotesk, Bold, 48px, #1B2232, left-aligned */}
          <h1 className="text-[28px] md:text-[48px] font-bold text-[#1B2232] font-familjen leading-[48px] tracking-[-1.2px] mb-8">
            Motherless Babies Home Visit
          </h1>

          {/* Hero Image - 1328px x 414px */}
          <div className="relative w-full h-[200px] md:h-[414px] rounded overflow-hidden mb-8">
            <Image
              src="/motherless.png"
              alt="ACT volunteers at Motherless Babies Home"
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content - Jost, Light (300), 20px, #484242, line-height 28px */}
          <div className="max-w-6xl">
            <p className="text-[#484242] text-[16px] md:text-[20px] font-light leading-[28px]">
              ACT volunteers delivered care packs to a motherless babies home, providing essential items and spending time with the children. The focus was care, connection, and restoring a sense of belonging.
            <br />
              Hospital Support Initiative
            </p>
            <p className="text-[#484242] text-[16px] md:text-[20px] font-light leading-[28px] mb-6">
              We visited two hospitals and provided financial assistance to patients who were unable to settle their medical bills. Beyond financial support, we spent time with patients and families, offering prayer, encouragement, and presence during vulnerable moments.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery Slider Section */}
      <section className="py-16">
        <div className="container-max section-padding">
          <ImageSlider images={outreachImages} autoPlayInterval={4000} />
        </div>
      </section>

      {/* Community Food Support Section */}
      <section className="pt-8 pb-8 md:pt-12 md:pb-12 bg-white">
        <div className="container-max section-padding">
          {/* Title - Familjen Grotesk, Bold, 48px, #1B2232, left-aligned */}
          <h2 className="text-[28px] md:text-[48px] font-bold text-[#1B2232] font-familjen leading-[48px] tracking-[-1.2px] mb-8">
            Community Food Support
          </h2>

          {/* Image */}
          <div className="relative w-full h-[200px] md:h-[414px] rounded overflow-hidden mb-8">
            <Image
              src="/community1.png"
              alt="ACT Community Food Support program"
              fill
              className="object-cover"
            />
          </div>

          {/* Content - Jost, Light (300), 20px, #484242, line-height 28px */}
          <div className="max-w-6xl">
            <p className="text-[#484242] text-[16px] md:text-[20px] font-light leading-[28px] ">
Our team visited a local food bank to donate supplies and understand the process behind food distribution to vulnerable families. This was not just a drop-off. We learned how food insecurity operates on the ground and how partnerships can improve reach.
Feed the Need Durham            </p>

            <p className="text-[#484242] text-[16px] md:text-[20px] font-light leading-[28px] mb-6">
ACT volunteers actively participated in feeding the homeless through Feed the Need Durham. We served meals directly and engaged with individuals experiencing homelessness, reinforcing our belief that dignity and presence matter as much as provision            </p>
          </div>
        </div>
      </section>

      {/* Community Image Gallery Slider Section */}
      <section className="py-16">
        <div className="container-max section-padding">
          <ImageSlider images={communityImages} autoPlayInterval={4000} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
