import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/pricing';
import { BlogPage } from './pages/blog/BlogPage';
import { BlogPostPage } from './pages/blog/BlogPostPage';
import { HVACPage } from './pages/industries/hvac/HVACPage';
import { PlumbingPage } from './pages/industries/plumbing/PlumbingPage';
import { ElectricianPage } from './pages/industries/electrician/ElectricianPage';
import { LandscapePage } from './pages/industries/landscape/LandscapePage';
import { RoofingPage } from './pages/industries/roofing/RoofingPage';
import { CleaningPage } from './pages/industries/cleaning/CleaningPage';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { TermsOfService } from './pages/legal/TermsOfService';
import { CookiePolicy } from './pages/legal/CookiePolicy';
import { PlatformTour } from './pages/PlatformTour';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Layout />
        <ScrollRestoration />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'blog/:slug',
        element: <BlogPostPage />,
      },
      {
        path: 'platform-tour',
        element: <PlatformTour />,
      },
      {
        path: 'industries/hvac',
        element: <HVACPage />,
      },
      {
        path: 'industries/plumbing',
        element: <PlumbingPage />,
      },
      {
        path: 'industries/electrician',
        element: <ElectricianPage />,
      },
      {
        path: 'industries/landscape',
        element: <LandscapePage />,
      },
      {
        path: 'industries/roofing',
        element: <RoofingPage />,
      },
      {
        path: 'industries/cleaning',
        element: <CleaningPage />,
      },
      {
        path: 'legal/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'legal/terms-of-service',
        element: <TermsOfService />,
      },
      {
        path: 'legal/cookie-policy',
        element: <CookiePolicy />,
      },
    ],
  },
]);