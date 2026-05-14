import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SitemapService {
  
  generateSitemap(): string {
    const baseUrl = 'https://portofolio-eta-azure.vercel.app';
    const lastmod = new Date().toISOString().split('T')[0];
    
    const urls = [
      { loc: baseUrl, priority: '1.0', changefreq: 'weekly' },
      { loc: `${baseUrl}/about`, priority: '0.8', changefreq: 'monthly' },
      { loc: `${baseUrl}/projects`, priority: '0.8', changefreq: 'monthly' },
      { loc: `${baseUrl}/experience`, priority: '0.7', changefreq: 'monthly' },
      { loc: `${baseUrl}/contact`, priority: '0.7', changefreq: 'monthly' },
      { loc: `${baseUrl}/services`, priority: '0.6', changefreq: 'monthly' }
    ];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    urls.forEach(url => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${url.loc}</loc>\n`;
      sitemap += `    <lastmod>${lastmod}</lastmod>\n`;
      sitemap += `    <changefreq>${url.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${url.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    return sitemap;
  }
}