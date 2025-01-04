import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { TrustMessage } from '@/components/TrustMessage';

export function VideoSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-black">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/t-C6Jt7vaQo"
          title="See how Venra helps HVAC businesses grow"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to start booking more HVAC jobs?
        </h2>
        <p className="text-lg text-blue-100 mb-6">
          Join our beta program today and get 50% off our regular pricing
        </p>
        <div className="flex gap-4 justify-center mb-4">
          <Button variant="secondary" size="lg" isGetStarted>
            Get Started Now
          </Button>
          <Link to="/pricing">
            <Button variant="outline" size="lg">
              See Pricing
            </Button>
          </Link>
        </div>
        <div className="flex justify-center">
          <TrustMessage variant="light" size="sm" />
        </div>
      </div>
    </div>
  );
}