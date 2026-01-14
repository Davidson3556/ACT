export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#FBF4EF] font-jost"
    >
      <div className="container-max section-padding text-center">
        {/* Heading - Familjen Grotesk Bold 48px + Playfair Display Bold Italic */}
        <h2 className="text-[36px] md:text-[48px] font-bold text-[#212121] mb-4 font-familjen leading-[100%] tracking-[-0.025em]">
          Join us in making{" "}
          <span className="font-playfair italic text-[#F4AF25]">a difference</span>
        </h2>
        {/* Subtext - Bricolage Grotesque Regular 16px #212121 */}
        <p className="text-[#212121] text-[14px] md:text-[16px] max-w-xl mx-auto mb-8 leading-[162%] font-bricolage">
          Your support can help us reach more communities, fund life-saving research, and
          provide essential care to those who need it most. Every contribution matters.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Donate button - Brand color #9D2227, Jost SemiBold 18px, height 48px */}
          <button className="h-12 px-10 bg-[#9D2227] text-white text-[18px] font-semibold rounded-xl hover:bg-[#B52A30] transition-colors">
            Donate
          </button>
          {/* Volunteer button - Cream background #FBF4EF, brand text */}
          <button className="h-12 px-10 bg-[#FBF4EF] border border-[#9D2227] text-[#9D2227] text-[18px] font-semibold rounded-xl hover:bg-[#9D2227] hover:text-white transition-colors">
            Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}
