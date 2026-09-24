import { onBeforeUnmount, ref } from 'vue'

/** Reactive `matchMedia`. The site renders client-side only, so `window` exists. */
export function useMediaQuery(query: string) {
  const list = window.matchMedia(query)
  const matches = ref(list.matches)
  const update = (event: MediaQueryListEvent) => {
    matches.value = event.matches
  }

  list.addEventListener('change', update)
  onBeforeUnmount(() => list.removeEventListener('change', update))

  return matches
}
