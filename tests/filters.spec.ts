import { describe, expect, it } from 'vitest'
import { projects, usedCategories, usedStatuses, usedTechnologies } from '@/data/projects'
import { matchesFilters } from '@/composables/useProjectFilters'

const noFilters = { category: 'all', status: 'all', tech: 'all' } as const

describe('project filtering', () => {
  it('returns everything when nothing is selected', () => {
    expect(projects.filter((project) => matchesFilters(project, noFilters))).toHaveLength(
      projects.length,
    )
  })

  it('filters by category', () => {
    const results = projects.filter((project) =>
      matchesFilters(project, { ...noFilters, category: 'android' }),
    )
    expect(results.map((project) => project.slug)).toEqual(['freeze-or-sneeze'])
  })

  it('filters by status', () => {
    const results = projects.filter((project) =>
      matchesFilters(project, { ...noFilters, status: 'prototype' }),
    )
    expect(results.every((project) => project.status === 'prototype')).toBe(true)
  })

  it('filters by technology', () => {
    const results = projects.filter((project) =>
      matchesFilters(project, { ...noFilters, tech: 'Terraform' }),
    )
    expect(results.map((project) => project.slug)).toEqual(['howestprime'])
  })

  it('combines filters', () => {
    const results = projects.filter((project) =>
      matchesFilters(project, { ...noFilters, category: 'web', status: 'completed' }),
    )
    expect(results.every((p) => p.categories.includes('web') && p.status === 'completed')).toBe(true)
  })

  it('offers only filter values that at least one project uses', () => {
    for (const category of usedCategories()) {
      expect(projects.some((project) => project.categories.includes(category))).toBe(true)
    }
    for (const status of usedStatuses()) {
      expect(projects.some((project) => project.status === status)).toBe(true)
    }
    for (const tech of usedTechnologies()) {
      expect(projects.some((project) => project.technologies.includes(tech))).toBe(true)
    }
  })

  it('never produces an empty result for a single offered filter value', () => {
    for (const tech of usedTechnologies()) {
      const results = projects.filter((project) => matchesFilters(project, { ...noFilters, tech }))
      expect(results.length, `filter "${tech}" matches nothing`).toBeGreaterThan(0)
    }
  })
})
