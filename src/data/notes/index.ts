import type { Note, NoteType } from '@/types/content'
import { aboutTheseNotes } from './about-these-notes'

/** Notes, newest first. */
export const notes: Note[] = [aboutTheseNotes].sort((a, b) => b.date.localeCompare(a.date))

export function findNote(slug: string): Note | undefined {
  return notes.find((note) => note.slug === slug)
}

/** Note types that are actually in use. */
export function usedNoteTypes(): NoteType[] {
  const seen = new Set<NoteType>()
  for (const note of notes) seen.add(note.type)
  return [...seen]
}

/** Every tag used by a note, sorted alphabetically. */
export function usedTags(): string[] {
  const seen = new Set<string>()
  for (const note of notes) {
    for (const tag of note.tags) seen.add(tag)
  }
  return [...seen].sort((a, b) => a.localeCompare(b))
}
