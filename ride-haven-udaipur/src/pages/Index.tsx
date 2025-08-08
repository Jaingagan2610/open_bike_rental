
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Fleet from '@/components/Fleet';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to the section when hash changes
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle initial hash if present
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
