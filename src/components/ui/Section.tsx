import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'gradient';
}

export function Section({ className, children, background = 'white' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-blue-900 to-indigo-900',
  };

  return (
    <section className={cn('py-20', backgrounds[background], className)}>
      <div className="container mx-auto px-4 max-w-6xl">
        {children}
      </div>
    </section>
  );
}