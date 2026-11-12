import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Efeitos de scroll da página, ligados por atributos:
 *  - h2 das secções: sobem e a pílula verde é "pintada" como um marcador
 *  - [data-reveal-image]: a foto abre como uma janela, com zoom-out suave
 *  - [data-parallax="0.2"]: profundidade (desktop)
 *  - [data-draw="x" | "y"]: linhas que se desenham com o scroll
 *  - [data-count]: números que contam até ao valor final
 * Tudo desligado com prefers-reduced-motion.
 */
export function useScrollEffects(routeKey: string) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Títulos + marcador
      gsap.utils.toArray<HTMLElement>('main section h2').forEach((heading) => {
        const pills = heading.querySelectorAll<HTMLElement>('span.rounded-full')
        const tl = gsap.timeline({
          scrollTrigger: { trigger: heading, start: 'top 85%', once: true },
        })
        tl.from(heading, { y: 36, opacity: 0, duration: 0.8, ease: 'power3.out' })
        if (pills.length) {
          tl.fromTo(
            pills,
            { clipPath: 'inset(0% 100% 0% 0% round 999px)' },
            {
              clipPath: 'inset(0% 0% 0% 0% round 999px)',
              duration: 0.9,
              ease: 'power3.inOut',
              clearProps: 'clipPath',
            },
            '-=0.45',
          )
        }
      })

      // Fotos que abrem como uma janela
      gsap.utils.toArray<HTMLElement>('[data-reveal-image]').forEach((frame) => {
        const img = frame.querySelector('img')
        const trigger = { trigger: frame, start: 'top 95%', end: 'top 45%', scrub: 0.6 }
        gsap.fromTo(
          frame,
          { clipPath: 'inset(10% 8% 10% 8% round 2rem)' },
          { clipPath: 'inset(0% 0% 0% 0% round 2rem)', ease: 'none', scrollTrigger: trigger },
        )
        if (img) {
          gsap.fromTo(img, { scale: 1.18 }, { scale: 1, ease: 'none', scrollTrigger: trigger })
        }
      })

      // Linhas que se desenham
      gsap.utils.toArray<HTMLElement>('[data-draw]').forEach((line) => {
        const axis = line.dataset.draw === 'x' ? 'scaleX' : 'scaleY'
        gsap.fromTo(
          line,
          { [axis]: 0 },
          {
            [axis]: 1,
            ease: 'none',
            scrollTrigger: { trigger: line, start: 'top 80%', end: 'bottom 55%', scrub: 0.5 },
          },
        )
      })

      // Números que contam
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const original = el.textContent ?? ''
        const match = original.match(/(\d+)([.,]?)(\d*)/)
        if (!match) return
        const [, whole, separator, decimals] = match
        const target = Number(`${whole}.${decimals || 0}`)
        const counter = { value: 0 }
        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: () => {
            const formatted = counter.value.toFixed(decimals.length)
            el.textContent = original.replace(
              match[0],
              separator ? formatted.replace('.', separator) : formatted,
            )
          },
          onComplete: () => {
            el.textContent = original
          },
        })
      })
    })

    // Parallax só em ecrãs largos (no mobile as faixas deslizam na horizontal)
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 1024px)', () => {
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = Number(el.dataset.parallax) || 0.15
        gsap.fromTo(
          el,
          { y: speed * 120 },
          {
            y: speed * -120,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      })
    })

    // As imagens lazy mudam a altura da página: recalcula posições quando carregam
    let timer: number | undefined
    const refresh = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => ScrollTrigger.refresh(), 150)
    }
    const images = Array.from(document.images).filter((img) => !img.complete)
    images.forEach((img) => img.addEventListener('load', refresh, { once: true }))

    return () => {
      window.clearTimeout(timer)
      images.forEach((img) => img.removeEventListener('load', refresh))
      mm.revert()
    }
  }, [routeKey])
}
