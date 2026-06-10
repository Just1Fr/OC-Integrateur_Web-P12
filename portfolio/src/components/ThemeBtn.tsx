import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function ThemeBtn({ className='' }) {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  });

  // On theme change
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'dark') {
        return localStorage.setItem('theme', 'light'), 'light'
      } else {
        return localStorage.setItem('theme', 'dark'), 'dark'
      }
    })
  }

  return (
    <button className={'text-(--primary) hover:cursor-pointer hover:bg-(--highlight) rounded-full ' + className} onClick={toggleTheme}>
      {theme === 'dark' ?
        <FontAwesomeIcon icon={faMoon} />
        :
        <FontAwesomeIcon icon={faSun} />
      }
    </button>
  )
}