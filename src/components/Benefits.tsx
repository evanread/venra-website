import React from 'react';
import { Target, Clock, PiggyBank } from 'lucide-react';

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

export function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}