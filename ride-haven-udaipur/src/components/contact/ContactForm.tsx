
// import React, { useRef, useState } from 'react';
// import { useToast } from "@/hooks/use-toast";
// import { createWhatsAppMessage, createMailtoLink } from './contactUtils';
// import FormField from './FormField';
// import SubmitButton from './SubmitButton';
// import ShareOptions from './ShareOptions';
// import DirectContactLinks from './DirectContactLinks';
// import FormStatus from './FormStatus';
// import emailjs from '@emailjs/browser';


// type FormStatus = {
//   type: 'success' | 'error' | null;
//   message: string;
// };

// // Extend the Window interface to include Email
// declare global {
//   interface Window {
//     Email?: any;
//   }
// }


// const ContactForm = () => {
//   const form = useRef<HTMLFormElement>(null);
//   e.preventDefault();
  
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formStatus, setFormStatus] = useState<FormStatus>({
//     type: null,
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Since we can't rely on the backend being at a specific URL, let's use the direct sharing options
//   // instead of trying to send an email through our own server
//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setIsSubmitting(true);
    
//   //   // Form validation
//   //   if (!formData.name || !formData.email || !formData.message) {
//   //     setIsSubmitting(false);
//   //     setFormStatus({
//   //       type: 'error',
//   //       message: 'Please fill all required fields.'
//   //     });
//   //     return;
//   //   }

//   //   try {
//   //     // Create sharing links
//   //     const whatsappLink = createWhatsAppMessage(formData);
//   //     const emailLink = createMailtoLink(formData);
      
//   //     // Show success message
//   //     setFormStatus({
//   //       type: 'success',
//   //       message: 'Thank you for your message! Please use one of the sharing options below to send it.'
//   //     });
      
//   //     // Show toast with sharing options
//   //     toast({
//   //       title: "Form Completed!",
//   //       description: "Please select how you'd like to send your message:",
//   //       action: (
//   //         <ShareOptions whatsappLink={whatsappLink} emailLink={emailLink} />
//   //       ),
//   //     });
      
//   //     // Clear form after successful submission
//   //     setTimeout(() => {
//   //       setFormStatus({ type: null, message: '' });
//   //       setFormData({ name: '', email: '', phone: '', message: '' });
//   //     }, 5000);

//   //  if (window.Email) {
//   //     window.Email.send({
//   //       Host: 's1.maildns.net',
//   //       Username: 'gaganjain988@gmail.com',
//   //       Password: '6E1474F2C51DAE1636B73C475B6EE1E345A6', // ⚠️ Don't use this in production
//   //       To: 'soyoxa1977@ofular.com',
//   //       From: 'gaganjain988@gmail.com',
//   //       Subject: 'New Message from Form',
//   //       Body: `
//   //         Name: ${formData.name} <br/>
//   //         Email: ${formData.email} <br/>
//   //         Phone: ${formData.phone} <br/>
//   //         Message: ${formData.message}
//   //       `,
//   //     }).then((message: string) => {
//   //       alert('Email sent: ' + message);
//   //     });
//   //   } else {
//   //     alert('Email service is not loaded.');
//   //   }

//   //   } catch (error) {
//   //     console.error('Error preparing message options:', error);
//   //     setFormStatus({
//   //       type: 'error',
//   //       message: 'Something went wrong. Please try again or contact us directly.'
//   //     });
//   //   } finally {
//   //     setIsSubmitting(false);
//   //   }
//   // };
//    const handleSubmit = () => {
   
  


 
//   };


//   // Get direct contact links
//   const directWhatsAppLink = `https://wa.me/919530105259`;
//   const directEmailLink = `mailto:gaganjain988@gmail.com`;
// // Declare Email as any to avoid TypeScript error, since it's loaded via external script
 
// if (form.current) {
//       emailjs
//         .sendForm(
//           'your_service_id',     
//           'your_template_id',    
//           form.current,
//           'JP1fNNgnZNSTG3m5T'    
//         )
//         .then(
//           (result) => {
//             console.log('Email sent:', result.text);
//             alert('Message sent!');
//           },
//           (error) => {
//             console.error('Failed to send email:', error);
//             alert('Failed to send message.');
//           }
//         );
//     }


//   return (
//     <div className="w-full md:w-2/3">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <FormField
//             id="name"
//             name="name"
//             label="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required={true}
//             placeholder="Your name"
//           />
          
//           <FormField
//             id="email"
//             name="email"
//             label="Email Address"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             required={true}
//             placeholder="Your email"
//           />
//         </div>
        
//         <FormField
//           id="phone"
//           name="phone"
//           label="Phone Number"
//           type="tel"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Your phone number (optional)"
//         />
        
//         <FormField
//           id="message"
//           name="message"
//           label="Message"
//           type="textarea"
//           value={formData.message}
//           onChange={handleChange}
//           required={true}
//           placeholder="Tell us what you need"
//           rows={5}
//         />
        
//         <FormStatus type={formStatus.type} message={formStatus.message} />
//         <div onClick={()=>{
//           console.log("helloqq",isSubmitting,formData);
//         }}>hhhh</div>
//         <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
//           <SubmitButton isSubmitting={isSubmitting} 
         
//           />
          
//           <span className="text-sm text-gray-500">
//             or contact us directly via WhatsApp or Email
//           </span>
          
//           <DirectContactLinks 
//             whatsappLink={directWhatsAppLink} 
//             emailLink={directEmailLink} 
//           />
//         </div>
//       </form>
//      <script src="https://smtpjs.com/v3/smtp.js"></script>
     
//     </div>
//   );
// };

// export default ContactForm;
// ContactForm.tsx

import React, { useRef, useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { createWhatsAppMessage, createMailtoLink } from './contactUtils';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import ShareOptions from './ShareOptions';
import DirectContactLinks from './DirectContactLinks';
import FormStatus from './FormStatus';
import emailjs from '@emailjs/browser';

type FormStatus = {
  type: 'success' | 'error' | null;
  message: string;
};

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS once on mount
    emailjs.init('JP1fNNgnZNSTG3m5T');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill all required fields.'
      });
      setIsSubmitting(false);
      return;
    }

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          'service_b1vx8xu', // replace with actual service ID
          'template_a7libhi', // replace with actual template ID
          form.current,
          'JP1fNNgnZNSTG3m5T' // your public key
        );

        console.log('Email sent:', result.text);

        setFormStatus({
          type: 'success',
          message: 'Message sent successfully!'
        });

        toast({
          title: "Message Sent",
          description: "We’ll get back to you soon!"
        });

        setFormData({ name: '', email: '', phone: '', message: '' });

      } catch (error) {
        console.error('Email sending failed:', error);
        setFormStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const directWhatsAppLink = `https://wa.me/919530105259`;
  const directEmailLink = `mailto:gaganjain988@gmail.com`;

  return (
    <div className="w-full md:w-2/3">
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="name"
            name="name"
            label="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />

          <FormField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
          />
        </div>

        <FormField
          id="phone"
          name="phone"
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number (optional)"
        />

        <FormField
          id="message"
          name="message"
          label="Message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us what you need"
          rows={5}
        />

        <FormStatus type={formStatus.type} message={formStatus.message} />

        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <SubmitButton isSubmitting={isSubmitting} />
          <span className="text-sm text-gray-500">
            or contact us directly via WhatsApp or Email
          </span>
          <DirectContactLinks
            whatsappLink={directWhatsAppLink}
            emailLink={directEmailLink}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
