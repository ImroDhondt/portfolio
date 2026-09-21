import { createI18n } from 'vue-i18n'
import { LOCALES, type Locale } from '@/types/content'
import en from './en.json'
import nl from './nl.json'

export const STORAGE_KEY = 'portfolio.locale'
export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

/** Locale stored from an earlier visit, if any. */
export function storedLocale(): Locale | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return isLocale(value) ? value : null
  } catch {
    // Storage can be unavailable (private mode, blocked site data).
    return null
  }
}

export function rememberLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Remembering the choice is a convenience, never a requirement.
  }
}

/** Locale preferred by the browser, when we support it. */
export function browserLocale(): Locale | null {
  if (typeof navigator === 'undefined') return null
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag?.split('-')[0]
    if (isLocale(base)) return base
  }
  return null
}

export function resolveInitialLocale(): Locale {
  return storedLocale() ?? browserLocale() ?? DEFAULT_LOCALE
}

export const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { en, nl },
})

export function setI18nLocale(locale: Locale): void {
  i18n.global.locale.value = locale
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale
  }
}
