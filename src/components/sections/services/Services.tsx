import { Trans, useTranslation } from 'react-i18next'
import { Plant } from '@phosphor-icons/react'
import { services, type ServiceVariant } from '@/data/services'
import { StaggerGroup, StaggerItem } from '@/components/motion/Stagger'

const cardStyles: Record<
  ServiceVariant,
  { card: string; icon: string; title: string; text: string }
> = {
  dark: {
    card: 'bg-forest-950',
    icon: 'bg-leaf-400 text-forest-950',
    title: 'text-white',
    text: 'text-white/70',
  },
  neutral: {
    card: 'bg-neutral-100',
    icon: 'bg-forest-950 text-white',
    title: 'text-neutral-950',
    text: 'text-neutral-500',
  },
  lime: {
    card: 'bg-leaf-200',
    icon: 'bg-forest-950 text-leaf-200',
    title: 'text-forest-950',
    text: 'text-forest-600',
  },
}

export function Services() {
  const { t } = useTranslation('home')

  return (
    <section id="solutions" className="scroll-mt-6 px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-307.5">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-10">
          <h2 className="max-w-160 text-balance text-[36px] font-semibold leading-[1.2] text-black sm:text-[48px]">
            <Trans
              t={t}
              i18nKey="services.title"
              components={{
                highlight: (
                  <span className="inline-block rounded-full bg-leaf-200 px-6 py-1" />
                ),
              }}
            />
          </h2>

          <p className="max-w-100 text-base leading-relaxed text-ink-800 lg:text-right">
            {t('services.intro')}
          </p>
        </div>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map(({ id, Icon, variant }) => {
            const styles = cardStyles[variant]

            return (
              <StaggerItem
                as="article"
                key={id}
                className={`group flex min-h-64 flex-col justify-between gap-10 rounded-3xl p-7 transition-[translate] duration-300 hover:-translate-y-1 sm:p-9 ${styles.card}`}
              >
                <span
                  className={`flex size-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-[-8deg] ${styles.icon}`}
                >
                  <Icon size={22} aria-hidden="true" />
                </span>

                <div>
                  <h3
                    className={`max-w-90 text-2xl font-semibold leading-[1.2] ${styles.title}`}
                  >
                    {t(`services.items.${id}.title`)}
                  </h3>
                  <p className={`mt-3 max-w-110 text-base leading-relaxed ${styles.text}`}>
                    {t(`services.items.${id}.text`)}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        <p className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-full border border-line-200 px-5 py-2.5 text-center text-sm text-ink-700">
          <Plant size={16} className="shrink-0 text-forest-700" aria-hidden="true" />
          {t('services.note')}
        </p>
      </div>
    </section>
  )
}
