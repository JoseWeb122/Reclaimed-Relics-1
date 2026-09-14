import Link from "next/link";

const categories = [
  { name: "Soft & Neutral", slug: "soft-neutral", image: "/images/shop-neutral.jpg", description: "Quiet tones for calm spaces" },
  { name: "Vintage Charm", slug: "vintage-charm", image: "/images/shop-vintage.jpg", description: "Patterns with history" },
  { name: "Bold & Botanical", slug: "bold-botanical", image: "/images/shop-vintage.jpg", description: "Nature-inspired statement" },
  { name: "Traditional", slug: "traditional", image: "/images/shop-vintage.jpg", description: "Classic elegance" },
  { name: "Eclectic", slug: "eclectic", image: "/images/product-peacock.jpg", description: "Unexpected combinations" },
  { name: "One-of-a-Kind", slug: "one-of-a-kind", image: "/images/product-floral.jpg", description: "Truly singular pieces" },
];

export default function ShopByStyle() {
  return (
    <section className="bg-ivory py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-editorial text-4xl lg:text-[3.2rem] leading-[1.05] text-espresso mb-4 tracking-tight">What's your style?</h2>
          <p className="text-charcoal/60 text-base">Browse by the feeling you want in your room.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <Link href="#" key={cat.slug} className="group relative overflow-hidden block aspect-[4/5]">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover zoom-on-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-editorial text-2xl lg:text-3xl text-ivory mb-2 tracking-tight">{cat.name}</h3>
                <p className="text-ivory/80 text-sm">{cat.description}</p>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-ivory/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                <span className="text-espresso text-xs font-bold">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
