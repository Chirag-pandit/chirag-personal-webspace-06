
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? `${theme === 'dark' ? 'dark-navbar-blur py-3 border-b border-gray-700/30' : 'navbar-blur py-3 border-b border-gray-200/30'}` 
          : 'py-6'
      } ${theme === 'dark' ? 'text-white' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <motion.div
            className="text-xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-bold">Chirag</span> Pandit
          </motion.div>
        </div>

        <motion.nav
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
        >
          <NavLink href="#home" theme={theme}>Home</NavLink>
          <NavLink href="#about" theme={theme}>About</NavLink>
          <NavLink href="#skills" theme={theme}>Skills</NavLink>
          <NavLink href="#education" theme={theme}>Education</NavLink>
          <NavLink href="#certifications" theme={theme}>Certifications</NavLink>
          <NavLink href="#contact" theme={theme}>Contact</NavLink>
          
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'dark' ? 'bg-blue-900/40 text-blue-300' : 'bg-gray-100 text-gray-800'} transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </motion.nav>

        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'dark' ? 'bg-blue-900/40 text-blue-300' : 'bg-gray-100 text-gray-800'} transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          
          <button className="focus:outline-none" aria-label="Toggle Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

const NavLink = ({ href, children, theme }: { href: string; children: React.ReactNode; theme: string }) => {
  return (
    <motion.a
      href={href}
      className={`link-underline text-sm font-medium ${theme === 'dark' ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-black'}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

export default Header;
