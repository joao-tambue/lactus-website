import { ArrowUpRightIcon } from '@/components/icons'
import { type WorldCleanerCardData } from '@/data/worldCleaner'

// Same blob path exported from Figma (node 173:817), reused for every card —
// only the fill color changes between the neutral and lime variants.
const CARD_SHAPE_PATH =
  'M459.877 265.238V144.741C459.959 144.084 460.001 143.415 460.001 142.735V16C460.001 7.16344 452.838 0 444.001 0H185.955C172.137 0 158.845 15.7961 145.026 15.7961H28.001C12.537 15.7961 0.000976562 28.3321 0.000976562 43.7961V166.646C0.000326083 166.706 0 166.765 0 166.825V288C0 296.837 7.16345 304 16 304H239.671C251.522 304 262.742 293.238 274.593 293.238H431.877C447.34 293.238 459.877 280.702 459.877 265.238Z'

const SHAPE_FILL = {
  neutral: '#EFEFEF',
  lime: '#D7FFB1',
} as const

export function WorldCleanerCard({
  title,
  description,
  photo,
  variant = 'neutral',
}: WorldCleanerCardData) {
  return (
    <div className="relative h-76 w-115 shrink-0">
      <svg
        viewBox="0 0 460.001 304"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 size-full"
      >
        <path d={CARD_SHAPE_PATH} fill={SHAPE_FILL[variant]} />
      </svg>

      <div className="absolute left-6.25 top-7.5 flex items-center gap-6.5">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-4">
            <h3 className="w-49.75 text-2xl font-semibold leading-[1.2] text-black">
              {title}
            </h3>
            <p className="w-47.75 text-base leading-[1.4] text-black/65">
              {description}
            </p>
          </div>

          <a
            href="#read-more"
            className="flex items-center gap-1.75 text-base font-medium text-ink-900 transition-opacity hover:opacity-70"
          >
            Read More
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full border border-line-400">
              <ArrowUpRightIcon className="size-2.5" />
            </span>
          </a>
        </div>

        <img
          src={photo.src}
          alt={photo.alt}
          className="h-61 w-46.25 shrink-0 object-contain"
          loading="lazy"
        />
      </div>
    </div>
  )
}
