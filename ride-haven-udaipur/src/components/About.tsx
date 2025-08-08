
import React from 'react';
import { cn } from '@/lib/utils';
import { Bike, Map, Clock, Shield } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover-scale">
    <div className="h-12 w-12 rounded-full bg-lake-100 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-lake-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
  const features = [
    {
      icon: Bike,
      title: "Premium Vehicles",
      description: "Experience Udaipur on high-quality, well-maintained bikes and scooters for a comfortable journey."
    },
    {
      icon: Map,
      title: "Local Expertise",
      description: "Get insider tips on the best routes and hidden gems from our team of local experts."
    },
    {
      icon: Clock,
      title: "Flexible Rentals",
      description: "Choose from hourly, daily, or weekly rental options to suit your travel schedule."
    },
    {
      icon: Shield,
      title: "Safety Assured",
      description: "Your safety is our priority with complimentary helmets and thorough vehicle inspections."
    }
  ];

  return (
    <section id="about" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-lake-100 text-lake-800 rounded-full text-sm font-medium mb-4">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Udaipur Like a Local</h2>
          <p className="text-gray-600 text-lg">
            At RideHaven, we provide premium bike and scooter rentals to help you explore the magical city of Udaipur at your own pace. Our mission is to make your journey as memorable as the destinations.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AboutCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* About Content */}
        {/* <div className="mt-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full lg:w-1/2 aspect-video rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1567950915042-b9f2bae31aa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Udaipur Palace and Lake" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-white font-serif text-xl">Discover Udaipur's charm</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2018 by passionate travelers and local experts, RideHaven was born from a desire to help visitors experience the authentic beauty of Udaipur. We noticed travelers struggling with transportation options that limited their ability to truly explore our city.
            </p>
            <p className="text-gray-600 mb-6">
              Starting with just 5 vehicles, we've grown to a fleet of over 50 premium bikes and scooters, serving thousands of happy travelers each year. Our commitment to quality, safety, and customer satisfaction remains at the heart of everything we do.
            </p>
            <p className="text-gray-600">
              Whether you're navigating the bustling city streets, cruising along the serene lakes, or venturing to nearby villages, we provide the perfect vehicle for your Udaipur adventure.
            </p>
          </div>
        </div> */}
        <div className="mt-20 flex flex-col items-start gap-12">
  <h2 className="text-3xl font-bold text-center w-full">Visit Udaipur: 3-Day Itinerary</h2>
  
  {/* Map Embed */}
  {/* <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
    <iframe
      className="w-full h-full border-0"
      src="https://www.google.com/maps/d/u/0/embed?mid=1UYbEqMJqldW2Eg08uRm-vIqF0zqjEXk&ehbc=2E312F"
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div> */}

  {/* Day-wise itinerary */}
  <div className="w-full space-y-10">
    {/* Day 1 */}
    <div>
      <h3 className="text-xl font-semibold mb-2">🕌 Day 1: City of Lakes & Palaces</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>Start your morning at <strong>City Palace</strong> – walk through Udaipur's royal history</li>
        <li>Visit <strong>Jagdish Temple</strong>, a beautiful Indo-Aryan temple</li>
        <li>Take a boat ride on <strong>Lake Pichola</strong> to view <strong>Jag Mandir</strong> & <strong>Lake Palace</strong></li>
        <li>Watch the sunset from <strong>Ambrai Ghat</strong> or <strong>Karni Mata Ropeway</strong></li>
      </ul>
    </div>

    {/* Day 2 */}
    <div>
      <h3 className="text-xl font-semibold mb-2">🌿 Day 2: Culture & Serenity</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>Head to <strong>Sajjangarh (Monsoon Palace)</strong> for morning views</li>
        <li>Relax at <strong>Fateh Sagar Lake</strong> and visit <strong>Saheliyon ki Bari</strong></li>
        <li>Explore <strong>Shilpgram</strong> – a cultural village with crafts, art, and food</li>
        <li>Evening walk or cycling at <strong>Rani Road</strong></li>
      </ul>
    </div>

    {/* Day 3 */}
    <div>
      <h3 className="text-xl font-semibold mb-2">🏞️ Day 3: Day Trip & Local Living</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>Plan a day trip to <strong>Kumbhalgarh Fort</strong> (2 hrs away) – a UNESCO site</li>
        <li>Or visit <strong>Eklingji Temple</strong> & <strong>Nagda ruins</strong> nearby</li>
        <li>Evening shopping at <strong>Hathi Pol</strong> or <strong>Bapu Bazaar</strong></li>
        <li>Try local food at <strong>Natraj Thali</strong> or <strong>1559 AD Café</strong></li>
      </ul>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
