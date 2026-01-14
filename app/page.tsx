import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import Features from '@/components/Features';
import About from '@/components/About';
import WatchesShowcase from '@/components/WatchesShowcase';
import Showcase from '@/components/Showcase';
import Heritage from '@/components/Heritage';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Collections />
      <Features />
      <About />
      <WatchesShowcase />
      <Showcase />
      <Heritage />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
