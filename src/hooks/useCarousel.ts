import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface UseCarouselOptions {
  itemCount: number
  /** Gap entre os cards em px — precisa bater com a classe "gap-*" usada no track */
  gap?: number
}

/**
 * Carrossel tipo coverflow: a card ativa é sempre centrada no container.
 */
export function useCarousel({ itemCount, gap = 24 }: UseCarouselOptions) {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [index, setIndex] = useState(
    () => Math.min(1, Math.max(0, itemCount - 1)),
  )
  const indexRef = useRef(index)
  useEffect(() => {
    indexRef.current = index
  }, [index])

  const maxIndex = Math.max(0, itemCount - 1)

  /** Posição X que deixa a card de índice `i` centrada no container */
  const getCenterX = useCallback(
    (i: number) => {
      const container = containerRef.current
      const firstCard = trackRef.current?.children[0] as HTMLElement | undefined
      if (!container || !firstCard) return 0
      const cardWidth = firstCard.offsetWidth
      return container.offsetWidth / 2 - cardWidth / 2 - i * (cardWidth + gap)
    },
    [gap],
  )

  const goTo = useCallback(
    (nextIndex: number) => {
      const clamped = Math.min(Math.max(nextIndex, 0), maxIndex)
      setIndex(clamped)
      gsap.to(trackRef.current, {
        x: getCenterX(clamped),
        duration: 0.7,
        ease: 'power3.out',
      })
    },
    [getCenterX, maxIndex],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // Centra a card ativa na montagem e ao redimensionar
  useLayoutEffect(() => {
    function centerCurrent() {
      gsap.set(trackRef.current, { x: getCenterX(indexRef.current) })
    }
    centerCurrent()
    window.addEventListener('resize', centerCurrent)
    return () => window.removeEventListener('resize', centerCurrent)
  }, [getCenterX])

  return {
    trackRef,
    containerRef,
    index,
    canGoPrev: index > 0,
    canGoNext: index < maxIndex,
    next,
    prev,
  }
}
