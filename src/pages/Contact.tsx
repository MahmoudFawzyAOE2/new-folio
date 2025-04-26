
import React from 'react';
import ContactForm from '@/components/contact/ContactForm';
import SocialLinks from '@/components/contact/SocialLinks';

const Contact: React.FC = () => {
  return (
    <div className="py-12">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Have a project in mind or want to discuss how I can help improve your testing processes? Get in touch!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
            <ContactForm />
          </div>
          
          <div className="bg-secondary p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out through any of these platforms. I'm always open to discussing new projects, testing challenges, or potential collaborations.
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
