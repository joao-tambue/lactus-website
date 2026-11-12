import { useTranslation } from 'react-i18next'

/**
 * O nome "Lactus" vem de "Galactus": o "Ga" aparece riscado e esbatido,
 * para mostrar visualmente de onde o nome nasce.
 */
export function AboutName() {
  const { t } = useTranslation('about')

  return (
    <section className="px-6 sm:px-10">
      <div className="relative mx-auto max-w-307.5 overflow-hidden rounded-4xl bg-forest-950 px-7 py-14 text-white sm:px-14 sm:py-20 lg:px-20">
        <div
          className="absolute -right-24 -top-24 size-72 rounded-full bg-forest-800"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 right-1/3 size-20 rounded-full bg-leaf-400"
          aria-hidden="true"
        />

        <div className="relative">
          <p
            className="text-[44px] font-bold uppercase leading-none tracking-tight sm:text-[72px] lg:text-[120px]"
            aria-label="Galactus → Lactus"
          >
            <span className="text-white/25 line-through decoration-leaf-400 decoration-[4px] sm:decoration-[6px]">
              Ga
            </span>
            <span className="text-leaf-400">lactus</span>
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
            <h2 className="text-2xl font-semibold">{t('name.title')}</h2>
            <p className="max-w-160 text-lg leading-relaxed text-white/70">
              {t('name.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
