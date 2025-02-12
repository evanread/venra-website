import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from './ui/Button';

export function CallOut() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h2 className="text-3xl font-bold mb-6">
              Start Growing Your HVAC Business Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              From ad campaign to booked appointment - all while you focus on serving customers
            </p>
            <Button variant="secondary" size="lg" isGetStarted>
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}