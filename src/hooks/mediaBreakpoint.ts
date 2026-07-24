import { useState, useEffect } from 'react'

// Tailwind default values
const MEDIA_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export default function useMediaBreakpoint() {
  const [mediaBreakpoint, setMediaBreakpoint] = useState<
    'xs' | keyof typeof MEDIA_BREAKPOINTS
  >('xs')

  useEffect(() => {
    const updateBreakpoint = () => {
      const windowWidth = window.innerWidth
      const breakpoints = Object.entries(MEDIA_BREAKPOINTS).reverse()

      for (const [key, value] of breakpoints) {
        if (windowWidth >= value) {
          setMediaBreakpoint(key as keyof typeof MEDIA_BREAKPOINTS)
          return
        }
      }
      setMediaBreakpoint('xs')
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return mediaBreakpoint
}
