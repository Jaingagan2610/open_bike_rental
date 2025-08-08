
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/lovable-uploads/602de907-08c2-43f1-97ea-273c8fcf4de9.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/30 z-10"> hello </div> */}
     <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
  <div className="text-white text-3xl md:text-5xl font-bold text-center px-6 leading-snug drop-shadow-lg">
    Explore freely, ride affordably. <br />
    Reliable pickup & drop at your service 🚴‍♂️
  </div>
</div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center fade-in-sequence">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Explore Udaipur's Beauty on Two Wheels
        </h1>
        
        {/* Quote Box */}
        <div className="glass-effect max-w-3xl mx-auto my-6 p-5 rounded-lg rotate-[-1deg]">
          <p className="text-xl md:text-2xl text-white font-serif italic">
            "The journey through Udaipur's winding streets reveals the soul of Rajasthan — best experienced on two wheels, where every turn is a new story."
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Premium bike and scooter rentals for an unforgettable journey through the City of Lakes, Rajasthan
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#fleet" 
            className="px-8 py-3 bg-lake-600 hover:bg-lake-700 text-white rounded-md transition-colors duration-300 font-medium"
          >
            View Our Fleet
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-md transition-colors duration-300 font-medium"
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/80 hover:text-white cursor-pointer animate-bounce">
        <a href="#about">
          <ChevronDown size={36} />
        </a>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-black/40 to-transparent z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/40 to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
