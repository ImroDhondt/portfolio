import type { Skill } from '@/types/content'

/**
 * Skills are graded with four honest levels instead of percentages, and every
 * skill above "familiar" must point at the projects that demonstrate it.
 *
 * Project slugs used as evidence:
 *   qhse-platform | howestprime | freeze-or-sneeze | adria | ghost-haunter-incremental
 */
export const skills: Skill[] = [
  /* Languages ------------------------------------------------------- */
  { name: 'TypeScript', group: 'languages', level: 'primary', evidence: ['qhse-platform', 'howestprime'] },
  { name: 'Kotlin', group: 'languages', level: 'primary', evidence: ['freeze-or-sneeze'] },
  { name: 'C#', group: 'languages', level: 'primary', evidence: ['howestprime', 'adria'] },
  { name: 'JavaScript', group: 'languages', level: 'used-in-projects', evidence: ['qhse-platform', 'adria'] },
  { name: 'SQL', group: 'languages', level: 'used-in-projects', evidence: ['qhse-platform', 'howestprime', 'adria'] },
  { name: 'HTML', group: 'languages', level: 'used-in-projects', evidence: ['qhse-platform', 'adria', 'freeze-or-sneeze'] },
  { name: 'CSS', group: 'languages', level: 'used-in-projects', evidence: ['adria', 'howestprime', 'qhse-platform'] },
  { name: 'Shell scripting', group: 'languages', level: 'familiar', evidence: ['qhse-platform'] },
  { name: 'HCL / Terraform', group: 'languages', level: 'familiar', evidence: ['howestprime'] },
  { name: 'Lua / Luau', group: 'languages', level: 'learning', evidence: ['ghost-haunter-incremental'] },

  /* Frontend -------------------------------------------------------- */
  { name: 'Vue 3', group: 'frontend', level: 'primary', evidence: ['adria'] },
  { name: 'Next.js', group: 'frontend', level: 'used-in-projects', evidence: ['qhse-platform'] },
  { name: 'React', group: 'frontend', level: 'learning', evidence: ['qhse-platform'] },
  { name: 'Jetpack Compose', group: 'frontend', level: 'primary', evidence: ['freeze-or-sneeze'] },
  { name: 'Blazor Server', group: 'frontend', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'Tailwind CSS', group: 'frontend', level: 'used-in-projects', evidence: ['qhse-platform'] },
  {
    name: 'Responsive design',
    group: 'frontend',
    level: 'used-in-projects',
    evidence: ['adria', 'qhse-platform', 'freeze-or-sneeze'],
  },
  {
    name: 'Accessibility-aware UI',
    group: 'frontend',
    level: 'used-in-projects',
    evidence: ['freeze-or-sneeze'],
    caveat: {
      en: 'Reduced motion, themes and contrast rules are implemented and unit tested. Verification with a physical screen reader has not been done.',
      nl: "Reduced motion, thema's en contrastregels zijn geïmplementeerd en unit-getest. Verificatie met een fysieke schermlezer is niet gebeurd.",
    },
  },
  { name: 'Internationalisation', group: 'frontend', level: 'used-in-projects', evidence: ['qhse-platform'] },

  /* Backend --------------------------------------------------------- */
  { name: '.NET / ASP.NET Core', group: 'backend', level: 'primary', evidence: ['howestprime', 'adria'] },
  { name: 'NestJS', group: 'backend', level: 'primary', evidence: ['qhse-platform'] },
  { name: 'Deno / Oak', group: 'backend', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'REST APIs', group: 'backend', level: 'primary', evidence: ['qhse-platform', 'howestprime', 'adria'] },
  {
    name: 'Swagger / OpenAPI',
    group: 'backend',
    level: 'used-in-projects',
    evidence: ['qhse-platform', 'howestprime'],
  },
  { name: 'AsyncAPI', group: 'backend', level: 'used-in-projects', evidence: ['howestprime'] },
  {
    name: 'Dependency injection',
    group: 'backend',
    level: 'used-in-projects',
    evidence: ['qhse-platform', 'howestprime', 'freeze-or-sneeze'],
  },
  { name: 'Input validation (Zod)', group: 'backend', level: 'used-in-projects', evidence: ['qhse-platform'] },

  /* Mobile ---------------------------------------------------------- */
  { name: 'Native Android', group: 'mobile', level: 'primary', evidence: ['freeze-or-sneeze'] },
  { name: 'Navigation Compose', group: 'mobile', level: 'used-in-projects', evidence: ['freeze-or-sneeze'] },
  { name: 'ViewModel + StateFlow', group: 'mobile', level: 'used-in-projects', evidence: ['freeze-or-sneeze'] },
  { name: 'Room', group: 'mobile', level: 'used-in-projects', evidence: ['freeze-or-sneeze'] },
  { name: 'DataStore', group: 'mobile', level: 'used-in-projects', evidence: ['freeze-or-sneeze'] },
  { name: 'Dagger Hilt', group: 'mobile', level: 'used-in-projects', evidence: ['freeze-or-sneeze'] },
  { name: 'Coroutines', group: 'mobile', level: 'used-in-projects', evidence: ['freeze-or-sneeze'] },
  { name: 'Canvas rendering', group: 'mobile', level: 'used-in-projects', evidence: ['freeze-or-sneeze'] },

  /* Databases ------------------------------------------------------- */
  { name: 'PostgreSQL', group: 'databases', level: 'primary', evidence: ['qhse-platform', 'howestprime'] },
  { name: 'MySQL', group: 'databases', level: 'used-in-projects', evidence: ['adria'] },
  { name: 'MongoDB', group: 'databases', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'SQLite / Room', group: 'databases', level: 'used-in-projects', evidence: ['freeze-or-sneeze'] },
  { name: 'Prisma', group: 'databases', level: 'primary', evidence: ['qhse-platform'] },
  { name: 'Entity Framework Core', group: 'databases', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'ADO.NET', group: 'databases', level: 'familiar', evidence: ['adria'] },

  /* Architecture ---------------------------------------------------- */
  {
    name: 'Clean Architecture',
    group: 'architecture',
    level: 'primary',
    evidence: ['freeze-or-sneeze', 'howestprime', 'adria'],
  },
  { name: 'Domain-Driven Design', group: 'architecture', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'Hexagonal architecture', group: 'architecture', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'MVVM', group: 'architecture', level: 'primary', evidence: ['freeze-or-sneeze'] },
  { name: 'Microservices', group: 'architecture', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'Event-driven architecture', group: 'architecture', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'Workflow state machines', group: 'architecture', level: 'used-in-projects', evidence: ['qhse-platform'] },
  {
    name: 'Repository pattern',
    group: 'architecture',
    level: 'used-in-projects',
    evidence: ['freeze-or-sneeze', 'howestprime'],
  },
  { name: 'Monorepo organisation', group: 'architecture', level: 'used-in-projects', evidence: ['qhse-platform'] },

  /* Messaging ------------------------------------------------------- */
  { name: 'AMQP', group: 'messaging', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'RabbitMQ / LavinMQ', group: 'messaging', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'CloudAMQP', group: 'messaging', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'Topic exchanges', group: 'messaging', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'Event contracts', group: 'messaging', level: 'used-in-projects', evidence: ['howestprime'] },

  /* DevOps ---------------------------------------------------------- */
  { name: 'Docker', group: 'devops', level: 'primary', evidence: ['qhse-platform', 'howestprime', 'adria'] },
  {
    name: 'Docker Compose',
    group: 'devops',
    level: 'primary',
    evidence: ['qhse-platform', 'howestprime', 'adria'],
  },
  {
    name: 'Terraform',
    group: 'devops',
    level: 'used-in-projects',
    evidence: ['howestprime'],
    caveat: {
      en: 'Written to describe Azure infrastructure for Howestprime. A running production deployment is not claimed.',
      nl: 'Geschreven om de Azure-infrastructuur voor Howestprime te beschrijven. Een draaiende productiedeployment wordt niet geclaimd.',
    },
  },
  {
    name: 'Microsoft Azure',
    group: 'devops',
    level: 'familiar',
    evidence: ['howestprime'],
    caveat: {
      en: 'Container Apps, PostgreSQL, Cosmos DB, Container Registry and Key Vault are described in infrastructure code with managed identities.',
      nl: 'Container Apps, PostgreSQL, Cosmos DB, Container Registry en Key Vault zijn beschreven in infrastructuurcode met managed identities.',
    },
  },
  { name: 'GitHub Actions', group: 'devops', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'GitLab CI', group: 'devops', level: 'familiar', evidence: ['adria'] },
  { name: 'SonarQube', group: 'devops', level: 'used-in-projects', evidence: ['adria'] },
  { name: 'GitHub Pages', group: 'devops', level: 'used-in-projects', evidence: ['freeze-or-sneeze'] },

  /* Testing --------------------------------------------------------- */
  {
    name: 'Unit testing',
    group: 'testing',
    level: 'primary',
    evidence: ['freeze-or-sneeze', 'howestprime', 'qhse-platform'],
  },
  { name: 'xUnit + Coverlet', group: 'testing', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'Deno test runner', group: 'testing', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'JUnit (JVM)', group: 'testing', level: 'used-in-projects', evidence: ['freeze-or-sneeze'] },
  { name: 'Node test runner', group: 'testing', level: 'used-in-projects', evidence: ['qhse-platform'] },
  { name: 'Integration testing', group: 'testing', level: 'used-in-projects', evidence: ['howestprime'] },
  { name: 'Coverage gates', group: 'testing', level: 'used-in-projects', evidence: ['howestprime'] },
  {
    name: 'Vitest',
    group: 'testing',
    level: 'familiar',
    evidence: [],
    caveat: {
      en: 'Configured in the Adria team project, but no frontend test files were written there.',
      nl: 'Geconfigureerd in het teamproject Adria, maar daar zijn geen frontendtests geschreven.',
    },
  },
  { name: 'Static analysis', group: 'testing', level: 'used-in-projects', evidence: ['adria'] },
]

/** Technologies Imro is actively learning right now. */
export const currentlyLearning: { name: string; note: Record<'en' | 'nl', string> }[] = [
  {
    name: 'React',
    note: {
      en: 'Coming from Vue, used inside the Next.js frontend of the QHSE platform.',
      nl: 'Vanuit Vue, gebruikt in de Next.js-frontend van het QHSE-platform.',
    },
  },
  {
    name: 'Lua / Luau',
    note: {
      en: 'Learned through an early-stage Roblox incremental game.',
      nl: 'Geleerd via een Roblox-incremental game in een vroeg stadium.',
    },
  },
  {
    name: 'Roblox development',
    note: {
      en: 'Progression systems, feedback loops and player motivation.',
      nl: 'Progressiesystemen, feedbackloops en spelersmotivatie.',
    },
  },
  {
    name: 'Deployment and architecture',
    note: {
      en: 'Continuing to improve how my projects are structured and shipped.',
      nl: 'Blijven verbeteren hoe mijn projecten gestructureerd en uitgerold worden.',
    },
  },
]
