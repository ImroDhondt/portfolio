import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { notes } from '@/data/notes'
import { NOTE_TYPES, type NoteType } from '@/types/content'

export interface NoteFilterState {
  type: NoteType | 'all'
  tag: string | 'all'
}

function readType(value: unknown): NoteType | 'all' {
  return typeof value === 'string' && (NOTE_TYPES as readonly string[]).includes(value)
    ? (value as NoteType)
    : 'all'
}

export function useNoteFilters() {
  const route = useRoute()
  const router = useRouter()

  const filters = computed<NoteFilterState>(() => ({
    type: readType(route.query.type),
    tag: typeof route.query.tag === 'string' && route.query.tag ? route.query.tag : 'all',
  }))

  const results = computed(() =>
    notes.filter((note) => {
      if (filters.value.type !== 'all' && note.type !== filters.value.type) return false
      if (filters.value.tag !== 'all' && !note.tags.includes(filters.value.tag)) return false
      return true
    }),
  )

  const isFiltered = computed(() => filters.value.type !== 'all' || filters.value.tag !== 'all')

  function update(patch: Partial<NoteFilterState>): void {
    const next = { ...filters.value, ...patch }
    const query: Record<string, string> = {}
    if (next.type !== 'all') query.type = next.type
    if (next.tag !== 'all') query.tag = next.tag
    void router.replace({ query })
  }

  function clear(): void {
    void router.replace({ query: {} })
  }

  return { filters, results, isFiltered, update, clear }
}
