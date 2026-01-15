'use client';

export default function Collections() {
  const collections = [
    {
      title: 'Classic Series',
      description: 'Heritage meets craftsmanship',
      image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80',
    },
    {
      title: 'Modern Line',
      description: 'Contemporary sophistication',
      image: 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&q=80',
    },
    {
      title: 'Sport Collection',
      description: 'Precision in motion',
      image: 'https://images.unsplash.com/photo-1587836374228-4c3b8b4c7c5b?w=800&q=80',
    },
  ];

  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-black mb-4">
            Our Collections
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each collection tells a unique story of precision, design, and timeless beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-gray-100">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-2 text-black group-hover:text-gray-600 transition-colors">
                {collection.title}
              </h3>
              <p className="text-gray-600 text-sm tracking-wide uppercase">
                {collection.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
