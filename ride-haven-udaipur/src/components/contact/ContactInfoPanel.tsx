
import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import ContactInfo from './ContactInfo';
import BusinessHours from './BusinessHours';

const ContactInfoPanel = () => (
  <div className="w-full md:w-1/3 bg-cream-50 p-8 rounded-lg">
    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
    
    <div className="space-y-6">
      <ContactInfo 
        icon={MapPin} 
        title="Visit Us" 
        content="Chandpole Bridge, Chand Pole, udaipur, Rajasthan, India" 
      />
      <ContactInfo 
        icon={Phone} 
        title="Call Us" 
        content="+91 8955730587" 
      />
      <ContactInfo 
        icon={Mail} 
        title="Email Us" 
        content="jainlovesh96@gmail.com" 
      />
      <ContactInfo 
        icon={MessageSquare} 
        title="WhatsApp" 
        content="+91 8955730587" 
      />
    </div>
    
    <BusinessHours />
  </div>
);

export default ContactInfoPanel;
