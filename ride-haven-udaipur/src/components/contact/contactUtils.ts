
export const createWhatsAppMessage = (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const message = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Message: ${formData.message}
  `;
  
  // Updated with the correct phone number
  const phoneNumber = "919530105259"; // Format: country code + number, no + or spaces
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const createMailtoLink = (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const subject = encodeURIComponent("New Contact Form Submission");
  const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Message: ${formData.message}
  `);
  
  return `mailto:gaganjain988@gmail.com?subject=${subject}&body=${body}`;
};
