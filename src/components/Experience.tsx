import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Freelance Designer & Developer',
      period: '2017 - Present',
      description: 'Working on various projects as a graphic designer, UI/UX designer, and full stack developer.'
    },
    {
      title: 'Graphic & UI/UX Designer',
      company: 'RightUp Agency',
      location: 'Skikda',
      period: '2019 - 2021',
      description: 'Led design projects and created user interfaces for various clients.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Khademni MLM Company',
      period: '2021 - Present',
      description: 'Developing and maintaining web applications using modern technologies.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative pl-8">
              <div className="absolute left-0 top-0">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                {exp.company && (
                  <p className="text-gray-600">{exp.company}</p>
                )}
                {exp.location && (
                  <p className="text-gray-500 text-sm">{exp.location}</p>
                )}
                <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}