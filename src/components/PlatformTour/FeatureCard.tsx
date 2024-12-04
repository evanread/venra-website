import React from 'react';
import { Play } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  features: string[];
}

export function FeatureCard({ title, features }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="text-blue-600 mb-4">
        <Play className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3 text-gray-600">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </div>
  );
}