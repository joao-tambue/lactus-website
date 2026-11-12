/** Rebento que nasce da linha do solo, por cima da origem das raízes. */
export function Sprout({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 160"
      aria-hidden="true"
      className={className}
      data-sprout
    >
      <path
        data-sprout-stem
        d="M60 160 C60 132 56 112 60 80"
        fill="none"
        stroke="#6fd11b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        data-sprout-leaf
        d="M60 114 C40 106 25 90 22 66 C44 72 57 89 60 110 Z"
        fill="#93e14a"
      />
      <path
        data-sprout-leaf
        d="M60 98 C79 88 94 71 97 47 C75 53 62 70 60 94 Z"
        fill="#6fd11b"
      />
      <path
        data-sprout-leaf
        d="M60 84 C53 67 55 50 64 36 C71 53 69 69 61 84 Z"
        fill="#d7ffb1"
      />
    </svg>
  )
}
