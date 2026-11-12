import { useEffect, useState } from 'react'
import { useRouter } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { LogoMark } from '@/components/icons'

/**
 * Transição entre páginas: uma "camada de solo" verde cobre o ecrã e sobe,
 * revelando a página nova. Não corre no primeiro carregamento nem em
 * navegação só por âncoras (#secção).
 */
export function PageCurtain() {
  const router = useRouter()
  const [curtainKey, setCurtainKey] = useState(0)

  useEffect(() => {
    return router.subscribe('onResolved', (event) => {
      if (event.pathChanged) setCurtainKey((key) => key + 1)
    })
  }, [router])

  if (curtainKey === 0) return null

  return (
    <motion.div
      key={curtainKey}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-60 flex items-center justify-center bg-forest-950"
      initial={{ y: '0%' }}
      animate={{ y: '-115%' }}
      transition={{ duration: 0.85, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0, rotate: -40 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <LogoMark className="size-14" />
      </motion.div>

      {/* Borda inferior ondulada, como a linha do solo do hero */}
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="absolute left-0 top-full h-10 w-full"
      >
        <path d="M0 0 H1200 V18 C 940 40 760 22 560 30 S 180 40 0 22 Z" fill="#003f2e" />
      </svg>
    </motion.div>
  )
}
