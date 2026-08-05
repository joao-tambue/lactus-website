import { ArrowUpRightIcon } from './icons'

export type WorldCleanerCardData = {
  title: string
  description: string
  topImage: { src: string; alt: string }
  bottomImage: { src: string; alt: string }
  active?: boolean
}

export function WorldCleanerCard({
  title,
  description,
  topImage,
  bottomImage,
  active = false,
}: WorldCleanerCardData) {
  return (
    <div
      className={`relative w-[300px] shrink-0 snap-start rounded-[2.25rem] pb-9 pl-8 pr-8 pt-9 sm:w-[340px] ${
        active ? 'bg-lime-200' : 'bg-neutral-100'
      }`}
    >
      {/* Text content */}
      <div className="max-w-[150px] sm:max-w-[170px]">
        <h3 className="text-xl font-bold leading-snug text-neutral-950">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {description}
        </p>
        <a
          href="#read-more"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-70"
        >
          Read More
          <ArrowUpRightIcon className="size-3.5" />
        </a>
      </div>

      {/* Stacked images, bleeding above/beyond the card's top-right corner */}
      <div className="absolute -top-7 right-6 flex w-[110px] flex-col gap-3 sm:w-[130px]">
        <div className="aspect-[130/105] overflow-hidden rounded-[1.5rem]">
          <img
            src={topImage.src}
            alt={topImage.alt}
            className="size-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-[130/150] overflow-hidden rounded-[1.5rem]">
          <img
            src={bottomImage.src}
            alt={bottomImage.alt}
            className="size-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}