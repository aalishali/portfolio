import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Expert Web Developer | WordPress with Elementor, React.js, and UI/UX Design',
  description: 'Experienced web developer specializing in WordPress with Elementor, React.js, and UI/UX design. Building custom, responsive websites and interactive applications while optimizing performance and user experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}