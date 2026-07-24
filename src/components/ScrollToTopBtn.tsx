import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const scrollToTop = () => {
  window.history.replaceState(null, '', window.location.pathname)
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

interface ModalProps {
  className: string
}

export default function ScrollToTopBtn({ className = '' }: ModalProps) {
  return (
    <button
      className={`rounded-full ${className}`}
      onClick={scrollToTop}
      aria-label='Retour en haut de la page'
      title='Retour en haut de la page'
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  )
}
