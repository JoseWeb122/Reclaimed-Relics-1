"use client";
import Link from "next/link";
import { ShoppingBag, Eye } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    slug: string;
    price: number;
    imageUrl: string;
    availability: string;
    isCustom?: boolean;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden mb-5 bg-cream">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full aspect-[4/5] object-cover zoom-on-hover"
        />
        <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-300" />
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => { e.preventDefault(); }}
            className="bg-ivory/95 text-espresso p-2.5 shadow-lg hover:bg-ivory transition-colors"
            aria-label="Quick view"
          >
            <Eye size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); }}
            className="bg-espresso text-ivory p-2.5 shadow-lg hover:bg-walnut transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
          </button>
        </div>
        {product.availability === "made_to_order" && (
          <span className="absolute top-3 left-3 bg-espresso text-ivory text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 font-semibold">Custom</span>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-editorial text-xl text-espresso group-hover:text-walnut transition-colors">{product.name}</h3>
        <p className="text-xs uppercase tracking-[0.1em] text-taupe">Handcrafted</p>
        <p className="text-sm text-charcoal font-medium">${product.price}</p>
      </div>
    </Link>
  );
}
