import { Trans, useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'
import { ArrowLeft } from '@phosphor-icons/react'
import { teamMembers } from '@/data/teamMembers'

export function AboutHero() {
  const { t } = useTranslation('about')

  const facts = [
    t('hero.facts.founded'),
    t('hero.facts.location'),
    t('hero.facts.team', { count: teamMembers.length }),
  ]

  return (
    <section className="px-6 pt-10 sm:px-10 lg:pt-14">
      <div className="mx-auto max-w-307.5">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-line-200 px-4 py-2 text-sm font-medium text-ink-900 transition-colors hover:bg-neutral-100"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {t('back')}
        </Link>

        <h1 className="mt-10 text-balance text-[44px] font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl lg:text-[72px]">
          <Trans
            t={t}
            i18nKey="hero.title"
            components={{
              highlight: (
                <span className="inline-block rounded-full bg-lime-300 px-5 py-1" />
              ),
            }}
          />
        </h1>

        <p className="mt-6 max-w-170 text-lg leading-relaxed text-neutral-500">
          {t('hero.intro')}
        </p>

        <div className="relative mt-12 overflow-hidden rounded-4xl">
          <img
            src="/hero/sobre-ft.jpeg"
            alt={t('hero.imageAlt')}
            className="h-80 w-full object-cover object-[50%_60%] sm:h-105 lg:h-130"
          />
          <ul className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 sm:inset-x-6 sm:bottom-6">
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-900"
              >
                <span className="size-2 rounded-full bg-leaf-400" aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
