'use client';

export default function Showcase() {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-sm tracking-[0.3em] text-gray-600 mb-6">
              FEATURED
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              The Harbour
              <br />
              Navigator
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our flagship timepiece combines maritime heritage with contemporary
              design. Featuring a Swiss automatic movement and water resistance
              to 300 meters.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-black rounded-full mt-3" />
                <div>
                  <h4 className="font-bold text-black mb-1">Swiss Automatic Movement</h4>
                  <p className="text-gray-600 text-sm">42-hour power reserve</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-black rounded-full mt-3" />
                <div>
                  <h4 className="font-bold text-black mb-1">Sapphire Crystal</h4>
                  <p className="text-gray-600 text-sm">Anti-reflective coating</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-black rounded-full mt-3" />
                <div>
                  <h4 className="font-bold text-black mb-1">316L Stainless Steel</h4>
                  <p className="text-gray-600 text-sm">Brushed and polished finish</p>
                </div>
              </div>
            </div>
            <button className="px-8 py-4 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              VIEW DETAILS
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src="https://assets.europeanwatch.com/containers/assets/blog/1z2a6835-2-scaled.jpg/477f2c7e3c4047cbfce70c4bf0e29b80/1z2a6835-2-scaled.webp"
                alt="Harbour Navigator Watch"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square bg-gray-100 overflow-hidden group cursor-pointer">
            <img
              src="https://cdn.shopify.com/s/files/1/0025/2329/9889/files/BS-Audemars-Piguet-Royal-Oak-4100-22.jpg"
              alt="Watch detail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="aspect-square bg-gray-100 overflow-hidden group cursor-pointer">
            <img
              src="https://www.swisswatchexpo.com/thewatchclub/wp-content/uploads/2024/06/Patek-Philippe-Ultimate-Guide.jpg"
              alt="Watch detail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="aspect-square bg-gray-100 overflow-hidden group cursor-pointer">
            <img
              src="https://dynamicmedia.audemarspiguet.com/is/image/audemarspiguet/2car_1-1?size=940,0&fmt=avif-alpha&dpr=off"
              alt="Watch detail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="aspect-square bg-gray-100 overflow-hidden group cursor-pointer">
            <img
              src="https://ewwatches.com/cdn/shop/files/d1d7aa7b-ba15-4e53-983b-c995edc015e1.jpg?v=1765882625&width=1400"
              alt="Watch detail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
