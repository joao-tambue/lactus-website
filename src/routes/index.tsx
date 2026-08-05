import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/sections/hero'
import { Header } from '../components/header/Header'
import { TransformValue } from '../components/sections/transform-value'
import { Initiatives } from '../components/sections/initiatives/initiatives'
import { WorldCleaner } from '../components/sections/world-cleaner/WorldCleaner'

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
    </>
  )
}