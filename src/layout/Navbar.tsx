import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faHammer,
  faEnvelope,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'

import ThemeBtn from '../components/ThemeBtn'
import useMediaBreakpoint from '../hooks/mediaBreakpoint'

const navList = [
  { title: 'Parcours', hash: 'about', icon: faGraduationCap },
  { title: 'Projets', hash: 'projects', icon: faHammer },
  { title: 'Contact', hash: 'contact', icon: faEnvelope },
]

const BREAKPOINTS_CONFIG = {
  xs: { hamburgerNav: true },
  sm: { hamburgerNav: false },
  md: { hamburgerNav: false },
  lg: { hamburgerNav: false },
  xl: { hamburgerNav: false },
  '2xl': { hamburgerNav: false },
} as const

const setCurrentLink = (e: React.MouseEvent<HTMLElement>) => {
  document.querySelector('nav .current')?.classList.remove('current')
  e.currentTarget.classList.add('current')
}

export default function Navbar() {
  const breakpointConfig = BREAKPOINTS_CONFIG[useMediaBreakpoint()]
  const hamburgerNav = breakpointConfig.hamburgerNav

  const [navOpened, setNavOpened] = useState(false)
  const toggleNav = () => {
    setNavOpened(!navOpened)
  }

  const navItems = navList.map((item, index) => (
    <li key={index} onClick={() => setNavOpened(false)}>
      <a
        href={`#${item.hash}`}
        className='flex items-center gap-1 p-2.5'
        onClick={setCurrentLink}
      >
        {item.icon && <FontAwesomeIcon icon={item.icon} />}
        {item.title}
      </a>
    </li>
  ))

  return (
    <header
      className={
        'm-5 flex flex-row items-center justify-between overflow-y-hidden rounded-xl border-2 border-(--border) bg-(--bg) p-5 shadow-(--shadow) sm:justify-center'
      }
    >
      {hamburgerNav && (
        <button
          onClick={toggleNav}
          className={`flex aspect-square items-center p-3 ${navOpened && 'mb-auto'}`}
          aria-label={`${navOpened ? 'Fermer' : 'Ouvrir'} le menu de navigation`}
        >
          <FontAwesomeIcon
            icon={faClose}
            className={`transition-all ${navOpened ? 'opacity-100' : '-rotate-180 opacity-0'}`}
          />
          <FontAwesomeIcon
            icon={faBars}
            className={`absolute transition-all ${navOpened ? 'rotate-180 opacity-0' : 'opacity-100'}`}
          />
        </button>
      )}
      {(!hamburgerNav || navOpened) && (
        <nav
          className={`sm:max-w-[85%] ${hamburgerNav && navOpened && 'transition-[opacity,translate] starting:-translate-y-full starting:opacity-0'}`}
        >
          <ul className={`flex flex-col gap-5 sm:flex-row`}>{navItems}</ul>
        </nav>
      )}
      <ThemeBtn
        className={`flex aspect-square h-fit items-center p-3 sm:absolute sm:right-5 sm:mr-5 ${hamburgerNav && navOpened && 'mb-auto'}`}
      />
    </header>
  )
}
