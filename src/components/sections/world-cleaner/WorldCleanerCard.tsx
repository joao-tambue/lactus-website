import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowUpRightIcon } from '@/components/icons'
import { type WorldCleanerCardData } from '@/data/worldCleaner'

const CARD_SHAPE_PATH =
  'M459.877 265.238V144.741C459.959 144.084 460.001 143.415 460.001 142.735V16C460.001 7.16344 452.838 0 444.001 0H185.955C172.137 0 158.845 15.7961 145.026 15.7961H28.001C12.537 15.7961 0.000976562 28.3321 0.000976562 43.7961V166.646C0.000326083 166.706 0 166.765 0 166.825V288C0 296.837 7.16345 304 16 304H239.671C251.522 304 262.742 293.238 274.593 293.238H431.877C447.34 293.238 459.877 280.702 459.877 265.238Z'

// Forma "dois lóbulos" da foto (antes vinha recortada no próprio PNG).
// Coordenadas relativas (0–1) para servir a qualquer foto.
const PHOTO_SHAPE_PATH =
  'M0.2 0 H0.8 C0.91 0 1 0.07 1 0.15 V0.38 C1 0.44 0.95 0.48 0.9 0.5 C0.95 0.52 1 0.56 1 0.62 V0.85 C1 0.93 0.91 1 0.8 1 H0.2 C0.09 1 0 0.93 0 0.85 V0.62 C0 0.56 0.05 0.52 0.1 0.5 C0.05 0.48 0 0.44 0 0.38 V0.15 C0 0.07 0.09 0 0.2 0 Z'

const SHAPE_FILL = {
  neutral: '#EFEFEF',
  lime: '#D7FFB1',
} as const

export function WorldCleanerCard({
  id,
  photo,
  variant = 'neutral',
}: WorldCleanerCardData) {
  const { t } = useTranslation('home')
  const clipId = `photo-shape-${useId().replace(/[^\w-]/g, '')}`

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
              {t(`worldCleaner.cards.${id}.title`)}
            </h3>
            <p className="w-47.75 text-base leading-[1.4] text-black/65">
              {t(`worldCleaner.cards.${id}.description`)}
            </p>
          </div>

          <a
            href="#read-more"
            className="flex items-center gap-1.75 text-base font-medium text-ink-900 transition-opacity hover:opacity-70"
          >
            {t('readMore', { ns: 'common' })}
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full border border-line-400">
              <ArrowUpRightIcon className="size-2.5" />
            </span>
          </a>
        </div>

        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={PHOTO_SHAPE_PATH} />
          </clipPath>
        </svg>

        <img
          src={photo.src}
          alt={t(`worldCleaner.cards.${id}.photoAlt`)}
          className="h-61 w-46.25 shrink-0 object-cover"
          style={{ clipPath: `url(#${clipId})`, objectPosition: photo.position }}
          loading="lazy"
        />
      </div>
    </div>
  )
}
