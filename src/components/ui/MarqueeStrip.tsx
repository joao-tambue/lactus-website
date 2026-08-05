import { StarIcon } from "../sections/hero/icons"


const marqueeItems = [
  'Eco-friendly the planet',
  'Conserve the planet',
  'Save the planet',
  'Environmentally-friendly',
  'Green the planet',
]

export function MarqueeStrip() {
  return (
    <div className="w-full overflow-hidden bg-emerald-950 py-8">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {/* Content is duplicated so the loop is seamless */}
        {[...Array(2)].map((_, groupIndex) => (
          <ul
            key={groupIndex}
            className="flex shrink-0 items-center"
            aria-hidden={groupIndex === 1}
          >
            {marqueeItems.map((item) => (
              <li
                key={item}
                className="flex shrink-0 items-center gap-6 whitespace-nowrap px-6 text-sm font-medium text-lime-100 sm:text-base"
              >
                {item}
                <StarIcon className="size-4 shrink-0 text-lime-100" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}