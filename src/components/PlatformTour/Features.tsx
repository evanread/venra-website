import React from 'react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: 'Campaign Setup',
    features: [
      'Industry-specific templates',
      'Budget optimization',
      'Targeting settings',
    ],
  },
  {
    title: 'Lead Management',
    features: [
      'AI-powered follow-up',
      'Appointment scheduling',
      'SMS & email automation',
    ],
  },
  {
    title: 'Performance Tracking',
    features: [
      'Real-time analytics',
      'Cost per lead tracking',
      'ROI reporting',
    ],
  },
];

export function Features() {
  return (
    <div className="mt-20">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            features={feature.features}
          />
        ))}
      </div>
    </div>
  );
}