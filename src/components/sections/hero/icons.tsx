export function StarIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2c.4 3.6 1.2 6 2.8 7.6C16.4 11.2 18.8 12 22 12c-3.2 0-5.6.8-7.2 2.4C13.2 16 12.4 18.4 12 22c-.4-3.6-1.2-6-2.8-7.6C7.6 12.8 5.2 12 2 12c3.2 0 5.6-.8 7.2-2.4C10.8 8 11.6 5.6 12 2Z" />
    </svg>
  )
}

export function ArrowUpRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function CurvedArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 70"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 4c30 2 68 6 78 30 6 15-4 26-18 28"
        stroke="currentColor"
        strokeWidth={2}
        strokeDasharray="1 8"
        strokeLinecap="round"
      />
      <path
        d="M52 52l12 12 10-16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}