import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AwarenessSection() {
  return (
    <section className="py-16 md:py-24 bg-white font-jost">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Heading - Familjen Grotesk Bold 48px #333333, letter-spacing -1.2px */}
          <h2 className="text-[36px] md:text-[48px] font-bold text-[#333333] mb-4 font-familjen leading-[100%] tracking-[-0.025em]">
            From Awareness to Impact
          </h2>
          {/* Subtext - Bricolage Grotesque Regular 16px #626D84 */}
          <p className="text-[#626D84] text-[14px] md:text-[16px] max-w-2xl mx-auto leading-[162%] font-bricolage">
            Stay updated with our latest initiatives, events, research breakthroughs, and community stories.
          </p>
        </div>

        {/* Featured Story */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Images - Side by side */}
          <div className="grid grid-cols-2 ">
            <div className="relative aspect-[4/5]  overflow-hidden">
              <Image
                src="/wuse1.png"
                alt="ACT Foundation at Wuse District Hospital"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/wuse2.png"
                alt="ACT Foundation community food support"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Title - Familjen Grotesk Bold 40px #212121 */}
            <h3 className="text-[32px] md:text-[40px] font-bold text-[#212121] mb-4 font-familjen leading-[100%]">
              Spreading love and sustenance
            </h3>
            {/* Body - Jost Regular 20px #000000 */}
            <p className="text-[#000000] text-[18px] md:text-[20px] font-light leading-[100%] mb-6">
              From uplifting spirits at the Motherless Babies Home to providing
              essential nourishment through our Community Food Support
              program, our team is dedicated to holistic care. We believe in
              showing up for the vulnerable not just with supplies, but with
              presence, compassion, and a helping hand.
            </p>
            {/* Button - Brand border */}
            <Link
              href="/outreach"
              className="inline-flex items-center gap-2 h-12 px-6 border border-[#9D2227] text-[#9D2227] rounded-xl text-[18px] font-semibold hover:bg-[#9D2227] hover:text-white transition-colors"
            >
              Read full article
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
