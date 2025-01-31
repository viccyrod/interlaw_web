import fs from 'fs'
import { globby } from 'globby'

async function generateSitemap(): Promise<void> {
  const baseUrl = 'https://interlaw.io'
  
  // Get all .tsx pages except _app.tsx, _document.tsx, etc.
  const pages: string[] = await globby([
    'src/app/**/*.tsx',
    '!src/app/**/_*.tsx',
    '!src/app/**/layout.tsx',
    '!src/app/**/loading.tsx',
    '!src/app/**/error.tsx',
  ])

  // Add static routes
  const staticRoutes: string[] = [
    '',
    '/tax-optimization',
    '/residency-programs',
    '/blog',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/paraguay',
    '/panama',
    '/dubai',
    '/malta',
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticRoutes
        .map((route: string) => {
          return `
            <url>
              <loc>${baseUrl}${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>${route === '' ? '1.0' : '0.8'}</priority>
            </url>
          `
        })
        .join('')}
      ${pages
        .map((page: string) => {
          const path = page
            .replace('src/app', '')
            .replace('/page.tsx', '')
            .replace('.tsx', '')
          if (staticRoutes.includes(path)) return ''
          return `
            <url>
              <loc>${baseUrl}${path}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.8</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  fs.writeFileSync('public/sitemap.xml', sitemap)
  console.log('Sitemap generated!')
}

export default generateSitemap 