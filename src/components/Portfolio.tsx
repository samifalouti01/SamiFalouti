import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('graphic');
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  
  const tabs = [
    { id: 'graphic', label: 'Graphic Design' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'web', label: 'Web Development' }
  ];

  // Replace these with your actual project images
  const galleryItems = {
    'Landing Pages': [
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/avec-commentaire.png?w=117',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/copy-of-d8b5d981d8add8a7d8aa-d987d8a8d988d8b7-d8acd8a7d987d8b2d8a9-d984d984d8aad8b9d8afd98ad984-d8b9d984d989-d983d8a7d986d981d8a7.png?w=117',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/copy-of-d8b5d981d8add8a7d8aa-d987d8a8d988d8b7-d8acd8a7d987d8b2d8a9-d984d984d8aad8b9d8afd98ad984-d8b9d984d989-d983d8a7d986d981d8a7-1.png?w=117',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/itv6zkmbmrnftmur1w89tovndgw01z1fqnr9a2wl.webp?w=193',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/jj6usz1twwlxkawxlqfbkpx1clrddok1niizrvgn_md.png?w=408',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/2000-dz.png',
    ],
    Logos: [
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/frame-1171275502.png',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/frame-427320128.png',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-427320463.png?w=1024', // mna w roh
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-12-2.png?w=1022',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-2.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/untitled-design-5.png?w=300',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-15.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/ic-1.png?w=768',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/untitled-5.png?w=768',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-427320467.png',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-427320273.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-14670.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/untitled-design-1.png?w=300',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/avodz-3.png?w=768',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-427320461.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-427320462.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-427320464.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/capture-decran-2023-08-21-032434.jpg',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/capture-decran-2023-08-21-033507.jpg',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/tahdhib-logoofficial.png',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/untitled-1-1.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/logo.png',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/screenshot-2023-09-08-005750.jpg',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/screenshot-2025-04-14-232745.jpg?w=272',
    ],
    Banners: [
      'https://images.unsplash.com/photo-1557683304-673a23048d34?w=800',
      'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800',
    ],
    Packaging: [
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/02/deodorant-spray-mockup.jpg?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/02/deodorant-spray-mockup-back.jpg?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/02/free-deo-custom-label-mockup.jpg?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/02/free-deo-custom-label-mockup-back.jpg?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/02/deodorant-bottle-design-mockup.jpg?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/02/deodorant-bottle-design-mockup-back.jpg?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/02/1-1.png?w=512',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/02/2.png?w=512',
    ],
    'Social Media Posts': [
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/blue-downhill-extreme-sport-instagram-post.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/belhia-diaa-el-quods.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/d8a8d8b1d8ac-d8aed984d98ad981d8a9-1.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/dfzdsdef.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/green-and-purple-professional-service-pricing-flyer.png?w=768',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/2000-dz.png',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/untitled-design.gif?w=1024',
    ],
    Flyers: [
      'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800',
      'https://images.unsplash.com/photo-1557683316-973673baf926?w=800',
    ],
    'Brand Identity': [
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/desktop-20.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-14607.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-14606.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/desktop-19.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-14608.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/frame-14605.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/desktop-21.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2025/01/desktop-22.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/baps-brand-identity-1.png?w=1024&h=768', // second brand
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/baps-logo.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/baps-brand-identity-10.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/baps-brand-identity-9.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/baps-brand-identity-6.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/baps-brand-identity-6.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/baps-brand-identity-4.png?w=1024',
    ],
    'Game Factory': [
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/15766.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/1576c.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/15761.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/p6ysg413.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/p6ysg41h.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/p6ysg41.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/p2pd3b1-1.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2023/09/p2pd3b15.png?w=1024',
    ],
    'The Vision': [
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/sign-up-screen.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/sign-in-screen.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/profile-screen.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/billing-screen.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/tables-screen.png?w=1024',
      'https://samifalouti.wordpress.com/wp-content/uploads/2024/01/dashboard-screen.png?w=1024',
    ],
    'Safe Bike': [
      'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800',
      'https://images.unsplash.com/photo-1557683316-973673baf926?w=800',
    ],
    Noubbi: [
      'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800',
      'https://images.unsplash.com/photo-1557683316-973673baf926?w=800',
    ],
    Deljex: [
      'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800', 
      'https://images.unsplash.com/photo-1557683316-973673baf926?w=800', 
    ]
  };

  const web = [
    {
      title: "Mensrich",
      url: "https://mensrich.com/",
    },
    {
      title: "WhenRak",
      url: "https://whenrak.dz/",
    },
    {
      title: "Simple E-commerce Website",
      url: "https://webcom-tau.vercel.app/",
    },
    {
      title: "E-commerce landing page",
      url: "https://webcom-tau.vercel.app/product/3541c6aa-6766-4923-8092-d83de93b81e4",
    },
    {
      title: "E-commerce landing page 2",
      url: "https://ecommerce-pi-six-51.vercel.app/product/22",
    },
    {
      title: "Dz Crypto Earn",
      url: "https://dzcryptoearn.netlify.app/",
    },
    {
      title: "English Sensei (Educational Web App)",
      url: "https://englishsensei.netlify.app",
    },
    {
      title: "DzEasy",
      url: "http://dzeasy.netlify.app/",
    },
    {
      title: "Foodie",
      url: "https://foodiedz.vercel.app/",
    },
    {
      title: "Free Creative Dz",
      url: "https://freecreativeads.netlify.app/",
    },
    {
      title: "Probabilistic time series modeling in Python",
      url: "https://github.com/samifalouti01/TimeSeries.git",
    },
    {
      title: "DigDz",
      url: "https://digdz.netlify.app/",
    },
    {
      title: "Sada9at",
      url: "https://sada9at.vercel.app/",
    }
  ];
  

  const projects = {
    graphic: [
      { type: 'Landing Pages', count: 6 },
      { type: 'Logos', count: 23 },
      { type: 'Social Media Posts', count: 6 },
      { type: 'Brand Identity', count: 15 },
      { type: 'Packaging', count: 8 }
    ],
    uiux: [
      { type: 'Game Factory', count: 8, figmaUrl: 'https://www.figma.com/file/Tyd9Wkh3pmAgoswFCKZUOa/Game-Factory?type=design&node-id=0%3A1&mode=design&t=kwKrYN2B63M89u2f-1'},
      { type: 'The Vision', count: 6, figmaUrl: 'https://figma.com/project/the-vision'},
      { type: 'Safe Bike', count: 5, figmaUrl: 'https://www.figma.com/file/Z6dOn3gl8XnSdjksBA8AIn/Safe-Bike?type=design&node-id=0%3A1&mode=design&t=XQ4ScQS68C38pCt7-1'},
      { type: 'Noubbi', count: 5, figmaUrl: 'https://www.figma.com/file/1mX7QFTasn2ruz6SywXEWH/Noubbi?type=design&mode=design&t=XQ4ScQS68C38pCt7-1'},
      { type: 'Deljex', count: 5, figmaUrl: 'https://www.figma.com/file/q9tOVoCTXik8kkdvc0MrUd/DeljeX?type=design&node-id=0%3A1&mode=design&t=RVhCULb3JBzVLY8s-1'}
    ],
  };

  const openGallery = (type: string) => {
    setSelectedGallery(type);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setIsGalleryOpen(false);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activeTab === 'graphic' && projects.graphic.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openGallery(item.type)}
            >
              <h3 className="text-xl font-semibold mb-2">{item.type}</h3>
              <p className="text-gray-600">{item.count} items</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800">
                View Gallery
              </button>
            </div>
          ))}

          {activeTab === 'uiux' && projects.uiux.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg"
              onClick={() => openGallery(project.type)}
            >
              <h3 className="text-xl font-semibold mb-2">{project.type}</h3>
              <p className="text-gray-600">{project.count} items</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800">
                View Gallery
              </button>
              <br />
              <button
                className="mt-4 text-blue-600 hover:text-blue-800"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the gallery function
                  window.open(project.figmaUrl, '_blank', 'noopener,noreferrer');
                }}
              >
                Visit Figma
              </button>
            </div>
          ))}

          {activeTab === 'web' && web.map((project, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && selectedGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-semibold">{selectedGallery}</h3>
              <button
                onClick={closeGallery}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
              {(galleryItems[selectedGallery as keyof typeof galleryItems] || []).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedGallery} ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}