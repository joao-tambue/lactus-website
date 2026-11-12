import { Trans, useTranslation } from 'react-i18next'
import { Compass, Eye, Heart } from '@phosphor-icons/react'
import { highlightPill } from './highlights'
import { SectionTitle } from './shared'
import { StaggerGroup, StaggerItem } from '@/components/motion/Stagger'

const values = ['innovation', 'sustainability', 'socialImpact', 'localContext'] as const

export function AboutPurpose() {
  const { t } = useTranslation('about')

  return (
    <section className="bg-mist-200-soft px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-307.5">
        <SectionTitle className="text-center">
          <Trans t={t} i18nKey="purpose.title" components={{ highlight: highlightPill }} />
        </SectionTitle>

        <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          <StaggerItem as="article" className="flex min-h-80 flex-col justify-between gap-10 rounded-4xl bg-leaf-200 p-8">
            <span className="flex size-12 items-center justify-center rounded-full bg-forest-950 text-leaf-200">
              <Compass size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-2xl font-semibold text-forest-950">
                {t('purpose.mission.title')}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-forest-600">
                {t('purpose.mission.text')}
              </p>
            </div>
          </StaggerItem>

          <StaggerItem as="article" className="flex min-h-80 flex-col justify-between gap-10 rounded-4xl bg-forest-950 p-8 text-white">
            <span className="flex size-12 items-center justify-center rounded-full bg-leaf-400 text-forest-950">
              <Eye size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-2xl font-semibold">{t('purpose.vision.title')}</h3>
              <p className="mt-3 text-lg leading-relaxed text-white/70">
                {t('purpose.vision.text')}
              </p>
            </div>
          </StaggerItem>

          <StaggerItem as="article" className="flex min-h-80 flex-col justify-between gap-10 rounded-4xl bg-white p-8">
            <span className="flex size-12 items-center justify-center rounded-full bg-forest-950 text-white">
              <Heart size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-2xl font-semibold text-neutral-950">
                {t('purpose.values.title')}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {values.map((id) => (
                  <li
                    key={id}
                    className="rounded-full border border-line-200 px-4 py-2 text-sm font-medium text-ink-900"
                  >
                    {t(`purpose.values.items.${id}`)}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  )
}
