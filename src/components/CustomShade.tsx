import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function CustomShade() {
  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img src="/images/fabric-texture.jpg" alt="Beautiful fabric texture" className="w-full aspect-[3/4] object-cover" />
              <img src="/images/custom-shade-work.jpg" alt="Handcrafting a lampshade" className="w-full aspect-[3/4] object-cover mt-8" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ivory/95 backdrop-blur-sm px-8 py-5 shadow-xl shadow-espresso/10 text-center max-w-xs">
              <p className="font-editorial text-xl text-espresso">FABRIC → CRAFT → HOME</p>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-taupe mb-6 font-medium">Custom Work</p>
            <h2 className="font-editorial text-4xl lg:text-[3.2rem] leading-[1.05] text-espresso mb-6 tracking-tight">
              Want something made{" "}
              <span className="italic font-light">for your space?</span>
            </h2>
            <p className="text-charcoal/80 text-base lg:text-lg leading-relaxed mb-12">
              Have a fabric, color, pattern, or idea in mind? Let's create something that feels like it belongs in your home.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-5">
                <span className="font-editorial text-3xl text-camel shrink-0 w-8">01</span>
                <div>
                  <h3 className="font-editorial text-xl text-espresso mb-1">Choose Your Style</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">Classic, colorful, vintage, subtle, bold — or somewhere in between.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="font-editorial text-3xl text-camel shrink-0 w-8">02</span>
                <div>
                  <h3 className="font-editorial text-xl text-espresso mb-1">Share Your Idea</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">Send us your fabric, inspiration, dimensions, or simply tell us what you're imagining.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="font-editorial text-3xl text-camel shrink-0 w-8">03</span>
                <div>
                  <h3 className="font-editorial text-xl text-espresso mb-1">Make It Yours</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">We'll help turn the idea into a handcrafted shade made specifically for your space.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/custom" className="inline-flex items-center gap-2.5 bg-espresso text-ivory px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-walnut transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-espresso/20">
                Start A Custom Shade <ArrowRight size={14} strokeWidth={2} />
              </Link>
              <Link href="/custom" className="inline-flex items-center gap-2.5 border border-espresso text-espresso px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-espresso hover:text-ivory transition-all duration-300">
                <MessageCircle size={14} strokeWidth={1.5} /> Talk About Your Idea
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
