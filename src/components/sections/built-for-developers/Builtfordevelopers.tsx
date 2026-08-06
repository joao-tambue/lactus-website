import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DeveloperCard from "@/components/ui/Developercard";
import { useCarousel } from "@/hooks/useCarousel";
import { teamMembers } from "@/data/teamMembers";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

// Precisa bater com a classe "gap-6" (24px) usada no track abaixo
const CARD_GAP = 24;

export default function BuiltForDevelopers() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const { trackRef, containerRef, canGoPrev, canGoNext, next, prev } =
    useCarousel({ itemCount: teamMembers.length, gap: CARD_GAP });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrada do título + parágrafo
      gsap.from(headingRef.current?.children ?? [], {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Entrada dos cards do carrossel
      const cards = trackRef.current?.children;
      if (cards && cards.length) {
        gsap.from(cards, {
          opacity: 0,
          y: 32,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [trackRef, containerRef]);

  return (
    <section
      ref={sectionRef}
      className="mx-auto w-full max-w-[1800px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      {/* Cabeçalho */}
      <div
        ref={headingRef}
        className="mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-start"
      >
        <h2 className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-neutral-900 sm:text-6xl">
          Built for developers
          <br />
          for the agent-first era
        </h2>

        <p className="max-w-md text-lg leading-relaxed text-neutral-600 lg:pt-2">
          Google Antigravity is built for user trust, whether you&apos;re a
          professional developer working in a large enterprise codebase, a
          hobbyist vibe-coding in their spare time, or anyone in between.
        </p>
      </div>

      {/* Carrossel */}
      <div ref={containerRef} className="relative overflow-hidden">
        <div ref={trackRef} className="flex gap-6" style={{ willChange: "transform" }}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="w-full flex-shrink-0 sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
            >
              <DeveloperCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Navegação */}
      <div className="mt-8 flex justify-end gap-3">
        <button
          type="button"
          onClick={prev}
          disabled={!canGoPrev}
          aria-label="Anterior"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {/* Icone de navegação anterior com phosphor icons */}
          <ArrowLeft size={20} />
        </button>
        <button
          type="button"
          onClick={next}
          disabled={!canGoNext}
          aria-label="Próximo"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {/* Icone de navegação posterior com phosphor icons */}
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}