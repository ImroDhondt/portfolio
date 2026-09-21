import type { Project } from '@/types/content'

export const ghostHaunterIncremental: Project = {
  slug: 'ghost-haunter-incremental',
  title: 'Ghost Haunter Incremental',
  tagline: {
    en: 'An early-stage learning project in Lua and progression design.',
    nl: 'Een leerproject in een vroeg stadium rond Lua en progressieontwerp.',
  },
  summary: {
    en: 'Ghost Haunter Incremental, an early-stage Roblox incremental game built while learning Lua and exploring progression systems and game mechanics.',
    nl: 'Ghost Haunter Incremental, een Roblox-incremental game in een vroeg stadium, gebouwd tijdens het leren van Lua en het verkennen van progressiesystemen en gamemechanieken.',
  },
  description: {
    en: 'Ghost Haunter Incremental is an early-stage Roblox incremental game that I am building while learning Lua and exploring how progression systems, feedback loops, and player motivation work in an interactive environment. The project is intentionally documented as a learning process rather than a finished release.',
    nl: 'Ghost Haunter Incremental is een Roblox-incremental game in een vroeg stadium die ik bouw terwijl ik Lua leer en verken hoe progressiesystemen, feedbackloops en spelersmotivatie werken in een interactieve omgeving. Het project is bewust gedocumenteerd als leerproces en niet als afgewerkte release.',
  },
  categories: ['game'],
  status: 'early-development',
  featured: true,
  order: 5,
  ownership: 'solo',
  role: {
    en: 'Solo developer. A personal learning project.',
    nl: 'Solo-ontwikkelaar. Een persoonlijk leerproject.',
  },
  technologies: ['Roblox', 'Lua/Luau'],
  primaryTech: ['Roblox', 'Lua/Luau'],
  links: {},
  media: { clearance: 'none' },
  confidential: false,
  sections: [
    {
      id: 'overview',
      body: {
        en: 'An incremental game built inside Roblox, used as a way to learn Lua/Luau and to think about how progression, feedback and motivation work when the player is the system being designed for.',
        nl: 'Een incremental game gebouwd in Roblox, gebruikt om Lua/Luau te leren en om na te denken over hoe progressie, feedback en motivatie werken wanneer de speler het systeem is waarvoor je ontwerpt.',
      },
    },
    {
      id: 'problem',
      body: {
        en: 'Incremental games look simple and are not. The pacing of rewards is the whole design, and getting it wrong is invisible in code but obvious to a player.',
        nl: 'Incremental games lijken eenvoudig en zijn dat niet. Het tempo van beloningen is het volledige ontwerp, en het fout hebben is onzichtbaar in code maar duidelijk voor een speler.',
      },
    },
    {
      id: 'users',
      body: {
        en: 'Roblox players. The project is not publicly released at this stage.',
        nl: 'Roblox-spelers. Het project is in dit stadium niet publiek uitgebracht.',
      },
    },
    {
      id: 'role',
      body: {
        en: 'Solo project, built outside of coursework to learn a language and a platform I had not used before.',
        nl: 'Soloproject, gebouwd buiten de lessen om een taal en een platform te leren die ik nog niet gebruikt had.',
      },
    },
    {
      id: 'built',
      body: {
        en: 'The game is in early development. Rather than listing features that are not finished, this project is presented for what it is: active work on progression systems and Lua fundamentals.',
        nl: 'De game is in vroege ontwikkeling. In plaats van functies op te sommen die nog niet af zijn, wordt dit project voorgesteld voor wat het is: actief werk aan progressiesystemen en Lua-basis.',
      },
    },
    {
      id: 'technologies',
      code: ['Roblox    Lua / Luau'].join('\n'),
    },
    {
      id: 'status',
      body: {
        en: 'Early development. This is a learning project, not a finished product. No public link is published here yet.',
        nl: 'Vroege ontwikkeling. Dit is een leerproject, geen afgewerkt product. Er wordt hier nog geen publieke link gepubliceerd.',
      },
    },
    {
      id: 'learned',
      bullets: {
        en: [
          'Working in an unfamiliar language and platform is uncomfortable in a useful way.',
          'Progression design is a systems problem, not a content problem.',
          'Building something outside the curriculum keeps the learning honest: nothing is graded, so only the result speaks.',
        ],
        nl: [
          'Werken in een onbekende taal en op een onbekend platform is op een nuttige manier ongemakkelijk.',
          'Progressieontwerp is een systeemprobleem, geen contentprobleem.',
          'Iets bouwen buiten het curriculum houdt het leren eerlijk: niets wordt beoordeeld, dus enkel het resultaat spreekt.',
        ],
      },
    },
    {
      id: 'future',
      bullets: {
        en: [
          'Continue building out the progression loop',
          'Publish a link once there is something worth playing',
        ],
        nl: [
          'De progressielus verder uitbouwen',
          'Een link publiceren zodra er iets speelbaars is',
        ],
      },
    },
  ],
  evidence: {
    verified: {
      en: ['Ghost Haunter Incremental: a Roblox project written in Lua/Luau, in active early development.'],
      nl: ['Ghost Haunter Incremental: een Roblox-project geschreven in Lua/Luau, in actieve vroege ontwikkeling.'],
    },
    builtByMe: {
      en: ['Everything. It is a personal learning project.'],
      nl: ['Alles. Het is een persoonlijk leerproject.'],
    },
    limitations: {
      en: [
        'Early development. This is not a finished or released game.',
        'No public link is published here yet.',
      ],
      nl: [
        'Vroege ontwikkeling. Dit is geen afgewerkte of uitgebrachte game.',
        'Er is hier nog geen publieke link gepubliceerd.',
      ],
    },
    planned: {
      en: ['A complete progression loop', 'A public playable link'],
      nl: ['Een volledige progressielus', 'Een publieke speelbare link'],
    },
  },
}
