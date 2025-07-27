import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const technologies = [
    {
      name: 'React.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
    },
    {
      name: 'Next.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg'
    },
    {
      name: 'Supabase',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg'
    },
    {
      name: 'Node.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'HTML',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png'
    },
    {
      name: 'JavaScript',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
    },
    {
      name: 'TypeScript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png'
    },
    {
      name: 'Python',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
    },
    {
      name: 'GitHub',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
    },
    {
      name: 'Git',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
    },
    {
      name: 'Figma',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg'
    },
    {
      name: 'Illustrator',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png'
    },
    {
      name: 'Photoshop',
      logo: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxhfRM_njI7Pu32CmBLMdmnnzF6MdNHw4MJwlr.tSWLA2EJBQdZh0p3nNDzGvX2F6NoIc9ZSQ9xJqsGEg5bouOnA-&format=source'
    },
    {
      name: 'Canva',
      logo: 'https://cdn-1.webcatalog.io/catalog/canva-cn/canva-cn-icon-unplated.png?v=1751244609454'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Sami Falouti
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300">
          Full Stack Developer | UI/UX Designer | Graphic Designer
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all transform hover:scale-105"
            >
              <img 
                src={tech.logo} 
                alt={tech.name}
                className="w-12 h-12 mx-auto mb-2"
              />
              <p className="text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
        <a 
          href="#portfolio"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}