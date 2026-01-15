"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/sickle-cell-icon.svg",
    title: "Sickle Cell Awareness",
    description:
      "We share clear, practical information about sickle cell — what it is, how it affects daily life, and how people can live better with the right knowledge and support. Through education, conversations, and community outreach, we help individuals and families understand sickle cell beyond the myths, so they can make informed decisions and feel less alone.",
  },
  {
    icon: "/cancer-icon.svg",
    title: "Cancer Awareness",
    description:
      "ACT provides simple, reliable information about cancer — early signs, prevention, and navigating care. We focus on clarity over complexity, helping people recognise when to seek help and understand their options. By making information accessible, we reduce fear and empower people to take action sooner.",
  },
  {
    icon: "/community-icon.svg",
    title: "Community Programmes",
    description:
      "We build programmes that meet people where they are. From local outreach to support groups and health education sessions, our community initiatives create safe spaces for learning, connection, and steady support. These programmes strengthen communities by offering practical help when systems fall short.",
  },
];

export default function WhatActDoesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FBF4EF] font-jost">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          {/* Heading - Familjen Grotesk Bold 40px + Playfair Display Bold Italic 40px */}
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#212121] mb-4 font-familjen leading-[100%]">
            What ACT <span className="font-playfair italic text-[#F4AF25]">Does</span>
          </h2>
          {/* Subtext - Bricolage Grotesque Regular 16px #212121 */}
          <p className="text-[#212121] text-[14px] md:text-[16px] max-w-2xl mx-auto leading-[162%] font-bricolage">
            At ACT Foundation, we deliver life-changing support through Cancer and Sickle
            Cell advocacy, education, and care programs
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              {/* Title - Familjen Grotesk SemiBold 18px #212121 */}
              <h3 className="text-[16px] md:text-[18px] font-semibold text-[#212121] mb-3 font-familjen leading-[100%]">
                {feature.title}
              </h3>
              {/* Description - Jost Light 18px #212121 */}
              <p className="text-[#212121] text-[16px] md:text-[18px] font-light leading-[100%]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
