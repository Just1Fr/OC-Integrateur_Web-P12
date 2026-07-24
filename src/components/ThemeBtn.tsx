import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

interface ModalProps {
  className: string
}

export default function ThemeBtn({ className = '' }: ModalProps) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'dark') {
        return (localStorage.setItem('theme', 'light'), 'light')
      } else {
        return (localStorage.setItem('theme', 'dark'), 'dark')
      }
    })
  }

  return (
    <button
      className={`rounded-full ${className}`}
      onClick={toggleTheme}
      aria-label={`Basculer vers le thème ${theme === 'dark' ? 'clair' : 'sombre'}`}
      title={`Basculer vers le thème ${theme === 'dark' ? 'clair' : 'sombre'}`}
    >
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faMoon} className='rotate-360 transition-all' />
      ) : (
        <FontAwesomeIcon icon={faSun} className='-rotate-360 transition-all' />
      )}
    </button>
  )
}
