import HeroNav from "./HeroNav";
import React, { useRef } from "react";
import demo from "./assets/images/demo.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import HeroFooter from "./HeroFooter";
function Hero() {
  const scrollRef = useRef(null);
 

  return (
    <>
      <div className="min-h-screen bg-[#EEE7DF]">
        {/* Navigation Bar */}
        <div className="pt-4 pb-4 pl-14 pr-14">
          <HeroNav />
        </div>
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mt-10 md:mt-20 flex flex-col-reverse md:flex-row items-center justify-between px-4">
          <motion.div
            className="w-full md:w-1/2 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, scale: { duration: 0.2 } }}
          >
            <img
              src={demo}
              alt="Smart Home Automation"
              className="h-auto w-full md:w-[85%] rounded-lg shadow-xl"
            />
          </motion.div>

          <div className="w-full md:w-1/2 p-4 text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              A Voice-Enabled
              <br />
              <motion.span
                className="text-[#8B4411]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.6 }}
              >
                Home Automation
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 2.4 }}
              >
                System
              </motion.span>
            </motion.h1>

            {/* Typewriter Animation */}
            <div className="mt-6 text-xl text-gray-600">
              <Typewriter
                words={[
                  "Transform your home with smart automation.",
                  "Experience seamless voice control with DomoticAI.",
                  "Automate your world—comfort at your command.",
                  "DomoticAI: Your home, reimagined with intelligence.",
                  "Hands-free living with IoT-powered automation.",
                  "Smart control for a smarter home.",
                  "Elevate your lifestyle with voice-enabled automation.",
                  "Effortless convenience, just a command away.",
                  "DomoticAI: Where comfort meets technology.",
                  "Control, monitor, and relax with DomoticAI.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={1500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#f2e4d4] border-2">
        {/* <div className='mt-auto p-20 flex justify-start'>
    <h2 className='text-black text-5xl'>About DomoticAI</h2>
    </div> */}
        <div ref={scrollRef} style={{ overflow: "scroll" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4 }}
            viewport={{ root: scrollRef }}
            className="mt-auto  
 p-20 flex flex-col justify-start"
          >
            <h2 className="text-black text-5xl mb-10">About DomoticAI</h2>
            <div className="w-1/2 mb-20">
              <p>
                DomoticAI is a cutting-edge Internet of Things (IoT) solution
                that empowers you to control your home with just your voice. By
                integrating advanced voice recognition technology, DomoticAI
                seamlessly connects to your smart devices, enabling effortless
                control over lighting, climate, security, and more.
              </p>
            </div>
            <div className="w-[45%] mx-[50vw]">
              <h2 className='"text-black text-5xl mb-10'>Future Scope</h2>
              <p>
                Fuelled by passion, driven by innovation. We're young, we're
                ambitious, and we're ready to revolutionize smart homes by
                building a cutting-edge startup.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <div className='min-h-[50vh] bg-[#f3b268] border-2'></div> */}
      {/* Footer */}
      <HeroFooter />
    </>
  );
}

export default Hero;
