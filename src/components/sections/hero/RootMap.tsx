import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'
import { areaSlug } from '@/data/areas'
import type { InitiativeId } from '@/data/initiatives'

// Cada raiz termina na página da sua área
const areaIds: Record<HeroAreaId, InitiativeId> = {
  energy: 'sustainableEnergy',
  health: 'digitalHealth',
  environment: 'environmentalTech',
  iot: 'smartSystems',
}

export type HeroAreaId = 'energy' | 'health' | 'environment' | 'iot'

// Sistema de coordenadas do mapa: 1230 × 300. A origem (x = 922) fica a 75%,
// alinhada com o rebento do Hero (classe md:left-[75%]).
const W = 1230
const H = 300

type Root = {
  id: HeroAreaId
  d: string
  node: { x: number; y: number }
  /** Como a etiqueta se ancora ao nó, para não sair do ecrã nas pontas */
  labelAnchor: string
}

const roots: Root[] = [
  {
    id: 'energy',
    d: 'M922 4 C922 60 862 82 760 90 L262 110 C182 113 120 140 120 200',
    node: { x: 120, y: 200 },
    labelAnchor: '-translate-x-1/4',
  },
  {
    id: 'health',
    d: 'M922 4 C920 82 880 132 760 140 L522 150 C452 153 420 190 420 250',
    node: { x: 420, y: 250 },
    labelAnchor: '-translate-x-1/2',
  },
  {
    id: 'environment',
    d: 'M922 4 C918 50 900 80 820 95 C742 110 690 130 690 170',
    node: { x: 690, y: 170 },
    labelAnchor: '-translate-x-1/2',
  },
  {
    id: 'iot',
    d: 'M922 4 C930 60 1000 90 1060 110 C1100 125 1110 170 1110 230',
    node: { x: 1110, y: 230 },
    labelAnchor: '-translate-x-3/4',
  },
]

// Raízes finas, só decorativas
const rootlets = [
  'M560 98 C548 118 540 140 538 160',
  'M330 108 C320 128 300 140 280 146',
  'M640 146 C630 170 612 185 590 192',
  'M1000 90 C1020 118 1050 132 1080 136',
  'M852 87 C862 110 882 128 906 138',
  'M190 124 C170 130 150 128 132 120',
]

const soilSpecks = [
  [60, 60], [210, 40], [300, 230], [520, 60], [600, 270], [780, 230],
  [880, 190], [980, 270], [1180, 80], [1170, 170], [400, 30], [700, 40],
]

const pct = (value: number, total: number) => `${(value / total) * 100}%`

/** Versão desktop: raízes-circuito que terminam nas quatro áreas. */
export function RootMap({ showPulses }: { showPulses: boolean }) {
  const { t } = useTranslation('home')

  return (
    <div className="relative hidden md:block">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block h-auto w-full overflow-visible"
        role="img"
        aria-label={t('hero.rootsAria')}
      >
        <g fill="#c7d8b7" fillOpacity="0.12">
          {soilSpecks.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" />
          ))}
        </g>

        <g fill="none" stroke="#c7d8b7" strokeOpacity="0.18" strokeWidth="1.5" strokeLinecap="round">
          {rootlets.map((d) => (
            <path key={d} d={d} data-rootlet />
          ))}
        </g>

        <g fill="none" stroke="#93e14a" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round">
          {roots.map((root) => (
            <path key={root.id} id={`hero-root-${root.id}`} d={root.d} data-root />
          ))}
        </g>

        {/* Pulsos de energia: da origem para cada área */}
        {showPulses && (
          <g fill="#d7ffb1">
            {roots.map((root, index) => (
              <circle key={root.id} r="3.5">
                <animateMotion
                  dur="3.2s"
                  begin={`${1.8 + index * 0.6}s`}
                  repeatCount="indefinite"
                  path={root.d}
                />
              </circle>
            ))}
          </g>
        )}

        <ellipse cx="922" cy="6" rx="14" ry="6" fill="#93e14a" />

        {roots.map((root) => (
          <g key={root.id} data-node>
            <circle cx={root.node.x} cy={root.node.y} r="14" fill="#93e14a" fillOpacity="0.15" />
            <circle cx={root.node.x} cy={root.node.y} r="6.5" fill="#93e14a" />
          </g>
        ))}
      </svg>

      {roots.map((root) => (
        <Link
          key={root.id}
          to="/areas/$areaId"
          params={{ areaId: areaSlug(areaIds[root.id]) }}
          data-node-label
          style={{ left: pct(root.node.x, W), top: pct(root.node.y, H) }}
          className={`absolute mt-6 whitespace-nowrap rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur-sm transition-colors hover:bg-leaf-400 hover:text-forest-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf-400 ${root.labelAnchor}`}
        >
          {t(`hero.areas.${root.id}`)}
        </Link>
      ))}
    </div>
  )
}

/** Versão mobile: um tronco vertical com as quatro áreas como ramos. */
export function RootList() {
  const { t } = useTranslation('home')

  return (
    <ul
      className="relative ml-5.5 flex flex-col gap-6 border-l-2 border-leaf-400/45 py-8 pl-8 md:hidden"
      aria-label={t('hero.rootsAria')}
    >
      {roots.map((root) => (
        <li key={root.id} className="relative" data-node-label>
          <span
            className="absolute -left-8 top-3 h-0.5 w-6 bg-leaf-400/45"
            aria-hidden="true"
          />
          <span
            className="absolute -left-2.5 top-2 size-3 rounded-full bg-leaf-400 ring-4 ring-forest-950"
            aria-hidden="true"
          />
          <Link
            to="/areas/$areaId"
            params={{ areaId: areaSlug(areaIds[root.id]) }}
            className="ml-4 text-lg font-medium text-white transition-colors hover:text-leaf-400"
          >
            {t(`hero.areas.${root.id}`)}
          </Link>
        </li>
      ))}
    </ul>
  )
}
