import React from 'react';
import { Calendar, Award } from 'lucide-react';

export default function About() {
  const experiences = [
    { year: 2017, title: 'Started Graphic Design Journey' },
    { year: 2019, title: 'Began UI/UX Design' },
    { year: 2021, title: 'Entered Programming Field' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{exp.year}</h3>
                    <p className="text-gray-600">{exp.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Current Positions</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>CEO & Co-founder at AiSool</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>Assistant de direction chez Eurl Ines Santé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}