'use client';

export default function Collections() {
  const collections = [
    {
      title: 'Classic Series',
      description: 'Heritage meets craftsmanship',
      image: 'https://time4diamonds.com/cdn/shop/articles/img_4247_1_4bf1aa58-8bcf-40a1-8fdd-ac788c9c0604.jpg?v=1754042053&width=1500',
    },
    {
      title: 'Modern Line',
      description: 'Contemporary sophistication',
      image: 'https://time4diamonds.com/cdn/shop/articles/img_0275_1_cfaff1e5-26c0-4e66-b38d-b7abb62d9550.jpg?v=1754043947&width=1500',
    },
    {
      title: 'Sport Collection',
      description: 'Precision in motion',
      image: 'https://assets.europeanwatch.com/containers/assets/blog/hero-patek-philippe-5930p-world-time-chronograph-scaled.jpg/4ab9c7f31dec91cb0c03171945758167/hero-patek-philippe-5930p-world-time-chronograph-scaled.webp',
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
