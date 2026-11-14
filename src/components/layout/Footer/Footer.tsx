import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'
import { LogoMark } from '@/components/icons'

const companyLinks = [
  { key: 'about', hash: 'about' },
  { key: 'team', hash: 'team' },
  { key: 'contact', hash: 'contact' },
] as const

const solutionsLinks = [
  { key: 'energy', slug: 'energia-sustentavel' },
  { key: 'health', slug: 'saude-digital' },
  { key: 'environment', slug: 'tecnologias-ambientais' },
  { key: 'iot', slug: 'sistemas-inteligentes' },
] as const

const socialLinks = [
  { key: 'facebook', href: '#', Icon: FacebookLogo },
  { key: 'instagram', href: '#', Icon: InstagramLogo },
  { key: 'linkedin', href: '#', Icon: LinkedinLogo },
] as const

export function Footer() {
  const { t } = useTranslation('common')
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#031913] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          {/* Marca */}
          <div className="flex flex-col gap-6">
            <a href="/" className="flex shrink-0 items-center gap-2.5">
              <LogoMark className="size-9" />
              <span className="text-xl font-semibold">Lactus</span>
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              {t('footer.tagline')}
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ key, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  aria-label={t(`footer.social.${key}`)}
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-lime-300 hover:text-[#031913]"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <nav aria-label={t('footer.companyTitle')}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              {t('footer.companyTitle')}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {companyLinks.map(({ key, hash }) => (
                <li key={key}>
                  <Link
                    to="/"
                    hash={hash}
                    className="text-sm text-white/70 transition-colors hover:text-lime-300"
                  >
                    {t(`footer.companyLinks.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Soluções */}
          <nav aria-label={t('footer.solutionsTitle')}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              {t('footer.solutionsTitle')}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {solutionsLinks.map(({ key, slug }) => (
                <li key={key}>
                  <Link
                    to="/areas/$areaId"
                    params={{ areaId: slug }}
                    className="text-sm text-white/70 transition-colors hover:text-lime-300"
                  >
                    {t(`footer.solutionsLinks.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            © {year} Lactus. {t('footer.rights')}
          </p>
          <p className="text-sm text-white/50">{t('footer.madeIn')}</p>
        </div>
      </div>
    </footer>
  )
}
