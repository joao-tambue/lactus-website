import { Trans, useTranslation } from 'react-i18next'
import type { Icon } from '@phosphor-icons/react'
import { Cpu, Heartbeat, Leaf, Lightning } from '@phosphor-icons/react'
import { CTARouterLink } from '@/components/ui/Button'
import type { InitiativeId } from '@/data/initiatives'
import { highlightPill } from './highlights'
import { SectionTitle } from './shared'

const areas: { id: InitiativeId; Icon: Icon }[] = [
  { id: 'sustainableEnergy', Icon: Lightning },
  { id: 'digitalHealth', Icon: Heartbeat },
  { id: 'environmentalTech', Icon: Leaf },
  { id: 'smartSystems', Icon: Cpu },
]

export function AboutWork() {
  const { t } = useTranslation('about')
  const { t: tHome } = useTranslation('home')

  return (
    <section className="px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto grid max-w-307.5 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionTitle>
            <Trans t={t} i18nKey="work.title" components={{ highlight: highlightPill }} />
          </SectionTitle>
          <p className="mt-5 max-w-100 text-lg leading-relaxed text-ink-800">
            {t('work.text')}
          </p>
          <CTARouterLink
            to="/"
            hash="solutions"
            label={t('work.cta')}
            className="mt-10"
          />
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {areas.map(({ id, Icon }) => (
            <li key={id} className="rounded-3xl bg-neutral-100 p-7">
              <span className="flex size-11 items-center justify-center rounded-full bg-forest-950 text-white">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-neutral-950">
                {tHome(`initiatives.items.${id}.title`)}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-500">
                {tHome(`initiatives.items.${id}.description`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
