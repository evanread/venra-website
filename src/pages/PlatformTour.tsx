import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Section } from '@/components/ui/Section';
import { VideoSection } from '@/components/PlatformTour/VideoSection';
import { Features } from '@/components/PlatformTour/Features';
import { BottomCTA } from '@/components/PlatformTour/BottomCTA';

export function PlatformTour() {
  return (
    <>
      <Helmet>
        <title>Platform Tour - Venra | Marketing Automation for Home Services</title>
        <meta name="description" content="See how Venra helps home service businesses automate their marketing, convert more leads, and grow revenue with our all-in-one platform." />
        <meta name="keywords" content="marketing automation, home services marketing, lead generation, digital marketing platform" />
        <meta property="og:title" content="Platform Tour - Venra | Marketing Automation for Home Services" />
        <meta property="og:description" content="See how Venra helps home service businesses automate their marketing, convert more leads, and grow revenue with our all-in-one platform." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://venra.io/platform-tour" />
      </Helmet>

      <Section background="gradient" className="text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Marketing with Venra
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Watch how home service businesses are using Venra to automate their marketing, 
            convert more leads, and grow their revenue.
          </p>
        </div>
      </Section>

      <Section className="relative -mt-16">
        <VideoSection />
        <Features />
        <BottomCTA />
      </Section>
    </>
  );
}