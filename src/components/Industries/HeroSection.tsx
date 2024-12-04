import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  industry: string;
  headline: string;
  subheadline: string;
  imageUrl: string;
}

export function HeroSection({ industry, headline, subheadline, imageUrl }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white pt-20 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-300 font-semibold tracking-wide uppercase">
                For {industry} Professionals
              </p>
              <h1 className="text-5xl font-bold leading-tight">
                {headline}
              </h1>
              <p className="text-xl text-blue-100">
                {subheadline}
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" size="lg" isGetStarted className="flex items-center gap-2">
                Start Growing Your {industry} Business Today <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={imageUrl}
              alt={`${industry} professional using Venra marketing platform`}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}