import { useEffect, useRef, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy } from '@phosphor-icons/react'
import { CONTACT_EMAIL, mailtoLink } from '@/data/contact'

const topics = ['pilot', 'partnership', 'sponsorship', 'other'] as const
type Topic = (typeof topics)[number]

// Raízes finas que crescem da base da secção (eco do hero)
const roots = [
  'M120 320 C120 250 90 210 60 170 C40 140 38 110 44 80',
  'M120 320 C126 260 170 230 210 200 C240 178 252 150 250 118',
  'M120 320 C118 280 140 250 150 214',
  'M980 320 C980 262 1010 226 1050 196 C1080 172 1090 140 1086 104',
  'M980 320 C972 270 930 244 900 222',
]
const rootNodes = [
  [44, 80],
  [250, 118],
  [150, 214],
  [1086, 104],
  [900, 222],
]

/**
 * CTA final: faixa escura de largura total que liga ao rodapé.
 * À direita, um "compositor": escolhe-se o assunto e o e-mail abre já preenchido.
 */
export function Contact() {
  const { t } = useTranslation('home')
  const [topic, setTopic] = useState<Topic>('pilot')
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(resetTimer.current), [])

  const subject = t(`contact.subjects.${topic}`)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      window.clearTimeout(resetTimer.current)
      resetTimer.current = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      // Sem acesso à área de transferência: o endereço continua visível para copiar à mão
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-6 overflow-hidden bg-forest-950 px-6 py-24 text-white sm:px-10 lg:py-32"
    >
      <svg
        viewBox="0 0 1200 320"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-80 w-full"
      >
        <g fill="none" stroke="#93e14a" strokeOpacity="0.28" strokeWidth="1.5" strokeLinecap="round">
          {roots.map((d, index) => (
            <motion.path
              key={d}
              d={d}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: 0.2 + index * 0.12, ease: 'easeInOut' }}
            />
          ))}
        </g>
        <g fill="#93e14a" fillOpacity="0.55">
          {rootNodes.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" />
          ))}
        </g>
      </svg>

      <div className="relative mx-auto grid max-w-307.5 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <h2 className="text-balance text-[40px] font-semibold leading-[1.08] tracking-tight sm:text-[56px] lg:text-[64px]">
            <Trans
              t={t}
              i18nKey="contact.title"
              components={{
                highlight: (
                  <span className="inline-block rounded-full bg-leaf-400 px-5 py-0.5 text-forest-950" />
                ),
              }}
            />
          </h2>

          <p className="mt-7 max-w-130 text-lg leading-relaxed text-white/70">
            {t('contact.text')}
          </p>

          <p className="mt-8 flex items-center gap-3 text-base font-medium text-leaf-200">
            <span className="h-px w-10 bg-leaf-400" aria-hidden="true" />
            {t('contact.tagline')}
          </p>
        </div>

        {/* Compositor de mensagem */}
        <div className="rounded-4xl bg-white/6 p-6 ring-1 ring-white/12 backdrop-blur-sm sm:p-8">
          <p id="contact-topic-label" className="text-sm font-medium text-white/60">
            {t('contact.composerTitle')}
          </p>

          <div
            role="radiogroup"
            aria-labelledby="contact-topic-label"
            className="mt-4 flex flex-wrap gap-2"
          >
            {topics.map((id) => {
              const isSelected = topic === id

              return (
                <button
                  key={id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setTopic(id)}
                  className={`relative isolate rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf-400 ${
                    isSelected
                      ? 'text-forest-950'
                      : 'text-white/85 ring-1 ring-white/20 hover:bg-white/10'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="contact-topic-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-leaf-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {t(`contact.topics.${id}`)}
                </button>
              )
            })}
          </div>

          <div className="mt-6 rounded-2xl bg-forest-950/60 px-4 py-3 text-sm">
            <span className="text-white/45">{t('contact.subjectLabel')}: </span>
            <motion.span
              key={subject}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="inline-block text-white"
            >
              {subject}
            </motion.span>
          </div>

          <a
            href={mailtoLink(subject)}
            className="group mt-6 flex items-center justify-between gap-4 rounded-full bg-leaf-400 py-2 pl-6 pr-2 text-base font-semibold text-forest-950 transition-colors hover:bg-leaf-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
          >
            {t('contact.send')}
            <span className="flex size-11 items-center justify-center rounded-full bg-forest-950 text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
            </span>
          </a>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
            <span className="text-sm text-white/70">{CONTACT_EMAIL}</span>
            <button
              type="button"
              onClick={copyEmail}
              className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-white/85 ring-1 ring-white/20 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf-400"
            >
              {copied ? (
                <Check size={16} weight="bold" className="text-leaf-400" aria-hidden="true" />
              ) : (
                <Copy size={16} aria-hidden="true" />
              )}
              <span aria-live="polite">{copied ? t('contact.copied') : t('contact.copy')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
