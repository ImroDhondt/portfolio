import { computed } from 'vue'
import { useRoute, type RouteLocationRaw } from 'vue-router'
import { DEFAULT_LOCALE, isLocale } from '@/i18n'
import type { Locale } from '@/types/content'

/**
 * Locale helpers for components.
 *
 * `text` reads a localized content value, `routeTo` builds a route that keeps
 * the visitor in the language they are currently reading.
 */
export function useLocale() {
  const route = useRoute()

  const locale = computed<Locale>(() =>
    isLocale(route.params.locale) ? route.params.locale : DEFAULT_LOCALE,
  )

  function text<T>(value: Record<Locale, T>): T {
    return value[locale.value]
  }

  function routeTo(name: string, params: Record<string, string> = {}): RouteLocationRaw {
    return { name, params: { locale: locale.value, ...params } }
  }

  function formatDate(iso: string): string {
    const date = new Date(`${iso}T00:00:00`)
    if (Number.isNaN(date.getTime())) return iso
    return new Intl.DateTimeFormat(locale.value, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }

  return { locale, text, routeTo, formatDate }
}
