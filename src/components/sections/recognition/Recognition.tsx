import type { ReactNode } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { StaggerGroup, StaggerItem } from '@/components/motion/Stagger'
import { HangingMedal, type MedalColors } from './HangingMedal'

type AwardId = 'nasa' | 'global' | 'tigra'

type Award = {
  id: AwardId
  card: string
  tag: string
  label: string
  medal: MedalColors
  /** Gravação no centro da medalha (SVG, centro em 80,162) */
  engraving: (medalText: string) => ReactNode
}

// Estrela da marca (mesmo desenho do StarIcon), centrada na medalha
const star = (
  <path
    stroke="none"
    transform="translate(56 138) scale(2)"
    d="M12 2c.4 3.6 1.2 6 2.8 7.6C16.4 11.2 18.8 12 22 12c-3.2 0-5.6.8-7.2 2.4C13.2 16 12.4 18.4 12 22c-.4-3.6-1.2-6-2.8-7.6C7.6 12.8 5.2 12 2 12c3.2 0 5.6-.8 7.2-2.4C10.8 8 11.6 5.6 12 2Z"
  />
)

const globe = (
  <g fill="none" strokeWidth="2.5" strokeLinecap="round">
    <circle cx="80" cy="162" r="20" />
    <ellipse cx="80" cy="162" rx="9" ry="20" />
    <path d="M60 162 H100" />
  </g>
)

const awards: Award[] = [
  {
    id: 'nasa',
    card: 'bg-forest-950 text-white',
    tag: 'border-white/20 text-white/75',
    label: 'text-white/70',
    medal: { ribbonA: '#93e14a', ribbonB: '#416d64', rim: '#d7ffb1', face: '#93e14a', ink: '#003f2e' },
    engraving: (medalText) => (
      <text
        x="80"
        y="173"
        textAnchor="middle"
        stroke="none"
        fontFamily="Outfit, sans-serif"
        fontSize="32"
        fontWeight="700"
      >
        {medalText}
      </text>
    ),
  },
  {
    id: 'global',
    card: 'bg-leaf-200 text-forest-950',
    tag: 'border-forest-950/20 text-forest-950',
    label: 'text-forest-600',
    medal: { ribbonA: '#003f2e', ribbonB: '#265949', rim: '#265949', face: '#003f2e', ink: '#d7ffb1' },
    engraving: () => globe,
  },
  {
    id: 'tigra',
    card: 'bg-neutral-100 text-neutral-950',
    tag: 'border-neutral-300 text-ink-700',
    label: 'text-neutral-500',
    medal: { ribbonA: '#003f2e', ribbonB: '#93e14a', rim: '#93e14a', face: '#d7ffb1', ink: '#003f2e' },
    engraving: () => star,
  },
]

export function Recognition() {
  const { t } = useTranslation('home')

  return (
    <section
      id="success-stories"
      className="scroll-mt-6 px-6 py-20 sm:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-307.5">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-10">
          <h2 className="max-w-170 text-balance text-[36px] font-semibold leading-[1.2] text-black sm:text-[48px]">
            <Trans
              t={t}
              i18nKey="recognition.title"
              components={{
                highlight: (
                  <span className="inline-block rounded-full bg-leaf-200 px-6 py-1" />
                ),
              }}
            />
          </h2>
          <p className="max-w-100 text-base leading-relaxed text-ink-800 lg:text-right">
            {t('recognition.text')}
          </p>
        </div>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {awards.map((award) => (
            <StaggerItem
              key={award.id}
              as="article"
              className={`flex min-h-112 flex-col items-center rounded-4xl px-7 pb-8 text-center ${award.card}`}
            >
              <HangingMedal colors={award.medal}>
                {award.engraving(t('recognition.awards.nasa.medal'))}
              </HangingMedal>

              <span
                className={`mt-6 rounded-full border px-3 py-1 text-xs font-medium ${award.tag}`}
              >
                {t(`recognition.awards.${award.id}.tag`)}
              </span>

              <h3 className="mt-auto pt-6 text-[32px] font-semibold leading-[1.05] lg:text-[36px]">
                {t(`recognition.awards.${award.id}.value`)}
              </h3>
              <p className={`mt-3 max-w-64 text-base leading-snug ${award.label}`}>
                {t(`recognition.awards.${award.id}.label`)}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
