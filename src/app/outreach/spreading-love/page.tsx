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
      
      {/* Article Content */}
      <section className="pt-32  md:pt-40  bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            {/* Title - Familjen Grotesk Bold */}
            <h1 className="text-[32px] md:text-[40px] font-bold text-[#9D2227] mb-8 font-familjen leading-[120%]">
              Motherless Babies Home Visit
            </h1>

            {/* Main Image - 1328x414px aspect ratio */}
            <div className="relative w-full h-[200px] md:h-[414px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/motherless.png"
                alt="ACT volunteers at Motherless Babies Home"
                fill
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-6">
                ACT volunteers delivered care packs to a motherless babies home, providing essential items and spending time with the children. The focus was care, connection, and restoring a sense of belonging.
              </p>

              <h2 className="text-[20px] md:text-[24px] font-bold text-[#212121] mb-4 font-familjen">
                Hospital Support Initiative
              </h2>
              
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-6">
                We visited two hospitals and provided financial assistance to patients who were unable to settle their medical bills. Beyond financial support, we spent time with patients and families, offering prayer, encouragement, and presence during vulnerable moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Slider Section */}
      <section className="py-16  ">
        <div className="container-max section-padding">
          <ImageSlider images={outreachImages} autoPlayInterval={4000} />
        </div>
      </section>

      {/* Community Food Support Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            {/* Title - Familjen Grotesk Bold */}
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#9D2227] mb-8 font-familjen leading-[120%]">
              Community Food Support
            </h2>

            {/* Image */}
            <div className="relative w-full h-[200px] md:h-[414px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/community1.png"
                alt="ACT Community Food Support program"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-6">
                Our team visited a local food bank to donate supplies and understand the process behind food distribution to vulnerable families. This was not just a drop-off. We learned how food insecurity operates on the ground and how partnerships can improve reach.
              </p>

              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-6">
                ACT volunteers actively participated in feeding the homeless through Feed the Need Durham. We served meals directly and engaged with individuals experiencing homelessness, reinforcing our belief that dignity and presence matter as much as provision.
              </p>
            </div>
          </div>
        </div>
      </section>

 <section className="py-16 md:py-24 ">
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
