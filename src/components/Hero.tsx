import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TrustMessage } from './TrustMessage';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="text-white pt-20 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-300 font-semibold tracking-wide uppercase">
                For Growth-Focused HVAC Companies
              </p>
              <h1 className="text-5xl font-bold leading-tight">
                Effortlessly Launch Ad Campaigns That Book More High-Value HVAC Jobs
              </h1>
            </div>
            <p className="text-xl text-blue-100">
              Turn clicks into booked appointments with proven HVAC ad templates, instant scheduling, and AI-powered follow-up
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Button variant="primary" size="lg" isGetStarted className="flex items-center gap-2">
                  Get Started Now <ArrowRight className="w-5 h-5" />
                </Button>
                <Link to="/platform-tour">
                  <Button variant="outline" size="lg">
                    Tour the Platform
                  </Button>
                </Link>
              </div>
              <TrustMessage variant="light" size="md" />
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80"
              alt="HVAC professional at work"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}