import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Dropdown } from './ui/Dropdown';
import { Zap } from 'lucide-react';

const industries = [
  { label: 'HVAC', href: '/industries/hvac' },
  { label: 'Plumbing', href: '/industries/plumbing' },
  { label: 'Electrician', href: '/industries/electrician' },
  { label: 'Landscape', href: '/industries/landscape' },
  { label: 'Roofing', href: '/industries/roofing' },
  { label: 'Cleaning', href: '/industries/cleaning' },
];

export function Nav() {
  return (
    <nav className="relative">
      <div className="container mx-auto px-8 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-2">
              <Zap className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">
                Venra
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Dropdown label="Industries" items={industries} />
              <Link to="/pricing" className="text-white/90 hover:text-white">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/platform-tour">
              <Button variant="outline" size="sm">
                Tour the Platform
              </Button>
            </Link>
            <Button variant="secondary" size="sm" isGetStarted>
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}