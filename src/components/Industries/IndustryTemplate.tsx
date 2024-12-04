import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from './HeroSection';
import { ProblemSolution } from './ProblemSolution';
import { Benefits } from './Benefits';
import { Features } from './Features';
import { FAQ } from './FAQ';
import { CTASection } from './CTASection';

interface IndustryTemplateProps {
  industry: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    imageUrl: string;
  };
  problems: Array<{
    problem: string;
    solution: string;
  }>;
  benefits: Array<{
    icon: any;
    title: string;
    description: string;
  }>;
  features: Array<{
    icon: any;
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    headline: string;
    subheadline: string;
  };
}

export function IndustryTemplate({
  industry,
  seo,
  hero,
  problems,
  benefits,
  features,
  faqs,
  cta,
}: IndustryTemplateProps) {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://venra.io/industries/${industry.toLowerCase()}`} />
      </Helmet>

      <HeroSection
        industry={industry}
        headline={hero.headline}
        subheadline={hero.subheadline}
        imageUrl={hero.imageUrl}
      />
      <ProblemSolution
        industry={industry}
        problems={problems}
      />
      <Benefits
        industry={industry}
        benefits={benefits}
      />
      <Features
        industry={industry}
        features={features}
      />
      <FAQ
        industry={industry}
        faqs={faqs}
      />
      <CTASection
        industry={industry}
        headline={cta.headline}
        subheadline={cta.subheadline}
      />
    </>
  );
}