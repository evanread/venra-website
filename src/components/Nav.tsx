import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Dropdown } from './ui/Dropdown';
import { Zap, Menu, X } from 'lucide-react';

const industries = [
  { label: 'HVAC', href: '/industries/hvac' },
  { label: 'Plumbing', href: '/industries/plumbing' },
  { label: 'Electrician', href: '/industries/electrician' },
  { label: 'Landscape', href: '/industries/landscape' },
  { label: 'Roofing', href: '/industries/roofing' },
  { label: 'Cleaning', href: '/industries/cleaning' },
];

const resources = [
  { label: 'Blog', href: '/blog' },
  { label: 'Platform Tour', href: '/platform-tour' },
];

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="container mx-auto px-4 sm:px-8 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
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
              <Dropdown label="Resources" items={resources} />
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="secondary" size="sm" isGetStarted>
              Get Started Now
            </Button>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-blue-900 p-4 shadow-lg">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-white/90 text-sm font-semibold px-4">Industries</p>
                {industries.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-blue-800 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/pricing"
                className="block px-4 py-2 text-white/90 hover:text-white hover:bg-blue-800 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="space-y-2">
                <p className="text-white/90 text-sm font-semibold px-4">Resources</p>
                {resources.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-blue-800 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="sm"
                  isGetStarted
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}