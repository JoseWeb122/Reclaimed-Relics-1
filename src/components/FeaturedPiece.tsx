import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedPiece() {
  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <img
              src="/images/product-peacock.jpg"
              alt="Peacock Lamp & Shade"
              className="w-full aspect-[4/5] object-cover shadow-2xl shadow-espresso/10"
            />
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-ivory shadow-xl shadow-espresso/10 px-6 py-5 lg:px-8 lg:py-6 max-w-[200px]">
              <p className="font-editorial text-3xl text-espresso">Only 1</p>
              <p className="text-xs uppercase tracking-[0.2em] text-taupe mt-1">Available</p>
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-taupe mb-4 font-medium">Featured Piece</p>
            <h2 className="font-editorial text-4xl lg:text-[3.5rem] leading-[1.05] text-espresso mb-4 tracking-tight">Peacock Lamp & Shade</h2>
            <p className="text-sm uppercase tracking-[0.15em] text-taupe mb-6">Statement • Handcrafted • One of a Kind</p>
            <p className="text-base lg:text-lg text-charcoal/80 leading-relaxed mb-8">
              An expressive statement piece combining a sculpted gold peacock base with rich blue-and-gold patterned silk fabric. The kind of lamp that makes people ask where you found it.
            </p>
            <div className="mb-8">
              <span className="font-editorial text-3xl text-espresso">$130</span>
              <span className="text-sm text-taupe ml-2">/ one available</span>
            </div>
            <Link
              href="/product/peacock-lamp-and-shade"
              className="inline-flex items-center gap-2.5 bg-espresso text-ivory px-8 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-walnut transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-espresso/20"
            >
              View This Piece <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
