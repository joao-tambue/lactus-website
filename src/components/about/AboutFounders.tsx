import { Trans, useTranslation } from 'react-i18next'
import { CTARouterLink } from '@/components/ui/Button'
import { teamMembers } from '@/data/teamMembers'
import type { TeamMemberId } from '@/types/types'
import { highlightPill } from './highlights'
import { SectionTitle } from './shared'

const founderIds: TeamMemberId[] = ['anabelmoFeijo', 'israelPedro', 'catarinaMonteiro']

const avatarStyles = [
  'bg-forest-950 text-leaf-200',
  'bg-leaf-200 text-forest-950',
  'bg-leaf-400 text-forest-950',
]

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
}

export function AboutFounders() {
  const { t } = useTranslation('about')
  const { t: tHome } = useTranslation('home')

  const founders = founderIds
    .map((id) => teamMembers.find((member) => member.id === id))
    .filter((member) => member !== undefined)

  return (
    <section className="bg-neutral-100 px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-307.5">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-10">
          <SectionTitle className="max-w-160">
            <Trans t={t} i18nKey="founders.title" components={{ highlight: highlightPill }} />
          </SectionTitle>
          <p className="max-w-100 text-base leading-relaxed text-ink-800 lg:text-right">
            {t('founders.text')}
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {founders.map((member, index) => (
            <li
              key={member.id}
              className="flex items-center gap-5 rounded-3xl bg-white p-6"
            >
              <span
                className={`flex size-16 shrink-0 items-center justify-center rounded-full text-xl font-semibold ${avatarStyles[index]}`}
                aria-hidden="true"
              >
                {initials(member.name)}
              </span>
              <div>
                <p className="text-xl font-semibold text-neutral-950">{member.name}</p>
                <p className="mt-0.5 text-sm text-neutral-500">
                  {tHome(`team.members.${member.id}.role`)}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <CTARouterLink to="/" hash="team" label={t('founders.cta')} className="mt-12" />
      </div>
    </section>
  )
}
