import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import demo from "./assets/images/demo.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const HeroNav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Add this line to initialize navigate

  const handleClick = () => {
    navigate("/register");
  };

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
      {/* <nav className="bg-[#CAA480] flex items-center justify-between p-8 mx-auto rounded-2xl"> i have made a change here */}
      <nav className="bg-[#1d4b3e] flex items-center justify-between p-8 mx-auto rounded-2xl">
        <button className="text-4xl font-bold" onClick={() => navigate("/")}>
          {/* Domotic<span className="text-[#A0612B]">AI</span> i have made a change here */}
          <span className="text-[#fbf7f0]">Domotic</span>AI

        </button>

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
          {/* <Link to="/" className="text-black px-4"> i have made a change here*/}
          <Link to="/" className="text-[#fbf7f0] px-4">
            Home
          </Link>
          {/* <Link to="/pricing" className="text-black px-4"> */}
          <Link to="/pricing" className="text-[#fbf7f0] px-4">
            Pricing
          </Link>
          {/* <Link to="/features" className="text-black px-4"> */}
          <Link to="/features" className="text-[#fbf7f0] px-4">
            Features
          </Link>
          {/* <Link to="/about" className="text-black px-4"> */}
          <Link to="/about" className="text-[#fbf7f0] px-4">
            About Us
          </Link>
          {/* <Link to="/faq" className="text-black px-4"> */}
          <Link to="/faq" className="text-[#fbf7f0] px-4">
            FAQ
          </Link>
        </div>
        <motion.button
          // className="hidden md:block bg-[#87553B] text-white px-6 py-2 rounded-lg outline-none font-medium" i have made a change here
          className="hidden md:block bg-[#006d5b] text-white px-6 py-2 rounded-lg outline-none font-medium"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          onClick={handleClick}
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
              onClick={() => {
                navigate(`/${link.toLowerCase().replace(" ", "")}`);
                setMobileMenuOpen(false);
              }}
              className="text-black cursor-pointer"
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
            onClick={handleClick}
          >
            Get Started
          </motion.button>
        </motion.div>
      )}
    </>
  );
};

export default HeroNav;
