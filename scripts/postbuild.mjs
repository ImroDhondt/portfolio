/**
 * Post-build steps for a static host.
 *
 * 1. Copy index.html to 404.html so GitHub Pages serves the SPA for deep
 *    links such as /en/projects/howestprime.
 * 2. Write a sitemap and a robots.txt entry for the site's own domain.
 *    SITE_URL overrides the default, which is useful for a staging host.
 */
import { copyFile, writeFile, appendFile } from 'node:fs/promises'
import { resolve } from 'node:path'

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

const siteUrl = (process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')

const urls = []
for (const locale of locales) {
  for (const path of paths) urls.push(`${siteUrl}/${locale}${path}`)
  for (const slug of projectSlugs) urls.push(`${siteUrl}/${locale}/projects/${slug}`)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>
`

await writeFile(resolve(dist, 'sitemap.xml'), sitemap, 'utf8')
await appendFile(resolve(dist, 'robots.txt'), `\nSitemap: ${siteUrl}/sitemap.xml\n`, 'utf8')
console.log(`postbuild: wrote dist/sitemap.xml with ${urls.length} URLs`)
