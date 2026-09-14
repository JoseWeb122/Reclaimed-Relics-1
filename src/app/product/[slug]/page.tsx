import { ArrowLeft, ArrowRight, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

const products: Record<string, any> = {
  "peacock-lamp-and-shade": {
    id: 1,
    name: "Peacock Lamp & Shade",
    price: 130,
    imageUrl: "/images/product-peacock.jpg",
    gallery: ["/images/product-peacock.jpg", "/images/shop-vintage.jpg"],
    description: "An expressive statement piece combining a sculpted gold peacock base with rich blue-and-gold patterned silk fabric. The kind of lamp that makes people ask where you found it.",
    details: "Handcrafted shade with sculpted gold peacock lamp base. Rich blue and gold patterned silk blend.",
    dimensions: "Shade: 12\" bottom x 10\" top x 9\" height. Base: 18\" tall.",
    materials: "Silk blend pattern fabric, gold metal base",
    availability: "in_stock",
  },
  "gold-blue-cranes": {
    id: 2,
    name: "Blue & Gold Statement Shade",
    price: 75,
    imageUrl: "/images/product-blue-gold.jpg",
    gallery: ["/images/product-blue-gold.jpg", "/images/shop-vintage.jpg"],
    description: "Elegant crane bird motif in gold and deep blue on a warm cream silk background. A classic design with modern presence.",
    details: "Traditional crane bird design in gold and deep blue on warm cream silk.",
    dimensions: "Shade: 10\" bottom x 8\" top x 9\" height.",
    materials: "Silk, gold metallic trim",
    availability: "in_stock",
  },
};

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <div className="min-h-screen bg-ivory py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Link href="/shop" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-taupe hover:text-espresso mb-10 transition-colors">
          <ArrowLeft size={14} strokeWidth={1.5} /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <div className="space-y-4">
            <img src="/images/product-peacock.jpg" alt="Peacock Lamp" className="w-full aspect-[4/5] object-cover" />
            <div className="grid grid-cols-2 gap-3">
              <img src="/images/shop-vintage.jpg" alt="Detail" className="w-full aspect-[4/3] object-cover" />
              <img src="/images/fabric-texture.jpg" alt="Fabric" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>

          {/* Info */}
          <div className="lg:py-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-taupe mb-4">Handcrafted Piece</p>
            <h1 className="font-editorial text-4xl lg:text-[3.2rem] text-espresso mb-4 leading-[1.05] tracking-tight">Peacock Lamp & Shade</h1>
            <p className="text-sm text-taupe mb-2">Statement • Handcrafted • One of a Kind</p>
            <p className="font-editorial text-3xl text-espresso mb-8">$130</p>

            <p className="text-charcoal/80 leading-[1.75] mb-8">An expressive statement piece combining a sculpted gold peacock base with rich blue-and-gold patterned silk fabric. The kind of lamp that makes people ask where you found it.</p>

            <div className="space-y-4 mb-10 border-y border-oatmeal/20 py-6">
              <div><strong className="text-xs uppercase tracking-[0.15em] text-taupe">Details:</strong> <span className="text-sm text-charcoal/80">Handcrafted shade with sculpted gold peacock lamp base.</span></div>
              <div><strong className="text-xs uppercase tracking-[0.15em] text-taupe">Dimensions:</strong> <span className="text-sm text-charcoal/80">Shade: 12" bottom x 10" top x 9" height. Base: 18" tall.</span></div>
              <div><strong className="text-xs uppercase tracking-[0.15em] text-taupe">Materials:</strong> <span className="text-sm text-charcoal/80">Silk blend pattern fabric, gold metal base</span></div>
            </div>

            <div className="flex gap-4 mb-8">
              <Link href="#" className="flex-1 bg-espresso text-ivory py-4 text-center text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-walnut transition-colors shadow-lg shadow-espresso/10">Add to Cart</Link>
              <Link href="#" className="flex-1 border border-espresso text-espresso py-4 text-center text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-espresso hover:text-ivory transition-colors">Ask a Question</Link>
            </div>

            <div className="bg-cream p-6 border border-oatmeal/20">
              <h3 className="font-editorial text-xl text-espresso mb-3">Why you'll love it</h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• Unique handcrafted design — no two exactly alike</li>
                <li>• Beautiful silk blend pattern with gold accents</li>
                <li>• Sculpted gold base adds a gallery-quality feel</li>
                <li>• Perfect for a statement corner or reading nook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
