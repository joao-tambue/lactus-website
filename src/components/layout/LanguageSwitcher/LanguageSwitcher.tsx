import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDownIcon, GlobeIcon } from '@/components/icons'

const languages = [
  { code: 'en', labelKey: 'language.en' },
  { code: 'pt', labelKey: 'language.pt' },
] as const

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation('common')
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentLang = i18n.resolvedLanguage ?? i18n.language
  const current = languages.find((lang) => lang.code === currentLang) ?? languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t('language.aria')}
        className="flex items-center gap-1.5 text-sm font-medium text-neutral-950"
      >
        <GlobeIcon className="size-4" />
        <span className="uppercase">{t(current.labelKey)}</span>
        <ChevronDownIcon
          className={`size-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={t('language.menuAria')}
          className="absolute right-0 top-full z-50 mt-2 min-w-36 overflow-hidden rounded-xl border border-neutral-100 bg-white py-1 shadow-lg"
        >
          {languages.map((lang) => {
            const isSelected = lang.code === currentLang
            return (
              <button
                key={lang.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  void i18n.changeLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`block w-full px-4 py-2 text-left text-sm transition-colors ${
                  isSelected
                    ? 'bg-neutral-100 font-semibold text-neutral-950'
                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950'
                }`}
              >
                {t(lang.labelKey)}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
