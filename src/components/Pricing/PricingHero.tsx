import React from 'react';

export function PricingHero() {
  return (
    <section className="text-white pt-20 pb-24">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get Venra Early Access at 75% Off
        </h1>
        <p className="text-xl text-blue-100">
          Join our beta program today at our special introductory price of $49/month. 
          No long-term commitments, no hidden fees.
        </p>
        <div className="mt-8 inline-block bg-blue-500/20 px-6 py-3 rounded-full">
          <p className="text-blue-200">
            <span className="font-semibold">Limited Time Offer:</span> First 100 beta users only
          </p>
        </div>
      </div>
    </section>
  );
}