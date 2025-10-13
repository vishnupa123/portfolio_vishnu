import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/coding.jpg';
import img2 from '../../assets/learning.jpg';
import img3 from '../../assets/teaching.jpg';

import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [borderFade, setBorderFade] = useState(true);

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setBorderFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
        setBorderFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Text slider
  const slides = ['I am a React Js Developer', 'A Good Learner', 'A Friendly Tutor'];
  const [textIndex, setTextIndex] = useState(0);
  const [textFade, setTextFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextFade(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % slides.length);
        setTextFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const iconVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 + 0.8, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Social icons
  const handleGitHubClick = () => {
    window.open("https://github.com/vishnupa123", "_blank");
  };

  return (
    <div id="home" className="px-4 max-sm:p-0 md:px-30 ml-2 sm:ml-7 bg-gradient-to-r from-white via-pink-200 to-indigo-200">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* Text Area */}
        <div className="text-center md:text-left">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-7xl font-light font-serif bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent tracking-wide drop-shadow-md"
          >
            Hi I am Vishnu
          </motion.h1>

          {/* Text Slider */}
          <div className="h-10 sm:h-12 mt-2 sm:mt-3">
            <h3
              className={`text-lg sm:text-2xl md:text-3xl font-medium font-sans bg-gradient-to-r from-violet-800 via-pink-600 to-indigo-500 bg-clip-text text-transparent tracking-wide drop-shadow-md transition-opacity duration-500 ${
                textFade ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slides[textIndex]}
            </h3>
          </div>

          {/* Social Icons with animation */}
          <div className="pt-3 flex gap-4 items-center justify-center md:justify-start">
            {/* GitHub */}
            <motion.div
              custom={0}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              onClick={handleGitHubClick}
              className="text-gray-800 text-2xl sm:text-2xl hover:scale-125 transition-transform duration-300 cursor-pointer"
            >
              <FaGithub />
            </motion.div>

            {/* Indeed */}
            <motion.a
              href="#"
              custom={1}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="text-blue-600 text-2xl sm:text-2xl hover:scale-125 transition-transform duration-300"
            >
              <SiIndeed />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="#"
              custom={2}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="text-pink-600 text-2xl sm:text-2xl hover:scale-125 transition-transform duration-300"
            >
              <FaInstagram />
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:youremail@example.com"
              custom={3}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="text-red-600 text-2xl sm:text-2xl hover:scale-125 transition-transform duration-300"
            >
              <MdEmail />
            </motion.a>
          </div>

          {/* Buttons with animation */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <motion.button
              custom={0}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-700 hover:to-orange-600 px-4 sm:px-6 py-2 rounded cursor-pointer text-white text-sm sm:text-base"
            >
              Get Started
            </motion.button>

            <motion.button
              custom={1}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className="bg-pink-400 text-white px-4 sm:px-6 py-2 rounded text-sm sm:text-base hover:bg-pink-500 transition"
            >
              See how it works
            </motion.button>
          </div>
        </div>

        {/* Image Slider */}
        <div
          className={`relative rounded-full p-3 sm:p-5 transition-opacity duration-500 ${
            borderFade ? 'opacity-100' : 'opacity-0'
          } bg-[radial-gradient(circle,_#ec4899,_#fbcfe8,_#ffe4f0)]`}
        >
          <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] overflow-hidden rounded-full relative bg-white">
            <img
              src={images[currentIndex]}
              alt="Slider"
              loading="lazy"
              className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-700 rounded-full ${
                fade ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
