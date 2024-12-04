import React from 'react';
import { Target, Clock, PiggyBank } from 'lucide-react';
import { BenefitCard } from './BenefitCard';

const benefits = [
  {
    icon: Target,
    title: 'No Guesswork. Real Results.',
    description: 'Use data-driven campaigns proven to convert in your industry.',
  },
  {
    icon: Clock,
    title: 'Up and Running in Minutes',
    description: 'Quick setup with templates tailored for home service businesses.',
  },
  {
    icon: PiggyBank,
    title: 'Save Thousands on Agencies',
    description: 'Cut out the middleman and take control of your marketing.',
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