import Image from "next/image";

export default function BrandIntro() {
  return (
    <section className="relative bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[10px] uppercase tracking-[0.25em] text-taupe mb-6 font-medium">The Reclaimed Relics Approach</p>
            <h2 className="font-editorial text-4xl lg:text-[3.2rem] leading-[1.05] text-espresso mb-8 tracking-tight">
              Your home should{" "}
              <span className="italic font-light">tell your story.</span>
            </h2>
            <div className="space-y-5 text-charcoal/85 leading-[1.75] text-base lg:text-lg">
              <p>
                Every piece we create is chosen, reclaimed, restored, or handcrafted with the belief that the things in your home should feel personal. Our lampshades bring color, texture and character to everyday spaces — whether you prefer something subtle or something that makes a statement.
              </p>
              <p>
                We work with beautiful fabrics, vintage patterns, and natural materials because mass-produced shades rarely tell the story of a real room. Each shade we make is intended to live with you for years.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden">
              <img
                src="/images/lifestyle-cozy-corner.jpg"
                alt="Cozy reading corner with handcrafted lamp"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-ivory/90 backdrop-blur-sm px-5 py-4 shadow-lg shadow-espresso/10 max-w-xs">
                <p className="font-editorial italic text-xl text-espresso leading-snug">
                  "Because the best pieces usually have a story."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
