import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitsProps {
  industry: string;
  benefits: Benefit[];
}

export function Benefits({ industry, benefits }: BenefitsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why {industry} Professionals Choose Venra
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}