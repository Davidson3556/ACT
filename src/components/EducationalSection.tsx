"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const educationalCards = [
  {
    image: "/sickle-cell.png",
    title: "Comprehensive Guide to Sickle Cell Disease",
    description:
      "Sickle Cell Disease (SCD) is not a single ailment but a group of inherited red blood cell disorders. It is a multi-system condition that affects millions globally, characterized by the production of an abnormal form of haemoglobin.",
    link: "/education/sickle-cell",
  },
  {
    image: "/kidney.png",
    title: "Understanding Renal Medullary Carcinoma (RMC)",
    description:
      "Cancer information can be overwhelming and confusing. At ACT, we simplify what matters most — early signs, prevention, treatment pathways, and support options. Our cancer information hub is designed to help people understand their health.",
    link: "/education/rmc",
  },
];

export default function EducationalSection() {
  return (
    <section className="py-16 md:py-24 bg-white font-jost">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          {/* Heading - Familjen Grotesk Bold 48px + Playfair Display Bold Italic 48px */}
          <h2 className="text-[36px] md:text-[48px] font-bold text-[#101828] mb-4 font-familjen leading-[100%] tracking-[-0.02em]">
            Educational <span className="font-playfair italic text-[#F4AF25]">insight</span>
          </h2>
          {/* Supporting text - Jost Regular 20px #667085 */}
          <p className="text-[#667085] text-[18px] md:text-[20px] max-w-2xl mx-auto leading-[150%]">
            Inspiring life-changing health knowledge that supports early awareness
          </p>
        </motion.div>

        {/* Educational Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid md:grid-cols-2 gap-8"
        >
          {educationalCards.map((card, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              {/* Title - Familjen Grotesk Bold 20px #212121 */}
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#212121] mb-2 font-familjen leading-[150%]">
                {card.title}
              </h3>
              {/* Description - Jost Light 18px #656262 */}
              <p className="text-[#656262] text-[16px] md:text-[18px] font-light leading-[133%] mb-4">
                {card.description}
              </p>
              {/* Link - Urbanist Medium 18px #9D2227 */}
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-2 text-[#9D2227] font-urbanist font-medium text-[16px] md:text-[18px] hover:gap-3 transition-all"
                >
                  Read full learning
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
