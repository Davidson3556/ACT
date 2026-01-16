"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BriefStorySection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white font-jost">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            {/* Heading - Familjen Grotesk Bold + Playfair Display Bold Italic */}
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#212121] mb-6 font-familjen leading-[100%]">
              Brief story <span className="font-playfair italic text-[#F4AF25]">block</span>
            </h2>
            
            {/* Body text - Jost, Regular (400), 20px, #000000 */}
            <div className="space-y-4  font-light text-[#656262] text-[18px] md:text-[20px] leading-[100%]">
              <p>
                ACT exists because illness should not isolate people.
                Too many families are left to navigate complex diagnoses without guidance, 
                reliable information, or support. What began with the loss of one life has 
                grown into a mission to build accessible care, raise awareness, and create 
                community-led solutions for individuals affected by cancer, sickle cell, and 
                related health challenges.
              <br></br>
                Our story is about turning grief into service and ensuring that compassion is 
                always followed by action.
              </p>
            </div>

            {/* Button - Height 48px, Border 1px #9D2227, Radius 12px, Jost SemiBold 18px */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 h-12 px-6 border border-[#9D2227] text-[#9D2227] rounded-xl text-[18px] font-semibold hover:bg-[#9D2227] hover:text-white transition-colors"
              >
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/volunter.png"
                alt="ACT Foundation volunteer"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
