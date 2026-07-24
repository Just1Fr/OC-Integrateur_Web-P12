import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import ScrollToTopBtn from '../components/ScrollToTopBtn'

export default function Footer() {
  return (
    <footer className='right-0 bottom-0 left-0 m-5 flex items-center justify-evenly gap-5 rounded-xl border-2 border-(--border) bg-(--bg) p-5 shadow-(--shadow)'>
      <a
        href='https://github.com/Just1Fr/OC-Integrateur_Web-P12'
        target='_blank'
        className='flex items-center gap-1'
        aria-label='Code source du site'
      >
        <FontAwesomeIcon icon={faGithub} />
        Source
      </a>
      <ScrollToTopBtn className='absolute right-5 mr-5 flex aspect-square items-center rounded-full p-3' />
    </footer>
  )
}
