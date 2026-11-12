import { Trans, useTranslation } from 'react-i18next'
import { EnvelopeSimple } from '@phosphor-icons/react'
import { LogoMark } from '@/components/icons'
import { CTALink } from '@/components/ui/Button'
import { CONTACT_EMAIL, mailtoLink } from '@/data/contact'

export function Contact() {
  const { t } = useTranslation('home')

  return (
    <section id="contact" className="scroll-mt-6 px-6 py-20 sm:px-10 lg:py-28">
      <div className="relative mx-auto max-w-307.5 overflow-hidden rounded-4xl bg-forest-950 px-7 py-14 text-white sm:px-14 sm:py-20 lg:px-20 lg:py-24">
        <div
          className="absolute -left-20 -top-20 size-56 rounded-full bg-mist-200/15"
          aria-hidden="true"
        />
        <div
          className="absolute right-12 top-12 hidden size-14 rounded-full bg-forest-800 lg:block"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-28 right-[14%] hidden size-72 rounded-full bg-leaf-400 lg:block"
          aria-hidden="true"
        />

        <div className="relative max-w-170">
          <LogoMark className="size-11" />

          <h2 className="mt-8 text-balance text-[36px] font-semibold leading-[1.15] sm:text-[52px]">
            <Trans
              t={t}
              i18nKey="contact.title"
              components={{
                highlight: (
                  <span className="inline-block rounded-full bg-leaf-400 px-6 py-1 text-forest-950" />
                ),
              }}
            />
          </h2>

          <p className="mt-6 max-w-130 text-lg leading-relaxed text-white/70">
            {t('contact.text')}
          </p>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-14">
            <CTALink
              href={mailtoLink(t('contact.partnerSubject'))}
              label={t('contact.partner')}
              variant="secondary"
            />
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 text-base font-medium text-white/80 transition-colors hover:text-lime-300"
            >
              <EnvelopeSimple size={20} aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
