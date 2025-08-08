
import React from 'react';

type ContactInfoProps = {
  icon: React.ElementType;
  title: string;
  content: string;
};

const ContactInfo = ({ icon: Icon, title, content }: ContactInfoProps) => (
  <div className="flex items-start">
    <div className="mr-4 mt-1">
      <Icon className="h-5 w-5 text-lake-600" />
    </div>
    <div>
      <h4 className="text-sm font-medium text-gray-900">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default ContactInfo;
