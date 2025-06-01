"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaWordpress, FaElementor, FaJs, FaHtml5, FaGitAlt, FaCss3, FaBootstrap, FaShopify } from 'react-icons/fa'
import { SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs } from 'react-icons/si'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [

{
      name: 'Wish Toys',
      description: 'E-commerce store',
      image: './images/wishtoys.png?height=400&width=600&text=wishtoys',
      technologies: [FaShopify],
      link: 'https://wishtoys.com.au/',
      status: 'Completed',
    },
{
      name: 'Dharmik',
      description: 'E-commerce store',
      image: './images/dharmik.png?height=400&width=600&text=dharmik',
      technologies: [FaShopify],
      link: 'https://dharmik.in/',
      status: 'Completed',
    },

    {
      name: 'George Academy',
      description: 'LMS Platform for ICSE Borad Students.',
      image: './images/george.png?height=400&width=600&text=george',
      technologies: [FaWordpress, FaElementor],
      link: 'https://georgeacademy.in/',
      status: 'Completed',
    },

    {
      name: 'Curanex',
      description: 'Clinic Marketing Agency',
      image: './images/curanex.png?height=400&width=600&text=curanex',
      technologies: [FaWordpress, FaElementor],
      link: 'https://curanex.in/',
      status: 'Ongoing',
    },

    {
      name: 'Embed Code Generator',
      description: 'A tool based web app that helps to generate embed code for different platforms like Fb, Youtube, Spotify etc',
      image: './images/embed.png?height=400&width=600&text=betterDevs',
      technologies: [SiNextdotjs, SiReact, FaCss3],
      link: 'https://embedcodegenerator.com/',
      status: 'Completed',
    },

    {
      name: 'Rquarius Pharma',
      description: 'A pharmaceutical company based in New Delhi.',
      image: './images/Rquarius.png?height=400&width=600&text=betterDevs',
      technologies: [FaHtml5, FaCss3, FaJs, FaBootstrap],
      link: 'https://rquariuspharma.com/',
      status: 'Completed',
    },

    {
      name: 'Vyom Yog',
      description: 'Yoga Session Booking Website based in Mumbai',
      image: './images/vyom.png?height=400&width=600&text=betterDevs',
      technologies: [FaWordpress, FaElementor],
      link: 'https://vyomyog.com/',
      status: 'Completed',
    },
    
    {
      name: 'Bottleneck Checker',
      description: 'A tool based web app that helps gamers to identify bottleneck',
      image: './images/bottleneck.png?height=400&width=600&text=betterDevs',
      technologies: [SiNextdotjs, SiReact, SiTailwindcss],
      link: 'https://bottleneckchecker.com/',
      status: 'Completed',
    },

    {
      name: 'Paletelly',
      description: 'Create Stunning Color Palettes in Seconds',
      image: './images/color.png?height=400&width=600&text=palettely',
      technologies: [SiNextdotjs, SiReact, SiTailwindcss],
      link: 'https://palettely.co/',
      status: 'Completed',
    },

    {
      name: 'Robotree',
      description: 'LMS Platform for Robotics Students.',
      image: './images/robotree.png?height=400&width=600&text=betterDevs',
      technologies: [FaWordpress, FaElementor],
      link: 'https://robotree.in/',
      status: 'Completed',
    },

    {
      name: 'Crop Image in Circle',
      description: 'A tool based web app that allows users to crop images in circle with gradients border functionality.',
      image: './images/circle.png?height=400&width=600&text=betterDevs',
      technologies: [SiNextdotjs, SiReact, SiTailwindcss],
      link: 'https://crop-image-in-circle.netlify.app/',
      status: 'Completed',
    },

    {
      name: 'Square Photo',
      description: 'A tool based web app that allows users to fit images in square with blur, crop and border color functionality.',
      image: './images/square.png?height=400&width=600&text=betterDevs',
      technologies: [SiNextdotjs, SiReact, FaCss3],
      link: 'https://fitphotoinsquare.com/',
      status: 'Completed',
    },

    {
      name: 'Responsive Checker',
      description: 'A tool based web app that helps user to check website responsiveness on different divices.',
      image: './images/responsive.png?height=400&width=600&text=betterDevs',
      technologies: [SiNextdotjs, SiReact, SiTailwindcss],
      link: 'https://www.responsivechecker.site/',
      status: 'Completed',
    },
  ]

  return (
    <section className="py-12">
      <motion.h2
        className="text-xl font-bold mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-neutral-800 rounded-lg overflow-hidden relative flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div 
              className="relative w-full h-64"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
              <AnimatePresence>
                {hoveredProject === index && (
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="flex space-x-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200">
                        <FaExternalLinkAlt className="text-3xl" />
                      </a>
                      {/* <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200">
                        <FaGithub className="text-3xl" />
                      </a> */}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              <div className="flex space-x-2 mb-4">
                {project.technologies.map((Tech, i) => (
                  <Tech key={i} className="text-2xl text-gray-400" />
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-500">{project.status}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
