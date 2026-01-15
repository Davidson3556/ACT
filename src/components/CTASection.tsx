"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#FBF4EF] font-jost">
      <div className="container-max section-padding text-center">
        {/* Heading - Familjen Grotesk Bold 48px + Playfair Display Bold Italic */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[36px] md:text-[48px] font-bold text-[#212121] mb-4 font-familjen leading-[100%] tracking-[-0.025em]"
        >
          Join us in making{" "}
          <span className="font-playfair italic text-[#F4AF25]">a difference</span>
        </motion.h2>
        
        {/* Subtext - Bricolage Grotesque Regular 16px #212121 */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[#212121] text-[14px] md:text-[16px] max-w-xl mx-auto mb-8 leading-[162%] font-bricolage"
        >
          Your support can help us reach more communities, fund life-saving research, and
          provide essential care to those who need it most. Every contribution matters.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Donate button - Brand color #9D2227, Jost SemiBold 18px, height 48px */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-12 px-10 bg-[#9D2227] text-white text-[18px] font-semibold rounded-xl hover:bg-[#B52A30] transition-colors"
          >
            Donate
          </motion.button>
          {/* Volunteer button - Cream background #FBF4EF, brand text */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-12 px-10 bg-[#FBF4EF] border border-[#9D2227] text-[#9D2227] text-[18px] font-semibold rounded-xl hover:bg-[#9D2227] hover:text-white transition-colors"
          >
            Volunteer
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
