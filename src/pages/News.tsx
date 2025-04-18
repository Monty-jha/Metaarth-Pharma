import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay updated with the latest developments, breakthroughs, and announcements from MetaHealth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  alt="Featured News"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-gray-500 mb-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>March 15, 2025</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Breakthrough Discovery in Cancer Treatment Research
                </h2>
                <p className="text-gray-600 mb-6">
                  MetaHealth researchers have made a significant breakthrough in cancer treatment, 
                  potentially revolutionizing how we approach therapy for aggressive forms of the disease.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Read More <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'New Partnership Announcement',
                date: 'March 10, 2025',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                excerpt: 'Strategic partnership formed to accelerate drug development process...',
              },
              {
                title: 'Clinical Trial Success',
                date: 'March 5, 2025',
                image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                excerpt: 'Phase III clinical trial shows promising results for new treatment...',
              },
              {
                title: 'Research Grant Awarded',
                date: 'March 1, 2025',
                image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                excerpt: 'MetaHealth receives prestigious grant for innovative research...',
              },
              {
                title: 'New Facility Opening',
                date: 'February 25, 2025',
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                excerpt: 'State-of-the-art research facility opens in Boston...',
              },
              {
                title: 'Industry Recognition',
                date: 'February 20, 2025',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                excerpt: 'MetaHealth recognized for excellence in pharmaceutical innovation...',
              },
              {
                title: 'Community Initiative',
                date: 'February 15, 2025',
                image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                excerpt: 'Launch of new program to support local healthcare initiatives...',
              },
            ].map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter for the latest updates and news.</p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;