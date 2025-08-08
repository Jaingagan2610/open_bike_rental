
import React from 'react';
import { cn } from '@/lib/utils';
import { Bike, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lake-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Bike className="h-7 w-7 text-white" />
              <span className="text-xl font-serif font-semibold text-white">
                RideHaven
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Explore Udaipur's stunning landscapes and cultural heritage on premium bikes and scooters.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Fleet', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                'Bike Rentals', 
                'Scooter Rentals', 
                'Car Rentals', 
                'Guided Tours', 
                'Group Packages'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#fleet" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for special offers and travel tips.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-lake-800 border border-lake-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta-400"
              />
              <button 
                type="submit"
                className="w-full px-4 py-2 bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-lake-800 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} RideHaven. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
