import { useState } from 'react'
import {
  ChevronDownIcon,
  CloseIcon,
  GlobeIcon,
  LogoMark,
  MenuIcon,
  SearchIcon,
} from './icons'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Success Stories', href: '#success-stories' },
  { label: 'Resources', href: '#resources' },
  { label: 'Solutions', href: '#solutions' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 sm:px-10">
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <LogoMark className="size-8" />
          <span className="text-lg font-semibold text-neutral-950">
            EcoScrap
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-950 transition-colors hover:text-neutral-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm font-medium text-neutral-950"
          >
            <GlobeIcon className="size-4" />
            English
            <ChevronDownIcon className="size-4" />
          </button>

          <a
            href="#sign-up"
            className="rounded-full bg-neutral-950 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Sign Up
          </a>

          <button
            type="button"
            aria-label="Pesquisar"
            className="flex size-10 items-center justify-center rounded-full text-neutral-950 transition-colors hover:bg-neutral-100"
          >
            <SearchIcon className="size-5" />
          </button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
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
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-950"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-950"
            >
              <GlobeIcon className="size-4" />
              English
              <ChevronDownIcon className="size-4" />
            </button>

            <a
              href="#sign-up"
              className="rounded-full bg-neutral-950 px-6 py-2.5 text-sm font-semibold text-white"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  )
}