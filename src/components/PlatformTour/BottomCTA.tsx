import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function BottomCTA() {
  return (
    <div className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Ready to Transform Your Marketing?
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Join our beta program today and get 50% off our regular pricing when we launch.
      </p>
      <Button variant="primary" size="lg" isGetStarted className="flex items-center gap-2">
        Get Started Now <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
}