import React from 'react';
import { Step } from './Step';
import { steps } from './StepsData';

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">How Venra Works</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your marketing efforts into a streamlined, automated system that consistently delivers results.
        </p>
      </div>
      <div>
        {steps.map((step, index) => (
          <Step
            key={index}
            {...step}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}