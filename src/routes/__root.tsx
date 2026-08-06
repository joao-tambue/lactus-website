import { useEffect } from 'react'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootLayout() {
  const { t, i18n } = useTranslation('common')

  useEffect(() => {
    document.title = t('meta.title')
    document.documentElement.lang = i18n.language
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', t('meta.description'))
    }
  }, [t, i18n.language])

  return (
    <main className="min-h-svh">
      <Outlet />
    </main>
  )
}

function NotFound() {
  const { t } = useTranslation('common')

  return (
    <section className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p>{t('notFound.title')}</p>
      <Link
        to="/"
        className="rounded-md bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
      >
        {t('notFound.back')}
      </Link>
    </section>
  )
}
