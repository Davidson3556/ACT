"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is ACT?",
    answer: "ACT is a non-profit foundation providing practical support, health education, and community programmes centered on sickle cell and cancer. We exist where systems fall short offering clear information and steady support to individuals and families.",
  },
  {
    question: "Who does ACT support?",
    answer: "ACT supports individuals and families affected by sickle cell disease and cancer, as well as vulnerable communities in need of care, resources, and compassionate outreach.",
  },
  {
    question: "How does ACT provide support?",
    answer: "We provide support through health education programmes, community outreach, hospital visits, financial assistance for medical bills, and care package distribution to those in need.",
  },
  {
    question: "How can I get help from ACT?",
    answer: "You can reach out to us through this contact form, email us directly, or visit our social media pages. Our team will respond to your inquiry and guide you on how we can assist.",
  },
  {
    question: "How can I get involved with ACT?",
    answer: "You can get involved by volunteering with us, making a donation, or partnering with us on community projects. Visit our volunteer page or contact us to learn more about opportunities.",
  },
  {
    question: "Does ACT work only in certain locations?",
    answer: "While ACT is based in Nigeria, our reach extends to communities wherever there is a need. We also collaborate with partners internationally to expand our impact.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FBF4EF]">
        <div className="container-max section-padding text-center">
          {/* Heading */}
          <h1 className="text-[36px] md:text-[48px] font-bold text-[#212121] mb-6 font-familjen leading-[110%]">
            Let&apos;s Connect, We are<br className="hidden md:block" /> Here for You
          </h1>
          {/* Subtext */}
          <p className="text-[#212121] text-[14px] md:text-[16px] max-w-2xl mx-auto leading-[160%] font-bricolage">
            Whether you need support, have questions, or want to partner with us, we&apos;re here to listen.
            Reach out to ACT Foundation and take the next step toward care, clarity, and hope.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-[28px] md:text-[36px] font-bold text-[#9D2227] mb-4 font-familjen leading-[120%]">
                Contact us now to get started.
              </h2>
              <p className="text-[#666] text-[14px] md:text-[16px]">
                Reach out to us today and begin your journey towards financial growth and stability.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-[14px] font-medium text-[#212121] mb-2">
                    Full Names
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="john"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9D2227]/20 focus:border-[#9D2227] text-[14px]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[14px] font-medium text-[#212121] mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Seraph"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9D2227]/20 focus:border-[#9D2227] text-[14px]"
                    required
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[14px] font-medium text-[#212121] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9D2227]/20 focus:border-[#9D2227] text-[14px]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[14px] font-medium text-[#212121] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+2341234567890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9D2227]/20 focus:border-[#9D2227] text-[14px]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[14px] font-medium text-[#212121] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Say something nice..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9D2227]/20 focus:border-[#9D2227] text-[14px] resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#9D2227] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#822224] transition-colors text-[16px]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-[28px] md:text-[36px] font-bold text-[#212121] mb-4 font-familjen leading-[120%]">
                Frequently asked questions
              </h2>
              <p className="text-[#666] text-[14px] md:text-[16px]">
                Have questions about our ACT Foundation?
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-[#E5E5E5] pb-4"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-[16px] font-medium text-[#212121]">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex-shrink-0">
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 text-[#212121]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#212121]" />
                      )}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="pb-4">
                      <p className="text-[#666] text-[14px] leading-[160%]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
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
