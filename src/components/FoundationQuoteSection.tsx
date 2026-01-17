"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FoundationQuoteSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] font-jost">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative max-w-6xl mx-auto px-12"
        >
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
            <p className="text-[#484242] text-[16px] md:text-[20px] font-light leading-[140%]">
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
        </motion.div>
      </div>
    </section>
  );
}
