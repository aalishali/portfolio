import { motion } from 'framer-motion'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const links = [
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/asgaraliwebdev',
    //   icon: FaTwitter
    // },
    {
      name: 'Github',
      url: 'https://github.com/asgar4ever',
      icon: FaGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/asgar4ever/',
      icon: FaLinkedin
    }
  ]

  return (
    <motion.footer
      className="py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="mx-auto flex h-full w-full max-w-[35rem] flex-col items-center">
        <div className="flex justify-center space-x-6 mb-4">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm hover:text-white transition-colors duration-300 flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              aria-label={`Follow me on ${link.name}`}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.name}</span>
            </motion.a>
          ))}
        </div>
        <motion.p
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          © {new Date().getFullYear()} Asgar Ali.
        </motion.p>
      </div>
    </motion.footer>
  )
}
