import React from 'react';
import { Sparkles } from 'lucide-react';

export function Banner() {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white" data-banner>
      <div className="container mx-auto px-8 py-4 text-center flex items-center justify-center gap-2">
        <Sparkles className="w-5 h-5" />
        <p className="font-medium">
          <span className="font-bold">Launch Your First HVAC Campaign:</span>
          {" "}First 20 Companies Get 50% Off + Free Setup
        </p>
      </div>
    </div>
  );
}