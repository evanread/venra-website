import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

export function StarRating({ variant = 'dark', size = 'md' }: StarRatingProps) {
  const textColor = variant === 'light' ? 'text-blue-100' : 'text-gray-600';
  
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              'text-yellow-400 fill-yellow-400',
              sizes[size]
            )} 
          />
        ))}
      </div>
      <p className={cn(textColor, textSizes[size])}>
        <span className="font-semibold">4.9/5</span> from 100+ home service businesses
      </p>
    </div>
  );
}