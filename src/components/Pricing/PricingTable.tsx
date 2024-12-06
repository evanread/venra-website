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
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-500 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Beta Access
            </span>
          </div>
          
          <div className="text-center mb-8">
            <div className="text-blue-600 font-semibold mb-4">Limited Time Beta Offer</div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-gray-400 line-through">
                <span className="text-2xl font-bold">$197</span>
                <span>/month</span>
              </div>
              <div className="text-gray-800">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Special beta pricing - Limited to first 100 users
            </p>
            <Button variant="primary" size="lg" isGetStarted className="w-full max-w-md">
              Get Started Now
            </Button>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <div className="flex justify-center">
              <StarRating variant="dark" size="sm" />
            </div>
            <p className="text-sm text-center text-gray-600 mt-4">
              30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}