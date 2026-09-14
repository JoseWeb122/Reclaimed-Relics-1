export default function Reviews() {
  return (
    <section className="bg-ivory py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-editorial text-4xl lg:text-[3.2rem] leading-[1.05] text-espresso mb-4 tracking-tight">Loved in real homes.</h2>
          <p className="text-charcoal/60 text-base">Why our customers choose handmade.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {[
            { title: "Handcrafted", desc: "Every shade is made by hand, not pulled from a shelf." },
            { title: "Unique Designs", desc: "No two pieces are exactly the same. That's the point." },
            { title: "Personal Service", desc: "We help you choose what works for your space — not what sells fastest." },
            { title: "Small-Batch Feel", desc: "Limited quantities mean real care in every piece." },
            { title: "Custom Options", desc: "Bring your own fabric or idea, and we'll build around it." },
            { title: "Character-Rich", desc: "These pieces have stories. Your room will too." },
          ].map((item) => (
            <div key={item.title} className="text-center p-6 lg:p-8 bg-cream/40 border border-oatmeal/20 hover:border-camel/30 transition-colors duration-300">
              <h3 className="font-editorial text-xl text-espresso mb-3">{item.title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
