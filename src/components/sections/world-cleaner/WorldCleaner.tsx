import { WorldCleanerCard, type WorldCleanerCardData } from './WorldCleanerCard'

const cards: WorldCleanerCardData[] = [
  {
    title: 'Protect Our Animal',
    description:
      'Energy efficiency gains to 80% compared traditional lighting system.',
    topImage: {
      src: 'https://picsum.photos/seed/ecoscrap-goats/260/210',
      alt: 'Cabras junto a resíduos numa zona rural',
    },
    bottomImage: {
      src: 'https://picsum.photos/seed/ecoscrap-cow/260/300',
      alt: 'Vaca junto a lixo espalhado na relva',
    },
  },
  {
    title: 'Cleanup The Environment',
    description:
      'Energy efficiency gains to 80% compared traditional lighting system.',
    topImage: {
      src: 'https://picsum.photos/seed/ecoscrap-mountain/260/210',
      alt: 'Montanha coberta de neve com floresta',
    },
    bottomImage: {
      src: 'https://picsum.photos/seed/ecoscrap-sheep/260/300',
      alt: 'Rebanho de ovelhas num campo verde',
    },
    active: true,
  },
  {
    title: 'Protect & Cleanup The Environment',
    description:
      'Energy efficiency gains to 80% compared traditional lighting system.',
    topImage: {
      src: 'https://picsum.photos/seed/ecoscrap-sky/260/210',
      alt: 'Pessoa com os braços abertos para o céu',
    },
    bottomImage: {
      src: 'https://picsum.photos/seed/ecoscrap-sunflowers/260/300',
      alt: 'Campo de girassóis ao pôr do sol',
    },
  },
  {
    title: 'Reduce Waste Together',
    description:
      'Energy efficiency gains to 80% compared traditional lighting system.',
    topImage: {
      src: 'https://picsum.photos/seed/ecoscrap-forest/260/210',
      alt: 'Trilho no meio de uma floresta densa',
    },
    bottomImage: {
      src: 'https://picsum.photos/seed/ecoscrap-hands/260/300',
      alt: 'Mãos a segurar uma planta jovem',
    },
  },
]

export function WorldCleaner() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-5xl">
          Make Our World Cleaner &amp; Greener!
        </h2>
        <p className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-neutral-500 sm:text-base">
          Discover efficient scrap recycling services right in your
          neighborhood! We&apos;re dedicated to providing convenient and
          reliable scrap recycling.
        </p>
      </div>

      {/* Horizontally scrollable carousel, edge-to-edge with peek of the next card */}
      <div className="mt-14 overflow-x-auto pb-2 pt-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex snap-x snap-mandatory gap-6 pl-6 sm:pl-10">
          {cards.map((card) => (
            <WorldCleanerCard key={card.title} {...card} />
          ))}
          {/* trailing spacer keeps the last card from sitting flush against the viewport edge once scrolled fully */}
          <div className="w-px shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}