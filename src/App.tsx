import Navbar from './layout/Navbar'
import Hero from './layout/Hero'
import About from './layout/About'
import Technologies from './layout/Technologies'
import Projects from './layout/Projects'
import Contact from './layout/Contact'
import Footer from './layout/Footer'

const storedTheme = localStorage.getItem('theme')
if (storedTheme === null) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  localStorage.setItem('theme', prefersDark ? 'dark' : 'light')
}
document.documentElement.classList.add(localStorage.getItem('theme') || 'dark') // Dark theme as default

export default function App() {
  return (
    <>
      <Navbar />
      <main className='m-5 flex flex-col gap-15'>
        <Hero />
        <Technologies />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
