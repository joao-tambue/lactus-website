import { forwardRef } from "react";
import type { TeamMember } from "@/types/types";

interface DeveloperCardProps {
  member: TeamMember;
}

/**
 * Card do carrossel: fundo cinza (gradiente), nome do cargo alinhado
 * à esquerda/embaixo, e a imagem da pessoa (PNG sem fundo) ancorada
 * na parte inferior direita do card.
 */
const DeveloperCard = forwardRef<HTMLDivElement, DeveloperCardProps>(
  ({ member }, ref) => {
    return (
      <div
        ref={ref}
        className="
          card-item relative h-full w-full overflow-hidden
          rounded-[28px] sm:rounded-[32px]
          bg-[radial-gradient(130%_120%_at_18%_18%,#e9e9e9_0%,#cacacd_45%,#a8a8ac_100%)]
          aspect-[4/5] sm:aspect-[5/6] lg:aspect-[16/13]
        "
      >
        {/* Nome do cargo */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7 lg:p-9">
          <h3
            className="
              max-w-[62%] text-[1.65rem] font-medium leading-[1.08]
              tracking-tight text-white
              [text-shadow:0_2px_16px_rgba(0,0,0,0.25)]
              sm:text-3xl lg:text-[2.1rem]
            "
          >
            {member.role}
          </h3>
        </div>

        {/* Imagem da pessoa — PNG sem fundo */}
        <img
          src={member.imageSrc}
          alt={member.imageAlt}
          draggable={false}
          className="
            pointer-events-none absolute bottom-0 right-0
            h-[94%] w-auto max-w-[80%]
            object-contain object-bottom
          "
        />
      </div>
    );
  }
);

DeveloperCard.displayName = "DeveloperCard";

export default DeveloperCard;