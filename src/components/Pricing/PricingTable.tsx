import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { StarRating } from '../StarRating';

const features = [
  'Unlimited ad campaigns',
  'Unlimited users',
  'Unlimited ad spend management',
  'Access to proven ad templates',
  'AI-powered follow-ups for leads',
  'Real-time analytics dashboard',
];

export function PricingTable() {
  return (
    <section className="py-20 -mt-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                LIMITED TIME BETA PRICING
              </div>
              <div className="mb-4">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">
                Lock in this price forever when you join the beta
              </p>
            </div>

            <div className="space-y-4 mb-8 max-w-md mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 justify-center">
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center space-y-6">
              <Button variant="primary" size="lg" isGetStarted className="w-full">
                Get Started Now
              </Button>
              <div className="flex justify-center">
                <StarRating variant="dark" size="sm" />
              </div>
              <p className="text-sm text-gray-600">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}