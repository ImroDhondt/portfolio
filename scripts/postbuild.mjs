/**
 * Post-build steps for a static host.
 *
 * 1. Copy index.html to 404.html so GitHub Pages serves the SPA for any URL
 *    the router knows but the build did not pre-render.
 * 2. Pre-render index.html at every known route. Without this, a static host
 *    answers deep links through the 404 fallback, which renders correctly but
 *    responds with HTTP 404 and keeps crawlers out.
 * 3. Write a sitemap and a robots.txt entry for the site's own domain.
 *    SITE_URL overrides the default, which is useful for a staging host.
 */
import { copyFile, mkdir, writeFile, appendFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const dist = resolve(process.cwd(), 'dist')
const DEFAULT_SITE_URL = 'https://imrodhondt.be'

const locales = ['en', 'nl']
// The notes section is not linked in the navigation yet, so it stays out of
// the sitemap until the first real note is published.
const paths = ['', '/projects', '/about', '/skills', '/contact']

const projectSlugs = [
  'qhse-platform',
  'howestprime',
  'freeze-or-sneeze',
  'adria',
  'ghost-haunter-incremental',
]

await copyFile(resolve(dist, 'index.html'), resolve(dist, '404.html'))
console.log('postbuild: wrote dist/404.html')

/** Every route the router serves, relative to the site root. */
function routePaths() {
  const all = []
  for (const locale of locales) {
    for (const path of paths) all.push(`/${locale}${path}`)
    for (const slug of projectSlugs) all.push(`/${locale}/projects/${slug}`)
  }
  return all
}

const shell = resolve(dist, 'index.html')
for (const route of routePaths()) {
  const target = resolve(dist, `.${route}`, 'index.html')
  await mkdir(dirname(target), { recursive: true })
  await copyFile(shell, target)
}
console.log(`postbuild: pre-rendered ${routePaths().length} routes`)

const siteUrl = (process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')

// Trailing slashes match what the static host actually serves, so a crawler
// reaches every URL directly instead of through a 301.
const urls = routePaths().map((route) => `${siteUrl}${route}/`)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>
`

await writeFile(resolve(dist, 'sitemap.xml'), sitemap, 'utf8')
await appendFile(resolve(dist, 'robots.txt'), `\nSitemap: ${siteUrl}/sitemap.xml\n`, 'utf8')
console.log(`postbuild: wrote dist/sitemap.xml with ${urls.length} URLs`)
