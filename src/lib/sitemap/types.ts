export interface Route {
    path: string;
    changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
  }
  
  export interface SitemapURL {
    loc: string;
    changefreq: string;
    priority: number;
    lastmod?: string;
  }