import { createFileRoute, notFound } from '@tanstack/react-router'
import { useScrollEffects } from '@/hooks/useScrollEffects'
import { Header } from '@/components/layout/Header'
import { AreaPage } from '@/components/area/AreaPage'
import { Contact } from '@/components/sections/contact'
import { getAreaBySlug } from '@/data/areas'

export const Route = createFileRoute('/areas/$areaId')({
  beforeLoad: ({ params }) => {
    if (!getAreaBySlug(params.areaId)) throw notFound()
  },
  component: AreaRoute,
})

function AreaRoute() {
  const { areaId } = Route.useParams()
  const area = getAreaBySlug(areaId)
  useScrollEffects(`area-${areaId}`)

  if (!area) return null

  return (
    <>
      <Header />
      {/* key: ao mudar de área, a página remonta e as animações voltam a correr */}
      <AreaPage key={area.slug} area={area} />
      <Contact />
    </>
  )
}
