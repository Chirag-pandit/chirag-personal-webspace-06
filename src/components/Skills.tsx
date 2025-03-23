
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeContext";

interface SkillProps {
  name: string;
  icon: string;
  color: string;
  delay: number;
}

const skills: SkillProps[] = [
  {
    name: 'HTML',
    icon: 'ri-html5-fill',
    color: 'text-orange-500',
    delay: 0.1,
  },
  {
    name: 'CSS',
    icon: 'ri-css3-fill',
    color: 'text-blue-500',
    delay: 0.2,
  },
  {
    name: 'JavaScript',
    icon: 'ri-javascript-fill',
    color: 'text-yellow-500',
    delay: 0.3,
  },
  {
    name: 'React.js',
    icon: 'ri-reactjs-fill',
    color: 'text-cyan-500',
    delay: 0.4,
  },
  {
    name: 'Power BI',
    icon: 'ri-bar-chart-box-fill',
    color: 'text-indigo-600',
    delay: 0.5,
  },
  {
    name: 'GSAP',
    icon: 'ri-animation-fill',
    color: 'text-green-500',
    delay: 0.6,
  },
  {
    name: 'Responsive Design',
    icon: 'ri-layout-responsive-fill',
    color: 'text-pink-500',
    delay: 0.7,
  },
  {
    name: 'Problem Solving',
    icon: 'ri-puzzle-fill',
    color: 'text-purple-500',
    delay: 0.8,
  },
  {
    name: 'TypeScript',
    icon: 'ri-file-code-line',
    color: 'text-blue-600',
    delay: 0.9,
  },
  {
    name: 'Tailwind CSS',
    icon: 'ri-palette-line',
    color: 'text-teal-500',
    delay: 1.0,
  },
  {
    name: 'Git',
    icon: 'ri-git-branch-line',
    color: 'text-orange-600',
    delay: 1.1,
  },
  {
    name: 'UI/UX Design',
    icon: 'ri-pen-nib-line',
    color: 'text-rose-500',
    delay: 1.2,
  },
];

const Skills = () => {
  const ref = useRef(null);
  const graphRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && isInView) {
      const gsap = window.gsap;
      
      // Animate skill cards with staggered effect
      gsap.fromTo(
        '.skill-card',
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1, 
          duration: 0.6,
          ease: 'power2.out'
        }
      );
      
      // Animate skill bars
      if (graphRef.current) {
        gsap.fromTo(
          '.skill-bar-fill',
          { width: 0 },
          { 
            width: 'var(--skill-level)', 
            duration: 1.2, 
            stagger: 0.1,
            ease: 'power2.inOut'
          }
        );
      }
    }
  }, [isInView]);

  return (
    <section id="skills" className={`py-24 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-b from-white to-gray-50'}`} ref={ref}>
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
            My Skills
          </motion.h2>
          <motion.p 
            className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            These are the technologies and skills I've worked with and continue to develop
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} isInView={isInView} />
          ))}
        </div>

        <motion.div 
          className={`mt-20 ${theme === 'dark' ? 'dark-glass-card' : 'glass-card'} rounded-xl p-8`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          ref={graphRef}
        >
          <h3 className={`text-2xl font-semibold mb-6 text-center ${theme === 'dark' ? 'text-white' : ''}`}>Interactive Skill Graph</h3>
          <SkillGraph isInView={isInView} />
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, isInView }: { skill: SkillProps; isInView: boolean }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      className={`skill-card ${theme === 'dark' ? 'dark-skill-card' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: skill.delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`text-4xl ${skill.color} mb-4`}>
          <i className={skill.icon}></i>
        </div>
        <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : ''}`}>{skill.name}</h3>
      </div>
    </motion.div>
  );
};

const SkillGraph = ({ isInView }: { isInView: boolean }) => {
  const { theme } = useTheme();
  
  const skills = [
    { name: 'HTML', level: 92 },
    { name: 'CSS', level: 88 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Power BI', level: 75 },
    { name: 'GSAP', level: 70 },
    { name: 'TypeScript', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git', level: 78 },
    { name: 'UI/UX Design', level: 72 },
  ];

  return (
    <div className="space-y-5">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between">
            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : ''}`}>{skill.name}</span>
            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : ''}`}>{skill.level}%</span>
          </div>
          <div className={`w-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
            <motion.div
              className={`h-2.5 rounded-full skill-bar-fill ${theme === 'dark' ? 'bg-gradient-to-r from-indigo-500 to-purple-600' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}
              style={{ 
                '--skill-level': `${skill.level}%`,
                width: isInView ? `${skill.level}%` : '0%'
              } as React.CSSProperties}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
            ></motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
