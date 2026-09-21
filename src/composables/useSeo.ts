import { watchEffect, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { LOCALES } from '@/types/content'

interface SeoInput {
  title: Ref<string> | (() => string)
  description: Ref<string> | (() => string)
}

function read(value: Ref<string> | (() => string)): string {
  return typeof value === 'function' ? value() : value.value
}

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let element = document.head.querySelector<HTMLLinkElement>(selector)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    if (hreflang) element.setAttribute('hreflang', hreflang)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

/**
 * Keeps the document title, meta description, Open Graph tags, canonical URL
 * and hreflang alternates in sync with the active route.
 */
export function useSeo({ title, description }: SeoInput): void {
  const route = useRoute()

  watchEffect(() => {
    if (typeof document === 'undefined') return

    const pageTitle = read(title)
    const pageDescription = read(description)

    document.title = pageTitle
    setMeta('meta[name="description"]', 'name', 'description', pageDescription)
    setMeta('meta[property="og:title"]', 'property', 'og:title', pageTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', pageDescription)
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', pageDescription)

    if (typeof window === 'undefined') return
    const origin = window.location.origin
    const canonical = `${origin}${route.fullPath}`
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
    setLink('canonical', canonical)

    // Same page, other language: swap only the locale segment.
    for (const locale of LOCALES) {
      const path = route.fullPath.replace(/^\/(en|nl)(?=\/|$)/, `/${locale}`)
      setLink('alternate', `${origin}${path}`, locale)
    }
  })
}
