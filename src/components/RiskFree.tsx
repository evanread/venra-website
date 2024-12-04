import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

export function RiskFree() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <ShieldCheck className="w-16 h-16 text-blue-600 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-6">Start Risk-Free Today</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          No setup fees, no long-term commitment, and money-back guarantee. Your success is our priority.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" size="lg" isGetStarted>
            Get Started Now
          </Button>
          <Link to="/platform-tour">
            <Button variant="secondary" size="lg">
              Tour the Platform
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}