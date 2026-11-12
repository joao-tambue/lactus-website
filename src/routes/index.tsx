import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/sections/hero'
import { Header } from '@/components/layout/Header'
import { TransformValue } from '@/components/sections/transform-value'
import { Lumi } from '@/components/sections/lumi'
import { Initiatives } from '@/components/sections/initiatives'
import { Services } from '@/components/sections/services'
import { PartnerJourney } from '@/components/sections/partner-journey'
import { WorldCleaner } from '@/components/sections/world-cleaner'
import { Moments } from '@/components/sections/moments'
import { EcoPackaging } from '@/components/sections/eco-packaging'
import { Recognition } from '@/components/sections/recognition'
import { Testimonials } from '@/components/sections/testimonials'
import Team from '@/components/sections/team/Team'
import { Faq } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TransformValue />
      <Lumi />
      <Initiatives />
      <Services />
      <PartnerJourney />
      <WorldCleaner />
      <Moments />
      <EcoPackaging />
      <Recognition />
      <Testimonials />
      <Team />
      <Faq />
      <Contact />
    </>
  )
}
