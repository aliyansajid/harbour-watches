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
                src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80"
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
              src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&q=80"
              alt="Watch detail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="aspect-square bg-gray-100 overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&q=80"
              alt="Watch detail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="aspect-square bg-gray-100 overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&q=80"
              alt="Watch detail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="aspect-square bg-gray-100 overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400&q=80"
              alt="Watch detail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
