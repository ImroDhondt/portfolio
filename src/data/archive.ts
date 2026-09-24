import type { Localized } from '@/types/content'

/**
 * Presentation metadata for the project archive.
 *
 * Project facts live in `data/projects`. This file only decides how each
 * project is filed and drawn: a kind label and the
 * abstract motif used in place of screenshots.
 */
export type ArchiveVariant = 'feature' | 'wide' | 'tall' | 'compact'

export type MotifKind = 'workflow' | 'stream' | 'handset' | 'rooms' | 'trail'

export interface ArchiveEntry {
  kind: Localized
  motif: MotifKind
  /** CSS custom property holding the motif hue. */
  hue: string
  /** Short form of the project role, shown on compact archive cards. */
  roleLabel?: Localized
}

const entries: Record<string, ArchiveEntry> = {
  'qhse-platform': {
    kind: { en: 'System platform', nl: 'Systeemplatform' },
    motif: 'workflow',
    hue: 'var(--motif-qhse)',
  },
  howestprime: {
    kind: { en: 'Distributed system', nl: 'Gedistribueerd systeem' },
    motif: 'stream',
    hue: 'var(--motif-howestprime)',
  },
  'freeze-or-sneeze': {
    kind: { en: 'Android game', nl: 'Android-game' },
    motif: 'handset',
    hue: 'var(--motif-freeze)',
  },
  adria: {
    kind: { en: 'Team platform', nl: 'Teamplatform' },
    motif: 'rooms',
    hue: 'var(--motif-adria)',
    roleLabel: { en: 'Primary frontend contributor', nl: 'Voornaamste frontendbijdrager' },
  },
  'ghost-haunter-incremental': {
    kind: { en: 'Learning project', nl: 'Leerproject' },
    motif: 'trail',
    hue: 'var(--motif-ghost)',
  },
}

const fallback: ArchiveEntry = {
  kind: { en: 'Project', nl: 'Project' },
  motif: 'workflow',
  hue: 'var(--cyan)',
}

export function archiveEntry(slug: string): ArchiveEntry {
  return entries[slug] ?? fallback
}
