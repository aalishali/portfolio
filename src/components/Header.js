"use client"

import { motion } from 'framer-motion'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsMoonFill } from 'react-icons/bs'
import Link from 'next/link'

export default function Header({ scrolled }) {
  const navItems = [
    { name: 'About', href: '/' },
    { name: 'Hire', href: 'mailto:asgarsince1997@gmail.com', isEmail: true },
    { name: 'Resume', href: '/resume.pdf' },
  ]

  return (
    <motion.header
      className="fixed left-0 right-0 top-4 z-20 mx-auto flex w-[96%] max-w-2xl items-center justify-between rounded-2xl border border-grayE8 bg-black/40 px-2 py-3 shadow-sm backdrop-blur-md dark:border-dark26 dark:bg-black/40 sm:px-5 sm:py-4 md:w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <motion.div
        className="flex flex-col items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-xl font-bold">Asgar Ali</h1>
        <p className="text-sm text-gray-400">frontend developer</p>
      </motion.div>
      <nav className="hidden md:flex space-x-4">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Link href={item.href} className="text-white hover:text-gray-300">
              {item.name}
            </Link>
          </motion.div>
        ))}
      </nav>
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a> */}
        <a href="https://github.com/asgar4ever" className="text-gray-400 hover:text-white"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/asgar4ever/" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
        {/* <button className="text-gray-400 hover:text-white"><BsMoonFill /></button> */}
      </motion.div>
    </motion.header>
  )
}
