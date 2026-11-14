import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export type MedalColors = {
  ribbonA: string
  ribbonB: string
  rim: string
  face: string
  ink: string
}

type HangingMedalProps = {
  colors: MedalColors
  /** Conteúdo gravado no centro da medalha (elementos SVG, centro em 80,162) */
  children: ReactNode
}

/**
 * Medalha suspensa por uma fita que desce do topo do cartão.
 * Balança como um pêndulo ao entrar no ecrã e ao passar o rato.
 */
export function HangingMedal({ colors, children }: HangingMedalProps) {
  return (
    <motion.div
      aria-hidden="true"
      className="w-36 sm:w-40"
      style={{ transformOrigin: '50% 0%' }}
      initial={{ rotate: 16 }}
      whileInView={{ rotate: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: 'spring', stiffness: 45, damping: 4 }}
      whileHover={{
        rotate: [0, -7, 5, -3, 1, 0],
        transition: { duration: 1.4, ease: 'easeInOut' },
      }}
    >
      <svg viewBox="0 0 160 220" className="h-auto w-full overflow-visible">
        {/* Fita em V */}
        <polygon points="42,0 72,0 94,110 70,117" fill={colors.ribbonA} />
        <polygon points="88,0 118,0 90,117 66,110" fill={colors.ribbonB} />
        <rect x="60" y="104" width="40" height="15" rx="5" fill={colors.rim} />

        {/* Medalha */}
        <circle cx="80" cy="162" r="52" fill={colors.rim} />
        <circle cx="80" cy="162" r="44" fill={colors.face} />
        <circle
          cx="80"
          cy="162"
          r="37"
          fill="none"
          stroke={colors.ink}
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="2 5"
        />
        <g fill={colors.ink} stroke={colors.ink}>
          {children}
        </g>
      </svg>
    </motion.div>
  )
}
