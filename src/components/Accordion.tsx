import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

interface AccordionProps {
  children: React.ReactElement[]
  className?: string
}

interface SectionProps {
  children: React.ReactNode
  className?: string
  title: string
}

const Accordion: React.FC<AccordionProps> & {
  Section: React.FC<SectionProps>
} = ({ children, className = '' }) => {
  return (
    <div
      className={`accordion flex h-fit flex-col overflow-clip rounded-2xl ${className}`}
    >
      {children}
    </div>
  )
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  className = '',
  ...props
}) => {
  const [expanded, setExpanded] = useState(false)
  const sectionRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isExpanded =
        sectionRef.current?.getAttribute('aria-expanded') === 'true'
      setExpanded(isExpanded)
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current, { attributes: true })
    }

    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const accordion = e.currentTarget.closest('.accordion')
    const section = accordion?.querySelector('[aria-expanded="true"]')
    section === e.currentTarget.parentElement
      ? e.currentTarget.parentElement?.setAttribute('aria-expanded', 'false')
      : section?.setAttribute('aria-expanded', 'false') ||
        e.currentTarget.parentElement?.setAttribute('aria-expanded', 'true')
  }

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col bg-(--bg-light) ${className}`}
      aria-expanded={false}
      role='button'
      {...props}
    >
      <div
        className='z-10 flex items-center justify-between p-5 text-left font-bold hover:cursor-pointer hover:bg-(--bg-dark)'
        onClick={handleClick}
      >
        {title}
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`text-xl transition-[rotate] ${expanded && 'rotate-180'}`}
        />
      </div>
      <div
        className={`px-2 transition-[padding] ${expanded ? 'p-2 opacity-100' : 'h-0 opacity-0'}`}
      >
        {children}
      </div>
    </div>
  )
}

Accordion.Section = Section

export default Accordion
