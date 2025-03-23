
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface EducationItemProps {
  institution: string;
  degree: string;
  years: string;
  logo: string;
  description: string;
  delay: number;
}

const educationItems: EducationItemProps[] = [
  {
    institution: 'CCS University',
    degree: 'B.Sc. in Computer Science',
    years: '2023-2027',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQE8Muk3BIhxVw/company-logo_400_400/company-logo_400_400/0/1631342697054?e=1748476800&v=beta&t=ZrFu3rQaW-uqzgbHAvAbjAfh0r03eRlRgaRV6nNGYlM',
    description: 'Pursuing a comprehensive computer science education with a focus on software development and programming fundamentals.',
    delay: 0.2,
  },
  {
    institution: 'Gagan Public School',
    degree: 'Science (Physics, Chemistry, Biology)',
    years: '2019-2023',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQEyPqLuvZcgmw/company-logo_400_400/company-logo_400_400/0/1630613464939/ghpsalumnus_logo?e=1748476800&v=beta&t=fMiy7vJas4DJwWvpySRLQV9vDbqERmD_gkgSMD6YQ7k',
    description: 'Completed science-focused secondary education, building a strong foundation in analytical thinking and problem-solving.',
    delay: 0.4,
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="education" className="py-24 bg-gray-50" ref={ref}>
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
            Education
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            My academic journey and qualifications
          </motion.p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Education items */}
          <div className="space-y-16">
            {educationItems.map((item, index) => (
              <EducationItem key={index} item={item} isInView={isInView} isEven={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationItem = ({ 
  item, 
  isInView, 
  isEven 
}: { 
  item: EducationItemProps;
  isInView: boolean;
  isEven: boolean;
}) => {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
        <motion.div 
          className="w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: item.delay, duration: 0.4 }}
        ></motion.div>
      </div>

      {/* Content */}
      <motion.div 
        className={`flex items-center ${isEven ? 'flex-row-reverse' : 'flex-row'}`}
        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
        transition={{ delay: item.delay, duration: 0.7 }}
      >
        <div className={`w-1/2 ${isEven ? 'pl-8' : 'pr-8'} ${isEven ? 'text-right' : 'text-left'}`}>
          <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4 gap-3 justify-between">
              <div>
                <h3 className="text-xl font-semibold">{item.institution}</h3>
                <p className="text-gray-600">{item.degree}</p>
                <p className="text-sm text-gray-500">{item.years}</p>
              </div>
              <img 
                src={item.logo} 
                alt={item.institution} 
                className="w-12 h-12 object-contain rounded-md"
              />
            </div>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
        <div className="w-1/2"></div>
      </motion.div>
    </div>
  );
};

export default Education;
