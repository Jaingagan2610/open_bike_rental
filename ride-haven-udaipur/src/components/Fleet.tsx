
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Bike, Car, CarFront } from 'lucide-react';

interface Vehicle {
  id: number;
  name: string;
  type: 'bike' | 'scooter' | 'car';
  image: string;
  description: string;
  features: string[];
}

const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover-scale group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            {vehicle.features.map((feature, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
        <p className="text-gray-600 mb-4">{vehicle.description}</p>
        <button className="w-full py-2 bg-lake-600 hover:bg-lake-700 text-white rounded-md transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

const Fleet = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'bike' | 'scooter' | 'car'>('all');
  
  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Royal Enfield Classic 350",
      type: "bike",
      image: "https://www.saranmotors.in/wp-content/uploads/2023/07/01-gunmetal-grey.jpg",
      description: "Experience the iconic Royal Enfield for a powerful and authentic ride through Udaipur.",
      features: ["350cc", "Comfortable", "Powerful"]
    },
    {
      id: 2,
      name: "Honda Activa",
      type: "scooter",
      image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/1/versions/--connected-obd-2b1737697110094.jpg",
      description: "Easy to navigate and perfect for city exploration with excellent fuel efficiency.",
      features: ["110cc", "Fuel Efficient", "Agile"]
    },
    {
      id: 3,
      name: "Royal Enfield Meteor 350",
      type: "bike",
      image: "https://imgd.aeplcdn.com/1280x720/n/sqhrseb_1777269.jpg?q=100",
      description: "A sporty ride with excellent handling for those who want some speed and performance.",
      features: ["350cc", "Comfortable", "Powerful"]
    },
    {
      id: 4,
      name: "Royal Enfield Hunter 350",
      type: "bike",
      image: "https://cdpcdn.dx1app.com/products/USA/RE/2024/MC/CRUISER/HUNTER_350/50/DAPPER_WHITE/2000000010.jpg",
      description: "A sporty ride with excellent handling for those who want some speed and performance.",
      features: ["350cc", "Comfortable", "Powerful"]
    },
    {
      id: 5,
      name: "TVS Jupiter",
      type: "scooter",
      image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/103181/jupiter-125-right-front-three-quarter-5.png?isig=0",
      description: "Classic style meets modern comfort for a premium scooter experience.",
      features: ["125cc", "Stylish", "Smooth"]
    },
    {
      id: 6,
      name: "Mahindra Thar",
      type: "car",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-37.jpeg?isig=0&q=80",
      description: "Compact luxury car for families or groups wanting comfort and style.",
      features: ["Compact", "Luxury", "Air-conditioned"]
    },
    {
      id: 7,
      name: "Suzuki Baleno",
      type: "car",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
      description: "Compact luxury car for families or groups wanting comfort and style.",
      features: ["Compact", "Luxury", "Air-conditioned"]
    }
  ];

  const filteredVehicles = activeFilter === 'all'
    ? vehicles
    : vehicles.filter(vehicle => vehicle.type === activeFilter);
  
  const FilterButton = ({ type, label, icon: Icon }: { 
    type: 'all' | 'bike' | 'scooter' | 'car', 
    label: string,
    icon?: React.ElementType
  }) => (
    <button
      onClick={() => setActiveFilter(type)}
      className={cn(
        "flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300",
        activeFilter === type 
          ? "bg-lake-600 text-white" 
          : "bg-white hover:bg-gray-100 text-gray-800"
      )}
    >
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {label}
    </button>
  );

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-lake-100 text-lake-800 rounded-full text-sm font-medium mb-4">Our Fleet</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Perfect Ride</h2>
          <p className="text-gray-600 text-lg">
            Discover our collection of premium, well-maintained vehicles ready to make your Udaipur exploration unforgettable.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          <FilterButton type="all" label="All Vehicles" />
          <FilterButton type="bike" label="Motorcycles" icon={Bike} />
          <FilterButton type="scooter" label="Scooters" icon={Car} />
          <FilterButton type="car" label="Cars" icon={CarFront} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
