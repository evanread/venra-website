import React from 'react';
import { Check } from 'lucide-react';
import { StarRating } from './StarRating';
import { Button } from './ui/Button';

const valueStack = [
  'Proven Campaign Templates',
  'AI-Powered Follow-Ups',
  'Analytics Dashboard',
  'Step-by-Step Onboarding',
  '30 Days of AI Follow-Ups—FREE for early adopters',
];

export function Offer() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Launch ad campaigns that book more jobs in minutes—guaranteed
          </h2>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                {valueStack.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-green-500 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-white rounded-lg border border-blue-100">
                <p className="text-sm text-gray-600">
                  <strong>Our Guarantee:</strong> Cancel anytime, money-back guarantee if results aren't achieved in 30 days.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Ready to grow your business?</h3>
              <Button variant="primary" size="lg" isGetStarted className="w-full mb-6">
                Get Started Now
              </Button>
              <div className="flex justify-center">
                <StarRating variant="dark" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}