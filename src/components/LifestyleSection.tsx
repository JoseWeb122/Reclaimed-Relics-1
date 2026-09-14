import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LifestyleSection() {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/lifestyle-cozy-corner.jpg"
          alt="Beautiful interior with handcrafted lampshade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 via-espresso/30 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-[70vh] flex items-center">
        <div className="max-w-xl py-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brass-soft mb-6 font-medium">Light • Texture • Character</p>
          <h2 className="font-editorial text-4xl lg:text-[3.2rem] leading-[1.05] text-ivory mb-8 tracking-tight">
            Sometimes, it's the{" "}
            <span className="italic font-light">little details</span> that change the whole room.
          </h2>
          <p className="text-ivory/90 text-base lg:text-lg leading-relaxed mb-8 font-light">
            See how a handcrafted shade can transform an ordinary corner into your favorite place in the house.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2.5 bg-ivory text-espresso px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-cream transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-espresso/20"
          >
            See The Collection <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
