const fs = require('fs');
const path = require('path');

const baseUrl = 'https://portofolio-eta-azure.vercel.app';
const currentDate = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects', priority: '0.8', changefreq: 'monthly' },
  { path: '/experience', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/services', priority: '0.6', changefreq: 'monthly' },
  { path: '/photo-innocent-dembele.html', priority: '0.9', changefreq: 'monthly' }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>2024-12-16</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Écrire dans public/sitemap.xml
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap généré avec succès dans public/sitemap.xml');