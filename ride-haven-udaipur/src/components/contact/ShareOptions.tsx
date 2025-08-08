
import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';

type ShareOptionsProps = {
  whatsappLink: string;
  emailLink: string;
};

const ShareOptions = ({ whatsappLink, emailLink }: ShareOptionsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 mt-2">
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        <MessageSquare size={18} />
        <span className="text-sm">WhatsApp</span>
      </a>
      <a 
        href={emailLink} 
        className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <Mail size={18} />
        <span className="text-sm">Email</span>
      </a>
    </div>
  );
};

export default ShareOptions;
