import type { Project } from '@/types/content'

export const howestprime: Project = {
  slug: 'howestprime',
  title: 'Howestprime',
  tagline: {
    en: 'Distributed, event-driven cinema booking and ticketing platform.',
    nl: 'Gedistribueerd, event-driven platform voor bioscoopboekingen en ticketing.',
  },
  summary: {
    en: 'A distributed cinema booking and ticketing platform using microservices, event-driven messaging, Terraform, and Azure.',
    nl: 'Een gedistribueerd platform voor bioscoopboekingen en ticketing met microservices, event-driven messaging, Terraform en Azure.',
  },
  description: {
    en: 'Howestprime is a distributed cinema booking and ticketing platform designed around independent services for movie management, seat reservations, orders, payments, and ticket emission.',
    nl: 'Howestprime is een gedistribueerd platform voor bioscoopboekingen en ticketing, opgebouwd rond onafhankelijke services voor filmbeheer, stoelreservaties, bestellingen, betalingen en ticketuitgifte.',
  },
  categories: ['microservices', 'architecture', 'devops', 'web'],
  status: 'completed',
  featured: true,
  order: 2,
  ownership: 'solo',
  role: {
    en: 'Solo developer. Both microservices, the Blazor backoffice, the local Docker environment and the Terraform configuration.',
    nl: 'Solo-ontwikkelaar. Beide microservices, de Blazor-backoffice, de lokale Docker-omgeving en de Terraform-configuratie.',
  },
  technologies: [
    'C#',
    '.NET 10',
    'TypeScript',
    'Deno 2',
    'ASP.NET Core',
    'Blazor Server',
    'Oak',
    'Entity Framework Core',
    'PostgreSQL',
    'MongoDB',
    'Azure Cosmos DB',
    'RabbitMQ',
    'LavinMQ',
    'CloudAMQP',
    'AMQP',
    'AsyncAPI',
    'Swagger/OpenAPI',
    'Docker',
    'Docker Compose',
    'Terraform',
    'Microsoft Azure',
    'Azure Container Apps',
    'Azure Container Registry',
    'Azure Key Vault',
    'GitHub Actions',
    'xUnit',
    'Coverlet',
    'Deno Test Runner',
  ],
  primaryTech: ['.NET 10', 'Deno 2', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'Terraform'],
  links: {},
  media: { clearance: 'none' },
  confidential: false,
  sections: [
    {
      id: 'overview',
      body: {
        en: 'A distributed, event-driven cinema booking and ticketing platform built from multiple services using .NET, Deno/TypeScript, AMQP messaging, PostgreSQL, MongoDB, Docker, Terraform, Azure, and GitHub Actions. It was built independently as a multi-repository system for the Howest Build and Deploy curriculum.',
        nl: 'Een gedistribueerd, event-driven platform voor bioscoopboekingen en ticketing, opgebouwd uit meerdere services met .NET, Deno/TypeScript, AMQP-messaging, PostgreSQL, MongoDB, Docker, Terraform, Azure en GitHub Actions. Het is zelfstandig gebouwd als een systeem met meerdere repositories voor het Howest-vak Build and Deploy.',
      },
    },
    {
      id: 'problem',
      body: {
        en: 'Booking a seat and paying for a ticket are two different responsibilities with different data and different failure modes. Putting them in one service couples the seat inventory to the payment flow; splitting them raises the harder question of how the two stay consistent when one of them fails.',
        nl: 'Een stoel reserveren en een ticket betalen zijn twee verschillende verantwoordelijkheden met verschillende data en verschillende faalscenario’s. Ze in één service stoppen koppelt de stoelvoorraad aan de betaalflow; ze splitsen roept de moeilijkere vraag op hoe beide consistent blijven wanneer één van hen faalt.',
      },
    },
    {
      id: 'users',
      bullets: {
        en: [
          'Cinema managers, who register movies and schedule screenings through the backoffice',
          'Patrons, who reserve seats, pay and receive tickets',
        ],
        nl: [
          'Bioscoopbeheerders, die films registreren en vertoningen plannen via de backoffice',
          'Bezoekers, die stoelen reserveren, betalen en tickets ontvangen',
        ],
      },
    },
    {
      id: 'role',
      body: {
        en: 'Solo project. I built the .NET Movies microservice, the Deno/TypeScript Ticketing microservice, the Blazor Server backoffice, the AMQP event contracts between the services, the local Docker Compose environment and the Terraform configuration for Azure.',
        nl: 'Soloproject. Ik bouwde de .NET Movies-microservice, de Deno/TypeScript Ticketing-microservice, de Blazor Server-backoffice, de AMQP-eventcontracten tussen de services, de lokale Docker Compose-omgeving en de Terraform-configuratie voor Azure.',
      },
    },
    {
      id: 'built',
      bullets: {
        en: [
          'Backoffice: Blazor Server cinema manager interface with movie registration, screening scheduling, an interactive planning calendar, catalogue management and custom glassmorphism styling.',
          'Movies microservice: .NET 10 ASP.NET Core Web API on Entity Framework Core and PostgreSQL, handling the movie catalogue, screening schedules, seat reservations, the booking lifecycle, domain events and AMQP event publishing.',
          'Ticketing microservice: Deno 2 and TypeScript on Oak and MongoDB, consuming and publishing AMQP events and handling orders, customer data, payments, ticket generation and the ticket lifecycle.',
        ],
        nl: [
          'Backoffice: Blazor Server-interface voor bioscoopbeheerders met filmregistratie, vertoningsplanning, een interactieve planningskalender, catalogusbeheer en eigen glassmorphism-styling.',
          'Movies-microservice: .NET 10 ASP.NET Core Web API op Entity Framework Core en PostgreSQL, met de filmcatalogus, vertoningsschema’s, stoelreservaties, de boekingslevenscyclus, domeinevents en AMQP-eventpublicatie.',
          'Ticketing-microservice: Deno 2 en TypeScript op Oak en MongoDB, die AMQP-events consumeert en publiceert en bestellingen, klantgegevens, betalingen, ticketgeneratie en de ticketlevenscyclus afhandelt.',
        ],
      },
    },
    {
      id: 'architecture',
      body: {
        en: 'The two core services own their own databases and communicate only through AMQP topic exchanges. A booking flow crosses the service boundary as a sequence of events rather than a synchronous call chain, which lets each side fail and recover independently.',
        nl: 'De twee kernservices bezitten hun eigen databank en communiceren enkel via AMQP topic exchanges. Een boekingsflow steekt de servicegrens over als een reeks events in plaats van een synchrone aanroepketen, waardoor elke kant onafhankelijk kan falen en herstellen.',
      },
      bullets: {
        en: [
          'A patron reserves seats and the Movies service creates a booking.',
          'A BookingOpened event travels through AMQP to Ticketing.',
          'Ticketing creates an order, collects customer details and terms acceptance, and executes payment.',
          'A successful payment produces tickets. A failed payment releases the reserved seats.',
          'Events keep both services eventually consistent without a shared database.',
        ],
        nl: [
          'Een bezoeker reserveert stoelen en de Movies-service maakt een boeking aan.',
          'Een BookingOpened-event gaat via AMQP naar Ticketing.',
          'Ticketing maakt een bestelling aan, verzamelt klantgegevens en akkoordverklaring, en voert de betaling uit.',
          'Een geslaagde betaling levert tickets op. Een mislukte betaling geeft de gereserveerde stoelen vrij.',
          'Events houden beide services uiteindelijk consistent zonder gedeelde databank.',
        ],
      },
    },
    {
      id: 'technologies',
      code: [
        'MovieRegistered    BookingOpened',
        'PaymentSuccess     PaymentFailed',
        'OrderPaid          TicketsReleased',
        '',
        'C# 13 / .NET 10    TypeScript / Deno 2',
        'ASP.NET Core       Oak',
        'Blazor Server      Entity Framework Core',
        'PostgreSQL         MongoDB / Cosmos DB',
        'RabbitMQ / LavinMQ / CloudAMQP (AMQP)',
        'Docker Compose     Terraform      Azure',
        'GitHub Actions     xUnit + Coverlet',
      ].join('\n'),
    },
    {
      id: 'decisions',
      bullets: {
        en: [
          'Give each service its own database instead of sharing one schema.',
          'Use AMQP topic exchanges for cross-service communication so booking and ticketing stay decoupled.',
          'Accept eventual consistency and handle the failure path explicitly: a failed payment releases the seats.',
          'Use two different runtimes on purpose, .NET for Movies and Deno for Ticketing, and keep the contract between them in AsyncAPI rather than in shared code.',
          'Describe the Azure infrastructure in Terraform so the environment is reproducible.',
          'Keep secrets in Azure Key Vault and use managed identities rather than connection strings in configuration.',
        ],
        nl: [
          'Elke service een eigen databank geven in plaats van één schema te delen.',
          'AMQP topic exchanges gebruiken voor communicatie tussen services zodat boeking en ticketing ontkoppeld blijven.',
          'Eventual consistency aanvaarden en het faalpad expliciet afhandelen: een mislukte betaling geeft de stoelen vrij.',
          'Bewust twee verschillende runtimes gebruiken, .NET voor Movies en Deno voor Ticketing, en het contract ertussen in AsyncAPI houden in plaats van in gedeelde code.',
          'De Azure-infrastructuur beschrijven in Terraform zodat de omgeving reproduceerbaar is.',
          'Secrets in Azure Key Vault bewaren en managed identities gebruiken in plaats van connectiestrings in configuratie.',
        ],
      },
    },
    {
      id: 'testing',
      bullets: {
        en: [
          'xUnit and Coverlet for the .NET Movies service',
          'Deno test runner for the Ticketing service',
          'Integration test coverage for payment policy behaviour',
          'A 95% line coverage requirement enforced in CI for the microservices',
          'Manual REST scenario scripts for local integration testing',
          'No automated unit test project exists for the Blazor backoffice',
        ],
        nl: [
          'xUnit en Coverlet voor de .NET Movies-service',
          'Deno-testrunner voor de Ticketing-service',
          'Integratietestdekking voor het gedrag van het betaalbeleid',
          'Een vereiste van 95% lijndekking afgedwongen in CI voor de microservices',
          'Manuele REST-scenarioscripts voor lokale integratietests',
          'Er bestaat geen geautomatiseerd unittestproject voor de Blazor-backoffice',
        ],
      },
    },
    {
      id: 'deployment',
      body: {
        en: 'Locally the whole system runs on Docker Compose with PostgreSQL, a MongoDB replica set and a LavinMQ broker. For Azure, the infrastructure is described in Terraform: Container Apps, Azure PostgreSQL, Cosmos DB with the Mongo API, Container Registry, Key Vault, CloudAMQP, managed identities and RBAC, with GitHub Actions wired in.',
        nl: 'Lokaal draait het volledige systeem op Docker Compose met PostgreSQL, een MongoDB-replicaset en een LavinMQ-broker. Voor Azure is de infrastructuur beschreven in Terraform: Container Apps, Azure PostgreSQL, Cosmos DB met de Mongo-API, Container Registry, Key Vault, CloudAMQP, managed identities en RBAC, met GitHub Actions eraan gekoppeld.',
      },
    },
    {
      id: 'status',
      body: {
        en: 'Completed course project. A distributed systems demonstration with a deployment-ready architecture.',
        nl: 'Afgerond vakproject. Een demonstratie van gedistribueerde systemen met een deployment-klare architectuur.',
      },
    },
    {
      id: 'learned',
      bullets: {
        en: [
          'Getting two microservices to talk through a message broker was the part of this project I am most proud of solving.',
          'Debugging a workflow that crosses service boundaries is a different skill from debugging a single application.',
          'Service boundaries are easier to defend when the failure path is designed at the same time as the happy path.',
          'A coverage gate in CI changes how you write the code, not just how you check it afterwards.',
        ],
        nl: [
          'Twee microservices met elkaar laten praten via een message broker is het stuk van dit project waar ik het meest trots op ben.',
          'Een workflow debuggen die servicegrenzen overschrijdt is een andere vaardigheid dan één applicatie debuggen.',
          'Servicegrenzen zijn makkelijker te verdedigen wanneer het faalpad samen met het succespad ontworpen wordt.',
          'Een dekkingsdrempel in CI verandert hoe je de code schrijft, niet enkel hoe je ze achteraf controleert.',
        ],
      },
    },
    {
      id: 'future',
      bullets: {
        en: [
          'Replace the academic role header with real identity handling before any production use',
          'Add automated tests for the Blazor backoffice',
        ],
        nl: [
          'De academische rolheader vervangen door echte identiteitsafhandeling vóór elk productiegebruik',
          'Geautomatiseerde tests toevoegen voor de Blazor-backoffice',
        ],
      },
    },
  ],
  evidence: {
    verified: {
      en: [
        'Two independent microservices with separate databases: .NET 10 with PostgreSQL, Deno 2 with MongoDB',
        'Blazor Server backoffice for cinema management',
        'AMQP messaging through RabbitMQ/LavinMQ locally and CloudAMQP in the cloud configuration',
        'Domain events including BookingOpened, PaymentSuccess, PaymentFailed and OrderPaid',
        'Docker Compose environment with PostgreSQL, a MongoDB replica set and LavinMQ',
        'Terraform configuration describing Azure Container Apps, PostgreSQL, Cosmos DB, Container Registry, Key Vault and managed identities',
        'GitHub Actions CI with a 95% line coverage gate for the microservices',
        'xUnit, Coverlet and the Deno test runner',
        'OpenAPI and AsyncAPI contracts',
      ],
      nl: [
        'Twee onafhankelijke microservices met aparte databanken: .NET 10 met PostgreSQL, Deno 2 met MongoDB',
        'Blazor Server-backoffice voor bioscoopbeheer',
        'AMQP-messaging via RabbitMQ/LavinMQ lokaal en CloudAMQP in de cloudconfiguratie',
        'Domeinevents waaronder BookingOpened, PaymentSuccess, PaymentFailed en OrderPaid',
        'Docker Compose-omgeving met PostgreSQL, een MongoDB-replicaset en LavinMQ',
        'Terraform-configuratie die Azure Container Apps, PostgreSQL, Cosmos DB, Container Registry, Key Vault en managed identities beschrijft',
        'GitHub Actions-CI met een dekkingsdrempel van 95% lijndekking voor de microservices',
        'xUnit, Coverlet en de Deno-testrunner',
        'OpenAPI- en AsyncAPI-contracten',
      ],
    },
    builtByMe: {
      en: ['Everything in this project. It is a solo build across multiple repositories.'],
      nl: ['Alles in dit project. Het is een solobuild verspreid over meerdere repositories.'],
    },
    limitations: {
      en: [
        'Authorisation uses a custom x-user-role header for academic and internal purposes. This is not equivalent to JWT or OAuth and must not be presented as production-grade identity security.',
        'The Blazor backoffice has no automated unit test project.',
        'The Terraform configuration describes the Azure environment. A running production deployment is not claimed here.',
      ],
      nl: [
        'Autorisatie gebruikt een eigen x-user-role-header voor academische en interne doeleinden. Dat is niet gelijk aan JWT of OAuth en mag niet voorgesteld worden als identiteitsbeveiliging op productieniveau.',
        'De Blazor-backoffice heeft geen geautomatiseerd unittestproject.',
        'De Terraform-configuratie beschrijft de Azure-omgeving. Een draaiende productiedeployment wordt hier niet geclaimd.',
      ],
    },
    planned: {
      en: ['Real identity and access handling instead of the role header', 'Automated tests for the backoffice'],
      nl: ['Echte identiteits- en toegangsafhandeling in plaats van de rolheader', 'Geautomatiseerde tests voor de backoffice'],
    },
  },
}
