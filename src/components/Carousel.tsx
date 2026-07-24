import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import useMediaBreakpoint from '../hooks/mediaBreakpoint'

const BREAKPOINTS_CONFIG = {
  xs: { maxVisible: 1 },
  sm: { maxVisible: 2 },
  md: { maxVisible: 2 },
  lg: { maxVisible: 3 },
  xl: { maxVisible: 3 },
  '2xl': { maxVisible: 3 },
} as const

interface ModalProps {
  slides: React.ReactNode[]
}

type Direction = 'left' | 'right'

export default function Carousel({ slides }: ModalProps) {
  const breakpointConfig = BREAKPOINTS_CONFIG[useMediaBreakpoint()]
  const maxVisible = breakpointConfig.maxVisible
  const slidesCount = slides.length
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<null | Direction>(null)

  // const handleNext = (e: React.MouseEvent<HTMLElement>) => {
  const handleNext = () => {
    setDirection('right')
    setIndex((index + 1) % slidesCount)
    // closeAccordions(e)
  }
  // const handlePrev = (e: React.MouseEvent<HTMLElement>) => {
  const handlePrev = () => {
    setDirection('left')
    setIndex((index - 1 + slidesCount) % slidesCount)
    // closeAccordions(e)
  }

  // const closeAccordions = (e: React.MouseEvent<HTMLElement>) => {
  //   const caroussel = e.currentTarget.closest('.caroussel')
  //   if (direction === 'left') {
  //     caroussel?.querySelector(`slide-${maxVisible - 1}`)
  //       ?.querySelectorAll('.accordion [aria-expanded="true"]')
  //         ?.forEach(slide => slide.ariaExpanded = 'false')
  //   } else if (direction == 'right') {
  //     caroussel?.querySelector(`slide-0`)
  //       ?.querySelectorAll('.accordion [aria-expanded="true"]')
  //         ?.forEach(slide => slide.ariaExpanded = 'false')
  //   }
  // }

  const indicators: React.ReactNode[] = []
  for (let i = 0; i < slidesCount; i++) {
    indicators.push(
      <span
        key={i}
        className='inline-block aspect-square w-3 rounded-full'
      ></span>,
    )
  }

  return (
    <div className='caroussel flex flex-col gap-5'>
      <div className='flex items-center gap-5'>
        {/* Non-mobile view */}
        {maxVisible > 1 && (
          <button
            onClick={handlePrev}
            className='aspect-square h-fit'
            aria-label='Diapositive précédente'
            title='Diapositive précédente'
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}

        <div
          className={`grid flex-1 gap-5`}
          style={{ gridTemplateColumns: `repeat(${maxVisible}, 1fr)` }}
        >
          {slides.map((item, idx) => {
            const position = (idx - index + slidesCount) % slidesCount
            const isVisible = position < maxVisible
            const isNew =
              (direction === 'right' && position === maxVisible - 1) ||
              (direction === 'left' && position === 0)
            const transition =
              (maxVisible === 1 &&
                direction &&
                ((direction === 'left' &&
                  'starting:opacity-50 starting:-translate-x-full transition-[opacity,translate]') ||
                  (direction === 'right' &&
                    'starting:opacity-50 starting:translate-x-full transition-[opacity,translate]'))) ||
              (isNew &&
                'starting:opacity-50 starting:scale-75 transition-[opacity,scale]') ||
              ''

            return (
              isVisible && (
                <div
                  key={idx}
                  className={`slide slide-${position} ${transition}`}
                  style={{
                    order: position,
                    borderRight:
                      position < maxVisible - 1
                        ? '1px dashed var(--border)'
                        : 'none',
                    padding: '0 10px',
                    margin: '0 -10px',
                  }}
                >
                  {item}
                </div>
              )
            )
          })}
        </div>

        {/* Non-mobile view */}
        {maxVisible > 1 && (
          <button
            onClick={handleNext}
            className='aspect-square h-fit'
            aria-label='Diapositive suivante'
            title='Diapositive suivante'
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>

      <div className='flex justify-center gap-5'>
        {Array.from({ length: slidesCount }, (_, idx) => {
          const position = (idx - index + slidesCount) % slidesCount
          const isVisible = position < maxVisible
          return (
            <span
              key={idx}
              className={`text-md inline-flex aspect-square min-h-0 items-center justify-center rounded-full p-2 font-bold text-(--bg) ${isVisible ? 'bg-(--secondary)' : 'scale-80 bg-(--primary) transition-[scale,background] duration-300'}`}
              style={{
                order: maxVisible > 1 ? position : 'unset',
              }}
            >
              {idx + 1}
            </span>
          )
        })}
      </div>

      {/* Mobile view */}
      {maxVisible === 1 && (
        <div className='flex justify-around'>
          <button
            onClick={handlePrev}
            className='aspect-square h-fit'
            aria-label='Diapositive précédente'
            title='Diapositive précédente'
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={handleNext}
            className='aspect-square h-fit'
            aria-label='Diapositive suivante'
            title='Diapositive suivante'
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </div>
  )
}
