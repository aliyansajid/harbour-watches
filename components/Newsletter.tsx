'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section id="contact" className="py-24 bg-[#f8f7f4]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] text-gray-600 mb-6">
          STAY CONNECTED
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
          Join Our Community
        </h2>
        <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
          Be the first to know about new releases, exclusive events,
          and special offers from Harbour Watches.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-white border-2 border-gray-200 focus:border-black outline-none transition-colors text-sm"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </form>
      </div>
    </section>
  );
}
