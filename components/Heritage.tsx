'use client';

import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

function Counter({ end, duration = 2000, suffix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (end - startValue) * easeOutQuart;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <p ref={counterRef} className="font-playfair text-4xl md:text-5xl font-bold text-black mb-2">
      {displayValue}{suffix}
    </p>
  );
}

export default function Heritage() {
  return (
    <section className="py-24 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-sm tracking-[0.3em] text-gray-600 mb-6">
              OUR HERITAGE
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              A Legacy of
              <br />
              Horological Excellence
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded with a singular vision to create timepieces that transcend
              generations, Harbour Watches represents the pinnacle of watchmaking
              artistry. Our atelier brings together master craftsmen whose expertise
              spans decades, each contributing their unique skills to every watch
              we create.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              From the initial design sketches to the final quality inspection, every
              step in our process adheres to the strictest standards. We believe that
              a watch is more than an instrument to tell time—it is a companion for
              life's most significant moments, an heirloom to be cherished and passed
              down through generations.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-gray-200 overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-LWPPpkn6NEQ?w=800&q=80"
                alt="Watchmaking craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src="https://assets.europeanwatch.com/containers/assets/blog/hero-patek-philippe-5930p-world-time-chronograph-scaled.jpg/4ab9c7f31dec91cb0c03171945758167/hero-patek-philippe-5930p-world-time-chronograph-scaled.webp"
                  alt="Watch detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src="https://time4diamonds.com/cdn/shop/articles/blog-why-is-the-patek-philippe-nautilus-the-hardest-luxury-watch-to-get-right-now-image1_8993c58b-2926-4399-bc5d-1896d3a090fc.jpg?v=1761560209&width=1500"
                  alt="Movement detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats with Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-300">
          <div className="text-center">
            <Counter end={50} suffix="+" />
            <p className="text-sm text-gray-600 tracking-wide uppercase">Master Craftsmen</p>
          </div>
          <div className="text-center">
            <Counter end={150} suffix="+" />
            <p className="text-sm text-gray-600 tracking-wide uppercase">Hours Per Watch</p>
          </div>
          <div className="text-center">
            <Counter end={99.9} decimals={1} suffix="%" />
            <p className="text-sm text-gray-600 tracking-wide uppercase">Quality Standard</p>
          </div>
          <div className="text-center">
            <Counter end={25} suffix="+" />
            <p className="text-sm text-gray-600 tracking-wide uppercase">Countries Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
