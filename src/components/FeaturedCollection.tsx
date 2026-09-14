import Link from "next/link";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Peacock Lamp & Shade", slug: "peacock-lamp-and-shade", price: 130, imageUrl: "/images/product-peacock.jpg", availability: "in_stock", isCustom: false },
  { id: 2, name: "Vintage Floral Shade", slug: "vintage-floral-shade", price: 95, imageUrl: "/images/product-floral.jpg", availability: "in_stock", isCustom: false },
  { id: 3, name: "Blue & Gold Statement Shade", slug: "gold-blue-cranes", price: 75, imageUrl: "/images/product-blue-gold.jpg", availability: "in_stock", isCustom: false },
  { id: 4, name: "Botanical Pattern Shade", slug: "emmie-floral-linen", price: 95, imageUrl: "/images/shop-vintage.jpg", availability: "in_stock", isCustom: false },
  { id: 5, name: "Classic Neutral Linen Shade", slug: "city-on-a-hill", price: 70, imageUrl: "/images/shop-neutral.jpg", availability: "in_stock", isCustom: false },
  { id: 6, name: "Vintage Patterned Table Shade", slug: "klimt-springtime", price: 80, imageUrl: "/images/shop-vintage.jpg", availability: "in_stock", isCustom: false },
];

export default function FeaturedCollection() {
  return (
    <section className="bg-ivory py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-24 max-w-2xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-taupe mb-5 font-medium">The Collection</p>
          <h2 className="font-editorial text-4xl lg:text-[3.2rem] leading-[1.05] text-espresso mb-6 tracking-tight">
            Find a shade that{" "}
            <span className="italic font-light">feels like home.</span>
          </h2>
          <p className="text-charcoal/70 leading-relaxed text-base">
            From quiet neutrals to bold patterns, explore handcrafted pieces designed to make a room come alive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-20">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-16 lg:mt-24">
          <Link
            href="/shop"
            className="inline-block border-b border-espresso pb-1 text-[11px] uppercase tracking-[0.2em] text-espresso font-semibold hover:text-walnut hover:border-walnut transition-colors"
          >
            View All Lampshades
          </Link>
        </div>
      </div>
    </section>
  );
}
