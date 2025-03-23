
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const xPercentage = x / rect.width;
      const yPercentage = y / rect.height;
      
      const xOffset = (xPercentage - 0.5) * 20;
      const yOffset = (yPercentage - 0.5) * 20;
      
      const profileImage = heroRef.current.querySelector('.profile-image') as HTMLElement;
      if (profileImage) {
        profileImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      }
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative overflow-hidden" ref={heroRef}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block mb-3 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Frontend Developer
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm <span className="text-gradient">Chirag Pandit</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A passionate frontend developer specializing in creating interactive and responsive web applications with a focus on user experience.
          </motion.p>
          
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            
            <motion.a
              href="#skills"
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Skills
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full blur-3xl opacity-20"></div>
            <div className="profile-image relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-200">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHjBMNE8lhDfg/profile-displayphoto-shrink_800_800/B56ZVSk7tFHQAc-/0/1740847169894?e=1748476800&v=beta&t=hn5ZgBaKgbwFCA8ARivwpG9RdM9jpqrigh8Y4DGtij4" 
                alt="Chirag Pandit" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
