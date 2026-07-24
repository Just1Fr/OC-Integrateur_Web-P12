import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUpRightAndDownLeftFromCenter,
  faLink,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Modal from './Modal'
import Accordion from './Accordion'
import useMediaBreakpoint from '../hooks/mediaBreakpoint'
import type { Project } from '../data/projects'

interface ModalProps {
  project: Project
  className?: string
}

const BREAKPOINTS_CONFIG = {
  xs: { zoomIconOnHover: false },
  sm: { zoomIconOnHover: false },
  md: { zoomIconOnHover: true },
  lg: { zoomIconOnHover: true },
  xl: { zoomIconOnHover: true },
  '2xl': { zoomIconOnHover: true },
} as const

export default function ProjectCard({ project, className = '' }: ModalProps) {
  const [visible, setVisible] = useState(false)
  const handleModal = () => {
    setVisible(!visible)
    document.body.style.overflow = visible ? '' : 'hidden'
  }

  const [imgHover, setImgHover] = useState(false)

  const breakpointConfig = BREAKPOINTS_CONFIG[useMediaBreakpoint()]
  const zoomIconOnHover = breakpointConfig.zoomIconOnHover

  return (
    <article
      className={`project flex h-full flex-col justify-between gap-5 text-center ${className}`}
    >
      <div className='text-left'>
        {(imgHover || !zoomIconOnHover) && (
          <FontAwesomeIcon
            icon={faUpRightAndDownLeftFromCenter}
            className='pointer-events-none absolute z-10 mt-2 ml-2 h-auto! rounded-full bg-(--bg-dark) p-2 opacity-75 md:m-0'
          />
        )}
        <img
          src={project.imgSrc}
          alt={`Aperçu du projet "${project.title}"`}
          className='flex h-35 w-full cursor-pointer overflow-hidden rounded-xl border-4 border-(--border) object-cover object-top shadow-(--shadow) transition-transform hover:scale-105 sm:h-45 md:h-55 lg:h-60 xl:h-70'
          onMouseEnter={() => setImgHover(true)}
          onMouseLeave={() => setImgHover(false)}
          onClick={handleModal}
        />
      </div>
      <Modal onClose={handleModal} visible={visible}>
        <div className='overflow-y-scroll'>
          <img
            src={project.imgSrc}
            alt={`Aperçu du projet "${project.title}"`}
            className='w-full object-cover object-top'
          />
        </div>
      </Modal>
      {/* <div 
        className='flex-1 grid gap-5'
        style={{ gridTemplateRows: '.25fr 1fr' }}
      > */}
      <div className='flex flex-1 flex-col gap-5'>
        <h3 className='flex items-center justify-center text-lg font-bold sm:h-[8dvh]'>
          {project.title}
        </h3>
        <Accordion>
          {project.details.map((item, index) => (
            <Accordion.Section key={index} title={item.title}>
              {item.text}
            </Accordion.Section>
          ))}
        </Accordion>
      </div>
      <div className='flex items-center justify-evenly'>
        {project.logos.map((item, index) => (
          <span
            key={index}
            className='inline-flex flex-col items-center gap-1 transition-all hover:scale-150 hover:text-(--secondary)'
          >
            <FontAwesomeIcon icon={item.icon} className={'text-2xl'} />
            <span className='text-xs font-semibold'>{item.title}</span>
          </span>
        ))}
      </div>
      <div className='flex gap-5'>
        <a
          href={project.source}
          target='_blank'
          className='flex flex-1 items-center justify-center gap-1'
          aria-label='Code source de ce projet'
        >
          <FontAwesomeIcon icon={faGithub} />
          Source
        </a>
        {project.website && (
          <a
            href={project.website}
            target='_blank'
            className='flex flex-1 items-center justify-center gap-1'
            aria-label='Site de ce projet'
          >
            <FontAwesomeIcon icon={faLink} />
            Site
          </a>
        )}
      </div>
    </article>
  )
}
