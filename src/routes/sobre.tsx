import { createFileRoute } from '@tanstack/react-router'
import { useScrollEffects } from '@/hooks/useScrollEffects'
import { Header } from '@/components/layout/Header'
import {
  AboutHero,
  AboutName,
  AboutPurpose,
  AboutStory,
  AboutTimeline,
  AboutWork,
} from '@/components/about'
import { Contact } from '@/components/sections/contact'

export const Route = createFileRoute('/sobre')({
  component: AboutPage,
})

function AboutPage() {
  useScrollEffects('sobre')

  return (
    <>
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutName />
      <AboutTimeline />
      <AboutPurpose />
      <AboutWork />
      <Contact />
    </>
  )
}
