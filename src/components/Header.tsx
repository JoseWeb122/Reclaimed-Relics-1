"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { setIsOpen } = useCart();

  const navLinks = [
    { label: "Shop Lampshades", href: "/shop" },
    { label: "Custom Shades", href: "/custom" },
    { label: "Our Story", href: "/#story" },
    { label: "Furniture", href: "/#" },
    { label: "Journal", href: "/#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-oatmeal/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile left: logo */}
          <Link href="/" className="lg:hidden shrink-0">
            <span className="font-editorial text-xl font-semibold text-espresso tracking-tight">
              Reclaimed Relics
            </span>
          </Link>

          {/* Desktop left: logo */}
          <Link href="/" className="hidden lg:block shrink-0">
            <span className="font-editorial text-2xl font-semibold text-espresso tracking-tight leading-none">
              RECLAIMED RELICS
            </span>
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.15em] text-walnut hover:text-espresso transition-colors duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-espresso group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              className="p-2 -mr-2 text-walnut hover:text-espresso transition-colors"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <Link href="/" className="hidden sm:block text-[11px] uppercase tracking-[0.15em] text-walnut hover:text-espresso transition-colors font-medium">
              Account
            </Link>
            <button onClick={() => setIsOpen(true)} className="relative p-2 -mr-2 text-walnut hover:text-espresso transition-colors" aria-label="Cart">
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-espresso text-ivory text-[9px] rounded-full flex items-center justify-center font-semibold">{useCart().items.length}</span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -mr-2 text-walnut hover:text-espresso transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${searchOpen ? "max-h-14 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="border-t border-oatmeal/20 bg-cream/50 px-6 lg:px-10 py-3">
          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              placeholder="Search lampshades, fabrics, styles..."
              className="w-full bg-ivory border border-oatmeal/40 rounded-none px-4 py-2.5 text-sm text-charcoal placeholder:text-taupe focus:outline-none focus:border-camel transition-colors font-sans"
            />
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col px-6 lg:px-10 py-4 gap-1 bg-cream/30 border-t border-oatmeal/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-walnut hover:text-espresso py-3 border-b border-oatmeal/20 font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
