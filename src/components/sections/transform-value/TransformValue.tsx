import { useTranslation } from 'react-i18next'
import { CTARouterLink } from '@/components/ui/Button'

const milestones = ['nasa', 'founded', 'tigra'] as const

export function TransformValue() {
  const { t } = useTranslation('home')

  return (
    <section id="about" className="scroll-mt-6 px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-307.5">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end sm:gap-8">
          <h2 className="text-balance text-[40px] font-bold leading-[1.1] tracking-tight text-neutral-950 sm:text-5xl">
            {t('transformValue.title')}
          </h2>

          <p className="max-w-88.25 text-balance text-base leading-relaxed text-ink-800 sm:text-right">
            {t('transformValue.supporting')}
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-4xl lg:aspect-5/6">
            <img
              src="/hero/sobre-ft.jpeg"
              alt={t('transformValue.aboutImageAlt')}
              className="size-full object-cover object-[40%_60%]"
              loading="lazy"
            />
            <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-900">
              <span className="size-2 rounded-full bg-leaf-400" aria-hidden="true" />
              {t('transformValue.location')}
            </span>
          </div>

          <div>
            <p className="max-w-130 text-xl leading-relaxed text-neutral-950 sm:text-2xl sm:leading-snug">
              {t('transformValue.lead')}
            </p>

            <ol className="mt-10 border-l border-line-200">
              {milestones.map((id) => (
                <li key={id} className="relative pb-7 pl-8 last:pb-0">
                  <span
                    className="absolute -left-1.5 top-1.5 size-3 rounded-full bg-leaf-400 ring-4 ring-white"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-forest-700">
                    {t(`transformValue.milestones.${id}.date`)}
                  </span>
                  <p className="mt-1 text-lg leading-snug text-neutral-950">
                    {t(`transformValue.milestones.${id}.text`)}
                  </p>
                </li>
              ))}
            </ol>

            <CTARouterLink
              to="/sobre"
              label={t('transformValue.cta')}
              className="mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
