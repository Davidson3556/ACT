"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { label: "Outreach programmes", value: "4", color: "bg-[#BEE9FB]" },
  { label: "Countries reached", value: "2", color: "bg-[#FAFECC]" },
  { label: "Communities served", value: "4", color: "bg-[#E6D4F9]" },
  { label: "Beneficiaries", value: "1000+", color: "bg-[#B7EFCB]" },
];

export default function HeroSection() {
  return (
    <section className="relative font-familjen">
      {/* Hero Content Area */}
      <div className="relative min-h-screen pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/herobg.png"
            alt="Community hands together"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay - matching Figma specs */}
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(to bottom, rgba(157, 34, 39, 0.5) 0%, rgba(102, 18, 23, 0.6) 50%, rgba(18, 17, 19, 0.8) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 pt-24">
          {/* Headline - Familjen Grotesk, Bold (700), 64px */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[40px] md:text-[56px] lg:text-[64px] font-bold mb-4 max-w-3xl leading-[100%]"
          >
            A.C.T Today, Transform Tomorrow
          </motion.h1>
          
          {/* Subheadline - Jost, Regular (400), 24px */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-jost text-[18px] md:text-[22px] lg:text-[24px] font-normal mb-8 max-w-xl"
          >
            Practical help. Simple health information. Stronger communities.
          </motion.p>

          {/* CTA Buttons - Jost, SemiBold (600), 18px, height 48px */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 font-jost"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 px-6 bg-[#9D2227] text-white text-[18px] font-semibold rounded-xl hover:bg-[#B52A30] transition-colors"
            >
              Donate now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 px-6 bg-[#FBF4EF] text-[#9D2227] text-[18px] font-semibold rounded-xl hover:bg-[#f5ebe3] transition-colors"
            >
              Volunteer
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Stats Cards - Positioned to overlap hero and next section */}
      <div className="relative z-20 -mt-24 section-padding font-jost">
        <div className="container-max">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`${stat.color} rounded-[32px] p-6 md:p-8 text-center shadow-md border border-gray-200/50`}
              >
                <p className="text-xs md:text-sm text-[#212121] mb-2 font-medium">
                  {stat.label}
                </p>
                <p className="text-4xl md:text-5xl font-semibold text-[#212121]">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
