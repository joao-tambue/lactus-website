// Decorative "equalizer" bars from the fiber card (Figma node 173:884): each
// column is a two-tone pill — a full-height grey track with a white segment
// flush to the bottom — and every column shares the same baseline, so a
// bottom-aligned flex row reproduces the staggered look with no extra offsets.
export function FiberBars() {
  return (
    <div className="flex items-end gap-3.5" aria-hidden="true">
      <div className="relative h-15 w-2.75 rounded-full bg-ash-200">
        <div className="absolute inset-x-0 bottom-0 h-8.25 rounded-full bg-white" />
      </div>
      <div className="relative h-18.25 w-2.75 rounded-full bg-ash-200">
        <div className="absolute inset-x-0 bottom-0 h-13 rounded-full bg-white" />
      </div>
      <div className="relative h-14.75 w-2.75 rounded-full bg-ash-200">
        <div className="absolute inset-x-0 bottom-0 h-8.75 rounded-full bg-white" />
      </div>
      <div className="relative h-18.75 w-2.75 rounded-full bg-ash-200">
        <div className="absolute inset-x-0 bottom-0 h-8.75 rounded-full bg-white" />
      </div>
      <div className="relative h-18.25 w-2.75 rounded-full bg-ash-200">
        <div className="absolute inset-x-0 bottom-0 h-12 rounded-full bg-white" />
      </div>
    </div>
  )
}
