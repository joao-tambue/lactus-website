import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootLayout() {
  return (
    <main className="min-h-svh">
      <Outlet />
    </main>
  )
}

function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p>Página não encontrada</p>
      <Link
        to="/"
        className="rounded-md bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
      >
        Voltar para a página principal
      </Link>
    </section>
  )
}
