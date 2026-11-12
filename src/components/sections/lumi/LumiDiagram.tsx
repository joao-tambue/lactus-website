type LumiDiagramProps = {
  isOn: boolean
  title: string
  labels: { microbes: string; roots: string; led: string }
}

// Caminhos dos fios: do elétrodo (no solo) até ao LED.
const ANODE_WIRE = 'M232 360 H262 C290 360 304 350 304 322 V134'
const CATHODE_WIRE = 'M232 281 H262 C282 281 290 272 290 254 V134'

const MICROBES = [
  { cx: 134, cy: 302, r: 3.5, delay: '0s' },
  { cx: 226, cy: 310, r: 3, delay: '-1.2s' },
  { cx: 162, cy: 336, r: 4, delay: '-2.1s' },
  { cx: 206, cy: 342, r: 3, delay: '-0.6s' },
  { cx: 146, cy: 372, r: 3, delay: '-1.7s' },
  { cx: 218, cy: 374, r: 3.5, delay: '-2.6s' },
  { cx: 190, cy: 318, r: 2.5, delay: '-3.1s' },
  { cx: 238, cy: 344, r: 2.5, delay: '-0.3s' },
]

/**
 * Ilustração do princípio do Lumi: microrganismos à volta das raízes libertam
 * eletrões, o elétrodo recolhe-os e a corrente acende um LED.
 */
export function LumiDiagram({ isOn, title, labels }: LumiDiagramProps) {
  return (
    <svg
      viewBox="-50 20 410 400"
      role="img"
      aria-label={title}
      className="lumi-diagram h-auto w-full"
      data-on={isOn}
    >
      <defs>
        <radialGradient id="lumi-glow">
          <stop offset="0%" stopColor="#d7ffb1" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#93e14a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#93e14a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Planta */}
      <path
        d="M180 256 C178 222 183 192 180 150"
        stroke="#93e14a"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M180 244 C150 226 118 204 86 160 C128 174 160 198 180 234 Z" fill="#93e14a" />
      <path d="M180 240 C212 218 240 192 268 150 C228 166 198 192 180 230 Z" fill="#6fd11b" />
      <path d="M180 204 C162 174 148 142 144 100 C168 128 182 162 182 200 Z" fill="#c7d8b7" />
      <path d="M182 214 C202 182 216 150 234 116 C230 156 208 188 184 218 Z" fill="#d7ffb1" />
      <path d="M180 162 C176 130 178 100 188 68 C195 104 191 138 182 164 Z" fill="#93e14a" />

      {/* Vaso em corte */}
      <rect x="80" y="238" width="200" height="20" rx="10" fill="#416d64" />
      <path
        d="M92 258 H268 L252 390 Q250 398 242 398 H118 Q110 398 108 390 Z"
        fill="#265949"
      />
      <path d="M110 268 H250 L238 382 H122 Z" fill="#0d2c22" />

      {/* Raízes */}
      <g stroke="#c7d8b7" strokeOpacity="0.55" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M180 268 C176 300 160 322 150 352" />
        <path d="M180 268 C186 298 204 320 214 354" />
        <path d="M180 268 C181 302 183 332 178 370" />
        <path d="M164 318 C152 320 142 326 136 336" />
        <path d="M199 314 C212 314 222 320 228 330" />
      </g>

      {/* Elétrodos */}
      <rect x="128" y="277" width="104" height="7" rx="3.5" fill="#b0b0b0" />
      <rect x="128" y="356" width="104" height="8" rx="4" fill="#b0b0b0" />

      {/* Microrganismos */}
      <g fill="#93e14a">
        {MICROBES.map((m) => (
          <circle
            key={`${m.cx}-${m.cy}`}
            className="lumi-microbe"
            cx={m.cx}
            cy={m.cy}
            r={m.r}
            style={{ animationDelay: m.delay }}
          />
        ))}
      </g>

      {/* Fios */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d={ANODE_WIRE} stroke="#416d64" strokeWidth="4" />
        <path d={CATHODE_WIRE} stroke="#416d64" strokeWidth="4" />
        <path className="lumi-current" d={ANODE_WIRE} stroke="#d7ffb1" strokeWidth="2.5" />
        <path
          className="lumi-current lumi-current--return"
          d={CATHODE_WIRE}
          stroke="#d7ffb1"
          strokeWidth="2.5"
        />
      </g>

      {/* LED */}
      <circle className="lumi-glow" cx="297" cy="100" r="64" fill="url(#lumi-glow)" />
      <rect x="286" y="116" width="22" height="20" rx="4" fill="#b0b0b0" />
      <circle className="lumi-bulb" cx="297" cy="100" r="17" />

      {/* Legendas */}
      <g fontFamily="Outfit, sans-serif" fontSize="12" fill="#ffffff" fillOpacity="0.7">
        <path d="M124 300 H70" stroke="#ffffff" strokeOpacity="0.3" />
        <text x="66" y="304" textAnchor="end">{labels.microbes}</text>
        <path d="M150 352 H70" stroke="#ffffff" strokeOpacity="0.3" />
        <text x="66" y="356" textAnchor="end">{labels.roots}</text>
        <text x="297" y="62" textAnchor="middle">{labels.led}</text>
      </g>
    </svg>
  )
}
