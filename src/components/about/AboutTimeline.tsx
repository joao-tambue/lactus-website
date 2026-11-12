import { Trans, useTranslation } from 'react-i18next'
import { highlightPill } from './highlights'
import { SectionTitle } from './shared'

const items = ['nasa', 'founded', 'tigra', 'today'] as const

export function AboutTimeline() {
  const { t } = useTranslation('about')

  return (
    <section className="px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-307.5">
        <SectionTitle>
          <Trans t={t} i18nKey="timeline.title" components={{ highlight: highlightPill }} />
        </SectionTitle>

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Linha que liga os marcos (desktop) */}
          <span
            className="absolute left-0 right-0 top-2 hidden h-px bg-line-200 lg:block"
            aria-hidden="true"
          />

          {items.map((id, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={id} className="relative">
                <span
                  className={`relative block size-4 rounded-full ring-4 ring-white ${
                    isLast ? 'bg-leaf-400 animate-pulse motion-reduce:animate-none' : 'bg-forest-950'
                  }`}
                  aria-hidden="true"
                />
                <p
                  className={`mt-6 text-[40px] font-semibold leading-none ${
                    isLast ? 'text-forest-700' : 'text-neutral-950'
                  }`}
                >
                  {t(`timeline.items.${id}.date`)}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-neutral-950">
                  {t(`timeline.items.${id}.title`)}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-700">
                  {t(`timeline.items.${id}.text`)}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
