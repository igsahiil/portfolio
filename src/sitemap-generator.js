import { writeFileSync } from 'fs';
const baseUrl = 'https://sahilparmar.in'; // Replace with your actual domain

const pages = [
  '',
  '#projects',
  '#skills',
  '#experience',
  '#contact'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

  writeFileSync('./public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
