import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import {
  faSquareJs,
  faTypescript,
  faReact,
  faHtml5,
  faCss3Alt,
  faSass,
  faNodeJs,
  faW3c,
  faGitAlt,
  faGithub,
  faTailwindCss,
  faFigma,
  faNotion,
} from '@fortawesome/free-brands-svg-icons'

import Slider from '../components/LogoLoop'
import useMediaBreakpoint from '../hooks/mediaBreakpoint'

const BREAKPOINTS_CONFIG = {
  xs: { width: '25dvw' },
  sm: { width: '15dvw' },
  md: { width: '15dvw' },
  lg: { width: '15dvw' },
  xl: { width: '15dvw' },
  '2xl': { width: '15dvw' },
} as const

const logos = [
  { icon: faHtml5, title: 'HTML5' },
  { icon: faReact, title: 'React' },
  { icon: faCss3Alt, title: 'CSS3' },
  { icon: faSass, title: 'SASS' },
  { icon: faNodeJs, title: 'Node.js' },
  { icon: faNotion, title: 'Notion' },
  { icon: faTypescript, title: 'TypeScript' },
  { icon: faGithub, title: 'GitHub' },
  { icon: faW3c, title: 'W3C' },
  { icon: faTailwindCss, title: 'Tailwind CSS' },
  { icon: faGitAlt, title: 'Git' },
  { icon: faFigma, title: 'Figma' },
  { icon: faSquareJs, title: 'JavaScript' },
] as const

const scrollToNext = () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Technologies() {
  const breakpointConfig = BREAKPOINTS_CONFIG[useMediaBreakpoint()]
  const width = breakpointConfig.width

  const slides = logos.map((item, index) => {
    return (
      <Slider.Slide
        key={index}
        className='flex-col items-center gap-1 text-center text-4xl transition-all hover:scale-150 hover:text-(--secondary)'
      >
        <FontAwesomeIcon icon={item.icon} />
        <span className='text-xs font-semibold'>{item.title}</span>
      </Slider.Slide>
    )
  })

  return (
    <section
      id='technologies'
      className='flex flex-col items-center gap-[15dvh] p-5'
    >
      <div className='w-[75dvw]'>
        <Slider
          width={width}
          duration={20}
          pauseOnHover={true}
          blurBorders={false}
          className='py-5 text-(--text-muted)'
        >
          {slides}
        </Slider>
      </div>
      <FontAwesomeIcon
        icon={faAngleDown}
        className='min-w-full animate-bounce p-5 text-2xl hover:cursor-pointer hover:text-(--secondary) hover:filter-[drop-shadow(0_1px_10px)]'
        onClick={scrollToNext}
      />
    </section>
  )
}
