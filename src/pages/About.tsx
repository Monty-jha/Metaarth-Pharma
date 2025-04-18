import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Globe2, FlaskRound as Flask, Shield, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Medical Research"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl"
            >
              MetaHealth is the fourth largest specialty generic pharmaceutical company in the world with global revenues of US$ 5.8 billion. Supported by 41 manufacturing facilities, we provide high-quality, affordable medicines, trusted by healthcare professionals and patients, to more than 100 countries across the globe.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-orange-500 dark:text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">1983</div>
              <div className="text-gray-600 dark:text-gray-300">Founded</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Globe2 className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">$5.8B</div>
              <div className="text-gray-600 dark:text-gray-300">Global Revenue</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <Heart className="h-8 w-8 text-orange-500 dark:text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">#1</div>
              <div className="text-gray-600 dark:text-gray-300">In Market Share</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">43000+</div>
              <div className="text-gray-600 dark:text-gray-300">Employees</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Pharmaceutical Manufacturing"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Diversified Specialty and Generics Portfolio</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We manufacture and market a large basket of pharmaceutical formulations covering a broad spectrum of chronic and acute therapies. Our portfolio includes generics, branded generics, specialty products, and complex pharmaceuticals.
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Every year, we sell over 30 billion doses covering neuro-psychiatry, cardiology, gastroenterology, anti-infectives, diabetology, oncology, ophthalmology, dermatology, urology, nephrology and respiratory among others.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-4b41b374bd90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Research Lab"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Driven by Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The first among pharmaceutical companies to realize and embrace the importance of investing in research, we invest up to 6-8% of our global revenues into Research and Development (R&D) every year.
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Our R&D team comprises over 3,000 people dedicated to developing differentiated products, including liposomal products, inhalers, lyophilized injections, and controlled release dosage forms.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Global Presence"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Global Footprint</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  From humble beginnings in 1983, we have grown to become one of the largest generic pharmaceutical companies worldwide. We are present across all major markets in Western Europe, Canada, Australia, New Zealand, Japan and China.
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  We are the largest Indian company in emerging markets with a presence in over 80 markets. Brazil, Mexico, Russia, Romania and South Africa are some of our key emerging markets.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
              Reaching People And Touching Lives Globally As A Leading Provider Of Valued Medicines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Values</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Our values represent our promise to our stakeholders.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Humility',
                icon: Heart,
                points: [
                  'Under promise and over deliver',
                  'Let your work speak for you',
                  'Always put "we" before "me"',
                  'Learn from mistakes'
                ]
              },
              {
                title: 'Integrity',
                icon: Shield,
                points: [
                  'Do the right thing with conviction and without fear',
                  'Practice honesty, impartiality and fairness',
                  'Adhere to strong ethical standards',
                  'Have courage to call out what is not right'
                ]
              },
              {
                title: 'Passion',
                icon: Flask,
                points: [
                  'Infuse energy in everything you do',
                  'Walk that extra mile',
                  'Inspire others',
                  'Do your best in every situation'
                ]
              },
              {
                title: 'Innovation',
                icon: Lightbulb,
                points: [
                  'Strive to implement new ideas',
                  'Encourage out-of-the-box thinking',
                  'Do not limit yourself',
                  'Believe in raising the bar every time'
                ]
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <value.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <ul className="text-left space-y-2">
                  {value.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-2 w-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Code of Conduct</h2>
            <p className="text-lg mb-8 max-w-4xl mx-auto">
              Our Global Code of Conduct governs every aspect of our operations. We are a team of thousands of people, working across many countries, speaking multiple languages, and all united with one vision: Reaching People & Touching Lives Globally as a Leading Provider of Valued Medicines.
            </p>
            <button className="bg-white text-blue-600 dark:bg-gray-100 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-200 transition-colors">
              DOWNLOAD OUR CODE OF CONDUCT
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
export { About };