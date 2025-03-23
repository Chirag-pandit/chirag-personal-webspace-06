
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Load Remixicon (for icons)
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add an observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll, .image-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.head.removeChild(link);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      
      <motion.footer 
        className="py-6 bg-gray-50 border-t border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Chirag Pandit. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
