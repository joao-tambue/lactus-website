import { Trans, useTranslation } from 'react-i18next'
import TeamMemberCard from '@/components/ui/TeamMemberCard'
import { useCarousel } from '@/hooks/useCarousel'
import { teamMembers } from '@/data/teamMembers'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

const CARD_GAP = 24

export default function Team() {
  const { t } = useTranslation('home')

  const { trackRef, containerRef, index, canGoPrev, canGoNext, next, prev } =
    useCarousel({ itemCount: teamMembers.length, gap: CARD_GAP })

  return (
    <section id="team" className="scroll-mt-6 mx-auto w-full max-w-[1800px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      {/* Cabeçalho */}
      <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-start">
        <h2 className="text-[2.75rem] text-balance font-semibold leading-[1.05] tracking-tight text-neutral-900 sm:text-[48px]">
          <Trans
            t={t}
            i18nKey="team.title"
            components={{ br: <br /> }}
          />
        </h2>

        <p className="max-w-md text-lg leading-relaxed text-neutral-600 lg:pt-2">
          {t('team.supporting')}
        </p>
      </div>

      <div ref={containerRef} className="relative overflow-hidden py-12">
        <div ref={trackRef} className="flex gap-6" style={{ willChange: 'transform' }}>
          {teamMembers.map((member, cardIndex) => {
            const isActive = index === cardIndex
            return (
              <div
                key={member.id}
                className={`
                  w-full flex-shrink-0
                  sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]
                  transition-transform duration-700 ease-out
                  ${isActive ? 'relative z-10 scale-110 opacity-100' : 'scale-90 opacity-70'}
                `}
              >
                <TeamMemberCard member={member} />
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-3">
        <button
          type="button"
          onClick={prev}
          disabled={!canGoPrev}
          aria-label={t('team.prevAria')}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          type="button"
          onClick={next}
          disabled={!canGoNext}
          aria-label={t('team.nextAria')}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}
