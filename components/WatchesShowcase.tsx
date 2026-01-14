'use client';

import { useState } from 'react';

interface Watch {
  id: number;
  name: string;
  collection: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  specs: {
    movement: string;
    case: string;
    diameter: string;
    waterResistance: string;
    crystal: string;
    strap: string;
  };
}

export default function WatchesShowcase() {
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);

  const watches: Watch[] = [
    {
      id: 1,
      name: 'Navigator Chronograph',
      collection: 'Sport Collection',
      price: '$4,850',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80',
      description: 'A precision instrument designed for those who demand excellence. The Navigator Chronograph combines robust functionality with elegant design, making it perfect for both sporting activities and formal occasions.',
      features: [
        'Swiss automatic chronograph movement',
        'Tachymeter bezel for speed calculations',
        'Date display at 3 o\'clock',
        'Luminous hands and markers',
        'Screw-down crown for enhanced water resistance',
      ],
      specs: {
        movement: 'Swiss Automatic Chronograph',
        case: '316L Stainless Steel',
        diameter: '42mm',
        waterResistance: '300m / 1000ft',
        crystal: 'Sapphire with AR coating',
        strap: 'Stainless Steel Bracelet',
      },
    },
    {
      id: 2,
      name: 'Heritage Dress',
      collection: 'Classic Series',
      price: '$3,200',
      image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80',
      description: 'Timeless elegance meets precision engineering. The Heritage Dress watch embodies understated sophistication with its clean dial and slim profile, perfect for the discerning gentleman.',
      features: [
        'Ultra-thin automatic movement',
        'Classic Roman numeral dial',
        'Small seconds subdial',
        'Alligator leather strap',
        'Exhibition caseback',
      ],
      specs: {
        movement: 'Swiss Automatic',
        case: 'Rose Gold Plated',
        diameter: '40mm',
        waterResistance: '50m / 165ft',
        crystal: 'Domed Sapphire',
        strap: 'Genuine Alligator Leather',
      },
    },
    {
      id: 3,
      name: 'Diver Pro 300',
      collection: 'Sport Collection',
      price: '$5,500',
      image: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80',
      description: 'Built for the depths, designed for life above water. The Diver Pro 300 is a professional diving instrument that doesn\'t compromise on style, featuring a robust construction and impeccable finishing.',
      features: [
        'Unidirectional rotating bezel',
        'Helium escape valve',
        'Super-LumiNova coating',
        'ISO 6425 certified diver\'s watch',
        'Solid screw-down caseback',
      ],
      specs: {
        movement: 'Swiss Automatic with date',
        case: 'Titanium Grade 5',
        diameter: '44mm',
        waterResistance: '300m / 1000ft',
        crystal: 'Sapphire with AR coating',
        strap: 'Rubber with deployant clasp',
      },
    },
    {
      id: 4,
      name: 'Moonphase Elite',
      collection: 'Modern Line',
      price: '$6,800',
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
      description: 'Astronomical precision meets artistic beauty. The Moonphase Elite showcases one of watchmaking\'s most romantic complications, tracking the lunar cycle with poetic accuracy.',
      features: [
        'Moonphase complication',
        'Power reserve indicator',
        'Guilloche dial pattern',
        'Hand-applied indices',
        'Exhibition caseback with decorated movement',
      ],
      specs: {
        movement: 'Swiss Automatic with moonphase',
        case: 'Stainless Steel',
        diameter: '41mm',
        waterResistance: '100m / 330ft',
        crystal: 'Sapphire front and back',
        strap: 'Italian Calfskin Leather',
      },
    },
    {
      id: 5,
      name: 'Field Explorer',
      collection: 'Sport Collection',
      price: '$2,950',
      image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80',
      description: 'Adventure-ready and built to last. The Field Explorer is inspired by military timepieces, offering exceptional legibility and rugged reliability for outdoor enthusiasts.',
      features: [
        'Anti-magnetic soft iron cage',
        'High-contrast dial',
        'Date complication',
        'Quick-change strap system',
        'Shock-resistant construction',
      ],
      specs: {
        movement: 'Swiss Automatic',
        case: 'Brushed Stainless Steel',
        diameter: '39mm',
        waterResistance: '200m / 660ft',
        crystal: 'Sapphire with AR coating',
        strap: 'NATO or Leather options',
      },
    },
    {
      id: 6,
      name: 'GMT Traveller',
      collection: 'Modern Line',
      price: '$5,200',
      image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80',
      description: 'The perfect companion for the global citizen. Track two time zones simultaneously with the GMT Traveller\'s independently adjustable hour hand and distinctive 24-hour bezel.',
      features: [
        'GMT complication',
        '24-hour rotating bezel',
        'Independently adjustable hour hand',
        'Date display',
        'Luminous GMT hand',
      ],
      specs: {
        movement: 'Swiss Automatic GMT',
        case: '316L Stainless Steel',
        diameter: '42mm',
        waterResistance: '150m / 500ft',
        crystal: 'Sapphire with AR coating',
        strap: 'Stainless Steel Jubilee',
      },
    },
  ];

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-gray-600 mb-6">
              EXPLORE
            </p>
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-black mb-4">
              Our Timepieces
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each watch is a testament to horological excellence. Click to explore detailed specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {watches.map((watch) => (
              <div
                key={watch.id}
                className="group cursor-pointer"
                onClick={() => setSelectedWatch(watch)}
              >
                <div className="relative overflow-hidden mb-6 aspect-square bg-gray-100">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm tracking-wide bg-black/50 px-6 py-3 backdrop-blur-sm">
                      VIEW DETAILS
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-2 tracking-wide uppercase">
                  {watch.collection}
                </p>
                <h3 className="font-playfair text-2xl font-bold mb-2 text-black group-hover:text-gray-600 transition-colors">
                  {watch.name}
                </h3>
                <p className="text-lg font-semibold text-black">{watch.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedWatch && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedWatch(null)}
        >
          <div
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedWatch(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Image */}
              <div className="aspect-square bg-gray-100">
                <img
                  src={selectedWatch.image}
                  alt={selectedWatch.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div>
                <p className="text-xs text-gray-500 mb-2 tracking-wide uppercase">
                  {selectedWatch.collection}
                </p>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-black">
                  {selectedWatch.name}
                </h3>
                <p className="text-2xl font-bold text-black mb-6">{selectedWatch.price}</p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  {selectedWatch.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-bold text-black mb-4 text-lg">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedWatch.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="mb-8">
                  <h4 className="font-bold text-black mb-4 text-lg">Technical Specifications</h4>
                  <div className="space-y-3">
                    {Object.entries(selectedWatch.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-sm font-semibold text-black">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 px-6 py-4 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-all duration-300">
                    ADD TO CART
                  </button>
                  <button className="flex-1 px-6 py-4 border-2 border-black text-black text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300">
                    ENQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
