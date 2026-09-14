"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EmailCTA() {
  return (
    <section className="bg-walnut text-ivory py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-camel/10 rounded-full -translate-y-1/3 translate-x-1/4 blur-3xl" />
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <h2 className="font-editorial text-4xl lg:text-[3.5rem] leading-[1.05] mb-6 tracking-tight">
          Have an idea{" "}
          <span className="italic font-light">for your space?</span>
        </h2>
        <p className="text-ivory/80 text-base lg:text-lg leading-relaxed mb-10 max-w-xl mx-auto font-light">
          Tell us what you're imagining. A favorite fabric, a color you've been searching for, or simply a corner of your home that needs a little something.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/custom" className="inline-flex items-center gap-2.5 bg-ivory text-espresso px-8 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-cream transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-espresso/20">
            Start A Conversation <ArrowRight size={14} strokeWidth={2} />
          </Link>
          <Link href="/shop" className="inline-flex items-center gap-2.5 border border-ivory/30 text-ivory px-8 py-4 text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-ivory/10 transition-all duration-300">
            Shop Ready-Made Shades
          </Link>
        </div>
      </div>
    </section>
  );
}
