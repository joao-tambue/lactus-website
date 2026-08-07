import { Trans, useTranslation } from 'react-i18next'
import { FloatingImage } from './FloatingImage'
import { StarIcon } from '@/components/icons'
import longArrow from '@/assets/icons/long-arrow.svg'
import internacionalLogo from '@/assets/icons/internacional-logo.svg'
import linhcaCurva from '@/assets/icons/linha-curva.svg'
import { CTAButton } from '@/components/ui/Button'
import { floatingImages, galleryItems } from '@/data/hero'
import { MarqueeStrip } from '@/components/ui/MarqueeStrip'

export function Hero() {
  const { t } = useTranslation('home')

  return (
    <section className="relative overflow-hidden px-6 pt-16 sm:px-10 lg:pt-20">
      <div className="relative mx-auto max-w-284.75">
        <span className="absolute left-[1%] top-[75%] hidden size-12 items-center justify-center rounded-full bg-lime-100 text-emerald-900 lg:flex">
          <StarIcon className="size-7.5" />
        </span>

        {floatingImages.map((img) => (
          <FloatingImage
            key={img.id}
            src={img.src}
            alt={t(`hero.floatingImages.${img.id}`)}
            className={img.className}
          />
        ))}

        <h1 className="text-balance text-center font-sans text-[42px] font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl lg:text-[68px]">
          <Trans
            t={t}
            i18nKey="hero.headline"
            components={{
              highlight: (
                <span className="inline-block rounded-full bg-lime-300 px-4 py-1 sm:px-5" />
              ),
            }}
          />
        </h1>

        <p className="mx-auto mt-6 max-w-200 text-balance text-center text-sm leading-relaxed text-neutral-500 sm:text-base">
          {t('hero.supporting')}
        </p>

        <div className="relative mt-8 flex justify-center">
          <CTAButton />
          <img
            src={linhcaCurva}
            alt={t('hero.curveAlt')}
            className="absolute top-2 left-[calc(65%-1rem)] hidden sm:block"
          />
        </div>
      </div>

      <div className="mx-auto mt-15 max-w-307.5 flex items-center justify-center gap-4">
        {galleryItems.map((item, index) => {
          if (item.type === 'card') {
            return (
              <div
                key={index}
                className="flex aspect-138/100 flex-col justify-between rounded-2xl bg-emerald-950 p-5 text-white sm:aspect-auto sm:h-20 lg:h-32.5"
              >
                <p className="text-lg text-center font-semibold leading-snug">
                  <Trans
                    t={t}
                    i18nKey="hero.nasaCard"
                    values={{ year: '2025' }}
                    components={{ br: <br /> }}
                  />
                </p>
                <img
                  src={longArrow}
                  alt={t('hero.longArrowAlt')}
                />
              </div>
            )
          }

          if (item.type === 'badge') {
            return (
              <div
                key={index}
                className="relative aspect-138/100 overflow-hidden rounded-2xl sm:aspect-auto sm:h-20 lg:h-34.5"
              >
                <img
                  src="/hero/internacional-img.png"
                  alt={t('hero.badgeImageAlt')}
                  className="size-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-3 top-5 flex flex-col justify-center items-center gap-1.5 text-lg text-center font-medium text-white">
                  <img
                    src={internacionalLogo}
                    alt={t('hero.badgeLogoAlt')}
                  />
                  <Trans
                    t={t}
                    i18nKey="hero.ptngBadge"
                    components={{ br: <br /> }}
                  />
                </span>
              </div>
            )
          }

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl sm:h-35 ${
                item.tall
                  ? 'row-span-2 aspect-193/280 sm:row-span-1 sm:h-75 lg:h-90'
                  : 'aspect-196/140 rounded-4xl'
              } lg:h-48.25`}
            >
              <img
                src={item.src}
                alt={t(`hero.gallery.${item.altKey}`)}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          )
        })}
      </div>

      <div className="-mx-6 mt-14 sm:-mx-10">
        <MarqueeStrip />
      </div>
    </section>
  )
}
