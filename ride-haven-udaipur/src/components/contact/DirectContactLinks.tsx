
import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';

type DirectContactLinksProps = {
  whatsappLink: string;
  emailLink: string;
};

const DirectContactLinks = ({ whatsappLink, emailLink }: DirectContactLinksProps) => {
  return (
    <div className="flex gap-3">
      <a 
        href={whatsappLink} 
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="h-5 w-5" />
      </a>
      <a 
        href={emailLink}
        className="p-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
        aria-label="Email us"
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
};

export default DirectContactLinks;
