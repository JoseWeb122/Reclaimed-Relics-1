"use client";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CustomPage() {
  return (
    <div className="min-h-screen bg-ivory pt-20 lg:pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-[10px] uppercase tracking-[0.25em] text-taupe mb-5 font-medium">Custom Work</p>
          <h1 className="font-editorial text-4xl lg:text-[3.5rem] leading-[1.05] text-espresso mb-6 tracking-tight">Made for your space.</h1>
          <p className="text-charcoal/70 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">Have a fabric, color, pattern, or idea in mind? Let's create something that feels like it was always meant for your room.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 mb-20">
          <div className="bg-cream p-8 lg:p-10 border border-oatmeal/20">
            <span className="font-editorial text-4xl text-camel">01</span>
            <h3 className="font-editorial text-xl text-espresso mt-4 mb-3">Choose Your Style</h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">Classic, colorful, vintage, subtle, bold — or somewhere in between. We help you find the language your room speaks.</p>
          </div>
          <div className="bg-cream p-8 lg:p-10 border border-oatmeal/20">
            <span className="font-editorial text-4xl text-camel">02</span>
            <h3 className="font-editorial text-xl text-espresso mt-4 mb-3">Share Your Idea</h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">Send us your fabric, inspiration photos, dimensions, or simply tell us what you're imagining. We listen first.</p>
          </div>
          <div className="bg-cream p-8 lg:p-10 border border-oatmeal/20">
            <span className="font-editorial text-4xl text-camel">03</span>
            <h3 className="font-editorial text-xl text-espresso mt-4 mb-3">Make It Yours</h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">We'll craft your shade with the right materials, shape, and finish — and send photos before it ships.</p>
          </div>
        </div>

        <div className="bg-espresso text-ivory rounded-none py-16 lg:py-24 px-8 lg:px-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-camel/10 rounded-full blur-3xl" />
          <h2 className="font-editorial text-3xl lg:text-[2.5rem] mb-4 tracking-tight relative z-10">Let's talk about your idea.</h2>
          <p className="text-ivory/70 mb-8 max-w-md mx-auto relative z-10">Send us a message with your vision. We'll respond within 24 hours with suggestions and a quote.</p>
          <form className="max-w-lg mx-auto space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your name" className="w-full bg-ivory/10 border border-ivory/20 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-camel/50 transition-colors" />
            <input type="email" placeholder="Your email" className="w-full bg-ivory/10 border border-ivory/20 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-camel/50 transition-colors" />
            <textarea placeholder="Tell us about your idea..." rows={4} className="w-full bg-ivory/10 border border-ivory/20 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-camel/50 transition-colors resize-none" />
            <button type="submit" className="w-full bg-ivory text-espresso py-4 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-cream transition-colors shadow-lg shadow-espresso/20">Send Your Idea</button>
          </form>
        </div>
      </div>
    </div>
  );
}
