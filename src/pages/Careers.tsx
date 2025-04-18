import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, GraduationCap, Heart } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Be part of a team dedicated to transforming healthcare through innovation and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Why Join MetaHealth?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Great Culture',
                description: 'Work with passionate professionals in a collaborative environment',
              },
              {
                icon: Briefcase,
                title: 'Growth Opportunities',
                description: 'Clear career paths and continuous learning opportunities',
              },
              {
                icon: GraduationCap,
                title: 'Learning & Development',
                description: 'Access to training programs and educational resources',
              },
              {
                icon: Heart,
                title: 'Benefits',
                description: 'Comprehensive benefits package and work-life balance',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Open Positions</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Senior Research Scientist',
                department: 'Research & Development',
                location: 'Boston, MA',
                type: 'Full-time',
              },
              {
                title: 'Clinical Trial Manager',
                department: 'Clinical Operations',
                location: 'San Francisco, CA',
                type: 'Full-time',
              },
              {
                title: 'Quality Control Specialist',
                department: 'Quality Assurance',
                location: 'Chicago, IL',
                type: 'Full-time',
              },
              {
                title: 'Regulatory Affairs Associate',
                department: 'Regulatory',
                location: 'Remote',
                type: 'Full-time',
              },
            ].map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{position.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{position.department}</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{position.location}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{position.type}</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Apply Online', description: 'Submit your application and resume' },
              { step: 2, title: 'Initial Review', description: 'Our team reviews your application' },
              { step: 3, title: 'Interviews', description: 'Meet with potential team members' },
              { step: 4, title: 'Decision', description: 'Receive our final decision' },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;