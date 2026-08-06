import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ArrowUpRightIcon } from '@/components/icons'
import { CTAButton } from '@/components/ui/Button'
import { initiatives } from '@/data/initiatives'

export function Initiatives() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const prevIndexRef = useRef<number | null>(null)

  useEffect(() => {
    const prevIndex = prevIndexRef.current

    // Fade out the previously active image
    if (
      prevIndex !== null &&
      prevIndex !== activeIndex &&
      imageRefs.current[prevIndex]
    ) {
      gsap.to(imageRefs.current[prevIndex], {
        opacity: 0,
        scale: 0.85,
        duration: 0.25,
        ease: 'power2.in',
      })
    }

    // Animate the newly active image in
    if (activeIndex !== null && imageRefs.current[activeIndex]) {
      gsap.fromTo(
        imageRefs.current[activeIndex],
        { opacity: 0, scale: 0.82, rotate: 3, y: 18 },
        {
          opacity: 1,
          scale: 1,
          rotate: -6,
          y: 0,
          duration: 0.55,
          ease: 'back.out(1.6)',
        },
      )
    }

    prevIndexRef.current = activeIndex
  }, [activeIndex])

  return (
    <section className="bg-neutral-100 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <h2 className="text-center text-[48px] font-bold tracking-tight text-neutral-950 sm:text-5xl">
          Our Initiatives for 2024
        </h2>
      </div>

      <ul
        className="mt-14"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {initiatives.map((item, index) => {
          const isActive = activeIndex === index

          return (
            <li
              key={item.title}
              className={`relative border-t border-neutral-200 last:border-b ${
                isActive ? 'z-20' : 'z-0'
              }`}
            >
              <button
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={`block w-full text-left transition-colors duration-300 ${
                  isActive ? 'bg-emerald-950' : 'bg-transparent'
                }`}
              >
                <div className="relative mx-auto flex max-w-307.5 items-center gap-6 px-6 py-7 sm:px-10">
                  <span
                    className={`w-32 shrink-0 text-[24px] font-semibold transition-colors duration-300 sm:w-48 ${
                      isActive ? 'text-white' : 'text-neutral-950'
                    }`}
                  >
                    {item.title}
                  </span>

                  <span
                    className={`flex-1 text-[16px] w-full max-w-[411px] leading-relaxed transition-colors duration-300 ${
                      isActive ? 'text-white/80' : 'text-neutral-500'
                    }`}
                  >
                    {item.description}
                  </span>

                  <span
                    className={`ml-auto flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isActive
                        ? 'border-transparent bg-lime-300 text-emerald-950'
                        : 'border-neutral-300 bg-white text-neutral-950'
                    }`}
                  >
                    <ArrowUpRightIcon className="size-4" />
                  </span>

                  {/* Floating preview image, animated in with GSAP */}
                  <div
                    ref={(el) => {
                      imageRefs.current[index] = el
                    }}
                    style={{ opacity: 0 }}
                    className="pointer-events-none absolute right-24 top-1/2 hidden h-40 w-52 -translate-y-1/2 overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 sm:block"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </button>
            </li>
          )
        })}
      </ul>

      <div className="mx-auto mt-14 flex justify-center">
        <CTAButton />
      </div>
    </section>
  )
}