"use client"
import { motion } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [time, setTime] = useState('');

  const email = "asgarsince1997@gmail.com";

  const resumeFile = "./resume.pdf"

  const IndianFlag = () => (
    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="8" width="48" height="32" rx="2" fill="#FF9933"/>
      <rect y="16" width="48" height="16" fill="#FFFFFF"/>
      <rect y="32" width="48" height="8" fill="#138808"/>
      <circle cx="24" cy="24" r="4" fill="#000080"/>
      <path d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z" stroke="#FFFFFF" strokeWidth="0.5"/>
      <path d="M24 27C25.6569 27 27 25.6569 27 24C27 22.3431 25.6569 21 24 21C22.3431 21 21 22.3431 21 24C21 25.6569 22.3431 27 24 27Z" fill="#000080"/>
      <path d="M24 24L24 20M24 24L27.1962 25.8M24 24L27.1962 22.2M24 24L20.8038 25.8M24 24L20.8038 22.2" stroke="#FFFFFF" strokeWidth="0.5"/>
    </svg>
  );

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };

      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', options);
      setTime(timeString);
    };

    // Update immediately
    updateTime();
    
    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12">
      <div className="flex flex-col items-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-gray-300 text-xl text-left md:text-2xl font-normal mb-2">Hey 👋 I&apos;m Asgar,</h2>
          <h3 className="text-2xl md:text-3xl font-normal text-left mb-4">Web & frontend developer</h3>
          <p className="text-sm md:text-base text-gray-400 text-left mb-4">
            Seamlessly transitioning from crafting websites to developing web applications. Passionate about creative solutions and building apps from scratch, perfecting both backend and frontend.
          </p>
          <p className="text-sm md:text-base text-gray-400 text-left mb-6">
            Currently working as a sole frontend developer, freelancing from time-to-time and building my own products.
          </p>
          <motion.div
            className="flex items-center mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 animate-blink"></span>
            <p className="text-sm md:text-base text-gray-400 text-left">Available for new challenges.</p>
          </motion.div>
          <motion.div
            className="flex space-x-4 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a 
              href={`mailto:${email}?subject=Let's%20connect!`}
              className="bg-white text-black px-6 py-2 rounded-sm flex items-center hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            >
              <MdEmail className="mr-2" /> Reach Out
            </a>
            <a 
              href={resumeFile}
              download="Asgar_Ali_Resume.pdf"
              className="bg-neutral-800 text-white px-6 py-2 rounded-sm flex items-center hover:bg-neutral-700 transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                // Optional: Add analytics tracking
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'resume_download', {
                    event_category: 'engagement',
                    event_label: 'Resume Download'
                  });
                }
              }}
            >
              <FaCloudDownloadAlt className="mr-2" /> Resume
            </a>
          </motion.div>
          <motion.div
            className="flex items-center space-x-2 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
             <IndianFlag />
            <p>India, local time: {time}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}