import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface CTASectionProps {
  industry: string;
  headline: string;
  subheadline: string;
}

export function CTASection({ industry, headline, subheadline }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">{headline}</h2>
        <p className="text-xl text-blue-100 mb-8">{subheadline}</p>
        <Button variant="secondary" size="lg" isGetStarted className="flex items-center gap-2 mx-auto">
          Get Started Now <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}