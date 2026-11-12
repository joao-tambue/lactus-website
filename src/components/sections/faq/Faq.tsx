import { useId, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Plus } from '@phosphor-icons/react'
import { ArrowUpRightIcon } from '@/components/icons'
import { faqItems } from '@/data/faq'
import { CONTACT_EMAIL, mailtoLink } from '@/data/contact'

export function Faq() {
  const { t } = useTranslation('home')
  const [openId, setOpenId] = useState<string | null>(faqItems[0])
  const baseId = useId()

  return (
    <section id="faq" className="scroll-mt-6 bg-neutral-100 px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto grid max-w-307.5 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <h2 className="text-balance text-[36px] font-semibold leading-[1.2] text-black sm:text-[48px]">
            <Trans
              t={t}
              i18nKey="faq.title"
              components={{
                highlight: (
                  <span className="inline-block rounded-full bg-leaf-200 px-6 py-1" />
                ),
              }}
            />
          </h2>
          <p className="mt-5 max-w-100 text-base leading-relaxed text-ink-800">
            {t('faq.intro')}
          </p>

          <a
            href={mailtoLink(t('faq.askSubject'))}
            className="group mt-8 flex max-w-100 items-center justify-between gap-4 rounded-3xl bg-white p-5 transition-colors hover:bg-forest-950"
          >
            <span>
              <span className="block text-base font-semibold text-neutral-950 transition-colors group-hover:text-white">
                {t('faq.askTitle')}
              </span>
              <span className="mt-0.5 block text-sm text-neutral-500 transition-colors group-hover:text-white/60">
                {CONTACT_EMAIL}
              </span>
            </span>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest-950 text-white transition-colors group-hover:bg-lime-300 group-hover:text-emerald-950">
              <ArrowUpRightIcon className="size-4" />
            </span>
          </a>
        </div>

        <ul className="flex flex-col gap-3">
          {faqItems.map((id) => {
            const isOpen = openId === id
            const buttonId = `${baseId}-${id}-button`
            const panelId = `${baseId}-${id}-panel`
            const answer = t(`faq.items.${id}.answer`)

            return (
              <li key={id} className="rounded-3xl bg-white">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : id)}
                    className="flex w-full items-center justify-between gap-6 rounded-3xl px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-950 sm:px-7 sm:py-6"
                  >
                    <span className="text-lg font-semibold leading-snug text-neutral-950">
                      {t(`faq.items.${id}.question`)}
                    </span>
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isOpen
                          ? 'border-transparent bg-lime-300 text-emerald-950'
                          : 'border-neutral-300 text-neutral-950'
                      }`}
                      aria-hidden="true"
                    >
                      <Plus
                        size={16}
                        weight="bold"
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden" inert={!isOpen}>
                    <div className="flex max-w-150 flex-col gap-3 px-6 pb-6 text-base leading-relaxed text-ink-700 sm:px-7">
                      {answer.split('\n\n').map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
