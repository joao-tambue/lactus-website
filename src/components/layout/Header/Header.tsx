import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRouterState } from '@tanstack/react-router'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { CloseIcon, MenuIcon, SearchIcon } from '@/components/icons'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import { useActiveSection } from '@/hooks/useActiveSection'

const navLinks = [
  { key: 'about', hash: 'about' },
  { key: 'lumi', hash: 'lumi' },
  { key: 'solutions', hash: 'solutions' },
  { key: 'successStories', hash: 'success-stories' },
  { key: 'resources', hash: 'faq' },
] as const

const sectionIds = navLinks.map((link) => link.hash)

// Duas formas do header: largo e transparente no topo; cápsula flutuante no scroll.
const barVariants = {
  top: {
    maxWidth: 1280,
    marginTop: 0,
    borderRadius: 0,
    paddingTop: 24,
    paddingBottom: 24,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    boxShadow: '0 0 0 0 rgba(0, 63, 46, 0)',
  },
  floating: {
    maxWidth: 1040,
    marginTop: 12,
    borderRadius: 32,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.82)',
    boxShadow: '0 18px 40px -18px rgba(0, 63, 46, 0.35)',
  },
}

const spring = { type: 'spring', stiffness: 260, damping: 32 } as const

export function Header() {
  const { t } = useTranslation('common')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFloating, setIsFloating] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  // Com o menu móvel aberto a barra fica sempre em cápsula (fundo legível)
  const isCapsule = isFloating || isMenuOpen

  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const activeSection = useActiveSection(sectionIds, pathname === '/')

  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30 })

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setIsFloating(latest > 40)
    // Esconde ao descer depressa; volta assim que se sobe
    setIsHidden(latest > previous + 4 && latest > 480 && !isMenuOpen)
    if (latest < previous) setIsHidden(false)
  })

  return (
    <header className="sticky top-0 z-50 h-22 w-full">
      <motion.div
        className="px-3"
        animate={{ y: isHidden ? '-130%' : '0%' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          variants={barVariants}
          initial={false}
          animate={isCapsule ? 'floating' : 'top'}
          transition={spring}
          className={`relative mx-auto transition-[padding] duration-300 ${
            isCapsule
              ? 'px-4 ring-1 ring-black/5 backdrop-blur-md sm:px-6'
              : 'px-3 sm:px-7'
          }`}
        >
          <div className="flex items-center justify-between gap-6">
            <Link to="/" className="flex shrink-0 items-center gap-2.5">
              <motion.img
                src="/lactus.png"
                alt="Lactus"
                initial={false}
                animate={{ width: isCapsule ? 96 : 120 }}
                transition={spring}
              />
            </Link>

            {/* Desktop nav: a pílula verde desliza para a secção ativa */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = activeSection === link.hash

                return (
                  <Link
                    key={link.key}
                    to="/"
                    hash={link.hash}
                    className={`relative isolate rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-forest-950' : 'text-neutral-950 hover:text-neutral-600'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-leaf-200"
                        transition={spring}
                      />
                    )}
                    {t(`header.nav.${link.key}`)}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden items-center gap-5 lg:flex">
              <LanguageSwitcher />

              <Link
                to="/"
                hash="contact"
                className="rounded-full bg-neutral-950 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-800"
              >
                {t('header.signUp')}
              </Link>

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
              {isMenuOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {isMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-3 border-t border-neutral-100 pb-4 pt-4">
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.key}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * index + 0.05 }}
                      >
                        <Link
                          to="/"
                          hash={link.hash}
                          className={`block rounded-2xl px-3 py-2.5 text-base font-medium ${
                            activeSection === link.hash
                              ? 'bg-leaf-200 text-forest-950'
                              : 'text-neutral-950'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t(`header.nav.${link.key}`)}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-5 flex items-center justify-between gap-4 px-3">
                    <LanguageSwitcher />
                    <Link
                      to="/"
                      hash="contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="whitespace-nowrap rounded-full bg-neutral-950 px-6 py-2.5 text-sm font-semibold text-white"
                    >
                      {t('header.signUp')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progresso de leitura: uma "raiz" lima que cresce na base da cápsula */}
          <motion.span
            aria-hidden="true"
            className="absolute inset-x-6 bottom-0 h-0.5 origin-left rounded-full bg-leaf-400"
            style={{ scaleX: progress }}
            initial={false}
            animate={{ opacity: isFloating ? 1 : 0 }}
          />
        </motion.div>
      </motion.div>
    </header>
  )
}
