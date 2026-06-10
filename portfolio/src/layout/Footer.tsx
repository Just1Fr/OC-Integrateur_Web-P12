import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className='fixed flex left-0 right-0 items-center justify-evenly bottom-0 m-5 p-5 rounded-xl gap-5 bg-(--bg)'>
      <a href="https://github.com/Just1Fr/OC-Integrateur_Web-P12" 
        target="_blank"
        className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faGithub}/>
        Source
      </a>
      <div>licence</div>
      <div>lien rgpd</div>
    </footer>
  )
}