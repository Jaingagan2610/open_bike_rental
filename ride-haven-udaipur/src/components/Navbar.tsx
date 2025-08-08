
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Bike } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        isScrolled 
          ? "py-2 bg-white/80 backdrop-blur-md shadow-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <Bike className={cn(
            "h-8 w-8 transition-colors duration-300",
            isScrolled ? "text-lake-600" : "text-white"
          )} />
          <span className={cn(
            "text-xl font-serif font-semibold transition-colors duration-300",
            isScrolled ? "text-lake-800" : "text-white"
          )}>
            {/* RideHaven */}
            Open Bike Rentals
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Fleet', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-lake-500",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={cn(
            "space-y-2 transition-all duration-300",
            isScrolled ? "text-gray-800" : "text-white"
          )}>
            <span className={cn(
              "block w-8 h-0.5 transition-all duration-300",
              isScrolled ? "bg-gray-800" : "bg-white",
              isMobileMenuOpen && "translate-y-1.5 rotate-45"
            )}></span>
            <span className={cn(
              "block w-8 h-0.5 transition-all duration-300",
              isScrolled ? "bg-gray-800" : "bg-white",
              isMobileMenuOpen && "opacity-0"
            )}></span>
            <span className={cn(
              "block w-8 h-0.5 transition-all duration-300",
              isScrolled ? "bg-gray-800" : "bg-white",
              isMobileMenuOpen && "-translate-y-1.5 -rotate-45"
            )}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden",
        isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-2">
          {['Home', 'About', 'Fleet', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 text-gray-800 hover:text-lake-600 font-medium text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
