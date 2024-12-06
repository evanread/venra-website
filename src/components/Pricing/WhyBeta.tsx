import React from 'react';
import { Tag, Star, MessageCircle, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: '75% Discount',
    description: 'Get started at $49/month instead of $197/month during beta'
  },
  {
    icon: Star,
    title: 'Priority Access',
    description: 'Be the first to experience Venra\'s powerful marketing tools'
  },
  {
    icon: MessageCircle,
    title: 'Your Voice Matters',
    description: 'Help shape Venra by sharing feedback as we refine the platform'
  }
];

export function WhyBeta() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Join the Beta?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}