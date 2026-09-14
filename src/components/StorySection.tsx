import Image from "next/image";

export default function StorySection() {
  return (
    <section id="story" className="bg-espresso text-ivory py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-brass-soft mb-6 font-medium">Craftsmanship</p>
            <h2 className="font-editorial text-4xl lg:text-[3.2rem] leading-[1.05] mb-8 tracking-tight">
              Made with patience.{" "}
              <span className="italic font-light">Chosen with intention.</span>
            </h2>
            <div className="space-y-5 text-ivory/75 leading-[1.8] text-base lg:text-lg">
              <p>
                Our approach is simple: reuse beautiful materials, give old pieces new life, and make things by hand that don't feel like they came from anywhere else. We believe a lampshade should feel like it was meant for your room — not like it arrived from a warehouse.
              </p>
              <p>
                Every shade we craft starts with a conversation about what you want to live with. Then we choose the right fabric, shape, and finish. The result is a piece with real personality.
              </p>
              <p>
                Whether we're working with vintage silk, hand-printed linen, or your own family fabric, the goal is the same: something you'll want to keep for a very long time.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/custom-shade-work.jpg" alt="Hands crafting" className="w-full aspect-[4/5] object-cover" />
            <img src="/images/fabric-texture.jpg" alt="Beautiful fabric" className="w-full aspect-[4/5] object-cover mt-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
