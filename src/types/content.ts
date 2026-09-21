/**
 * Content types for the portfolio.
 *
 * Every visitor-facing string is a `Localized` record, so the TypeScript
 * compiler refuses to build when a Dutch translation is missing. This is the
 * translation-parity guarantee: catalogues cannot drift silently.
 */

export const LOCALES = ['en', 'nl'] as const
export type Locale = (typeof LOCALES)[number]

/** A string that exists in every supported locale. */
export type Localized = Record<Locale, string>

/** A list of strings that exists in every supported locale. */
export type LocalizedList = Record<Locale, string[]>

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const PROJECT_CATEGORIES = [
  'web',
  'android',
  'game',
  'microservices',
  'architecture',
  'devops',
  'team',
] as const
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]

/**
 * Honest status labels only. Nothing here implies a production release,
 * a store listing or a verified cloud deployment.
 */
export const PROJECT_STATUSES = [
  'completed',
  'deployment-ready',
  'later-development',
  'active-development',
  'public-playtest',
  'early-development',
  'prototype',
  'archived',
] as const
export type ProjectStatus = (typeof PROJECT_STATUSES)[number]

export type Ownership = 'solo' | 'team'

/** Whether approved imagery exists for a project. */
export type MediaClearance = 'approved' | 'pending' | 'none'

/** Section ids follow the fixed project detail template. */
export const PROJECT_SECTION_IDS = [
  'overview',
  'problem',
  'users',
  'role',
  'built',
  'architecture',
  'technologies',
  'decisions',
  'testing',
  'deployment',
  'status',
  'learned',
  'future',
] as const
export type ProjectSectionId = (typeof PROJECT_SECTION_IDS)[number]

export interface ProjectSection {
  id: ProjectSectionId
  /** Introductory paragraph. Optional when the section is a pure list. */
  body?: Localized
  bullets?: LocalizedList
  /** Untranslated technical block: event names, stack lists, headers. */
  code?: string
}

/**
 * The evidence panel. Rendered on every project detail page so that the
 * limitations of a project are never hidden behind the marketing copy.
 */
export interface ProjectEvidence {
  /** Facts that the repository itself confirms. */
  verified: LocalizedList
  /** Work personally implemented by Imro. */
  builtByMe: LocalizedList
  /** Work delivered by other team members. Team projects only. */
  providedByTeam?: LocalizedList
  /** Known gaps, incomplete areas and things that must not be overstated. */
  limitations: LocalizedList
  /** Planned future work. Never presented as done. */
  planned: LocalizedList
  /** Material that cannot be published for confidentiality reasons. */
  cannotShow?: LocalizedList
}

export interface ProjectLinks {
  repository?: string
  live?: string
  download?: string
  site?: string
}

export interface TeamContext {
  /** Team identifier as used in the course, e.g. "Group 05". */
  label: string
  /** What Imro personally did on the team. */
  myRole: Localized
  /** Explicit statements about work that is *not* his. */
  notMine: LocalizedList
}

export interface Project {
  slug: string
  /** Proper noun. Not translated. */
  title: string
  tagline: Localized
  /** Card body text. */
  summary: Localized
  /** Opening paragraphs of the detail page. */
  description: Localized
  categories: ProjectCategory[]
  status: ProjectStatus
  featured: boolean
  /** Display order for featured projects. Lower comes first. */
  order: number
  ownership: Ownership
  team?: TeamContext
  role: Localized
  /** Canonical technology ids. Must exist in the technology registry. */
  technologies: string[]
  /** Subset shown on the card. Keep to six or fewer. */
  primaryTech: string[]
  links: ProjectLinks
  media: {
    clearance: MediaClearance
    cover?: string
    screenshots?: { src: string; alt: Localized }[]
  }
  /** True when the domain or implementation may not be shown publicly. */
  confidential: boolean
  sections: ProjectSection[]
  evidence: ProjectEvidence
}

/* ------------------------------------------------------------------ */
/* Notes                                                               */
/* ------------------------------------------------------------------ */

export const NOTE_TYPES = [
  'technical-note',
  'project-update',
  'lesson-learned',
  'decision-log',
  'experiment',
  'playtest-note',
] as const
export type NoteType = (typeof NOTE_TYPES)[number]

export interface Note {
  slug: string
  type: NoteType
  /** ISO date, YYYY-MM-DD. */
  date: string
  tags: string[]
  title: Localized
  summary: Localized
  /** Body paragraphs, in order. */
  body: LocalizedList
  learned?: Localized
  wouldImprove?: Localized
  relatedProjects?: string[]
}

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

/**
 * Four honest levels instead of invented percentages.
 * `primary` and `used-in-projects` require at least one project as evidence;
 * a unit test enforces that rule.
 */
export const SKILL_LEVELS = [
  'primary',
  'used-in-projects',
  'familiar',
  'learning',
] as const
export type SkillLevel = (typeof SKILL_LEVELS)[number]

export const SKILL_GROUPS = [
  'languages',
  'frontend',
  'backend',
  'mobile',
  'databases',
  'architecture',
  'messaging',
  'devops',
  'testing',
] as const
export type SkillGroup = (typeof SKILL_GROUPS)[number]

export interface Skill {
  name: string
  group: SkillGroup
  level: SkillLevel
  /** Project slugs that demonstrate this skill. */
  evidence: string[]
  /** Optional clarification, e.g. "configured but no tests written". */
  caveat?: Localized
}

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export interface StatusRow {
  key: string
  value: Localized
}

export interface Profile {
  name: string
  email: string
  github: string
  linkedin: string
  location: Localized
  role: Localized
  school: string
  programme: Localized
  studyStart: number
  expectedGraduation: Localized
  positioning: Localized
  shortIntro: Localized
  longIntro: LocalizedList
  statusRows: StatusRow[]
  availability: Localized
  /** One-line version of the availability statement, used in the hero area. */
  availabilityShort: Localized
}
