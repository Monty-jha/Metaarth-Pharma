import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Microscope, Brain, Dna, Syringe, FlaskRound as Flask, Search, Award, Users } from 'lucide-react';

function Research() {
  // Image carousel for the hero section
  const heroImages = [
    "https://t3.ftcdn.net/jpg/04/23/78/68/360_F_423786860_FOocezRWYw2oNET6Ky3xq2TZ0p3nS0JY.jpg", // Medical research lab
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80", // Scientist with microscope
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80", // DNA research
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80"  // Healthcare technology
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Animated Images */}
      <section className="relative py-32 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImageIndex ? 0.2 : 0,
                scale: index === currentImageIndex ? 1 : 1.1
              }}
              transition={{ 
                opacity: { duration: 1.5 },
                scale: { duration: 8 }
              }}
            >
              <img
                src={image}
                alt={`Healthcare Research ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          
          {/* Animated overlay elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute -left-20 top-1/4"
              animate={{ 
                x: [0, 50, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Dna className="text-white opacity-10 w-40 h-40" />
            </motion.div>
            
            <motion.div 
              className="absolute right-20 bottom-1/3"
              animate={{ 
                y: [0, 30, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Microscope className="text-white opacity-10 w-32 h-32" />
            </motion.div>
          </div>
        </div>
        
        {/* Hero content with enhanced animation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              Advancing Healthcare Through Research
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Pioneering breakthrough discoveries and innovative pharmaceutical solutions to improve global health outcomes.
            </motion.p>
            
            {/* Animated button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-8"
            >
             
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated dots/particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 6 + 2, 
                height: Math.random() * 6 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Research Projects' },
              { number: '50+', label: 'Global Patents' },
              { number: '200+', label: 'Scientific Publications' },
              { number: '25+', label: 'Clinical Trials' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Research Areas</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Our cutting-edge research focuses on key therapeutic areas where we can make the most significant impact on patient lives.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: 'Neuroscience',
                description: 'Developing innovative treatments for neurological disorders and mental health conditions.',
                image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80'
              },
              {
                icon: Dna,
                title: 'Genomics',
                description: 'Advancing personalized medicine through genetic research and targeted therapies.',
                image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80'
              },
              {
                icon: Microscope,
                title: 'Cell Therapy',
                description: 'Pioneering cellular-based treatments for chronic diseases and regenerative medicine.',
                image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80'
              },
              {
                icon: Syringe,
                title: 'Immunology',
                description: 'Creating next-generation immunotherapies for autoimmune conditions and cancer.',
                image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80'
              },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img src={area.image} alt={area.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <area.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center dark:text-white">{area.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Our Research Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            We follow a rigorous, systematic approach to drug discovery and development, ensuring the highest standards of safety and efficacy.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                phase: 'Discovery',
                description: 'Identifying and validating new therapeutic targets through comprehensive research and screening.',
              },
              {
                icon: Flask,
                phase: 'Development',
                description: 'Optimizing lead compounds and conducting extensive preclinical studies.',
              },
              {
                icon: Users,
                phase: 'Clinical Trials',
                description: 'Conducting rigorous human trials to validate safety and effectiveness.',
              },
              {
                icon: Award,
                phase: 'Approval',
                description: 'Securing regulatory approval and bringing treatments to patients.',
              },
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <step.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-blue-600 dark:text-blue-400 text-xl font-bold mb-4 text-center">Phase {index + 1}: {step.phase}</div>
                <p className="text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Latest Publications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Our research findings are regularly published in leading scientific journals, contributing to the global scientific community.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Novel Therapeutic Approaches in Neurodegenerative Diseases',
                journal: 'Nature Neuroscience',
                date: 'March 2024',
                image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80'
              },
              {
                title: 'Advances in CRISPR-Based Gene Therapy',
                journal: 'Cell',
                date: 'February 2024',
                image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80'
              },
              {
                title: 'Immunotherapy Breakthroughs in Cancer Treatment',
                journal: 'Science',
                date: 'January 2024',
                image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80'
              },
              {
                title: 'Artificial Intelligence in Drug Discovery',
                journal: 'Nature Medicine',
                date: 'December 2023',
                image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80'
              },
            ].map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img src={publication.image} alt={publication.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{publication.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{publication.journal}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{publication.date}</p>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center">
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Research;