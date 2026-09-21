import type { Localized, LocalizedList } from '@/types/content'

export interface Capability {
  /** Short mono label used on the card. */
  key: string
  title: Localized
  items: LocalizedList
}

/** Core capability groups shown on the home page and the about page. */
export const capabilities: Capability[] = [
  {
    key: 'web',
    title: { en: 'Web applications', nl: 'Webapplicaties' },
    items: {
      en: [
        'Full-stack web applications',
        'Internal business platforms',
        'REST APIs',
        'Database-backed applications',
        'Interactive administrative interfaces',
      ],
      nl: [
        'Full-stack webapplicaties',
        'Interne bedrijfsplatformen',
        'REST API’s',
        'Databankgedreven applicaties',
        'Interactieve beheerinterfaces',
      ],
    },
  },
  {
    key: 'mobile',
    title: { en: 'Android and games', nl: 'Android en games' },
    items: {
      en: [
        'Native Android applications',
        'Educational mobile games',
        'Real-time simulation',
        'Custom Canvas rendering',
        'Small games and interactive experiments',
      ],
      nl: [
        'Native Android-applicaties',
        'Educatieve mobiele games',
        'Realtime simulatie',
        'Eigen Canvas-rendering',
        'Kleine games en interactieve experimenten',
      ],
    },
  },
  {
    key: 'systems',
    title: { en: 'Distributed systems', nl: 'Gedistribueerde systemen' },
    items: {
      en: [
        'Distributed microservice systems',
        'Event-driven systems',
        'Message-broker integration',
        'Service boundaries and domain events',
        'Eventual consistency between services',
      ],
      nl: [
        'Gedistribueerde microservicesystemen',
        'Event-driven systemen',
        'Integratie met message brokers',
        'Servicegrenzen en domeinevents',
        'Eventual consistency tussen services',
      ],
    },
  },
  {
    key: 'delivery',
    title: { en: 'Structure and delivery', nl: 'Structuur en oplevering' },
    items: {
      en: [
        'Clean Architecture and Domain-Driven Design',
        'Automated testing',
        'Dockerized applications',
        'Infrastructure as code',
        'Cloud-deployed services',
      ],
      nl: [
        'Clean Architecture en Domain-Driven Design',
        'Geautomatiseerd testen',
        'Applicaties in Docker',
        'Infrastructure as code',
        'Services uitgerold in de cloud',
      ],
    },
  },
]

/** What building software has taught Imro. Used on the about page. */
export const realisations: LocalizedList = {
  en: [
    'Software development is more than writing code.',
    'Understanding what users actually need is essential.',
    'Large applications require structure and clear boundaries.',
    'Good architecture helps projects grow.',
    'Feedback improves both the software and the user experience.',
    'Technical decisions should support the problem being solved.',
    'Learning unfamiliar technologies is part of becoming a better engineer.',
    'A project can be valuable while it is still evolving, as long as its current state and direction are clear.',
  ],
  nl: [
    'Softwareontwikkeling is meer dan code schrijven.',
    'Begrijpen wat gebruikers echt nodig hebben is essentieel.',
    'Grote applicaties vragen structuur en duidelijke grenzen.',
    'Goede architectuur helpt projecten groeien.',
    'Feedback verbetert zowel de software als de gebruikerservaring.',
    'Technische beslissingen moeten het probleem dienen dat opgelost wordt.',
    'Onbekende technologieën leren hoort bij beter worden als engineer.',
    'Een project kan waardevol zijn terwijl het nog evolueert, zolang de huidige staat en richting duidelijk zijn.',
  ],
}

/** How Imro contributes to a team. Used on the about page. */
export const teamContribution: { statement: Localized; items: LocalizedList } = {
  statement: {
    en: 'I contribute to teams by bringing a combination of technical curiosity, patience, and practical problem-solving. I enjoy learning from others while also contributing my own perspective and helping turn ideas into structured, maintainable software.',
    nl: 'Ik draag bij aan teams met een combinatie van technische nieuwsgierigheid, geduld en praktisch probleemoplossend werk. Ik leer graag van anderen en breng tegelijk mijn eigen perspectief in om ideeën om te zetten in gestructureerde, onderhoudbare software.',
  },
  items: {
    en: [
      'Bringing new perspectives',
      'Contributing technical expertise',
      'Learning unfamiliar technologies',
      'Solving implementation problems',
      'Communicating through Git-based workflows',
      'Working patiently through complex issues',
      'Understanding both user needs and technical constraints',
      'Helping structure and improve applications',
    ],
    nl: [
      'Nieuwe invalshoeken binnenbrengen',
      'Technische expertise bijdragen',
      'Onbekende technologieën leren',
      'Implementatieproblemen oplossen',
      'Communiceren via Git-workflows',
      'Geduldig door complexe problemen werken',
      'Zowel gebruikersnoden als technische beperkingen begrijpen',
      'Helpen structureren en verbeteren van applicaties',
    ],
  },
}

/** The two technical achievements Imro is proudest of. */
export const achievements: { title: Localized; body: Localized; project: string }[] = [
  {
    title: {
      en: 'Communication between two microservices',
      nl: 'Communicatie tussen twee microservices',
    },
    body: {
      en: 'Getting two independent services to stay consistent through a message broker: asynchronous events, service boundaries, cross-service debugging and eventual consistency.',
      nl: 'Twee onafhankelijke services consistent houden via een message broker: asynchrone events, servicegrenzen, debuggen over services heen en eventual consistency.',
    },
    project: 'howestprime',
  },
  {
    title: {
      en: 'Turning playtest feedback into a fix',
      nl: 'Playtestfeedback omzetten in een fix',
    },
    body: {
      en: 'Players said the game felt sluggish, so I changed the character movement speed and covered the new behaviour with tests so it would stay that way.',
      nl: 'Spelers vonden de game traag aanvoelen, dus paste ik de bewegingssnelheid van personages aan en dekte ik het nieuwe gedrag af met tests zodat het zo blijft.',
    },
    project: 'freeze-or-sneeze',
  },
]
