import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PricingHero } from '@/components/Pricing/PricingHero';
import { PricingTable } from '@/components/Pricing/PricingTable';
import { MessagingLimits } from '@/components/Pricing/MessagingLimits';
import { WhyBeta } from '@/components/Pricing/WhyBeta';

export function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing - Venra | Marketing Automation for Home Services</title>
        <meta name="description" content="Get early access to Venra's marketing automation platform. Lock in our special beta pricing of $49/month with unlimited campaigns and AI-powered features." />
        <meta name="keywords" content="marketing automation pricing, home services marketing, digital marketing platform, beta pricing" />
        <meta property="og:title" content="Pricing - Venra | Marketing Automation for Home Services" />
        <meta property="og:description" content="Get early access to Venra's marketing automation platform. Lock in our special beta pricing of $49/month with unlimited campaigns and AI-powered features." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://venra.io/pricing" />
      </Helmet>

      <div className="bg-gradient-to-br from-blue-900 to-indigo-900">
        <PricingHero />
      </div>
      <PricingTable />
      <MessagingLimits />
      <WhyBeta />
    </>
  );
}