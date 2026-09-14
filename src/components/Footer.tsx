"use client";
import Link from "next/link";
 // Using generic social link instead

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80 pt-24 lg:pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="font-editorial text-2xl font-semibold text-ivory tracking-tight">RECLAIMED RELICS</span>
            </Link>
            <p className="text-sm leading-relaxed text-ivory/60 max-w-sm">
              Handcrafted lampshades and restored vintage furnishings. Pieces with character, made for rooms that feel lived in.
            </p>
          </div>

          {/* Shop */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-ivory/40 mb-6 font-semibold">Shop</h4>
            <ul className="space-y-3 text-sm">
              {["Lampshades", "Custom Shades", "Furniture", "Featured Pieces", "New Arrivals"].map((item) => (
                <li key={item}><Link href="#" className="hover:text-ivory transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-ivory/40 mb-6 font-semibold">About</h4>
            <ul className="space-y-3 text-sm">
              {["Our Story", "Craftsmanship", "Journal", "Contact", "Press"].map((item) => (
                <li key={item}><Link href="#" className="hover:text-ivory transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-ivory/40 mb-6 font-semibold">Help</h4>
            <ul className="space-y-3 text-sm">
              {["Shipping", "Returns", "FAQ", "Custom Orders", "Sizing Guide"].map((item) => (
                <li key={item}><Link href="#" className="hover:text-ivory transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-ivory/40 mb-6 font-semibold">Newsletter</h4>
            <p className="text-sm text-ivory/50 mb-4 leading-relaxed">Beautiful things, occasionally in your inbox.</p>
            <form className="flex" onSubmit={(e) => { e.preventDefault(); }}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-ivory/5 border border-ivory/10 px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-camel/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-ivory text-espresso px-4 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-cream transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/30">© Reclaimed Relics. Handcrafted pieces with character.</p>
          <div className="flex gap-6 text-xs text-ivory/40">
            <Link href="#" className="hover:text-ivory/70 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-ivory/70 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-ivory/70 transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
