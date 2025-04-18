"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Microscope,
  Shield,
  Globe,
  Award,
  BarChartIcon as ChartBar,
  Users,
  FlaskRoundIcon as Flask,
  Pill,
  Stethoscope,
  Building2,
  CheckCircle,
  Star,
  Calendar,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react"
import { Link } from "react-router-dom"

function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1])

  // Hero carousel images
  const heroImages = [
    "https://joinhubpharma.com/wp-content/uploads/2020/10/pharma-manufacturer.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNT8WHMbN3AH8NiFdGKssVoWpX65GQS-I5lA&s",
    "https://img.freepik.com/free-photo/scientist-with-petri-dish-working-laboratory_23-2148882102.jpg",
    "https://img.freepik.com/free-photo/medical-banner-with-doctor-holding-stethoscope_23-2149611240.jpg",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeOut",
      },
    },
  }

  const iconHover = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="min-h-screen">
        {/* Hero Section with Image Carousel */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ opacity, y, scale }}
              className="absolute inset-0 z-0"
            >
              <motion.div
                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${heroImages[currentImageIndex]})`,
                  backgroundSize: "120% 120%",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-blue-900/80"></div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <motion.h1
                className="text-6xl md:text-7xl font-bold mb-6"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.2)",
                    "0 0 40px rgba(255,255,255,0.4)",
                    "0 0 20px rgba(255,255,255,0.2)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                Metaarth Monty jha
              </motion.h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Your Trusted Partner in Healthcare Solutions. Delivering Excellence Through Innovation and Quality
                Service.
              </p>
              <div className="flex gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/services"
                    className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
                  >
                    Our Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Image indicator dots */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
            {heroImages.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${currentImageIndex === index ? "bg-white" : "bg-white/50"}`}
                onClick={() => setCurrentImageIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </section>

        {/* About Us Section (New) */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-blue-900 dark:text-blue-400">Pioneering Healthcare Solutions Since 2008</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  At Metaarth Pharma, we are dedicated to improving global health through innovative
                  pharmaceutical solutions. Our commitment to excellence drives us to develop high-quality medications
                  that enhance the quality of life for patients worldwide.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  With state-of-the-art facilities and a team of expert researchers, we continue to push the boundaries of
                  pharmaceutical science to address the most pressing healthcare challenges of our time.
                </p>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {[
                    "Cutting-edge research facilities",
                    "Dedicated team of scientists and healthcare professionals",
                    "Commitment to ethical practices and sustainability",
                    "Focus on patient-centered solutions",
                  ].map((item, index) => (
                    <motion.div key={index} variants={fadeInItem} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8">
                  <Link
                    to="/about"
                    className="inline-flex items-center bg-blue-900 dark:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors"
                  >
                    Learn More About Us
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://www.felixhospital.com/sites/default/files/2022-11/best-pharmacy-services-hospital-in-noida.jpg"
                    alt="Metaarth Pharma Laboratory"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Advanced Research Facilities</h3>
                    <p className="text-white/90">Our state-of-the-art laboratories enable breakthrough discoveries</p>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-lg shadow-xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.5,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.2 },
                  }}
                >
                  <h4 className="text-xl font-bold mb-1">15+ Years</h4>
                  <p className="text-sm">of pharmaceutical excellence</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-900 dark:bg-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "15+", text: "Years Experience" },
                { number: "1000+", text: "Products Delivered" },
                { number: "50+", text: "Global Partners" },
                { number: "99%", text: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.h3
                    className="text-4xl font-bold mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-blue-200">{stat.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-blue-900 dark:text-blue-400">Our Comprehensive Services</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Delivering end-to-end pharmaceutical solutions with unmatched expertise and dedication
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Flask,
                  title: "Research & Development",
                  desc: "Cutting-edge pharmaceutical research and development services",
                  gif: "https://static.wixstatic.com/media/f753bb_41b861f247564862aab3da07e7d1911e~mv2.gif",
                },
                {
                  icon: Pill,
                  title: "Quality Testing",
                  desc: "Comprehensive quality control and assurance testing",
                  gif: "https://media.istockphoto.com/id/1444182483/vector/pharmaceutical-industry.jpg?s=612x612&w=0&k=20&c=s8zQe-Qp2k92SCJ1tIUBF2xqeCaA-po78k6y2w-_lS4=",
                },
                {
                  icon: ChartBar,
                  title: "Market Analysis",
                  desc: "In-depth market research and competitive analysis",
                  gif: "https://www.mc-rix.com/assets/it/social/seo.gif",
                },
                {
                  icon: Shield,
                  title: "Regulatory Compliance",
                  desc: "Expert guidance on regulatory requirements and compliance",
                  gif: "https://i.makeagif.com/media/10-17-2018/oW9YuI.gif",
                },
                {
                  icon: Users,
                  title: "Healthcare Consulting",
                  desc: "Strategic consulting for healthcare organizations",
                  gif: "https://cdn.dribbble.com/userupload/22439611/file/original-f83b70ad377e49bc189e2b2cb231518d.gif",
                },
                {
                  icon: Globe,
                  title: "Global Distribution",
                  desc: "Worldwide distribution network and logistics support",
                  gif: "https://img.caixin.com/2023-08-14/169195511512063.gif",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={cardHover}
                  className="relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg group h-[320px]"
                >
                  {/* Background GIF */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.gif})` }}
                  ></div>
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-blue-900/60 dark:bg-blue-900/70"></div>

                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col items-center justify-center h-full text-center text-white">
                    <motion.div className="mb-4" variants={iconHover}>
                      <service.icon className="h-12 w-12 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 dark:text-white">Why Choose Metaarth Pharma?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We combine expertise, innovation, and dedication to deliver exceptional pharmaceutical services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Award, title: "Quality Excellence", desc: "ISO certified quality management systems" },
                { icon: Microscope, title: "Advanced Research", desc: "State-of-the-art research facilities" },
                { icon: Building2, title: "Global Presence", desc: "Operations across multiple countries" },
                { icon: Stethoscope, title: "Healthcare Focus", desc: "Dedicated to improving patient care" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={cardHover}
                  className="text-center group"
                >
                  <motion.div className="flex justify-center mb-4" variants={iconHover}>
                    <item.icon className="h-16 w-16 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section (New) */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-blue-900 dark:text-blue-400">What Our Partners Say</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Trusted by healthcare providers and pharmaceutical companies worldwide
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Metaarth Pharma has been an invaluable partner in our healthcare journey. Their pharmaceutical expertise and commitment to quality have significantly improved our patient outcomes.",
                  name: "Dr. Sarah Johnson",
                  title: "Medical Director, Global Health Partners",
                  avatar: "https://randomuser.me/api/portraits/women/45.jpg",
                },
                {
                  quote:
                    "The research capabilities and innovative approach of Metaarth Pharma have helped us develop breakthrough treatments. Their team's dedication to excellence is unmatched in the industry.",
                  name: "Prof. Michael Chen",
                  title: "Head of Research, MediScience Institute",
                  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  quote:
                    "Working with Metaarth Pharma has transformed our pharmaceutical supply chain. Their global distribution network and quality assurance have been key to our international expansion.",
                  name: "Emma Rodriguez",
                  title: "CEO, HealthCare Solutions",
                  avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg relative"
                >
                  <div className="absolute -top-4 -left-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>

                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-400">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section (New) */}
        <section className="py-20 bg-gray-50 dark:bg-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-bold mb-4 md:mb-0 text-blue-900 dark:text-blue-400">Latest News & Insights</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/news" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300">
                  View All News
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Metaarth Pharma Launches Revolutionary Cancer Treatment",
                  date: "June 15, 2023",
                  excerpt:
                    "Our research team has developed a groundbreaking treatment that shows promising results in clinical trials.",
                  image:
                    "https://img.freepik.com/free-photo/scientist-working-laboratory-with-test-tubes_23-2149135158.jpg",
                },
                {
                  title: "Expanding Our Global Reach: New Facility in Singapore",
                  date: "May 28, 2023",
                  excerpt:
                    "Metaarth Pharma continues its global expansion with a state-of-the-art research and production facility in Singapore.",
                  image: "https://img.freepik.com/free-photo/modern-factory-building-exterior-dusk_1127-3169.jpg",
                },
                {
                  title: "Metaarth Pharma Partners with Leading Research University",
                  date: "April 10, 2023",
                  excerpt:
                    "A new partnership aims to accelerate pharmaceutical innovations and develop next-generation healthcare solutions.",
                  image:
                    "https://img.freepik.com/free-photo/group-diverse-scientists-working-together-laboratory_23-2149043711.jpg",
                },
              ].map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {news.date}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">{news.excerpt}</p>

                    <Link to="/news" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section (New) */}
        <section className="py-20 bg-blue-900 dark:bg-blue-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Healthcare Together?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Join forces with Metaarth Pharma and be part of the future of healthcare innovation.
              </p>


            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors w-full sm:w-auto"
                >
                  Contact Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/partnerships"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  Explore Partnerships
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Information Section (New) */}
      <section className="py-16   bg-gray-30 dark:bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Headquarters",
                info: "123 MetaHealth Plaza, San Francisco, CA 94103, USA",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Phone,
                title: "Phone",
                info: "+1 (555) 123-4567",
                color: "bg-green-50 text-green-600",
              },
              {
                icon: Mail,
                title: "Email",
                info: "info@metahealth.com",
                color: "bg-yellow-50 text-yellow-600",
              },
              {
                icon: MapPin,
                title: "Global Presence",
                info: "Offices in 15+ countries worldwide",
                color: "bg-purple-50 text-purple-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white text-black"
              >
                <div className={`p-4 rounded-full ${item.color} mb-4`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className=" text-gray-600">{item.info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Home
