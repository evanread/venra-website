import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Linkedin, Instagram, Heart } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Tour Platform', href: '/platform-tour' },
  ],
  industries: [
    { label: 'HVAC', href: '/industries/hvac' },
    { label: 'Plumbing', href: '/industries/plumbing' },
    { label: 'Electrician', href: '/industries/electrician' },
    { label: 'Landscape', href: '/industries/landscape' },
    { label: 'Roofing', href: '/industries/roofing' },
    { label: 'Cleaning', href: '/industries/cleaning' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
    { label: 'Terms of Service', href: '/legal/terms-of-service' },
    { label: 'Cookie Policy', href: '/legal/cookie-policy' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/venrasoftware/', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/venra/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/getvenra/', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">Venra</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering home service businesses with smart marketing solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <p>© {new Date().getFullYear()} Venra. All rights reserved.</p>
              <div className="hidden md:flex items-center">
                <span className="px-2">•</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Chicago
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>Need help?</span>
              <a href="mailto:support@venra.io" className="text-blue-400 hover:text-blue-300">
                support@venra.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}