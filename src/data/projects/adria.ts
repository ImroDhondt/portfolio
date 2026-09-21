import type { Project } from '@/types/content'

export const adria: Project = {
  slug: 'adria',
  title: 'Adria',
  tagline: {
    en: 'Team-built smart hotel guest portal with IoT room control.',
    nl: 'Door een team gebouwd smart-hotelportaal voor gasten met IoT-kamerbediening.',
  },
  summary: {
    en: 'A team-built smart hotel guest portal for food ordering, service requests, activity scheduling, and IoT room controls.',
    nl: 'Een door een team gebouwd smart-hotelportaal voor eten bestellen, serviceaanvragen, activiteitenplanning en IoT-kamerbediening.',
  },
  description: {
    en: 'Adria is a team-built full-stack hotel guest portal designed for contactless interaction in quarantine or managed-isolation accommodation. Guests can order food, request hotel services, schedule activities, adjust room settings, control lighting and temperature, and receive browser notifications.',
    nl: 'Adria is een door een team gebouwd full-stack hotelportaal voor gasten, ontworpen voor contactloze interactie in quarantaine- of begeleide isolatieverblijven. Gasten kunnen eten bestellen, hotelservices aanvragen, activiteiten plannen, kamerinstellingen aanpassen, verlichting en temperatuur bedienen en browsermeldingen ontvangen.',
  },
  categories: ['web', 'team'],
  status: 'prototype',
  featured: true,
  order: 4,
  ownership: 'team',
  team: {
    label: 'Group 05',
    myRole: {
      en: 'Primary frontend contributor, with focused backend contributions.',
      nl: 'Voornaamste frontendbijdrager, met gerichte backendbijdragen.',
    },
    notMine: {
      en: [
        'The .NET backend was built by the team. I contributed targeted work to it; I did not build it alone.',
        'ESP32 firmware and hardware integration work were a shared team effort.',
        'Database design and the overall project scope were team decisions.',
      ],
      nl: [
        'De .NET-backend is door het team gebouwd. Ik leverde er gerichte bijdragen aan; ik bouwde hem niet alleen.',
        'ESP32-firmware en hardware-integratie waren gedeeld teamwerk.',
        'Databaseontwerp en de algemene projectscope waren teambeslissingen.',
      ],
    },
  },
  role: {
    en: 'Primary frontend contributor in a student team. Targeted backend fixes around date/time handling and code quality.',
    nl: 'Voornaamste frontendbijdrager in een studententeam. Gerichte backendfixes rond datum-/tijdafhandeling en codekwaliteit.',
  },
  technologies: [
    'Vue 3',
    'JavaScript',
    'C#',
    '.NET 8',
    'ASP.NET Core',
    'Minimal APIs',
    'MySQL',
    'ADO.NET',
    'ESP32',
    'Web Push API',
    'Docker',
    'Docker Compose',
    'GitLab CI',
    'SonarQube',
    'Vitest',
  ],
  primaryTech: ['Vue 3', '.NET 8', 'MySQL', 'ESP32', 'Web Push API', 'Docker'],
  links: {},
  media: { clearance: 'none' },
  confidential: false,
  sections: [
    {
      id: 'overview',
      body: {
        en: 'A full-stack smart hotel guest portal for contactless room services, activity scheduling, food ordering, room control and IoT automation. Built by a student team of which I was the primary frontend contributor.',
        nl: 'Een full-stack smart-hotelportaal voor gasten met contactloze kamerdiensten, activiteitenplanning, eten bestellen, kamerbediening en IoT-automatisering. Gebouwd door een studententeam waarin ik de voornaamste frontendbijdrager was.',
      },
    },
    {
      id: 'problem',
      body: {
        en: 'Guests in managed isolation cannot walk up to a reception desk. Everything they would normally ask a person for has to be available from a screen in the room, including things that depend on physical hardware.',
        nl: 'Gasten in begeleide isolatie kunnen niet naar een receptie stappen. Alles wat ze normaal aan een persoon zouden vragen, moet beschikbaar zijn vanaf een scherm in de kamer, ook dingen die afhangen van fysieke hardware.',
      },
    },
    {
      id: 'users',
      body: {
        en: 'Hotel guests in quarantine or managed-isolation accommodation.',
        nl: 'Hotelgasten in quarantaine of begeleide isolatie.',
      },
    },
    {
      id: 'role',
      body: {
        en: 'This is a team project. My main contribution was the frontend. Repository evidence shows my work on Vue views, the activity planner, the schedule grid, REST integration, error handling, date/time utilities, clock-offset synchronisation, CSS theming, animations, music player controls, SonarQube remediation and general frontend quality. I also contributed targeted backend work on date/time synchronisation, SonarQube fixes and activity-related handling.',
        nl: 'Dit is een teamproject. Mijn belangrijkste bijdrage was de frontend. Repository-bewijs toont mijn werk aan Vue-views, de activiteitenplanner, het roosterraster, REST-integratie, foutafhandeling, datum-/tijdhulpfuncties, kloksynchronisatie, CSS-theming, animaties, muziekspelerbediening, SonarQube-opkuis en algemene frontendkwaliteit. Ik leverde ook gerichte backendbijdragen rond datum-/tijdsynchronisatie, SonarQube-fixes en activiteitgerelateerde afhandeling.',
      },
    },
    {
      id: 'built',
      bullets: {
        en: [
          'Welcome screen and guest overview dashboard',
          'Contactless food ordering with delivery time selection',
          'Hotel service requests and medical assistance requests',
          'Weekly activity planner with slot-based planning and conflict detection',
          'Room lighting, temperature, window and curtain controls',
          'ESP32 hardware integration with an in-memory device fallback',
          'Music player and a simulated TV controller',
          'Web Push notifications',
          'Dark and light theme, responsive interface',
        ],
        nl: [
          'Welkomstscherm en overzichtsdashboard voor gasten',
          'Contactloos eten bestellen met keuze van leveringstijdstip',
          'Hotelserviceaanvragen en aanvragen voor medische bijstand',
          'Weekplanner voor activiteiten met slotgebaseerde planning en conflictdetectie',
          'Bediening van verlichting, temperatuur, ramen en gordijnen',
          'ESP32-hardware-integratie met een in-memory fallback voor toestellen',
          'Muziekspeler en een gesimuleerde tv-bediening',
          'Web Push-meldingen',
          'Donker en licht thema, responsieve interface',
        ],
      },
    },
    {
      id: 'architecture',
      body: {
        en: 'A Vue 3 single-page frontend talks to a .NET 8 backend built with ASP.NET Core Minimal APIs and Clean Architecture, persisting to MySQL through ADO.NET.',
        nl: 'Een Vue 3-single-page frontend praat met een .NET 8-backend gebouwd met ASP.NET Core Minimal APIs en Clean Architecture, die via ADO.NET naar MySQL wegschrijft.',
      },
      bullets: {
        en: [
          'Activity planner: a weekly schedule grid with duration selection, slot validation, collision detection, tier-based validation and backend persistence.',
          'Food ordering: menu browsing, basket compilation, delivery-time selection, API submission, MySQL persistence and push notification feedback.',
          'IoT fallback: the backend attempts to reach an ESP32 through network discovery, and falls back to a thread-safe in-memory concurrent device store when no physical device is available, so the application stays usable during development and demonstrations.',
          'Client-server time handling: custom client and backend utilities normalise date/time values to reduce timezone and clock-offset problems when scheduling food deliveries and activities.',
        ],
        nl: [
          'Activiteitenplanner: een weekroosterraster met duurselectie, slotvalidatie, conflictdetectie, tiergebaseerde validatie en backendpersistentie.',
          'Eten bestellen: menu doorbladeren, mandje samenstellen, leveringstijdstip kiezen, indienen via de API, persistentie in MySQL en feedback via pushmeldingen.',
          'IoT-fallback: de backend probeert een ESP32 te bereiken via netwerkdiscovery en valt terug op een thread-veilige in-memory toestellenopslag wanneer geen fysiek toestel beschikbaar is, zodat de applicatie bruikbaar blijft tijdens ontwikkeling en demonstraties.',
          'Client-servertijd: eigen client- en backendhulpfuncties normaliseren datum-/tijdwaarden om tijdzone- en klokafwijkingsproblemen te beperken bij het plannen van maaltijdleveringen en activiteiten.',
        ],
      },
    },
    {
      id: 'technologies',
      code: [
        'Vue 3            JavaScript',
        'C# / .NET 8      ASP.NET Core Minimal APIs',
        'Clean Architecture',
        'MySQL            ADO.NET',
        'ESP32            Web Push API',
        'Docker Compose   GitLab CI      SonarQube',
      ].join('\n'),
    },
    {
      id: 'decisions',
      bullets: {
        en: [
          'Fall back to an in-memory device store when the ESP32 is unreachable, so the demo never depends on hardware being present.',
          'Normalise time on both sides of the wire instead of trusting the browser clock for scheduling.',
          'Detect scheduling collisions in the planner before submitting, so the guest sees the conflict rather than an API error.',
          'Use SonarQube findings as a concrete backlog for frontend quality work.',
        ],
        nl: [
          'Terugvallen op een in-memory toestellenopslag wanneer de ESP32 onbereikbaar is, zodat de demo nooit afhangt van aanwezige hardware.',
          'Tijd aan beide kanten van de lijn normaliseren in plaats van de browserklok te vertrouwen voor planning.',
          'Planningsconflicten in de planner detecteren vóór het indienen, zodat de gast het conflict ziet in plaats van een API-fout.',
          'SonarQube-bevindingen gebruiken als een concrete backlog voor frontendkwaliteit.',
        ],
      },
    },
    {
      id: 'testing',
      body: {
        en: 'The backend has 74 passing unit tests. Vitest is configured on the frontend, but no frontend test files were written. SonarQube ran as a quality gate and I worked through part of its findings.',
        nl: 'De backend heeft 74 geslaagde unittests. Vitest is geconfigureerd op de frontend, maar er zijn geen frontendtestbestanden geschreven. SonarQube draaide als kwaliteitspoort en ik werkte een deel van de bevindingen weg.',
      },
    },
    {
      id: 'deployment',
      body: {
        en: 'Docker and Docker Compose for the environment, with GitLab CI running the pipeline. This is an academic prototype, not production software.',
        nl: 'Docker en Docker Compose voor de omgeving, met GitLab CI voor de pijplijn. Dit is een academisch prototype, geen productiesoftware.',
      },
    },
    {
      id: 'status',
      body: {
        en: 'Team prototype. It should be read as academic work rather than production-ready software.',
        nl: 'Teamprototype. Het moet gelezen worden als academisch werk, niet als productieklare software.',
      },
    },
    {
      id: 'learned',
      bullets: {
        en: [
          'Working through Git with a team is its own skill: small, reviewable changes travel better than large ones.',
          'A scheduling interface is mostly edge cases. Most of the work sat in validation and conflict handling, not in the grid itself.',
          'Time is harder than it looks once a client and a server disagree about it.',
          'A hardware dependency needs a fallback path from the start, otherwise nobody can develop without the device.',
        ],
        nl: [
          'Met een team via Git werken is een vaardigheid op zich: kleine, reviewbare wijzigingen komen beter aan dan grote.',
          'Een planningsinterface bestaat grotendeels uit randgevallen. Het meeste werk zat in validatie en conflictafhandeling, niet in het raster zelf.',
          'Tijd is moeilijker dan het lijkt zodra client en server het oneens zijn.',
          'Een hardware-afhankelijkheid heeft van bij het begin een fallbackpad nodig, anders kan niemand zonder het toestel ontwikkelen.',
        ],
      },
    },
    {
      id: 'future',
      bullets: {
        en: [
          'Add authentication and authorisation',
          'Write the missing frontend tests',
          'Replace hardcoded room values with real configuration',
          'Tighten CORS before any non-academic use',
        ],
        nl: [
          'Authenticatie en autorisatie toevoegen',
          'De ontbrekende frontendtests schrijven',
          'Hardgecodeerde kamerwaarden vervangen door echte configuratie',
          'CORS aanscherpen vóór elk niet-academisch gebruik',
        ],
      },
    },
  ],
  evidence: {
    verified: {
      en: [
        'Vue 3 frontend and a .NET 8 backend using ASP.NET Core Minimal APIs and Clean Architecture',
        'MySQL persistence through ADO.NET',
        'ESP32 integration with a thread-safe in-memory fallback device store',
        'Web Push notifications',
        'Docker and Docker Compose, GitLab CI, SonarQube',
        '74 passing backend unit tests',
      ],
      nl: [
        'Vue 3-frontend en een .NET 8-backend met ASP.NET Core Minimal APIs en Clean Architecture',
        'MySQL-persistentie via ADO.NET',
        'ESP32-integratie met een thread-veilige in-memory fallbackopslag voor toestellen',
        'Web Push-meldingen',
        'Docker en Docker Compose, GitLab CI, SonarQube',
        '74 geslaagde backend-unittests',
      ],
    },
    builtByMe: {
      en: [
        'Vue views and the weekly activity planner, including the schedule grid',
        'REST integration and error handling on the frontend',
        'Date/time utilities and clock-offset synchronisation',
        'CSS theming, animations and music player controls',
        'SonarQube remediation and frontend quality improvements',
        'Targeted backend work: date/time synchronisation, SonarQube fixes and activity-related handling',
      ],
      nl: [
        'Vue-views en de weekplanner voor activiteiten, inclusief het roosterraster',
        'REST-integratie en foutafhandeling op de frontend',
        'Datum-/tijdhulpfuncties en kloksynchronisatie',
        'CSS-theming, animaties en muziekspelerbediening',
        'SonarQube-opkuis en frontendkwaliteitsverbeteringen',
        'Gerichte backendbijdragen: datum-/tijdsynchronisatie, SonarQube-fixes en activiteitgerelateerde afhandeling',
      ],
    },
    providedByTeam: {
      en: [
        'The .NET backend as a whole, which I contributed to but did not build alone',
        'ESP32 firmware and hardware integration',
        'Database design and overall project scope',
      ],
      nl: [
        'De .NET-backend als geheel, waaraan ik bijdroeg maar die ik niet alleen bouwde',
        'ESP32-firmware en hardware-integratie',
        'Databaseontwerp en de algemene projectscope',
      ],
    },
    limitations: {
      en: [
        'Authentication and authorisation are not implemented.',
        'No frontend test files exist, despite Vitest being configured.',
        'Room values are partly hardcoded and inconsistent.',
        'The TV controller is simulated.',
        'CORS is overly permissive and is not production-safe.',
        'A local working copy contains a syntax error in utils.js.',
        'Configuration files hold development credentials. The repository is private, so they are not publicly exposed, but they would have to be replaced with environment variables before the repository could be opened up.',
        'This is an academic prototype, not production-ready software.',
      ],
      nl: [
        'Authenticatie en autorisatie zijn niet geïmplementeerd.',
        'Er bestaan geen frontendtestbestanden, hoewel Vitest geconfigureerd is.',
        'Kamerwaarden zijn deels hardgecodeerd en inconsistent.',
        'De tv-bediening is gesimuleerd.',
        'CORS is te permissief en niet productieveilig.',
        'Een lokale werkkopie bevat een syntaxfout in utils.js.',
        'Configuratiebestanden bevatten ontwikkelcredentials. De repository is privé, dus ze staan niet publiek, maar ze zouden vervangen moeten worden door omgevingsvariabelen voor de repository opengesteld kan worden.',
        'Dit is een academisch prototype, geen productieklare software.',
      ],
    },
    planned: {
      en: [
        'Authentication and authorisation',
        'Frontend test suite',
        'Configuration instead of hardcoded room values',
        'Restricted CORS and environment-variable configuration before any public sharing',
      ],
      nl: [
        'Authenticatie en autorisatie',
        'Frontendtestsuite',
        'Configuratie in plaats van hardgecodeerde kamerwaarden',
        'Beperkte CORS en configuratie via omgevingsvariabelen vóór publieke deling',
      ],
    },
    cannotShow: {
      en: ['The repository is private, so there is no public link to it.'],
      nl: ['De repository is privé, dus er is geen publieke link naar.'],
    },
  },
}
