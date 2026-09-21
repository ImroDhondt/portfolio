import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '@/data/projects'
import { PROJECT_CATEGORIES, PROJECT_STATUSES } from '@/types/content'
import type { Project, ProjectCategory, ProjectStatus } from '@/types/content'

export interface ProjectFilterState {
  category: ProjectCategory | 'all'
  status: ProjectStatus | 'all'
  tech: string | 'all'
}

function readCategory(value: unknown): ProjectCategory | 'all' {
  return typeof value === 'string' && (PROJECT_CATEGORIES as readonly string[]).includes(value)
    ? (value as ProjectCategory)
    : 'all'
}

function readStatus(value: unknown): ProjectStatus | 'all' {
  return typeof value === 'string' && (PROJECT_STATUSES as readonly string[]).includes(value)
    ? (value as ProjectStatus)
    : 'all'
}

export function matchesFilters(project: Project, filters: ProjectFilterState): boolean {
  if (filters.category !== 'all' && !project.categories.includes(filters.category)) return false
  if (filters.status !== 'all' && project.status !== filters.status) return false
  if (filters.tech !== 'all' && !project.technologies.includes(filters.tech)) return false
  return true
}

/**
 * Project filters, mirrored in the URL query so a filtered view can be shared
 * and survives a reload or a language switch.
 */
export function useProjectFilters() {
  const route = useRoute()
  const router = useRouter()

  const filters = computed<ProjectFilterState>(() => ({
    category: readCategory(route.query.category),
    status: readStatus(route.query.status),
    tech: typeof route.query.tech === 'string' && route.query.tech ? route.query.tech : 'all',
  }))

  const results = computed(() => projects.filter((project) => matchesFilters(project, filters.value)))

  const isFiltered = computed(
    () =>
      filters.value.category !== 'all' ||
      filters.value.status !== 'all' ||
      filters.value.tech !== 'all',
  )

  function update(patch: Partial<ProjectFilterState>): void {
    const next = { ...filters.value, ...patch }
    const query: Record<string, string> = {}
    if (next.category !== 'all') query.category = next.category
    if (next.status !== 'all') query.status = next.status
    if (next.tech !== 'all') query.tech = next.tech
    void router.replace({ query })
  }

  function clear(): void {
    void router.replace({ query: {} })
  }

  return { filters, results, isFiltered, update, clear }
}
