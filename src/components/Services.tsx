import React from 'react';
import { Palette, Layout, Code, Briefcase } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Layout,
      title: "UI UX Design",
      descriptions: [
        "Elevate user experiences with our expert UI/UX design service, where aesthetics meet functionality seamlessly.",
        "Transform your digital vision into reality with our UI/UX design expertise, delivering intuitive interfaces that captivate users.",
        "Crafted for success: Our UI/UX design service ensures your product delights users and drives exceptional results."
      ]
    },
    {
      icon: Code,
      title: "Mobile App / Websites Development",
      descriptions: [
        "Our development service is your path to turning ideas into powerful, scalable software solutions.",
        "With our development expertise, we bring innovation to life through code, creating digital experiences that exceed expectations.",
        "Trust our development service to deliver robust, efficient, and future-proof solutions that drive your business forward."
      ]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      descriptions: [
        "Elevate your brand's visual identity with our graphic design service, where creativity meets strategy for stunning, impactful designs.",
        "From eye-catching logos to captivating marketing materials, our graphic design expertise transforms ideas into compelling visuals that resonate.",
        "Harness the power of effective communication through design – choose our graphic design service to stand out in a crowded marketplace."
      ]
    },
    {
      icon: Briefcase,
      title: "Logo & Branding",
      descriptions: [
        "Ignite your brand's essence with our logo and branding service, where we craft iconic identities that leave a lasting impression.",
        "We blend creativity and strategy to develop cohesive branding solutions that resonate with your audience and tell your unique story.",
        "Elevate your brand's presence with our logo and branding expertise, ensuring consistency and recognition across all touchpoints."
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 text-white rounded-lg">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
              </div>
              
              <div className="space-y-4">
                {service.descriptions.map((desc, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}