'use client';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f3eee5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden">
              <img
                src="https://ewwatches.com/cdn/shop/files/d1d7aa7b-ba15-4e53-983b-c995edc015e1.jpg?v=1765882625&width=1400"
                alt="Harbour Watches Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm tracking-[0.3em] text-gray-600 mb-6">
              ABOUT US
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              Crafted with Precision,
              <br />
              Designed for Life
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Since our founding, Harbour Watches has been dedicated to creating
              timepieces that stand the test of time. Each watch is meticulously
              crafted by master watchmakers who bring decades of expertise to
              every detail.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our commitment to excellence extends beyond aesthetics. We use only
              the finest materials and movements, ensuring that every Harbour watch
              is a worthy companion for life's most precious moments.
            </p>
            <button className="px-8 py-4 border-2 border-black text-black text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300">
              OUR STORY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
