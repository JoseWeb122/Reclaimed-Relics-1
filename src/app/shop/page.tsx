import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Peacock Lamp & Shade", slug: "peacock-lamp-and-shade", price: 130, imageUrl: "/images/product-peacock.jpg", availability: "in_stock", isCustom: false },
  { id: 2, name: "City on a Hill", slug: "city-on-a-hill", price: 70, imageUrl: "/images/shop-neutral.jpg", availability: "in_stock", isCustom: false },
  { id: 3, name: "Coral Bells", slug: "coral-bells", price: 70, imageUrl: "/images/product-floral.jpg", availability: "in_stock", isCustom: false },
  { id: 4, name: "Geo & Emmie Custom Lampshade", slug: "geo-emmie-custom", price: 95, imageUrl: "/images/fabric-texture.jpg", availability: "made_to_order", isCustom: true },
  { id: 5, name: "Coastal Waters Lamp and Shade", slug: "coastal-waters", price: 110, imageUrl: "/images/shop-vintage.jpg", availability: "in_stock", isCustom: false },
  { id: 6, name: "Dreamy Emerald Lux", slug: "dreamy-emerald-lux", price: 95, imageUrl: "/images/shop-vintage.jpg", availability: "in_stock", isCustom: false },
  { id: 7, name: "Deep in the Jungle", slug: "deep-in-the-jungle", price: 70, imageUrl: "/images/shop-vintage.jpg", availability: "in_stock", isCustom: false },
  { id: 8, name: "Emmie Floral Linen Love", slug: "emmie-floral-linen", price: 95, imageUrl: "/images/product-floral.jpg", availability: "in_stock", isCustom: false },
  { id: 9, name: "Gold 'n Blue Cranes", slug: "gold-blue-cranes", price: 75, imageUrl: "/images/product-blue-gold.jpg", availability: "in_stock", isCustom: false },
  { id: 10, name: "Klimt Springtime Wildflowers", slug: "klimt-springtime", price: 80, imageUrl: "/images/shop-vintage.jpg", availability: "in_stock", isCustom: false },
  { id: 11, name: "Summer Garden", slug: "summer-garden", price: 80, imageUrl: "/images/shop-vintage.jpg", availability: "in_stock", isCustom: false },
  { id: 12, name: "Good Bunny", slug: "good-bunny", price: 99, imageUrl: "/images/shop-vintage.jpg", availability: "in_stock", isCustom: false },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-ivory pt-24 lg:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-24 max-w-2xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-taupe mb-5 font-medium">One Shady Business</p>
          <h1 className="font-editorial text-4xl lg:text-[3.5rem] leading-[1.05] text-espresso mb-6 tracking-tight">Handcrafted Lampshades</h1>
          <p className="text-charcoal/60 leading-relaxed">Browse our collection of handcrafted shades. Each one made with care, character, and the belief that light should feel as good as it looks.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-8 lg:gap-y-16">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
