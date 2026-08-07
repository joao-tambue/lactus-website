import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/sections/hero'
import { Header } from '@/components/layout/Header'
import { TransformValue } from '@/components/sections/transform-value'
import { Initiatives } from '@/components/sections/initiatives'
import { WorldCleaner } from '@/components/sections/world-cleaner'
import { EcoPackaging } from '@/components/sections/eco-packaging'
import { Testimonials } from '@/components/sections/testimonials'
import Team from '@/components/sections/team/Team'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TransformValue />
      <Initiatives />
      <WorldCleaner />
      <EcoPackaging />
      <Testimonials />
      <Team />
    </>
  )
}