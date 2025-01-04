import React from 'react';
import { Target, Clock, PiggyBank } from 'lucide-react';
import { BenefitCard } from './BenefitCard';

const benefits = [
  {
    icon: Target,
    title: 'Proven HVAC Templates',
    description: 'Use data-driven campaigns proven to convert HVAC leads in your market',
  },
  {
    icon: Clock,
    title: 'Up and Running in Minutes',
    description: 'Launch your first campaign and start booking appointments in under 30 minutes',
  },
  {
    icon: PiggyBank,
    title: 'Save Thousands on Agencies',
    description: 'Get better results at 1/4 the cost of traditional HVAC marketing agencies',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}