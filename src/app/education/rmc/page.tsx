import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function RMCPage() {
  return (
    <main>
      <Navbar />
      
      {/* Page Title */}
      <section className="pt-32 bg-white">
        <div className="container-max section-padding text-center">
          <h1 className="text-[32px] md:text-[48px] font-bold text-[#212121] font-familjen leading-[110%]">
            Understanding Renal Medullary Carcinoma (RMC)
          </h1>
        </div>
      </section>

      {/* Hero Banner - Just the image */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-max section-padding">
          <div className="relative w-full h-[200px] md:h-[414px] rounded overflow-hidden">
            <Image
              src="/rmc.png"
              alt="Renal Medullary Carcinoma"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto prose prose-lg">
            
            {/* What is RMC */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#212121] mb-4 font-familjen">
                What is Renal Medullary Carcinoma (RMC)?
              </h3>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%]">
                Renal Medullary Carcinoma (RMC) is a rare and highly aggressive form of kidney cancer. It most often affects young individuals, particularly those with sickle cell trait. Because it progresses rapidly and is difficult to detect early, RMC is often diagnosed at advanced stages.
              </p>
            </div>

          

            {/* Additional Images Grid */}
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative aspect-square rounded overflow-hidden">
                  <Image
                    src="/rmc1.png"
                    alt="RMC scan image"
                    fill
                    className="object-cover"
                  />
                </div>
                
              </div>
            </div>

            {/* Who Does RMC Affect */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#212121] mb-4 font-familjen">
                Who Does RMC Affect
              </h3>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-4">
                RMC is most commonly seen in:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#212121] text-[14px] md:text-[16px] leading-[180%]">
                <li>Individuals with sickle cell trait (and, less commonly, sickle cell disease)</li>
                <li>Adolescents and young adults</li>
                <li>People of African descent, though it can occur in anyone</li>
              </ul>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mt-4">
                Many individuals with sickle cell trait are otherwise healthy and may be unaware of their increased risk.
              </p>
            </div>

            {/* Why is RMC So Serious */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#212121] mb-4 font-familjen">
                Why is RMC So Serious?
              </h3>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-4">
                RMC is considered one of the most aggressive kidney cancers because:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#212121] text-[14px] md:text-[16px] leading-[180%]">
                <li>It grows and spreads very quickly</li>
                <li>Symptoms often appear late, after the cancer has already advanced</li>
                <li>There are currently limited effective treatment options</li>
                <li>Overall survival rates remain low compared to other kidney cancers</li>
              </ul>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mt-4">
                Early awareness is critical, yet RMC remains under-recognized.
              </p>
            </div>

            {/* Common Signs and Symptoms */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#212121] mb-4 font-familjen">
                Common Signs and Symptoms
              </h3>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-4">
                Symptoms of RMC can resemble more common conditions, which contributes to delayed diagnosis. These may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#212121] text-[14px] md:text-[16px] leading-[180%]">
                <li>Blood in the urine</li>
                <li>Persistent lower back or flank pain</li>
                <li>Unexplained weight loss</li>
                <li>Fatigue</li>
                <li>Fever or night sweats</li>
              </ul>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mt-4">
                Anyone with sickle cell trait who experiences these symptoms should seek medical evaluation promptly.
              </p>
            </div>

            {/* How is RMC Diagnosed */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#212121] mb-4 font-familjen">
                How is RMC Diagnosed?
              </h3>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-4">
                Diagnosis typically involves:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#212121] text-[14px] md:text-[16px] leading-[180%]">
                <li>Imaging studies such as CT scans or MRIs</li>
                <li>Biopsy of the kidney tumor</li>
                <li>Specialized pathology testing</li>
              </ul>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mt-4">
                Because RMC is rare, diagnosis may require evaluation by specialists familiar with the disease.
              </p>
            </div>

            {/* Current Treatment Options */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#212121] mb-4 font-familjen">
                Current Treatment Options
              </h3>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-4">
                There is no standard cure for RMC. Treatment may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#212121] text-[14px] md:text-[16px] leading-[180%]">
                <li>Chemotherapy</li>
                <li>Surgery in select cases</li>
                <li>Clinical trials exploring new therapies</li>
              </ul>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mt-4">
                Research is ongoing, but progress is limited due to the rarity of the disease and lack of widespread awareness.
              </p>
            </div>

            {/* Why Awareness Matters */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#212121] mb-4 font-familjen">
                Why Awareness Matters
              </h3>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mb-4">
                Increased awareness of RMC can lead to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#212121] text-[14px] md:text-[16px] leading-[180%]">
                <li>Earlier diagnosis</li>
                <li>Better advocacy for research funding</li>
                <li>Improved education for patients and healthcare providers</li>
                <li>Support for affected families and communities</li>
              </ul>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%] mt-4">
                Many lives are impacted not just by the disease, but by how little it is known.
              </p>
            </div>

            {/* Our Commitment */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#212121] mb-4 font-familjen">
                Our Commitment
              </h3>
              <p className="text-[#212121] text-[14px] md:text-[16px] leading-[180%]">
                This foundation exists to honor a life lost too soon and to ensure others do not face RMC in silence. Through education, advocacy, and research support, we are committed to shining a light on Renal Medullary Carcinoma and accelerating progress toward better outcomes.
              </p>
            </div>

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
