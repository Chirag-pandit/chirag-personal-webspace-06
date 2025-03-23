import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Github, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { theme } = useTheme();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className={`py-24 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-800 to-gray-900 text-white' : 'bg-gradient-to-b from-gray-50 to-white'}`} ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className={`section-title ${theme === 'dark' ? 'text-gradient-dark' : 'text-gradient'}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className={`${theme === 'dark' ? 'dark-glass-card' : 'glass-card'} rounded-xl p-8 h-full`}>
              <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : ''}`}>Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'} rounded-lg p-3 mr-4`}>
                    <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`text-lg font-medium mb-1 ${theme === 'dark' ? 'text-gray-200' : ''}`}>Email</h4>
                    <a href="mailto:chiragpandit884@gmail.com" className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>chiragpandit884@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'} rounded-lg p-3 mr-4`}>
                    <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`text-lg font-medium mb-1 ${theme === 'dark' ? 'text-gray-200' : ''}`}>Phone</h4>
                    <a href="tel:+919818879172" className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>+91 98188 79172</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'} rounded-lg p-3 mr-4`}>
                    <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`text-lg font-medium mb-1 ${theme === 'dark' ? 'text-gray-200' : ''}`}>Location</h4>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>New Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className={`text-lg font-medium mb-4 ${theme === 'dark' ? 'text-gray-200' : ''}`}>Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/chiragpandit/" target="_blank" rel="noopener" className={`${theme === 'dark' ? 'bg-blue-900 text-blue-400 hover:bg-blue-800' : 'bg-blue-100 hover:bg-blue-200 text-blue-600'} p-3 rounded-full transition-colors`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/Chirag-pandit" target="_blank" rel="noopener" className={`${theme === 'dark' ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} p-3 rounded-full transition-colors`}>
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/chiragpandittt?igsh=aXkxcmJyOHdtM2Jl" target="_blank" rel="noopener" className={`${theme === 'dark' ? 'bg-pink-900 text-pink-400 hover:bg-pink-800' : 'bg-pink-100 hover:bg-pink-200 text-pink-600'} p-3 rounded-full transition-colors`}>
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/Chirag_2325?t=aTys1kEE_k7PolOtJLIGTQ&s=09" target="_blank" rel="noopener" className={`${theme === 'dark' ? 'bg-blue-900 text-blue-400 hover:bg-blue-800' : 'bg-blue-100 hover:bg-blue-200 text-blue-600'} p-3 rounded-full transition-colors`}>
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className={`${theme === 'dark' ? 'dark-glass-card' : 'glass-card'} rounded-xl p-8`}>
              <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : ''}`}>Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-black hover:bg-gray-800'} text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-70`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {submitSuccess && (
                  <div className={`mt-4 p-3 ${theme === 'dark' ? 'bg-green-900 text-green-300' : 'bg-green-50 text-green-800'} rounded-lg`}>
                    Your message has been sent successfully. I'll get back to you soon!
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
