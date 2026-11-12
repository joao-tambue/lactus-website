import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  CloseIcon,
  MenuIcon,
  SearchIcon,
} from '@/components/icons'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'

const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'lumi', href: '#lumi' },
  { key: 'solutions', href: '#solutions' },
  { key: 'successStories', href: '#success-stories' },
  { key: 'resources', href: '#faq' },
] as const

export function Header() {
  const { t } = useTranslation('common')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 sm:px-10">
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/lactus.png" alt="Lactus" className='w-30' />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-neutral-950 transition-colors hover:text-neutral-600"
            >
              {t(`header.nav.${link.key}`)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LanguageSwitcher />

          <a
            href="#contact"
            className="rounded-full bg-neutral-950 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            {t('header.signUp')}
          </a>

          <button
            type="button"
            aria-label={t('header.search.aria')}
            className="flex size-10 items-center justify-center rounded-full text-neutral-950 transition-colors hover:bg-neutral-100"
          >
            <SearchIcon className="size-5" />
          </button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? t('header.menu.closeAria') : t('header.menu.openAria')}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex size-10 items-center justify-center rounded-full text-neutral-950 lg:hidden"
        >
          {isMenuOpen ? (
            <CloseIcon className="size-6" />
          ) : (
            <MenuIcon className="size-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-neutral-100 px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-neutral-950"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`header.nav.${link.key}`)}
              </a>
            ))}
          </nav>

          <div className="mt-6 flex items-center justify-between gap-4">
            <LanguageSwitcher />

            <a
              href="#contact"
              className="rounded-full bg-neutral-950 px-6 py-2.5 text-sm font-semibold text-white"
            >
              {t('header.signUp')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
