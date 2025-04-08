import React from 'react';
import { Phone, Mail, Facebook, Instagram, MessageSquare } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { 
      icon: Phone, 
      label: 'Phone',
      values: ['0549194814', '0781490228']
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      link: 'https://wa.me/213549194814'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      link: 'https://www.facebook.com/samifalouti1'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      link: 'https://www.instagram.com/sami.falouti'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <item.icon className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-lg">{item.label}</h3>
                  {item.values ? (
                    <div className="space-y-1">
                      {item.values.map((value, i) => (
                        <p key={i} className="text-gray-600">{value}</p>
                      ))}
                    </div>
                  ) : (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit Profile
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}