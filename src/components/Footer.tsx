"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Event", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer 
      className="relative pt-12 pb-48 md:pt-16 md:pb-64 font-jost overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #FBF4EF 0%, #F2EDEA 50%, #E6E8F3 100%)"
      }}
    >
      {/* Footer Background Image - Large ACT watermark at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[406px]">
        <Image
          src="/footerbg.png"
          alt=""
          fill
          className="object-contain object-bottom"
          style={{ opacity: 10 }}
        />
      </div>

      <div className="container-max section-padding relative z-10">
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
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {/* Logo & Description */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.svg"
                alt="ACT Foundation"
                width={80}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[#212121] text-sm leading-relaxed">
              ACT Foundation is a community-focused nonprofit
              providing practical support, clear health education, and
              steady outreach for individuals and families affected by
              sickle cell and cancer.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <h4 className="text-lg font-semibold text-[#212121] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#212121] text-sm hover:text-[#9D2227] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <h4 className="text-lg font-semibold text-[#212121] mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+19053760951"
                  className="flex items-center gap-3 text-[#212121] text-sm hover:text-[#9D2227] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +1 905-376-0951
                </a>
              </li>
              <li>
                <a
                  href="mailto:act.foundation@gmail.com"
                  className="flex items-center gap-3 text-[#212121] text-sm hover:text-[#9D2227] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  act.foundation@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
