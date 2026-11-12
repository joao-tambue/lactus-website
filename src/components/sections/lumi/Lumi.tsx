import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Leaf, Cpu } from '@phosphor-icons/react'
import { CTALink } from '@/components/ui/Button'
import { LumiDiagram } from './LumiDiagram'

export function Lumi() {
  const { t } = useTranslation('home')
  const [isOn, setIsOn] = useState(true)

  return (
    <section
      id="lumi"
      className="scroll-mt-6 overflow-hidden bg-forest-950 px-6 py-20 text-white sm:px-10 lg:py-28"
    >
      <div className="mx-auto grid max-w-307.5 items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <h2 className="text-balance text-[36px] font-semibold leading-[1.2] sm:text-[48px]">
            <Trans
              t={t}
              i18nKey="lumi.title"
              components={{
                highlight: (
                  <span className="inline-block rounded-full bg-leaf-400 px-6 py-1 text-forest-950" />
                ),
              }}
            />
          </h2>

          <p className="mt-6 max-w-120 text-lg leading-relaxed text-white/85">
            {t('lumi.lead')}
          </p>
          <p className="mt-4 max-w-120 text-base leading-relaxed text-white/60">
            {t('lumi.body')}
          </p>

          <ul className="mt-7 flex flex-wrap gap-3">
            <li className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/85">
              <Leaf size={16} className="text-leaf-400" aria-hidden="true" />
              {t('lumi.uses.pathways')}
            </li>
            <li className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/85">
              <Cpu size={16} className="text-leaf-400" aria-hidden="true" />
              {t('lumi.uses.sensors')}
            </li>
          </ul>

          <div className="mt-10 flex max-w-120 items-start gap-5 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <span className="shrink-0 text-[44px] font-semibold leading-none text-leaf-400">
              {t('lumi.statValue')}
            </span>
            <p className="text-sm leading-relaxed text-white/75">
              {t('lumi.statText')}
              <span className="mt-1.5 block text-xs text-white/40">
                {t('lumi.statSource')}
              </span>
            </p>
          </div>

          <CTALink
            href="#partnerships"
            label={t('lumi.cta')}
            variant="secondary"
            className="mt-10"
          />
        </div>

        <div className="relative">
          <div className="relative rounded-4xl bg-forest-800/45 px-4 pb-20 pt-8 ring-1 ring-white/10 sm:px-8">
            <LumiDiagram
              isOn={isOn}
              title={t('lumi.diagram.aria')}
              labels={{
                microbes: t('lumi.diagram.microbes'),
                roots: t('lumi.diagram.roots'),
                led: t('lumi.diagram.led'),
              }}
            />

            <button
              type="button"
              onClick={() => setIsOn((on) => !on)}
              aria-pressed={isOn}
              className="absolute bottom-6 left-6 flex items-center gap-2.5 rounded-full bg-white/10 py-2 pl-2.5 pr-4 text-sm font-medium text-white transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf-400 sm:left-8"
            >
              <span
                className={`relative flex h-5 w-9 items-center rounded-full transition-colors duration-300 ${
                  isOn ? 'bg-leaf-400' : 'bg-white/25'
                }`}
                aria-hidden="true"
              >
                <span
                  className={`size-4 rounded-full bg-white shadow transition-transform duration-300 ${
                    isOn ? 'translate-x-4.5' : 'translate-x-0.5'
                  }`}
                />
              </span>
              {isOn ? t('lumi.toggleOn') : t('lumi.toggleOff')}
            </button>

          <figure className="absolute -bottom-8 right-4 flex flex-col items-center gap-2 sm:right-8">
            <div className="size-24 overflow-hidden rounded-full ring-4 ring-forest-950 sm:size-28">
              <img
                src="/vaso.jpeg"
                alt={t('lumi.prototypeAlt')}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="rounded-full bg-leaf-200 px-3 py-1 text-xs font-medium text-forest-950">
              {t('lumi.prototypeLabel')}
            </figcaption>
          </figure>
          </div>

          <p className="mt-12 text-sm text-white/45">{t('lumi.note')}</p>
        </div>
      </div>
    </section>
  )
}
