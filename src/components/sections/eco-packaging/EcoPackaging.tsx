import { FiberBars } from './FiberBars'

export function EcoPackaging() {
  return (
    <section className="bg-mist-200-soft px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-307.5">
        <h2 className="mx-auto max-w-177.5 text-balance text-center text-[48px] font-semibold leading-[1.2] text-black">
          Reducing Plastic Waste Through{' '}
          <span className="inline-block rounded-full bg-leaf-200 px-8 py-1.5">
            Eco-Friendly
          </span>{' '}
          Packaging
        </h2>

        {/* Fixed-width cards mirror the Figma design 1:1; below `lg` the row
            scrolls horizontally instead of shrinking/distorting the cards. */}
        <div className="-mx-6 mt-15 overflow-x-auto px-6 pb-2 sm:-mx-10 sm:px-10 lg:mx-0 lg:overflow-visible lg:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-6 lg:w-full lg:justify-center">
            {/* Card 1 — GreenWarp brand mark over a foliage photo */}
            <div className="relative h-89.5 w-66.75 shrink-0 overflow-hidden rounded-2xl">
              <img
                src="/eco-packaging/card-leaves.png"
                alt="Folhagem verde escura, imagem de fundo da marca GreenWarp"
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute -left-21.5 -top-21.25 size-43.75 rounded-full bg-mist-200"
                aria-hidden="true"
              />
              <div
                className="absolute left-60.5 -top-6.5 size-13.75 rounded-full bg-forest-800"
                aria-hidden="true"
              />
              <div
                className="absolute left-35.75 top-62.5 size-43.75 rounded-full bg-leaf-400"
                aria-hidden="true"
              />
              <img
                src="/eco-packaging/twig-decoration.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -left-0.5 top-70 h-20 w-23"
              />
              <div className="absolute left-1/2 top-27 flex size-13 -translate-x-1/2 items-center justify-center rounded-lg bg-forest-700 p-2.75">
                <img
                  src="/eco-packaging/badge-icon.svg"
                  alt=""
                  className="size-9"
                />
              </div>
              <p className="absolute left-1/2 top-46.125 w-max -translate-x-1/2 -translate-y-1/2 text-center text-base font-medium leading-[1.2] text-white">
                GreenWarp
              </p>
            </div>

            {/* Card 2 — misty mountain road with fiber sourcing copy */}
            <div className="relative h-89.5 w-66.75 shrink-0 overflow-hidden rounded-2xl">
              <img
                src="/eco-packaging/card-mountains.png"
                alt="Estrada sinuosa entre montanhas cobertas de nevoeiro"
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/36" aria-hidden="true" />
              <div className="absolute inset-x-0 top-29.75 flex flex-col items-center gap-16.5 px-4">
                <p className="max-w-47 text-center text-xl font-medium leading-[1.5] text-white">
                  Recycled/renewable/organic fibers.
                </p>
                <FiberBars />
              </div>
            </div>

            {/* Card 3 — mission statement on solid lime */}
            <div className="relative flex h-89.5 w-66.75 shrink-0 flex-col items-start gap-2 overflow-hidden rounded-2xl bg-leaf-200 px-7.25 py-19.5">
              <img
                src="/eco-packaging/target-icon.svg"
                alt=""
                className="relative size-12"
              />
              <p className="relative w-52.25 text-2xl leading-[1.2] text-forest-600">
                Our mission is to make sustainable food packaging solutions
                accessible to everyone
              </p>
              <img
                src="/eco-packaging/pattern-bg.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -left-23.25 -top-14 h-108 w-102"
              />
            </div>

            {/* Card 4 — pebble texture with recycling mark */}
            <div className="relative h-89.5 w-66.75 shrink-0 overflow-hidden rounded-2xl">
              <img
                src="/eco-packaging/card-pebbles.png"
                alt="Seixos e folhas molhadas, texturas naturais"
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
              />
              <img
                src="/eco-packaging/recycle-icon.svg"
                alt="Símbolo de reciclagem"
                className="absolute left-24.5 top-35.75 size-18"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
