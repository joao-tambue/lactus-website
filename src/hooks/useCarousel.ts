import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface UseCarouselOptions {
  itemCount: number;
  /** Gap entre os cards em px — precisa bater com a classe "gap-*" usada no track */
  gap?: number;
}

/** 3 cards no desktop (lg), 2 no tablet (sm/md), 1 no mobile */
function getCardsPerView(width: number): number {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export function useCarousel({ itemCount, gap = 24 }: UseCarouselOptions) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [cardsPerView, setCardsPerView] = useState(3);
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, itemCount - cardsPerView);

  const getStep = useCallback(() => {
    const track = trackRef.current;
    const firstCard = track?.children[0] as HTMLElement | undefined;
    if (!firstCard) return 0;
    return firstCard.offsetWidth + gap;
  }, [gap]);

  const goTo = useCallback(
    (nextIndex: number) => {
      const clamped = Math.min(Math.max(nextIndex, 0), maxIndex);
      setIndex(clamped);
      gsap.to(trackRef.current, {
        x: -clamped * getStep(),
        duration: 0.7,
        ease: "power3.out",
      });
    },
    [getStep, maxIndex]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Recalcula quantos cards cabem por viewport ao redimensionar
  useEffect(() => {
    function handleResize() {
      setCardsPerView(getCardsPerView(window.innerWidth));
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reposiciona o track sempre que cardsPerView ou itemCount mudar
  useEffect(() => {
    setIndex((current) => {
      const clamped = Math.min(current, Math.max(0, itemCount - cardsPerView));
      gsap.set(trackRef.current, { x: -clamped * getStep() });
      return clamped;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsPerView, itemCount]);

  return {
    trackRef,
    containerRef,
    cardsPerView,
    canGoPrev: index > 0,
    canGoNext: index < maxIndex,
    next,
    prev,
  };
}