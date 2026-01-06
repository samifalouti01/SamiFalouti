import React, { Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

// Lazy load components
const Services = React.lazy(() => import('./components/Services'));
const About = React.lazy(() => import('./components/About'));
const Experience = React.lazy(() => import('./components/Experience'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Video = React.lazy(() => import('./components/Video'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Video />
        </Suspense>
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Contact />
        </Suspense>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2022 Sami Falouti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;