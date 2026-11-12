import { Trans, useTranslation } from 'react-i18next'
import { StarIcon } from '@/components/icons'
import { StaggerGroup, StaggerItem } from '@/components/motion/Stagger'

export function Recognition() {
  const { t } = useTranslation('home')

  return (
    <section
      id="success-stories"
      className="scroll-mt-6 px-6 py-20 sm:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-307.5">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-10">
          <h2 className="max-w-170 text-balance text-[36px] font-semibold leading-[1.2] text-black sm:text-[48px]">
            <Trans
              t={t}
              i18nKey="recognition.title"
              components={{
                highlight: (
                  <span className="inline-block rounded-full bg-leaf-200 px-6 py-1" />
                ),
              }}
            />
          </h2>
          <p className="max-w-100 text-base leading-relaxed text-ink-800 lg:text-right">
            {t('recognition.text')}
          </p>
        </div>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {/* NASA Space Apps */}
          <StaggerItem as="article" className="flex min-h-100 flex-col justify-between gap-8 rounded-4xl bg-forest-950 p-7 text-white">
            <div className="flex items-center justify-between gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-leaf-400 text-forest-950">
                <StarIcon className="size-6" />
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/75">
                {t('recognition.awards.nasa.tag')}
              </span>
            </div>
            <div>
              <p className="text-[40px] font-semibold leading-none">
                {t('recognition.awards.nasa.value')}
              </p>
              <p className="mt-3 text-base leading-snug text-white/70">
                {t('recognition.awards.nasa.label')}
              </p>
            </div>
            <img
              src="/esquerda.png"
              alt={t('recognition.awards.nasa.imageAlt')}
              className="h-32 w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </StaggerItem>

          {/* Nomeação global */}
          <StaggerItem as="article" className="relative flex min-h-100 flex-col justify-between gap-8 overflow-hidden rounded-4xl bg-leaf-200 p-7 text-forest-950">
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 size-80"
              aria-hidden="true"
            >
              <span className="absolute inset-0 rounded-full border border-forest-700/25" />
              <span className="absolute inset-10 rounded-full border border-forest-700/25" />
              <span className="absolute inset-20 rounded-full border border-forest-700/25" />
              <span className="absolute inset-30 rounded-full bg-forest-950" />
              <span className="absolute left-8 top-14 size-4 rounded-full bg-leaf-400 ring-4 ring-leaf-200" />
            </div>
            <span className="relative w-fit rounded-full border border-forest-950/20 px-3 py-1 text-xs font-medium">
              {t('recognition.awards.global.tag')}
            </span>
            <div className="relative mb-auto">
              <p className="max-w-60 text-[40px] font-semibold leading-[1.05]">
                {t('recognition.awards.global.value')}
              </p>
              <p className="mt-3 max-w-56 text-base leading-snug text-forest-600">
                {t('recognition.awards.global.label')}
              </p>
            </div>
          </StaggerItem>

          {/* Tigra Nova Garra */}
          <StaggerItem as="article" className="flex min-h-100 flex-col justify-between gap-8 rounded-4xl bg-neutral-100 p-7 text-neutral-950">
            <div className="flex items-center justify-between gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-forest-950 text-leaf-200">
                <StarIcon className="size-6" />
              </span>
              <span className="rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium text-ink-700">
                {t('recognition.awards.tigra.tag')}
              </span>
            </div>
            <div>
              <p className="text-[40px] font-semibold leading-none">
                {t('recognition.awards.tigra.value')}
              </p>
              <p className="mt-3 text-base leading-snug text-neutral-500">
                {t('recognition.awards.tigra.label')}
              </p>
            </div>
            <img
              src="/direita.png"
              alt={t('recognition.awards.tigra.imageAlt')}
              className="h-32 w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  )
}
