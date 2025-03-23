
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50" ref={ref}>
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
            My Skills
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            These are the technologies and skills I've worked with and continue to develop
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} isInView={isInView} />
          ))}
        </div>

        <motion.div 
          className="mt-20 glass-card rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Interactive Skill Graph</h3>
          <SkillGraph isInView={isInView} />
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, isInView }: { skill: SkillProps; isInView: boolean }) => {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: skill.delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`text-4xl ${skill.color} mb-4`}>
          <i className={skill.icon}></i>
        </div>
        <h3 className="text-lg font-medium">{skill.name}</h3>
      </div>
    </motion.div>
  );
};

const SkillGraph = ({ isInView }: { isInView: boolean }) => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React.js', level: 75 },
    { name: 'Power BI', level: 70 },
    { name: 'GSAP', level: 65 },
  ];

  return (
    <div className="space-y-5">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-sm font-medium">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div
              className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
              style={{ width: `${skill.level}%` }}
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
