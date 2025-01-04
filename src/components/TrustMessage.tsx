import React from 'react';
import { cn } from '@/lib/utils';
import { Shield } from 'lucide-react';

interface TrustMessageProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

export function TrustMessage({ variant = 'dark', size = 'md' }: TrustMessageProps) {
  const textColor = variant === 'light' ? 'text-blue-100' : 'text-gray-600';
  
  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
  };

  return (
    <div className="flex items-center gap-4">
      <Shield className={cn("text-blue-600", size === 'sm' ? 'w-4 h-4' : 'w-5 h-5')} />
      <p className={cn(textColor, textSizes[size])}>
        Launch Your First Campaign Free • No Credit Card Required • 30-Day Money-Back Guarantee
      </p>
    </div>
  );
}