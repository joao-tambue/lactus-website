import { Trans, useTranslation } from 'react-i18next'
import { ArrowUpRightIcon } from '@/components/icons'

export function TransformValue() {
  const { t } = useTranslation('home')

  return (
    <section id="about" className="scroll-mt-6 px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-307.5">
        <div className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          <h2 className="text-balance text-[48px] font-bold leading-[1.1] tracking-tight text-neutral-950 sm:text-5xl">
            {t('transformValue.title')}
          </h2>

          <p className="max-w-88.25 text-balance text-right text-[16px] leading-relaxed text-base">
            {t('transformValue.supporting')}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="relative">
            <div className="absolute left-0 top-0 flex items-center gap-8">
              <h3 className="text-[24px] font-medium leading-snug text-neutral-950">
                <Trans
                  t={t}
                  i18nKey="transformValue.exploreTitle"
                  components={{ br: <br /> }}
                />
              </h3>
              <a
                href="#solutions"
                aria-label={t('transformValue.exploreAria')}
                className="flex size-12.5 shrink-0 items-center justify-center rounded-full bg-forest-950 text-white transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
              >
                <ArrowUpRightIcon className="size-6" />
              </a>
            </div>

            <div className="relative aspect-390/500 w-full overflow-hidden rounded-4xl">
              <img
                src="/about/about.png"
                alt={t('transformValue.aboutImageAlt')}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className='bg-gray-100 rounded-full p-4'>
                <div className="mx-auto size-40 shrink-0 overflow-hidden rounded-full sm:mx-0 sm:size-[178px]">
                  <img
                    src="/vaso.jpeg"
                    alt={t('transformValue.containersImageAlt')}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center rounded-3xl bg-neutral-100 px-7 py-6">
                <h3 className="text-2xl font-bold text-neutral-950">
                  {t('transformValue.howTitle')}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {t('transformValue.howText')}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center rounded-3xl bg-neutral-100 px-7 py-6">
              <h3 className="text-2xl font-bold text-neutral-950">
                {t('transformValue.statTitle')}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {t('transformValue.statText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
