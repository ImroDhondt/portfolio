import type { Project, ProjectCategory, ProjectStatus } from '@/types/content'
import { qhsePlatform } from './qhse-platform'
import { howestprime } from './howestprime'
import { freezeOrSneeze } from './freeze-or-sneeze'
import { adria } from './adria'
import { ghostHaunterIncremental } from './ghost-haunter-incremental'

/** All projects, in the intended display order. */
export const projects: Project[] = [
  qhsePlatform,
  howestprime,
  freezeOrSneeze,
  adria,
  ghostHaunterIncremental,
].sort((a, b) => a.order - b.order)

export const featuredProjects = projects.filter((project) => project.featured)

export function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

/** Categories that at least one project belongs to, in filter-bar order. */
export function usedCategories(): ProjectCategory[] {
  const order: ProjectCategory[] = [
    'web',
    'android',
    'game',
    'microservices',
    'architecture',
    'devops',
    'team',
  ]
  return order.filter((category) => projects.some((p) => p.categories.includes(category)))
}

/** Statuses that at least one project uses. */
export function usedStatuses(): ProjectStatus[] {
  const seen = new Set<ProjectStatus>()
  for (const project of projects) seen.add(project.status)
  return [...seen]
}

/** Every technology referenced by a project, sorted alphabetically. */
export function usedTechnologies(): string[] {
  const seen = new Set<string>()
  for (const project of projects) {
    for (const tech of project.technologies) seen.add(tech)
  }
  return [...seen].sort((a, b) => a.localeCompare(b))
}
