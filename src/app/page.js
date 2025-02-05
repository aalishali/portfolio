'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
        <div className="bg-neutral-900 text-white min-h-screen px-4 sm:px-6 lg:px-8">
      <AnimatePresence>
        <Header scrolled={scrolled} />
        <main className="mx-auto flex h-full w-full max-w-[35rem] flex-col pt-24">
          <Hero />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </AnimatePresence>
    </div>
  )
}