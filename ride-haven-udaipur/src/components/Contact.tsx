
import React from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfoPanel from './contact/ContactInfoPanel';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-lake-100 text-lake-800 rounded-full text-sm font-medium mb-4">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-600 text-lg">
            Have questions or want to make a reservation? We're here to help you plan your perfect Udaipur adventure.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Contact Information Panel */}
          <ContactInfoPanel />
          
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
