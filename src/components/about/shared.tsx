import type { ReactNode } from 'react'

export function SectionTitle({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={`text-balance text-[36px] font-semibold leading-[1.2] text-black sm:text-[48px] ${className}`}
    >
      {children}
    </h2>
  )
}
