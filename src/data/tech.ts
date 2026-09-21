/**
 * Canonical technology labels.
 *
 * Projects may only reference labels listed here, which keeps the filter
 * list free of near-duplicates ("Postgres" vs "PostgreSQL") and makes it
 * obvious when a technology is claimed without a project behind it.
 */
export const TECHNOLOGIES = [
  // Languages
  'C#',
  'TypeScript',
  'JavaScript',
  'Kotlin',
  'Lua/Luau',
  'SQL',
  'HTML',
  'CSS',
  'Shell',
  'HCL/Terraform',
  // Frontend
  'Vue 3',
  'React 19',
  'Next.js 15',
  'Blazor Server',
  'Jetpack Compose',
  'Tailwind CSS',
  'TanStack React Query',
  'Radix UI',
  'Recharts',
  'next-intl',
  // Backend
  '.NET 8',
  '.NET 10',
  'ASP.NET Core',
  'NestJS 11',
  'Deno 2',
  'Oak',
  'Minimal APIs',
  'REST API',
  'Swagger/OpenAPI',
  'AsyncAPI',
  'Zod',
  'Argon2',
  'Helmet',
  // Mobile
  'Android',
  'Room',
  'DataStore',
  'Dagger Hilt',
  'Compose Canvas',
  'Coroutines',
  // Data
  'PostgreSQL 17',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'SQLite',
  'Prisma 6',
  'Entity Framework Core',
  'ADO.NET',
  'Azure Cosmos DB',
  // Messaging
  'AMQP',
  'RabbitMQ',
  'LavinMQ',
  'CloudAMQP',
  // Infrastructure
  'Docker',
  'Docker Compose',
  'Terraform',
  'Microsoft Azure',
  'Azure Container Apps',
  'Azure Container Registry',
  'Azure Key Vault',
  'GitHub Actions',
  'GitLab CI',
  'SonarQube',
  'GitHub Pages',
  'Turborepo',
  'pnpm workspaces',
  // Testing
  'xUnit',
  'Coverlet',
  'Deno Test Runner',
  'JUnit',
  'Vitest',
  'Node test runner',
  // Other
  'ESP32',
  'Web Push API',
  'Roblox',
] as const

export type Technology = (typeof TECHNOLOGIES)[number]

const known = new Set<string>(TECHNOLOGIES)

export function isKnownTechnology(value: string): value is Technology {
  return known.has(value)
}
