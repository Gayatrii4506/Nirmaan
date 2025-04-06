// src/pages/FeaturesPage.js
import React, { useEffect } from 'react';
import { FaChalkboardTeacher, FaMicrophoneAlt, FaSchool, FaChartLine, FaFileAlt, FaUserFriends } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaChalkboardTeacher size={40} className="text-purple-600" />,
    title: 'Personalized Learning',
    description: 'Tailored educational content for students, teachers, and parents using AI-driven insights.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <FaChartLine size={40} className="text-purple-600" />,
    title: 'AI Attendance Monitoring',
    description: 'Smart attendance tracking with alert systems to reduce dropout rates.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <FaUserFriends size={40} className="text-purple-600" />,
    title: 'Mentorship Network',
    description: 'Connects students with mentors for career guidance and personal growth.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: <FaMicrophoneAlt size={40} className="text-purple-600" />,
    title: 'Voice-Based Navigation',
    description: 'Supports regional language access and voice commands for better usability.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <FaFileAlt size={40} className="text-purple-600" />,
    title: 'Digital School Records',
    description: 'Secure and accessible platform for storing marksheets, notices, and school records.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: <FaSchool size={40} className="text-purple-600" />,
    title: 'Community Feedback Loop',
    description: 'Allows communities to raise issues and track resolution from school authorities.',
    color: 'from-red-500 to-red-600'
  }
];

const FeaturesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-purple-700 mb-4">Explore Nirmaan Features</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how Nirmaan is transforming education through innovative technology and community engagement.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-${feature.color.split('-')[1]}-500`}
          >
            <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-6`}>
              {React.cloneElement(feature.icon, { className: 'text-white' })}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            <button className="mt-6 text-purple-600 hover:text-purple-700 font-medium flex items-center justify-center group">
              Learn More
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 text-center"
      >
        <h3 className="text-3xl font-bold text-purple-700 mb-6">Ready to Get Started?</h3>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join thousands of schools and communities already benefiting from Nirmaan's innovative platform.
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Start Your Journey
        </button>
      </motion.div>
    </div>
  );
};

export default FeaturesPage;