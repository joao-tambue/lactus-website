import { Trans, useTranslation } from 'react-i18next'
import { ArrowRight } from '@phosphor-icons/react'
import { LogoMark } from '@/components/icons'
import { CTALink } from '@/components/ui/Button'
import { partnerSteps } from '@/data/partnerSteps'
import { StaggerGroup, StaggerItem } from '@/components/motion/Stagger'

export function PartnerJourney() {
  const { t } = useTranslation('home')

  return (
    <section
      id="partnerships"
      className="scroll-mt-6 bg-mist-200-soft px-6 py-20 sm:px-10 lg:py-28"
    >
      <div className="mx-auto grid max-w-307.5 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-110 lg:mx-0">
          <div
            className="absolute -right-5 -top-5 hidden size-24 rounded-full bg-leaf-400 sm:block"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-4 -left-4 hidden size-12 rounded-full bg-forest-800 sm:block"
            aria-hidden="true"
          />
          <div data-reveal-image className="relative aspect-4/5 overflow-hidden rounded-4xl">
            <img
              src="/hero/team-desafio.jpeg"
              alt={t('partnerJourney.imageAlt')}
              className="size-full object-cover object-[50%_70%]"
              loading="lazy"
            />
            <span className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-900">
              <LogoMark className="size-5" />
              {t('partnerJourney.imageLabel')}
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-balance text-[36px] font-semibold leading-[1.2] text-black sm:text-[48px]">
            <Trans
              t={t}
              i18nKey="partnerJourney.title"
              components={{
                highlight: (
                  <span className="inline-block rounded-full bg-leaf-200 px-6 py-1" />
                ),
              }}
            />
          </h2>

          <p className="mt-5 max-w-130 text-lg leading-relaxed text-ink-800">
            {t('partnerJourney.lead')}
          </p>

          <StaggerGroup as="ol" className="mt-10 grid gap-4 sm:grid-cols-3">
            {partnerSteps.map((id, index) => (
              <StaggerItem as="li" key={id} className="relative rounded-3xl bg-white p-6">
                <span className="flex size-11 items-center justify-center rounded-full bg-forest-950 text-sm font-semibold text-leaf-200">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-neutral-950">
                  {t(`partnerJourney.steps.${id}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {t(`partnerJourney.steps.${id}.text`)}
                </p>

                {index < partnerSteps.length - 1 && (
                  <span
                    className="absolute -right-6 top-8.5 z-10 hidden size-8 items-center justify-center rounded-full bg-leaf-400 text-forest-950 sm:flex"
                    aria-hidden="true"
                  >
                    <ArrowRight size={14} weight="bold" />
                  </span>
                )}
              </StaggerItem>
            ))}
          </StaggerGroup>

          <CTALink
            href="#contact"
            label={t('partnerJourney.cta')}
            className="mt-10"
          />
        </div>
      </div>
    </section>
  )
}
