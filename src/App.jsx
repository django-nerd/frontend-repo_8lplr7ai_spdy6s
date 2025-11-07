import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-gray-900">agungtriu</a>
        <nav className="flex items-center gap-6 text-sm text-gray-700">
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <a
            href="https://github.com/agungtriu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-gray-900 px-3 py-1.5 font-medium text-white hover:bg-black"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Agung Tri Utama</p>
        <p>Built with love for mobile experiences</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  )
}
