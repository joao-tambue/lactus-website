import { ArrowUpRightIcon } from './icons'

export function TransformValue() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-307.5">
        <div className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          <h2 className="text-balance text-[48px] font-bold leading-[1.1] tracking-tight text-neutral-950 sm:text-5xl">
            Transforming Scrap into Value
          </h2>

          <p className="max-w-88.25 text-balance text-right text-[16px] leading-relaxed text-base">
            Discover efficient scrap recycling neighborhood! We&apos;re
            dedicated to providing convenient reliable.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="relative">
            <div className="absolute left-0 top-0 flex items-center gap-8">
              <h3 className="text-[24px] font-medium leading-snug text-neutral-950">
                Explore our
                <br />
                solutions
              </h3>
              <a
                href="#solutions"
                aria-label="Explorar soluções"
                className="flex size-12.5 shrink-0 items-center justify-center rounded-full bg-[#003F2E] text-white transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
              >
                <ArrowUpRightIcon className="size-6" />
              </a>
            </div>

            <div className="relative aspect-390/500 w-full overflow-hidden rounded-4xl">
              <img
                src="/about/about.png"
                alt="Estufa com plantas rodeada de vegetação"
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
                    alt="Contentores de reciclagem numa rua"
                    className="size-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              

              <div className="flex flex-1 flex-col justify-center rounded-3xl bg-neutral-100 px-7 py-6">
                <h3 className="text-2xl font-bold text-neutral-950">
                  How We Make It?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  UrbanGreen tech&apos;s LED lighting solutions have
                  demonstrated energy efficiency gains
                </p>
              </div>
            </div>

            {/* Row 2: stat card */}
            <div className="flex flex-1 flex-col justify-center rounded-3xl bg-neutral-100 px-7 py-6">
              <h3 className="text-2xl font-bold text-neutral-950">
                80% Energy Efficiency
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                UrbanGreen tech&apos;s LED lighting solutions have
                demonstrated energy efficiency gains of up to 80% compared to
                traditional lighting system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}