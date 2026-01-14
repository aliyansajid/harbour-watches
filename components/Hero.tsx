'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f8f7f4] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in-up">
          <p className="text-sm tracking-[0.3em] text-gray-600 mb-6">
            INTRODUCING
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight">
            Timeless<br />Elegance
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            Discover our collection of meticulously crafted timepieces
            <br className="hidden md:block" />
            that blend classic design with modern precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              EXPLORE COLLECTION
            </button>
            <button className="px-8 py-4 border-2 border-black text-black text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-black rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
