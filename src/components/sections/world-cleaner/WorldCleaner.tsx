import { useTranslation } from 'react-i18next'
import { worldCleanerCards } from '@/data/worldCleaner'
import { WorldCleanerCard } from './WorldCleanerCard'

export function WorldCleaner() {
  const { t } = useTranslation('home')

  return (
    <section className="px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-307.5">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-[48px] font-semibold leading-[1.2] text-black">
            {t('worldCleaner.title')}
          </h2>
          <p className="max-w-134.25 text-base leading-relaxed text-ink-800">
            {t('worldCleaner.supporting')}
          </p>
        </div>

        <div className="-mx-6 mt-15 overflow-x-auto px-6 pb-2 sm:-mx-10 sm:px-10 lg:mx-0 lg:overflow-visible lg:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-6 lg:w-full lg:justify-center">
            {worldCleanerCards.map((card) => (
              <WorldCleanerCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
