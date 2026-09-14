import Link from "next/link";

export default function Gallery() {
  const images = [
    { src: "/images/product-peacock.jpg", alt: "Handcrafted lampshade detail" },
    { src: "/images/lifestyle-cozy-corner.jpg", alt: "Cozy interior with lamp" },
    { src: "/images/product-floral.jpg", alt: "Botanical shade" },
    { src: "/images/fabric-texture.jpg", alt: "Beautiful fabric texture" },
    { src: "/images/shop-neutral.jpg", alt: "Elegant neutral shade" },
    { src: "/images/custom-shade-work.jpg", alt: "Craftsmanship" },
    { src: "/images/shop-vintage.jpg", alt: "Vintage pattern shade" },
    { src: "/images/product-blue-gold.jpg", alt: "Blue and gold statement" },
  ];

  return (
    <section className="bg-espresso py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <h2 className="font-editorial text-4xl lg:text-[3.2rem] leading-[1.05] text-ivory mb-3 tracking-tight">Come see what we're making.</h2>
            <p className="text-ivory/60">A glimpse into the workshop, the fabrics, and the rooms we love.</p>
          </div>
          <Link href="#" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-brass-soft hover:text-ivory transition-colors font-medium border-b border-brass-soft/40 pb-1 hover:border-ivory">
            Follow Along →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative overflow-hidden group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-square object-cover zoom-on-hover"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
