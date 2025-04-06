import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserFriends, FaMicrophoneAlt, FaChartLine, FaFileAlt, FaSchool } from 'react-icons/fa';

const features = [
  {
    title: 'Personalized Learning',
    description: 'Tailored education content and support for school students, parents, and teachers.',
    icon: <FaGraduationCap className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'AI Attendance Monitoring',
    description: 'Smart attendance and alert systems for dropout detection and tracking.',
    icon: <FaChartLine className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Mentorship Network',
    description: 'Connect with mentors to support career guidance and development.',
    icon: <FaUserFriends className="w-8 h-8" />,
    color: 'from-pink-500 to-pink-600'
  },
  {
    title: 'Voice-Based Navigation',
    description: 'Easy access for low-literacy users using voice and regional language.',
    icon: <FaMicrophoneAlt className="w-8 h-8" />,
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Digital School Records',
    description: 'Access and manage school documents, marksheets, and notices digitally.',
    icon: <FaFileAlt className="w-8 h-8" />,
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'Community Feedback Loop',
    description: 'Enable communities to raise issues and track resolution from the school authorities.',
    icon: <FaSchool className="w-8 h-8" />,
    color: 'from-red-500 to-red-600'
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 px-6 text-center"
      >
        <h2 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Welcome to Nirmaan
        </h2>
        <p className="text-xl max-w-3xl mx-auto text-gray-600 mb-12">
          Nirmaan is an AI-driven platform designed to address the challenges faced by rural schools. It provides smart tools for students, teachers, and parents, helping improve learning, monitoring, and collaboration.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Features Grid */}
      <div className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-${feature.color.split('-')[1]}-500`}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                {React.cloneElement(feature.icon, { className: 'text-white' })}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              <button className="mt-6 text-purple-600 hover:text-purple-700 font-medium flex items-center group">
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
      </div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Education?</h3>
          <p className="text-xl mb-8 text-gray-100">
            Join us in our mission to make quality education accessible to every student, regardless of their background.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Join Nirmaan Today
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;