'use client';

import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f7f4]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="font-playfair text-2xl font-semibold tracking-tight text-black">
          HARBOUR
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#collections" className="text-sm tracking-wide hover:text-gray-600 transition-colors">
            COLLECTIONS
          </a>
          <a href="#about" className="text-sm tracking-wide hover:text-gray-600 transition-colors">
            ABOUT
          </a>
          <a href="#story" className="text-sm tracking-wide hover:text-gray-600 transition-colors">
            STORY
          </a>
          <a href="#contact" className="text-sm tracking-wide hover:text-gray-600 transition-colors">
            CONTACT
          </a>
        </div>

        <div className="hidden md:block">
          <button className="px-6 py-2 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors">
            SHOP NOW
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-6"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-full bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-full bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[73px] left-0 right-0 bg-[#f8f7f4] transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          <a
            href="#collections"
            className="text-sm tracking-wide hover:text-gray-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            COLLECTIONS
          </a>
          <a
            href="#about"
            className="text-sm tracking-wide hover:text-gray-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            ABOUT
          </a>
          <a
            href="#story"
            className="text-sm tracking-wide hover:text-gray-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            STORY
          </a>
          <a
            href="#contact"
            className="text-sm tracking-wide hover:text-gray-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACT
          </a>
          <button className="px-6 py-2 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors w-full">
            SHOP NOW
          </button>
        </div>
      </div>
    </nav>
  );
}
