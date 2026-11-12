import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/layout/Header'
import {
  AboutFounders,
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
  return (
    <>
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutName />
      <AboutTimeline />
      <AboutPurpose />
      <AboutWork />
      <AboutFounders />
      <Contact />
    </>
  )
}
