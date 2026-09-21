import { describe, expect, it } from 'vitest'
import { projects, findProject } from '@/data/projects'
import { notes } from '@/data/notes'
import { skills } from '@/data/skills'
import { isKnownTechnology } from '@/data/tech'
import { LOCALES, PROJECT_SECTION_IDS } from '@/types/content'
import en from '@/i18n/en.json'
import nl from '@/i18n/nl.json'

/** Flattens a nested translation catalogue into dotted key paths. */
function keyPaths(value: unknown, prefix = ''): string[] {
  if (typeof value !== 'object' || value === null) return [prefix]
  return Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
    keyPaths(child, prefix ? `${prefix}.${key}` : key),
  )
}

describe('translation parity', () => {
  it('has the same keys in both catalogues', () => {
    const english = keyPaths(en).sort()
    const dutch = keyPaths(nl).sort()
    expect(dutch).toEqual(english)
  })

  it('has no empty translation strings', () => {
    for (const catalogue of [en, nl]) {
      const values = JSON.stringify(catalogue).match(/:"[^"]*"/g) ?? []
      expect(values.every((value) => value.length > 3)).toBe(true)
    }
  })
})

describe('projects', () => {
  it('uses unique slugs', () => {
    const slugs = projects.map((project) => project.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('only references known technologies', () => {
    for (const project of projects) {
      for (const tech of project.technologies) {
        expect(isKnownTechnology(tech), `${project.slug}: unknown technology "${tech}"`).toBe(true)
      }
    }
  })

  it('shows primary technologies that are part of the full stack list', () => {
    for (const project of projects) {
      expect(project.primaryTech.length).toBeLessThanOrEqual(6)
      for (const tech of project.primaryTech) {
        expect(project.technologies).toContain(tech)
      }
    }
  })

  it('uses only section ids from the fixed template, without duplicates', () => {
    for (const project of projects) {
      const ids = project.sections.map((section) => section.id)
      expect(new Set(ids).size).toBe(ids.length)
      for (const id of ids) {
        expect(PROJECT_SECTION_IDS as readonly string[]).toContain(id)
      }
    }
  })

  it('states limitations for every project', () => {
    for (const project of projects) {
      for (const locale of LOCALES) {
        expect(
          project.evidence.limitations[locale].length,
          `${project.slug} has no limitations in ${locale}`,
        ).toBeGreaterThan(0)
      }
    }
  })

  it('keeps localized content lists the same length in both languages', () => {
    for (const project of projects) {
      const lists = [
        project.evidence.verified,
        project.evidence.builtByMe,
        project.evidence.limitations,
        project.evidence.planned,
        ...project.sections.map((section) => section.bullets).filter(Boolean),
      ]
      for (const list of lists) {
        expect(list!.en.length).toBe(list!.nl.length)
      }
    }
  })

  it('marks team work as team work and names what is not Imro’s', () => {
    for (const project of projects) {
      if (project.ownership !== 'team') continue
      expect(project.team).toBeDefined()
      expect(project.team!.notMine.en.length).toBeGreaterThan(0)
      expect(project.evidence.providedByTeam).toBeDefined()
    }
  })
})

/**
 * Guards against the specific overstatements the portfolio brief forbids.
 * These are content rules, so they are tested like any other rule.
 */
describe('honest capability rules', () => {
  const text = (slug: string) => JSON.stringify(findProject(slug)).toLowerCase()

  it('does not claim a Google Play release for Freeze or Sneeze', () => {
    const content = text('freeze-or-sneeze')
    // Google Play may only ever be mentioned in a negated sentence.
    for (const sentence of content.split(/[.\n]/)) {
      if (!sentence.includes('google play')) continue
      expect(sentence, `unnegated Google Play claim: "${sentence.trim()}"`).toMatch(/\bnot\b|\bgeen\b/)
    }
    expect(content).toContain('debug-signed')
    expect(findProject('freeze-or-sneeze')!.status).toBe('public-playtest')
  })

  it('does not claim Docker or Terraform experience from Freeze or Sneeze', () => {
    const project = findProject('freeze-or-sneeze')!
    expect(project.technologies).not.toContain('Docker')
    expect(project.technologies).not.toContain('Terraform')
  })

  it('does not present the Howestprime role header as production authentication', () => {
    const project = findProject('howestprime')!
    const limitations = project.evidence.limitations.en.join(' ').toLowerCase()
    expect(limitations).toContain('x-user-role')
    expect(limitations).toMatch(/not equivalent to jwt|not.*production-grade/)
  })

  it('does not claim a verified production cloud deployment', () => {
    for (const project of projects) {
      const content = JSON.stringify(project).toLowerCase()
      expect(content).not.toMatch(/deployed to production|running in production/)
    }
  })

  it('does not claim frontend tests for Adria', () => {
    const project = findProject('adria')!
    const limitations = project.evidence.limitations.en.join(' ').toLowerCase()
    expect(limitations).toContain('no frontend test files exist')
  })

  it('does not claim sole ownership of the Adria backend', () => {
    const project = findProject('adria')!
    expect(project.ownership).toBe('team')
    expect(project.team!.notMine.en.join(' ')).toMatch(/did not build it alone/)
  })

  it('does not claim real-world QHSE validation', () => {
    const project = findProject('qhse-platform')!
    const limitations = project.evidence.limitations.en.join(' ').toLowerCase()
    expect(limitations).toMatch(/evaluation by qhse professionals has not taken place/)
  })

  it('publishes no link or imagery for the internal QHSE platform', () => {
    const project = findProject('qhse-platform')!
    expect(project.confidential).toBe(true)
    expect(Object.keys(project.links)).toHaveLength(0)
    expect(project.media.clearance).toBe('none')
    expect(project.evidence.cannotShow).toBeDefined()
    expect(project.evidence.cannotShow!.en.join(' ')).toMatch(/no public instance and no demo URL/)
  })

  it('does not claim CI/CD for the QHSE platform', () => {
    const project = findProject('qhse-platform')!
    expect(project.technologies).not.toContain('GitHub Actions')
    expect(project.evidence.planned.en.join(' ')).toMatch(/GitHub Actions/)
  })
})

describe('skills', () => {
  it('requires project evidence above the familiar level', () => {
    for (const skill of skills) {
      if (skill.level === 'primary' || skill.level === 'used-in-projects') {
        expect(skill.evidence.length, `${skill.name} claims ${skill.level} without evidence`).toBeGreaterThan(0)
      }
    }
  })

  it('only references projects that exist', () => {
    for (const skill of skills) {
      for (const slug of skill.evidence) {
        expect(findProject(slug), `${skill.name} references unknown project ${slug}`).toBeDefined()
      }
    }
  })

  it('uses no percentages anywhere', () => {
    expect(JSON.stringify(skills)).not.toMatch(/\d+\s?%/)
  })
})

describe('notes', () => {
  it('uses unique slugs and ISO dates', () => {
    const slugs = notes.map((note) => note.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const note of notes) {
      expect(note.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })

  it('has the same number of body paragraphs in both languages', () => {
    for (const note of notes) {
      expect(note.body.en.length).toBe(note.body.nl.length)
    }
  })
})
