import { Trans, useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'
import { motion, type Variants } from 'framer-motion'
import type { Icon } from '@phosphor-icons/react'
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle,
  Cpu,
  Heartbeat,
  Leaf,
  Lightning,
} from '@phosphor-icons/react'
import { StaggerGroup, StaggerItem } from '@/components/motion/Stagger'
import { CTARouterLink } from '@/components/ui/Button'
import { areas, type Area } from '@/data/areas'
import type { InitiativeId } from '@/data/initiatives'

const icons: Record<InitiativeId, Icon> = {
  sustainableEnergy: Lightning,
  digitalHealth: Heartbeat,
  environmentalTech: Leaf,
  smartSystems: Cpu,
}

const approachKeys = ['a', 'b', 'c'] as const
const useKeys = ['a', 'b', 'c', 'd'] as const

const approachStyles = [
  { card: 'bg-forest-950 text-white', icon: 'bg-leaf-400 text-forest-950', text: 'text-white/70' },
  { card: 'bg-neutral-100 text-neutral-950', icon: 'bg-forest-950 text-white', text: 'text-neutral-500' },
  { card: 'bg-leaf-200 text-forest-950', icon: 'bg-forest-950 text-leaf-200', text: 'text-forest-600' },
]

const pill = <span className="inline-block rounded-full bg-lime-300 px-[0.3em] text-forest-950" />

// Entrada do hero: o conteúdo sobe em cascata
const heroGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}
const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function AreaPage({ area }: { area: Area }) {
  const { t } = useTranslation('areas')
  const { t: tHome } = useTranslation('home')
  const AreaIcon = icons[area.id]

  const index = areas.findIndex((item) => item.id === area.id)
  const next = areas[(index + 1) % areas.length]
  const NextIcon = icons[next.id]
  const status = t(`items.${area.id}.status`)
  const challenge = t(`items.${area.id}.challenge`).split('\n\n')

  return (
    <>
      {/* Apresentação: foto de largura total, conteúdo por cima */}
      <section className="relative isolate flex min-h-152 items-end overflow-hidden bg-forest-950 text-white lg:min-h-176">
        {/* Parallax (GSAP) no contentor; zoom-out de entrada (framer) na imagem */}
        <div data-parallax="-0.35" className="absolute inset-x-0 -top-[12%] -z-10 h-[124%]">
          <motion.img
            src={area.heroImage}
            alt={t(`items.${area.id}.imageAlt`)}
            className="size-full object-cover"
            style={{ objectPosition: area.heroPosition }}
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-forest-950 via-forest-950/55 to-forest-950/15" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-forest-950/85 via-forest-950/35 to-transparent" aria-hidden="true" />

        <div className="mx-auto flex w-full max-w-307.5 flex-col gap-12 px-6 pb-14 pt-36 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:pb-20">
          <motion.div variants={heroGroup} initial="hidden" animate="visible" className="max-w-180">
            <motion.div variants={heroItem}>
              <Link
                to="/"
                hash="areas"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                {t('labels.back')}
              </Link>
            </motion.div>

            <motion.p variants={heroItem} className="mt-10 flex items-center gap-3 text-sm font-semibold text-leaf-200">
              <span className="flex size-10 items-center justify-center rounded-full bg-leaf-400 text-forest-950">
                <AreaIcon size={18} aria-hidden="true" />
              </span>
              {t('labels.areaOf', { current: index + 1, total: areas.length })}
            </motion.p>

            <motion.h1
              variants={heroItem}
              className="mt-6 text-balance text-[44px] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[80px]"
            >
              <Trans t={t} i18nKey={`items.${area.id}.title`} components={{ highlight: pill }} />
            </motion.h1>

            <motion.p variants={heroItem} className="mt-6 max-w-150 text-lg leading-relaxed text-white/80">
              {t(`items.${area.id}.intro`)}
            </motion.p>

            {status && (
              <motion.p
                variants={heroItem}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur-sm"
              >
                <span className="size-2 rounded-full bg-leaf-400" aria-hidden="true" />
                {status}
              </motion.p>
            )}
          </motion.div>

          {/* Atalho para as quatro áreas */}
          <motion.nav
            aria-label={t('labels.allAreas')}
            variants={heroGroup}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 lg:w-72 lg:flex-col"
          >
            {areas.map((item, i) => {
              const isCurrent = item.id === area.id
              return (
                <motion.div key={item.id} variants={heroItem}>
                  <Link
                    to="/areas/$areaId"
                    params={{ areaId: item.slug }}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium backdrop-blur-sm transition-colors ${
                      isCurrent
                        ? 'bg-leaf-400 text-forest-950'
                        : 'bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/20'
                    }`}
                  >
                    <span className={isCurrent ? 'text-forest-950/60' : 'text-white/50'}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {tHome(`initiatives.items.${item.id}.title`)}
                  </Link>
                </motion.div>
              )
            })}
          </motion.nav>
        </div>
      </section>

      {/* O desafio */}
      <section className="bg-neutral-100 px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-307.5 gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          <h2 className="text-[36px] font-semibold leading-[1.2] text-black sm:text-[48px]">
            {t('labels.challenge')}
          </h2>
          <div className="flex flex-col gap-5">
            {challenge.map((paragraph, i) => (
              <p
                key={paragraph}
                className={
                  i === 0
                    ? 'text-2xl leading-snug text-neutral-950'
                    : 'text-lg leading-relaxed text-ink-700'
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Como respondemos */}
      <section className="px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-307.5">
          <h2 className="text-[36px] font-semibold leading-[1.2] text-black sm:text-[48px]">
            {t('labels.approach')}
          </h2>

          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
            {approachKeys.map((key, i) => {
              const style = approachStyles[i]
              return (
                <StaggerItem
                  key={key}
                  as="article"
                  className={`flex min-h-64 flex-col justify-between gap-10 rounded-3xl p-7 sm:p-8 ${style.card}`}
                >
                  <span className={`flex size-11 items-center justify-center rounded-full ${style.icon}`}>
                    <AreaIcon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold leading-snug">
                      {t(`items.${area.id}.approach.${key}.title`)}
                    </h3>
                    <p className={`mt-2 text-base leading-relaxed ${style.text}`}>
                      {t(`items.${area.id}.approach.${key}.text`)}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Destaque */}
      <section className="px-6 sm:px-10">
        <div className="relative mx-auto grid max-w-307.5 items-center gap-10 overflow-hidden rounded-4xl bg-forest-950 p-7 text-white sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <div className="relative">
            <h2 className="text-[32px] font-semibold leading-[1.15] sm:text-[44px]">
              {t(`items.${area.id}.highlight.title`)}
            </h2>
            <p className="mt-5 max-w-120 text-lg leading-relaxed text-white/70">
              {t(`items.${area.id}.highlight.text`)}
            </p>
            <CTARouterLink
              to={area.highlightLink.to}
              hash={area.highlightLink.hash}
              label={t(`items.${area.id}.highlight.cta`)}
              variant="secondary"
              className="mt-10"
            />
          </div>

          {area.highlightImage ? (
            <div data-reveal-image className="aspect-4/3 overflow-hidden rounded-3xl">
              <img
                src={area.highlightImage}
                alt={t(`items.${area.id}.highlight.imageAlt`)}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          ) : (
            <div
              className="relative mx-auto flex aspect-square w-full max-w-80 items-center justify-center"
              aria-hidden="true"
            >
              <span className="absolute inset-0 rounded-full border border-white/10" />
              <span className="absolute inset-[14%] rounded-full border border-white/15" />
              <span className="absolute inset-[28%] rounded-full bg-forest-800" />
              <span className="absolute left-[8%] top-[22%] size-3 rounded-full bg-leaf-400" />
              <span className="absolute bottom-[16%] right-[12%] size-2 rounded-full bg-leaf-200" />
              <span className="relative flex size-24 items-center justify-center rounded-full bg-leaf-400 text-forest-950">
                <AreaIcon size={44} />
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Onde se aplica */}
      <section className="px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-307.5 gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          <h2 className="text-[36px] font-semibold leading-[1.2] text-black sm:text-[48px]">
            {t('labels.uses')}
          </h2>
          <StaggerGroup as="ul" className="grid gap-4 sm:grid-cols-2">
            {useKeys.map((key) => (
              <StaggerItem
                key={key}
                as="li"
                className="flex items-start gap-3 rounded-2xl border border-line-200 p-5 text-lg text-neutral-950"
              >
                <CheckCircle size={24} weight="fill" className="mt-0.5 shrink-0 text-leaf-400" aria-hidden="true" />
                {t(`items.${area.id}.uses.${key}`)}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Próxima área */}
      <section className="px-6 pb-20 sm:px-10 lg:pb-28">
        <div className="mx-auto max-w-307.5">
          <p className="text-sm font-semibold text-forest-700">{t('labels.next')}</p>

          <Link
            to="/areas/$areaId"
            params={{ areaId: next.slug }}
            className="group mt-4 grid items-center gap-6 overflow-hidden rounded-4xl bg-neutral-100 p-6 transition-colors duration-300 hover:bg-leaf-200 sm:grid-cols-[1fr_auto] sm:p-8"
          >
            <div className="flex items-start gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-forest-950 text-white">
                <NextIcon size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[28px] font-semibold leading-tight text-neutral-950 sm:text-[36px]">
                  {tHome(`initiatives.items.${next.id}.title`)}
                </p>
                <p className="mt-2 max-w-130 text-base leading-relaxed text-ink-700">
                  {tHome(`initiatives.items.${next.id}.description`)}
                </p>
              </div>
            </div>

            <div className="relative h-40 w-full overflow-hidden rounded-3xl sm:w-64">
              <img
                src={next.image}
                alt=""
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute bottom-3 right-3 flex size-11 items-center justify-center rounded-full bg-forest-950 text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
              </span>
            </div>
          </Link>

          <nav aria-label={t('labels.allAreas')} className="mt-8 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-sm text-neutral-500">{t('labels.allAreas')}:</span>
            {areas.map((item) => {
              const isCurrent = item.id === area.id
              return (
                <Link
                  key={item.id}
                  to="/areas/$areaId"
                  params={{ areaId: item.slug }}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isCurrent
                      ? 'bg-forest-950 text-white'
                      : 'border border-line-200 text-ink-900 hover:bg-neutral-100'
                  }`}
                >
                  {tHome(`initiatives.items.${item.id}.title`)}
                </Link>
              )
            })}
          </nav>
        </div>
      </section>
    </>
  )
}
