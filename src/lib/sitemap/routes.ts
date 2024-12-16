import { Route } from './types';

// Core pages with static routes
export const coreRoutes: Route[] = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    path: '/pricing',
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    path: '/platform-tour',
    changefreq: 'monthly',
    priority: 0.9
  }
];

// Industry pages
export const industryRoutes: Route[] = [
  {
    path: '/industries/hvac',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    path: '/industries/plumbing',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    path: '/industries/electrician',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    path: '/industries/landscape',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    path: '/industries/roofing',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    path: '/industries/cleaning',
    changefreq: 'monthly',
    priority: 0.8
  }
];

// Legal pages
export const legalRoutes: Route[] = [
  {
    path: '/legal/privacy-policy',
    changefreq: 'monthly',
    priority: 0.5
  },
  {
    path: '/legal/terms-of-service',
    changefreq: 'monthly',
    priority: 0.5
  },
  {
    path: '/legal/cookie-policy',
    changefreq: 'monthly',
    priority: 0.5
  }
];