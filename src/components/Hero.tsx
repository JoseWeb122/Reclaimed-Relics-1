"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-living-room.jpg"
          alt="Cozy warm interior with handcrafted lampshade"
          className="w-full h-full object-cover scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/50 via-espresso/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-espresso/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-[92vh] flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-[11px] lg:text-xs uppercase tracking-[0.25em] text-brass-soft mb-6 font-medium">
            Handcrafted • One-of-a-Kind • Made With Character
          </p>

          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.92] text-ivory mb-8 tracking-tight">
            Give your home{" "}
            <span className="italic font-light">a little more</span>
            <br />
            <span className="italic font-light">character.</span>
          </h1>

          <p className="text-base lg:text-lg text-ivory/90 max-w-md mb-10 leading-relaxed font-light">
            Handcrafted lampshades made to bring warmth, personality, and a little story into the rooms you love.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2.5 bg-ivory text-espresso px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-cream transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-espresso/10"
            >
              Shop Handcrafted Shades
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
            <Link
              href="/custom"
              className="inline-flex items-center gap-2.5 border border-ivory/40 text-ivory px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-ivory/10 transition-all duration-300"
            >
              Explore Custom Shades
            </Link>
          </div>
        </div>
      </div>

      {/* Floating product card */}
      <div className="absolute bottom-8 right-6 lg:right-10 z-20 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
        <Link href="/product/peacock-lamp-and-shade" className="group block bg-ivory/95 backdrop-blur-sm shadow-2xl shadow-espresso/20 p-4 lg:p-5 max-w-[280px] hover:shadow-espresso/30 transition-all duration-300 hover:-translate-y-1">
          <div className="relative overflow-hidden mb-4">
            <img
              src="/images/product-peacock.jpg"
              alt="Peacock Lamp & Shade"
              className="w-full h-48 object-cover zoom-on-hover"
            />
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-taupe mb-1">Handcrafted Piece</p>
          <h3 className="font-editorial text-xl text-espresso mb-1 group-hover:text-walnut transition-colors">Peacock Lamp & Shade</h3>
          <p className="text-sm text-charcoal mb-3 font-medium">$130</p>
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-walnut font-semibold border-b border-walnut/20 pb-0.5 group-hover:border-espresso transition-colors">
            View Piece <ArrowRight size={10} strokeWidth={2} />
          </span>
        </Link>
      </div>
    </section>
  );
}
