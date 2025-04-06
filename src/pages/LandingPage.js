import React, { useState, useEffect } from 'react';
import { MessageCircle, ChevronDown, ArrowRight, Star } from 'lucide-react';
import Chatbot from '../components/ChatBot';
import FeaturesPage from './FeaturesPage';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [showChat, setShowChat] = useState(false);
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent',
      feedback: 'Nirmaan helped my daughter stay on track with school! The personalized learning features have made a huge difference in her academic performance.',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 5,
      location: 'Mumbai, India'
    },
    {
      name: 'Amit Verma',
      role: 'Guardian',
      feedback: 'The mentorship network changed my nephew\'s life. He found the perfect mentor who guided him through his career choices and personal development.',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      location: 'Delhi, India'
    },
    {
      name: 'Sunita Devi',
      role: 'School Principal',
      feedback: 'AI attendance monitoring has been a game-changer for our school. We\'ve seen a significant reduction in dropouts and improved student engagement.',
      photo: 'https://randomuser.me/api/portraits/women/75.jpg',
      rating: 4,
      location: 'Bangalore, India'
    }
  ];

  const handleDiscoverMore = () => {
    setShowMoreFeatures(true);
    setTimeout(() => {
      const section = document.getElementById('extra-features');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="font-sans">
      {/* Enhanced Navbar */}
      <nav className={`fixed w-full transition-all duration-300 z-50 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-purple-700 font-bold text-2xl flex items-center">
            <span className="bg-purple-700 text-white px-2 py-1 rounded-lg mr-2">N</span>
            Nirmaan
          </div>
          <div className="space-x-8 text-gray-700">
            <a href="#features" className="hover:text-purple-700 transition-colors duration-200">Features</a>
            <a href="#extra-features" className="hover:text-purple-700 transition-colors duration-200">More</a>
            <a href="#testimonials" className="hover:text-purple-700 transition-colors duration-200">Testimonials</a>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 to-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  New: AI-Powered Learning Assistant
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                Transforming Education with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  AI-Powered Learning
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Nirmaan is revolutionizing education through personalized learning, AI-driven insights, and a supportive community network.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Started
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button 
                  onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                  className="group px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Features
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-8 flex items-center justify-center lg:justify-start space-x-4"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 20}.jpg`}
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-white hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">500+</span> educators trust Nirmaan
                </div>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-12 grid grid-cols-3 gap-4"
              >
                <div className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Schools</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-purple-600">10K+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Students learning"
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Personalized Learning</div>
                        <div className="text-sm text-gray-600">AI-powered recommendations</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Mentorship Network</div>
                        <div className="text-sm text-gray-600">Connect with experts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-purple-100 rounded-full animate-float" />
              <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-pink-100 rounded-full animate-float animation-delay-2000" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-600 mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-purple-600 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-purple-600 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-20 px-4 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-16 text-purple-700">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-purple-600">Personalized Learning</h3>
            <p className="text-gray-700">
              Tailored education content and support for school students, parents, and teachers.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-purple-600">AI Attendance Monitoring</h3>
            <p className="text-gray-700">
              Smart attendance and alert systems for dropout detection and tracking.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-purple-600">Mentorship Network</h3>
            <p className="text-gray-700">
              Connect with mentors to support career guidance and development.
            </p>
          </div>
        </div>

        <button
          onClick={handleDiscoverMore}
          className="mt-12 bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Discover More
        </button>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-purple-700 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our community members about how Nirmaan has transformed their educational journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-200"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                        {testimonial.role}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <svg
                    className="absolute -top-4 -left-4 w-8 h-8 text-purple-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="text-gray-600 leading-relaxed italic pl-4">
                    "{testimonial.feedback}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-4 gap-8 text-center"
          >
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <h3 className="text-4xl font-bold text-purple-600 mb-2">500+</h3>
              <p className="text-gray-600">Schools</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <h3 className="text-4xl font-bold text-purple-600 mb-2">10K+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <h3 className="text-4xl font-bold text-purple-600 mb-2">95%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <h3 className="text-4xl font-bold text-purple-600 mb-2">50+</h3>
              <p className="text-gray-600">Cities</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FeaturesPage Component */}
      {showMoreFeatures && (
        <section id="extra-features" className="py-20 px-4 bg-gray-50">
          <FeaturesPage />
        </section>
      )}

      {/* Enhanced Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className={`fixed bottom-6 right-6 bg-purple-700 text-white p-4 rounded-full shadow-lg hover:bg-purple-800 transition-all duration-300 transform hover:scale-110 z-50 ${
          showChat ? 'rotate-45' : ''
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Enhanced Chatbot Popup */}
      {showChat && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-xl shadow-2xl z-50 overflow-hidden transform transition-all duration-300 animate-fade-in">
          <Chatbot />
        </div>
      )}

      {/* Enhanced Footer */}
      <footer className="bg-purple-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Nirmaan</h3>
              <p className="text-gray-300">Empowering education through technology and mentorship.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#testimonials" className="block text-gray-300 hover:text-white transition-colors">Testimonials</a>
                <a href="#extra-features" className="block text-gray-300 hover:text-white transition-colors">Discover More</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-300">Email: info@nirmaan.com</p>
              <p className="text-gray-300">Phone: +91 1234567890</p>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Nirmaan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
