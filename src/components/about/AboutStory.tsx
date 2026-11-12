import { Trans, useTranslation } from 'react-i18next'
import { highlightPill } from './highlights'
import { SectionTitle } from './shared'

const paragraphs = ['start', 'win', 'birth', 'today'] as const

export function AboutStory() {
  const { t } = useTranslation('about')

  return (
    <section className="px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto grid max-w-307.5 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <SectionTitle>
            <Trans t={t} i18nKey="story.title" components={{ highlight: highlightPill }} />
          </SectionTitle>

          <div className="mt-10 hidden aspect-4/5 max-w-90 overflow-hidden rounded-4xl lg:block">
            <img
              src="/hero/team-desafio.jpeg"
              alt={t('story.imageAlt')}
              className="size-full object-cover object-[50%_65%]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {paragraphs.map((id, index) => (
            <p
              key={id}
              className={
                index === 0
                  ? 'text-2xl leading-snug text-neutral-950'
                  : 'text-lg leading-relaxed text-ink-700'
              }
            >
              {t(`story.paragraphs.${id}`)}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
