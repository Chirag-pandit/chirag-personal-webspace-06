
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CertificationProps {
  name: string;
  issuer: string;
  date: string;
  logo: string;
  description: string;
  validUntil: string;
  delay: number;
}

const certifications: CertificationProps[] = [
  {
    name: 'Data Structures and Algorithms',
    issuer: 'Simplilearn',
    date: 'Issued 2024',
    logo: 'https://media.licdn.com/dms/image/v2/C510BAQEvNU0EYy6wUw/company-logo_400_400/company-logo_400_400/0/1631319527790?e=1748476800&v=beta&t=Wcgvi5aRngtIczg1C23-Nc63yCaSc0ce04zrCXJocTY',
    description: 'Comprehensive certification covering fundamental data structures and algorithm design principles.',
    validUntil: 'Valid until 2034',
    delay: 0.2,
  },
  {
    name: 'JavaScript Certification Test',
    issuer: 'Complete Coding by Prashant Sir',
    date: 'Issued 2024',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGg45ydFaEvpw/company-logo_400_400/company-logo_400_400/0/1697701381332?e=1748476800&v=beta&t=AJWGD7e9lBvdzvW5vNsdGZabH5vcrqcUBcp7g43M7lE',
    description: 'Advanced JavaScript certification covering modern practices, frameworks, and optimization techniques.',
    validUntil: 'Valid until 2030',
    delay: 0.4,
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certifications" className="py-24 bg-white" ref={ref}>
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
            Certifications
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Professional certifications and credentials
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} isInView={isInView} />
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-600">
            Always expanding my knowledge through continuous learning and new certifications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const CertificationCard = ({ 
  certification, 
  isInView 
}: { 
  certification: CertificationProps;
  isInView: boolean;
}) => {
  return (
    <motion.div
      className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: certification.delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">{certification.name}</h3>
            <p className="text-gray-600">{certification.issuer}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-500">{certification.date}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span className="text-sm text-green-600 font-medium">{certification.validUntil}</span>
            </div>
          </div>
          <img 
            src={certification.logo} 
            alt={certification.issuer} 
            className="w-12 h-12 object-contain rounded-md"
          />
        </div>
        <p className="text-gray-700">{certification.description}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-sm text-gray-600">Verified</span>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">View Certificate</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
