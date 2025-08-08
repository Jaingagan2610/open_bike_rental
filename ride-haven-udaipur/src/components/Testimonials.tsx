
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({ testimonial, isActive }: { 
  testimonial: Testimonial, 
  isActive: boolean 
}) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-8 shadow transition-all duration-500 transform",
      isActive ? "scale-100 opacity-100" : "scale-95 opacity-25"
    )}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={cn(
                "w-5 h-5", 
                i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
              )}
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
      </div>
      <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Thompson",
      location: "London, UK",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "RideHaven made our Udaipur trip extraordinary! The Royal Enfield was perfectly maintained, and their local route suggestions led us to some amazing hidden spots we would have missed otherwise.",
      rating: 5
    },
    {
      id: 2,
      name: "David Chen",
      location: "Sydney, Australia",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Renting a scooter from RideHaven was the best decision we made. The staff was incredibly helpful with directions and the vehicle was in excellent condition. Highly recommend!",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Sharma",
      location: "Mumbai, India",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      quote: "As a solo female traveler, safety was my priority. RideHaven's team made me feel comfortable and confident. The bike was perfect for navigating Udaipur's streets and the views were breathtaking.",
      rating: 4
    },
    {
      id: 4,
      name: "James Wilson",
      location: "Chicago, USA",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      quote: "Our family had a fantastic time with the car rental. It was immaculately clean, comfortable, and the child seats were an added bonus. The service was exceptional from start to finish.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-lake-100 text-lake-800 rounded-full text-sm font-medium mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">
            Discover why travelers from around the world choose RideHaven for their Udaipur adventures.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex -mx-4">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full px-4 transition-all duration-500 ease-in-out"
                  style={{ 
                    minWidth: '100%',
                    transform: `translateX(-${activeIndex * 100}%)` 
                  }}
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isActive={index === activeIndex} 
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-lake-600 w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
