"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How are the lampshades made?",
    a: "Each shade is handcrafted in our workshop. We cut and shape each frame, select and apply the fabric by hand, and finish with careful trim work. The process takes several days per piece.",
  },
  {
    q: "Can I request a custom lampshade?",
    a: "Yes — custom work is one of our favorite things. You can share your own fabric, choose from our library, or describe what you're imagining. We'll help turn it into a finished shade.",
  },
  {
    q: "Can I provide my own fabric?",
    a: "Absolutely. Many customers bring family textiles, vintage pieces, or favorite patterns. Just make sure the fabric is sturdy enough for shade construction — we'll guide you through what's suitable.",
  },
  {
    q: "What sizes are available?",
    a: "Standard sizes range from 8 inches to 16 inches in diameter. Custom sizes are available for most orders. We'll help you measure and choose the right proportion for your lamp and room.",
  },
  {
    q: "How long does a custom shade take?",
    a: "Typically 2-4 weeks from confirmation to delivery, depending on fabric availability and complexity. Ready-made shades ship within 3-5 business days.",
  },
  {
    q: "Do you ship?",
    a: "Yes, we ship throughout the United States. International shipping is available on request. All shades are carefully packaged to arrive safely.",
  },
  {
    q: "How do I choose the right size shade?",
    a: "A good rule of thumb: the shade diameter should be roughly equal to the lamp base height. We include sizing notes with each product and are happy to help you decide.",
  },
  {
    q: "Can I ask for help choosing a shade?",
    a: "Always. Send us a photo of your room or lamp, or tell us about the feeling you want. We'll suggest options and help you find something that fits.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14 lg:mb-20">
          <h2 className="font-editorial text-4xl lg:text-[3.2rem] leading-[1.05] text-espresso mb-4 tracking-tight">Questions & Answers</h2>
          <p className="text-charcoal/60 text-base">Everything you might want to know about our shades.</p>
        </div>
        <div className="divide-y divide-oatmeal/30">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left group"
              >
                <h3 className="font-editorial text-xl text-espresso group-hover:text-walnut transition-colors pr-4">{faq.q}</h3>
                <span className="shrink-0 w-8 h-8 rounded-full border border-oatmeal flex items-center justify-center text-taupe group-hover:border-camel transition-colors">
                  {openIndex === i ? <Minus size={14} strokeWidth={1.5} /> : <Plus size={14} strokeWidth={1.5} />}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                <p className="text-sm lg:text-base text-charcoal/75 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
