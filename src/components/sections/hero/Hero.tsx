import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown } from '@phosphor-icons/react'
import { StarIcon } from '@/components/icons'
import { CTALink } from '@/components/ui/Button'
import { RootList, RootMap } from './RootMap'
import { Sprout } from './Sprout'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hero em corte de solo: em cima, a Lactus e o rebento; em baixo, as raízes
 * (que também são pistas de circuito) a ramificar para as quatro áreas.
 */
export function Hero() {
  const { t } = useTranslation('home')
  const scope = useRef<HTMLElement>(null)
  const [showPulses, setShowPulses] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: no-preference)')
    const update = () => setShowPulses(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(
      '(prefers-reduced-motion: no-preference)',
      () => {
        const drawn = gsap.utils.toArray<SVGPathElement>(
          '[data-sprout-stem], [data-root], [data-rootlet]',
        )
        drawn.forEach((path) => {
          const length = path.getTotalLength()
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
        })

        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('[data-hero-reveal]', { y: 28, opacity: 0, duration: 0.7, stagger: 0.08 })
          .to('[data-sprout-stem]', { strokeDashoffset: 0, duration: 0.5 }, '-=0.2')
          .from(
            '[data-sprout-leaf]',
            {
              scale: 0,
              transformOrigin: '50% 100%',
              duration: 0.45,
              stagger: 0.08,
              ease: 'back.out(2)',
            },
            '-=0.1',
          )
          .to('[data-root]', { strokeDashoffset: 0, duration: 1.1, stagger: 0.12, ease: 'power2.inOut' }, '-=0.5')
          .to('[data-rootlet]', { strokeDashoffset: 0, duration: 0.6, stagger: 0.05 }, '-=0.6')
          .from(
            '[data-node], [data-node-label]',
            { opacity: 0, scale: 0.6, transformOrigin: 'center', duration: 0.4, stagger: 0.07 },
            '-=0.5',
          )
          .set(drawn, { clearProps: 'strokeDasharray,strokeDashoffset' })

        // Ao sair do hero: o texto sobe e esbate-se, o rebento continua a crescer
        const exit = {
          trigger: scope.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
        gsap.to('[data-hero-copy]', { y: -80, opacity: 0.2, ease: 'none', scrollTrigger: exit })
        gsap.to('[data-sprout]', {
          scale: 1.3,
          transformOrigin: '50% 100%',
          ease: 'none',
          scrollTrigger: exit,
        })
      },
      scope,
    )

    return () => mm.revert()
  }, [])

  return (
    <section ref={scope} className="relative overflow-hidden">
      {/* Acima do solo */}
      <div className="mx-auto max-w-307.5 px-6 pt-10 sm:px-10 lg:pt-14">
        <div className="relative pb-44 md:pb-14">
          <div data-hero-copy>
          <div data-hero-reveal className="flex flex-wrap items-center justify-between gap-3">
            <span className="flex items-center gap-2 rounded-full border border-line-200 px-4 py-2 text-sm font-medium text-ink-900">
              <span className="size-2 rounded-full bg-leaf-400" aria-hidden="true" />
              {t('hero.location')}
            </span>

            <ul className="flex flex-wrap gap-2">
              {(['nasa', 'tigra'] as const).map((award) => (
                <li
                  key={award}
                  className="flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm text-ink-700"
                >
                  <StarIcon className="size-4 text-forest-700" />
                  {t(`hero.awards.${award}`)}
                </li>
              ))}
            </ul>
          </div>

          <h1
            data-hero-reveal
            className="mt-10 max-w-[14ch] text-[52px] font-semibold leading-[0.98] tracking-[-0.03em] text-neutral-950 sm:text-[76px] lg:mt-12 lg:text-[96px]"
          >
            <Trans
              t={t}
              i18nKey="hero.headline"
              components={{
                highlight: (
                  <span className="inline-block rounded-full bg-lime-300 px-[0.28em] pb-[0.06em]" />
                ),
              }}
            />
          </h1>

          <div className="mt-8 flex flex-col gap-8 md:max-w-[62%]">
            <p data-hero-reveal className="max-w-130 text-lg leading-relaxed text-ink-700">
              {t('hero.supporting')}
            </p>

            <div data-hero-reveal className="flex flex-wrap items-center gap-x-14 gap-y-5">
              <CTALink href="#contact" label={t('hero.primaryCta')} />
              <a
                href="#lumi"
                className="flex items-center gap-2 text-sm font-medium text-ink-900 underline decoration-leaf-400 decoration-2 underline-offset-[6px] transition-colors hover:text-forest-700"
              >
                {t('hero.secondaryCta')}
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          </div>

          {/* Rebento: nasce exatamente por cima da origem das raízes */}
          <div className="absolute bottom-0 left-5.5 -translate-x-1/2 md:left-[75%]">
            <Sprout className="h-32 w-24 sm:h-40 sm:w-30" />
            <span
              data-node-label
              className="absolute left-[85%] top-8 whitespace-nowrap rounded-full bg-leaf-200 px-3 py-1 text-xs font-medium text-forest-950"
            >
              {t('hero.sproutLabel')}
            </span>
          </div>
        </div>
      </div>

      {/* Solo */}
      <div className="relative bg-forest-950">
        <svg
          viewBox="0 0 1200 24"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute bottom-full left-0 h-5 w-full translate-y-px"
        >
          <path
            d="M0 24 C 180 10 360 18 560 13 S 940 4 1200 15 V24 Z"
            fill="#003f2e"
          />
        </svg>

        <div className="mx-auto max-w-307.5 px-6 pb-14 sm:px-10 md:pb-20">
          <RootMap showPulses={showPulses} />
          <RootList />
        </div>
      </div>
    </section>
  )
}
