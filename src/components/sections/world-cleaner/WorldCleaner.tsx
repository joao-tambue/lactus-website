import { WorldCleanerCard, type WorldCleanerCardData } from './WorldCleanerCard'

const cards: WorldCleanerCardData[] = [
  {
    title: 'Protect Our Animal',
    description:
      'Energy efficiency gains to 80% compared traditional lighting system.',
    photo: {
      src: '/world-cleaner/card1-photos.png',
      alt: 'Cabras e uma vaca junto a resíduos numa zona rural',
    },
    variant: 'neutral',
  },
  {
    title: 'Cleanup The Environment',
    description:
      'Energy efficiency gains to 80% compared traditional lighting system.',
    photo: {
      src: '/world-cleaner/card2-photos.png',
      alt: 'Montanha nevada e rebanho de ovelhas num campo verde',
    },
    variant: 'lime',
  },
  {
    title: 'Protect & Cleanup The Environment',
    description:
      'Energy efficiency gains to 80% compared traditional lighting system.',
    photo: {
      src: '/world-cleaner/card3-photos.png',
      alt: 'Pessoa de braços abertos junto a um campo de girassóis',
    },
    variant: 'neutral',
  },
]

export function WorldCleaner() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-307.5">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-[48px] font-semibold leading-[1.2] text-black">
            Make Our World Cleaner &amp; Greener!
          </h2>
          <p className="max-w-134.25 text-base leading-relaxed text-[#1e1e1e]">
            Discover efficient scrap recycling services right in your
            neighborhood! We&apos;re dedicated to providing convenient and
            reliable scrap recycling.
          </p>
        </div>

        {/* Fixed-width cards mirror the Figma design 1:1; below `lg` the row
            scrolls horizontally instead of shrinking/distorting the cards. */}
        <div className="-mx-6 mt-15 overflow-x-auto px-6 pb-2 sm:-mx-10 sm:px-10 lg:mx-0 lg:overflow-visible lg:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-6 lg:w-full lg:justify-center">
            {cards.map((card) => (
              <WorldCleanerCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
