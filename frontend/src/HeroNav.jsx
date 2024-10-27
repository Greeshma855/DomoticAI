import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import demo from './assets/images/demo.png';
import { motion } from 'framer-motion';
const HeroNav = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.05,
            duration: 0.5,
          },
        }),
      };
  return (
    <>
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="text-4xl font-bold">
          Domotic<span className="text-[#A0612B]">AI</span>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center rounded-full px-8 py-2">
          <a href="#home" className="text-black px-4">
            Home
          </a>
          <a href="#pricing" className="text-black px-4">
            Pricing
          </a>
          <a href="#features" className="text-black px-4">
            Features
          </a>
          <a href="#about" className="text-black px-4">
            About Us
          </a>
          <a href="#faq" className="text-black px-4">
            FAQ
          </a>
        </div>
        <motion.button
          className="hidden md:block bg-[#87553B] text-white px-6 py-2 rounded-lg outline-none font-medium"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Get Started
        </motion.button>
      </nav>

      {/* Mobile Menu - visible on small screens */}
      {isMobileMenuOpen && (
        <motion.div
          className="flex flex-col items-center md:hidden bg-white p-4 rounded-lg shadow-lg space-y-4"
          initial="hidden"
          animate="visible"
        >
          {["Home", "Pricing", "Features", "About Us", "FAQ"].map((link, i) => (
            <motion.a
              key={i}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              className="text-black"
              custom={i}
              variants={letterVariants}
            >
              {link}
            </motion.a>
          ))}
          <motion.button
            className="bg-[#A0612B] text-white px-6 py-2 rounded-lg font-medium"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            custom={5}
            variants={letterVariants}
          >
            Get Started
          </motion.button>
        </motion.div>
      )}
    </>
  );
};

export default HeroNav;
