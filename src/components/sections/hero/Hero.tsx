import { FloatingImage } from './FloatingImage'
import { StarIcon } from './icons'
import longArrow from '../../../assets/icons/long-arrow.svg'
import internacionalLogo from '../../../assets/icons/internacional-logo.svg'
import linhcaCurva from '../../../assets/icons/linha-curva.svg'
import { CTAButton } from '../../ui/button'
import { floatingImages, galleryItems } from '../../../constants/hero'
import { MarqueeStrip } from '../../ui/MarqueeStrip'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 sm:px-10 lg:pt-20">
      <div className="relative mx-auto max-w-284.75">
        {/* Decorative floating circle with star */}
        <span className="absolute left-[1%] top-[75%] hidden size-12 items-center justify-center rounded-full bg-lime-100 text-emerald-900 lg:flex">
          <StarIcon className="size-7.5" />
        </span>

        {floatingImages.map((img) => (
          <FloatingImage
            key={img.alt}
            src={img.src}
            alt={img.alt}
            className={img.className}
          />
        ))}

        {/* Headline */}
        <h1 className="text-balance text-center font-sans text-[42px] font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl lg:text-[68px]">
          Efficient{' '}
          <span className="inline-block rounded-full bg-lime-300 px-4 py-1 sm:px-5">
            Scrap
          </span>{' '}
          Recycling
          <br />
          Services Near You
        </h1>

        {/* Supporting copy */}
        <p className="mx-auto mt-6 max-w-200 text-balance text-center text-sm leading-relaxed text-neutral-500 sm:text-base">
          Discover efficient scrap recycling services right in your
          neighborhood! We&apos;re dedicated to providing convenient and
          reliable scrap recycling solutions to businesses and individuals
          alike. Whether you have metal, paper, plastic, or electronics to
          recycle, our experienced team is here to help.
        </p>

        {/* CTA */}
        <div className="relative mt-8 flex justify-center">
          <CTAButton />
          <img
            src={linhcaCurva}
            alt="Linha curva"
            className="absolute top-2 left-[calc(65%-1rem)] hidden sm:block"
          />
        </div>
      </div>

      {/* Gallery strip */}
      <div className="mx-auto mt-15 max-w-307.5 flex items-center justify-center gap-4">
        {galleryItems.map((item, index) => {
          if (item.type === 'card') {
            return (
              <div
                key={index}
                className="flex aspect-138/100 flex-col justify-between rounded-2xl bg-emerald-950 p-5 text-white sm:aspect-auto sm:h-20 lg:h-32.5"
              >
                <p className="text-lg text-center font-semibold leading-snug">
                  Nasa Space
                  <br />
                  Apps Winner 2025
                </p>
                <img
                  src={longArrow}
                  alt="Seta longa"
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
                  alt="Dia Internacional do Ambiente"
                  className="size-full object-cover"
                  loading="lazy"
                />
                {/* <div className="absolute inset-0 bg-emerald-950/50" /> */}
                <span className="absolute left-3 top-5 flex flex-col justify-center items-center gap-1.5 text-lg text-center font-medium text-white">
                  <img
                    src={internacionalLogo}
                    alt="Logo do Dia Internacional do Ambiente"
                  />
                  PTNG Winners at
                  <br />
                  Tech & Innovation
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
                alt={item.alt}
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