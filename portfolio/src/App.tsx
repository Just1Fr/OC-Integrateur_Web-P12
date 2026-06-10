import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Hero from "./layout/Hero"
import About from "./layout/About"
import Projects from "./layout/Projects"
import Contact from "./layout/Contact"

const storedTheme = localStorage.getItem('theme')
if (storedTheme === null) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  localStorage.setItem('theme', prefersDark === null || prefersDark ? 'dark' : 'light')
}
document.documentElement.classList.add(localStorage.getItem('theme') || 'dark') // Dark theme as default

export default function App() {
  return (
    <>
      <Navbar />
      <main className='m-5 p-5'>
        Contenu
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}