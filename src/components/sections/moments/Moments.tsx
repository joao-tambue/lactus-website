import { Trans, useTranslation } from 'react-i18next'
import { moments } from '@/data/moments'

export function Moments() {
  const { t } = useTranslation('home')

  return (
    <section className="px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-307.5">
        <div className="mx-auto max-w-180 text-center">
          <h2 className="text-balance text-[36px] font-semibold leading-[1.2] text-black sm:text-[48px]">
            <Trans
              t={t}
              i18nKey="moments.title"
              components={{
                highlight: (
                  <span className="inline-block rounded-full bg-leaf-200 px-6 py-1" />
                ),
              }}
            />
          </h2>
          <p className="mx-auto mt-4 max-w-134.25 text-base leading-relaxed text-ink-800">
            {t('moments.intro')}
          </p>
        </div>

        <div className="-mx-6 mt-15 overflow-x-auto px-6 pb-2 sm:-mx-10 sm:px-10 lg:mx-0 lg:overflow-visible lg:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max snap-x snap-mandatory gap-6 lg:grid lg:w-full lg:grid-cols-3 lg:items-end">
            {moments.map((moment) => (
              <figure
                key={moment.id}
                data-parallax={moment.parallax}
                className={`group relative h-96 w-72 shrink-0 snap-center overflow-hidden rounded-4xl sm:w-80 lg:w-auto ${moment.heightClass}`}
              >
                <img
                  src={moment.src}
                  alt={t(`moments.items.${moment.id}.alt`)}
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/45 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-900">
                  <span className="size-2 rounded-full bg-leaf-400" aria-hidden="true" />
                  {t(`moments.items.${moment.id}.label`)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
