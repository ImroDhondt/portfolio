import type { Note } from '@/types/content'

/**
 * Placeholder note.
 *
 * The Notes section is built and routed, but the notes themselves have to be
 * written by Imro from real experience. Replace or remove this file once the
 * first real note exists.
 */
export const aboutTheseNotes: Note = {
  slug: 'about-these-notes',
  type: 'technical-note',
  date: '2026-09-21',
  tags: ['portfolio'],
  title: {
    en: 'About these notes',
    nl: 'Over deze notities',
  },
  summary: {
    en: 'What this section is for, and what will appear here.',
    nl: 'Waarvoor deze sectie dient en wat hier zal verschijnen.',
  },
  body: {
    en: [
      'This section collects technical notes, project updates, decision logs and things I learned while building. It is where the reasoning behind my projects lives, separate from the project pages themselves.',
      'Notes are grouped by type: a technical note explains how something works, a project update reports what changed, a decision log records why a choice was made, and a lesson learned describes what I would do differently.',
      'The first notes are still being written. They will cover the parts of my projects that were genuinely hard: message-broker communication between two microservices, declarative workflow state machines, and the contagion simulation in Freeze or Sneeze.',
    ],
    nl: [
      'Deze sectie verzamelt technische notities, projectupdates, beslissingslogs en dingen die ik leerde tijdens het bouwen. Hier staat de redenering achter mijn projecten, los van de projectpagina’s zelf.',
      'Notities zijn gegroepeerd per type: een technische notitie legt uit hoe iets werkt, een projectupdate meldt wat er veranderde, een beslissingslog houdt bij waarom een keuze gemaakt werd, en een geleerde les beschrijft wat ik anders zou doen.',
      'De eerste notities worden nog geschreven. Ze gaan over de stukken van mijn projecten die echt moeilijk waren: communicatie via een message broker tussen twee microservices, declaratieve workflow-toestandsmachines en de besmettingssimulatie in Freeze or Sneeze.',
    ],
  },
}
