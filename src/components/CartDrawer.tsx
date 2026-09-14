"use client";
import { useCart } from "./CartContext";
import { X, Minus, Plus, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-espresso/30 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-ivory shadow-2xl shadow-espresso/20 z-50 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 lg:px-8 h-20 border-b border-oatmeal/20">
          <h2 className="font-editorial text-xl text-espresso">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close cart" className="p-2 text-walnut hover:text-espresso transition-colors">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 lg:px-8 py-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-editorial text-xl text-espresso mb-3">Your cart is empty.</p>
              <p className="text-sm text-taupe mb-6">Find something beautiful for your room.</p>
              <Link href="/shop" onClick={() => setIsOpen(false)} className="inline-block border border-espresso text-espresso px-6 py-3 text-[10px] uppercase tracking-[0.15em] font-semibold hover:bg-espresso hover:text-ivory transition-colors">
                Browse Shades
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-oatmeal/20">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-24 object-cover shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-editorial text-base text-espresso mb-1">{item.name}</h3>
                    <p className="text-xs text-taupe mb-3">Handcrafted</p>
                    <div className="flex items-center gap-3 mb-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 border border-oatmeal flex items-center justify-center text-charcoal hover:border-espresso transition-colors" aria-label="Decrease">
                        <Minus size={10} strokeWidth={2} />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 border border-oatmeal flex items-center justify-center text-charcoal hover:border-espresso transition-colors" aria-label="Increase">
                        <Plus size={10} strokeWidth={2} />
                      </button>
                      <button onClick={() => removeItem(item.id)} className="text-[10px] text-taupe hover:text-espresso underline ml-auto transition-colors">Remove</button>
                    </div>
                    <p className="text-sm font-medium text-espresso">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-oatmeal/20 px-6 lg:px-8 py-6 space-y-4 bg-cream/30">
            <div className="flex justify-between text-sm">
              <span className="text-taupe">Subtotal</span>
              <span className="font-medium text-espresso">${total.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-taupe">Shipping calculated at checkout. Custom pieces may have additional lead time.</p>
            <Link href="#" className="flex items-center justify-center gap-2 w-full bg-espresso text-ivory py-4 text-[11px] uppercase tracking-[0.15em] font-semibold hover:bg-walnut transition-all duration-300 shadow-lg shadow-espresso/10">
              Proceed to Checkout <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
