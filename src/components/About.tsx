
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="section-title text-gradient"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-full h-full absolute -left-4 -top-4 bg-blue-100 rounded-xl"></div>
              <div className="w-full h-full absolute -right-4 -bottom-4 bg-indigo-100 rounded-xl"></div>
              <div className="relative glass-card rounded-xl overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Coding session" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-700 leading-relaxed">
                I'm a Frontend Developer passionate about building engaging and scalable web solutions. My focus is on creating interactive applications that deliver exceptional user experiences while maintaining clean, efficient code.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Develop responsive web applications using modern technologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Create data visualizations using Power BI for insightful analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Design smooth animations and interactions using GSAP</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Participate in hackathons to solve challenging problems</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                I believe in continuous learning and innovation. My approach combines technical expertise with a keen eye for detail, ensuring that every project I work on is both functional and visually appealing. I'm passionate about collaboration and finding creative solutions to complex problems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
