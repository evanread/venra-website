import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StarRating } from '../StarRating';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="text-white pt-12 sm:pt-20 pb-16 sm:pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <p className="text-blue-300 font-semibold tracking-wide uppercase">
                For Home Services Businesses
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Effortlessly Launch Ad Campaigns That Book More Jobs
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-blue-100">
              Venra empowers home service businesses to run profitable ad campaigns, convert more leads, and grow their revenue with the help of AI.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button variant="primary" size="lg" isGetStarted className="flex items-center justify-center gap-2">
                  Get Started Now <ArrowRight className="w-5 h-5" />
                </Button>
                <Link to="/platform-tour" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Tour the Platform
                  </Button>
                </Link>
              </div>
              <StarRating variant="light" size="sm" />
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Home service professional"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}