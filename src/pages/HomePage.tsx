import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/Home/HeroSection';
import { BenefitsSection } from '@/components/Home/BenefitsSection';
import { CallOut } from '@/components/CallOut';
import { Offer } from '@/components/Offer';
import { HowItWorks } from '@/components/HowItWorks';
import { Integrations } from '@/components/Integrations';
import { FAQ } from '@/components/FAQ';
import { RiskFree } from '@/components/RiskFree';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Venra | Marketing Automation for Home Service Businesses</title>
        <meta name="description" content="Venra helps home service businesses automate their marketing, generate more leads, and book more jobs with AI-powered campaigns and automation." />
        <meta name="keywords" content="home service marketing, digital marketing automation, lead generation, HVAC marketing, plumbing marketing" />
        <meta property="og:title" content="Venra | Marketing Automation for Home Service Businesses" />
        <meta property="og:description" content="Venra helps home service businesses automate their marketing, generate more leads, and book more jobs with AI-powered campaigns and automation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://venra.io" />
      </Helmet>

      <div className="bg-gradient-to-br from-blue-900 to-indigo-900">
        <HeroSection />
      </div>
      <BenefitsSection />
      <CallOut />
      <Offer />
      <HowItWorks />
      <Integrations />
      <FAQ />
      <RiskFree />
    </>
  );
}