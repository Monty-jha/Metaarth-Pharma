import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [showContactForm, setShowContactForm] = useState(false);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      // Reset form status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const scrollToContactForm = () => {
    setShowContactForm(true);
    setTimeout(() => {
      contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // FAQ content
  const faqs = [
    {
      question: "Do you offer medication consultations?",
      answer: "Yes, our licensed pharmacists provide medication consultations to discuss your prescription medications, potential interactions, and answer any questions you may have about your treatment plan."
    },
    {
      question: "How can I check the status of my prescription order?",
      answer: "You can check your prescription order status by logging into your MetaHealth account, calling our customer service line, or by providing your order number through this contact form."
    },
    {
      question: "Do you offer delivery services for prescriptions?",
      answer: "Yes, we offer secure and timely delivery services for all prescription medications. Depending on your location, we provide same-day, next-day, and standard shipping options."
    },
    {
      question: "How do I transfer my prescription to MetaHealth Pharmaceuticals?",
      answer: "Transferring your prescription is simple. You can either call our pharmacy directly, fill out the prescription transfer form on our website, or provide your current pharmacy information through this contact form."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 bg-blue-600 dark:bg-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 dark:bg-blue-800 opacity-90 z-10" />
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            We'd love to hear from you. Let us know how we can help with your pharmaceutical needs.
          </p>
        </motion.div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="currentColor" className="text-white dark:text-gray-900" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,197.3C480,203,600,181,720,160C840,139,960,117,1080,122.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-900 py-4 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm">
            <ol className="flex">
              <li><a href="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Home</a></li>
              <li className="mx-2 text-gray-500 dark:text-gray-400">/</li>
              <li className="text-gray-500 dark:text-gray-400">Contact Us</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            {/* Contact Information */}
            <motion.div
              variants={fadeIn}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">How Can We Help You?</h2>
                <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mb-6"></div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Our dedicated pharmaceutical experts are ready to answer your questions and assist with all your medication and healthcare needs.
                </p>
              </div>

              {/* Contact Info Cards */}
              <motion.div
                variants={staggerChildren}
                className="grid sm:grid-cols-2 gap-6"
              >
                <motion.div
                  variants={fadeIn}
                  className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <MapPin className="text-blue-600 dark:text-blue-400 h-8 w-8 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Our Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    7 Ground Floor,
                    Saran Chamber-II,
                    Park road, Hazrataganj, Lucknow-226001
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <Phone className="text-blue-600 dark:text-blue-400 h-8 w-8 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +919839906754<br />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Customer Support</span>
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <Mail className="text-blue-600 dark:text-blue-400 h-8 w-8 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    metaarthfinserve@gmail.com<br />
                    <span className="text-sm text-gray-500 dark:text-gray-400">For general inquiries</span>
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <Clock className="text-blue-600 dark:text-blue-400 h-8 w-8 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mon–Fri: 9AM–6PM<br />
                    Sat: 10AM–2PM<br />
                    Sun: Closed
                  </p>
                </motion.div>
              </motion.div>

              {/* Map Image */}
              <motion.div
                variants={fadeIn}
                className="relative mt-12 rounded-xl overflow-hidden shadow-lg"
              >
                {/* Map placeholder - replace with actual map component */}
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                  <p className="text-white font-semibold">MetaHealth Pharmaceuticals Headquarters</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              ref={contactFormRef}
              variants={fadeIn}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="metaarthfinserve@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+919839906754"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Medication Information">Medication Information</option>
                      <option value="Order Support">Order Support</option>
                      <option value="Healthcare Professional">Healthcare Professional</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help with your pharmaceutical needs?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition font-semibold text-white flex items-center justify-center space-x-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Form Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center text-green-700 dark:text-green-400"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Your message has been sent successfully. We'll get back to you soon!</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center text-red-700 dark:text-red-400"
                  >
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>There was an error sending your message. Please try again later.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section with Dropdowns */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our pharmaceutical products and services.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600 mb-4 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-t-xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-blue-600 dark:text-blue-400 transition-transform duration-300 ${openFaqIndex === index ? 'transform rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-600 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 dark:bg-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to prioritize your health?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust MetaHealth Pharmaceuticals with their medication needs.
          </p>
          <motion.button
            onClick={scrollToContactForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block py-3 px-8 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;