import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <section className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-20 text-white text-center relative overflow-hidden">
      {/* Animated Background Icons */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 360, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-30"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -360, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      ></motion.div>

      {/* Main Hero Content */}
      <div className="container mx-auto">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
         <ReactTyped
          strings={['Hi, I\'m Caleb.', 'A Front-End Developer.', 'A Passionate Coder.','A Tech Enthusiast.','A Problem Solver.','A Team Player.','A Lifelong Learner.','A Creative Thinker.','A Web Developer.','with expertise in React.js', 'Tailwind CSS, and modern web technologies.']}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A passionate Front-End Developer with expertise in React.js, Tailwind CSS, and modern web technologies.
        </motion.p>

        {/* Animated Buttons */}
        <div className="flex justify-center space-x-4">
          <motion.a
            href="#projects"
            className="bg-white text-blue-500 font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transform transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-blue-700 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transform transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
