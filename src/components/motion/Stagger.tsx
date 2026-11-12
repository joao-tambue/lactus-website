import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

// Cada cartão sobe com uma ligeira inclinação que "assenta" com mola
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 48, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 110, damping: 18 },
  },
}

const groupTags = { div: motion.div, ul: motion.ul, ol: motion.ol }
const itemTags = { div: motion.div, li: motion.li, article: motion.article }

type GroupProps = {
  as?: keyof typeof groupTags
  className?: string
  children: ReactNode
}

type ItemProps = {
  as?: keyof typeof itemTags
  className?: string
  children: ReactNode
}

/** Grupo que revela os filhos em cascata quando entra no ecrã. */
export function StaggerGroup({ as = 'div', className, children }: GroupProps) {
  const Tag = groupTags[as]
  return (
    <Tag
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({ as = 'div', className, children }: ItemProps) {
  const Tag = itemTags[as]
  return (
    <Tag className={className} variants={itemVariants}>
      {children}
    </Tag>
  )
}
