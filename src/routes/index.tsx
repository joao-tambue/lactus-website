import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/sections/hero'
import { Header } from '../components/header/Header'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}