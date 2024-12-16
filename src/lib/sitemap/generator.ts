import { Route, SitemapURL } from './types';
import { coreRoutes, industryRoutes, legalRoutes } from './routes';
import { getAllPosts } from '../blog';

const BASE_URL = 'https://venra.io';

async function getBlogRoutes(): Promise<Route[]> {
  const posts = await getAllPosts();
  
  return [
    // Blog index page
    {
      path: '/blog',
      changefreq: 'daily',
      priority: 0.9
    },
    // Individual blog posts
    ...posts.map(post => ({
      path: `/blog/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.7
    }))
  ];
}

function formatSitemapURL(route: Route): SitemapURL {
  return {
    loc: `${BASE_URL}${route.path}`,
    changefreq: route.changefreq,
    priority: route.priority,
    lastmod: new Date().toISOString().split('T')[0]
  };
}

function generateSitemapXML(urls: SitemapURL[]): string {
  const urlElements = urls.map(url => `
    <url>
      <loc>${url.loc}</loc>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
      ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    </url>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlElements}
</urlset>`;
}

export async function generateSitemap(): Promise<string> {
  try {
    // Combine all static routes
    const staticRoutes = [...coreRoutes, ...industryRoutes, ...legalRoutes];
    
    // Get dynamic blog routes
    const blogRoutes = await getBlogRoutes();
    
    // Combine all routes and format them
    const allUrls = [...staticRoutes, ...blogRoutes].map(formatSitemapURL);
    
    // Generate and return the sitemap XML
    return generateSitemapXML(allUrls);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
}