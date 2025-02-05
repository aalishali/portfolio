import { motion } from 'framer-motion'
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaCss3, FaGithub, FaBootstrap, FaSearchengin, FaFigma } from 'react-icons/fa'
import { SiNextdotjs, SiWordpress, SiCanva, SiTailwindcss } from 'react-icons/si'
import { DiPhotoshop } from 'react-icons/di'

export default function Skills() {
  const skills = [
    { 
      name: 'HTML', 
      icon: FaHtml5, 
      color: 'text-[#E34F26]', // Official HTML5 orange
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' 
  },
  { 
      name: 'CSS', 
      icon: FaCss3, 
      color: 'text-[#1572B6]', // Official CSS3 blue
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' 
  },
  { 
      name: 'JavaScript', 
      icon: FaJs, 
      color: 'text-[#F7DF1E]', // Official JavaScript yellow
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' 
  },
  { 
      name: 'React', 
      icon: FaReact, 
      color: 'text-[#61DAFB]', // Official React blue
      link: 'https://react.dev/' 
  },
  { 
      name: 'Next.js', 
      icon: SiNextdotjs, 
      color: 'text-white', // Next.js uses white
      link: 'https://nextjs.org/' 
  },
  { 
      name: 'WordPress', 
      icon: SiWordpress, 
      color: 'text-[#21759B]', // Official WordPress blue
      link: 'https://wordpress.org/' 
  },
  { 
      name: 'Node.js', 
      icon: FaNodeJs, 
      color: 'text-[#339933]', // Official Node.js green
      link: 'https://nodejs.org/' 
  },
  { 
      name: 'Git', 
      icon: FaGitAlt, 
      color: 'text-[#F05032]', // Official Git orange
      link: 'https://git-scm.com/' 
  },
  { 
      name: 'Github', 
      icon: FaGithub, 
      color: 'text-[#181717]', // GitHub dark
      link: 'https://github.com/' 
  },
  { 
      name: 'Tailwind', 
      icon: SiTailwindcss, 
      color: 'text-[#06B6D4]', // Official Tailwind blue
      link: 'https://tailwindcss.com/' 
  },
  { 
      name: 'Bootstrap', 
      icon: FaBootstrap, 
      color: 'text-[#7952B3]', // Official Bootstrap purple
      link: 'https://getbootstrap.com/' 
  },
  { 
      name: 'SEO', 
      icon: FaSearchengin, 
      color: 'text-[#45A9DE]', // Using a professional blue color
      link: 'https://developers.google.com/search' 
  },
  { 
      name: 'Canva', 
      icon: SiCanva, 
      color: 'text-[#00C4CC]', // Official Canva blue
      link: 'https://www.canva.com/' 
  },
  { 
    name: 'Phtoshop', 
    icon: DiPhotoshop, 
    color: 'text-[#2FA3F7]', // Official  Photoshop color
    link: 'https://www.adobe.com/in/products/photoshop.html' 
},
  { 
    name: 'Figma', 
    icon: FaFigma, 
    color: 'text-[#EA4C1D]', // Official  Figma color
    link: 'https://www.figma.com/' 
}
  ]

  const experiences = [
    { period: '2020 — 2024', position: 'Web Developer and UI/UX Designer', company: 'AVM Pvt. Ltd.' },
  ]

  return (
    <section className="py-12">
      <motion.h2
        className="text-xl font-bold mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {skills.map((skill, index) => (
          <motion.a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 rounded-lg p-3 flex items-center space-x-2 hover:bg-gray-700 transition-colors duration-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
          >
            <skill.icon className={`text-xl ${skill.color}`} />
            <span className="text-sm">{skill.name}</span>
          </motion.a>
        ))}
      </motion.div>
      <motion.h2
        className="text-xl font-bold mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex justify-between items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <div className="text-gray-400">{exp.period}</div>
            <div className="text-right">
              <h3 className="font-normal">{exp.position}</h3>
              <p className="text-gray-400">{exp.company}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}