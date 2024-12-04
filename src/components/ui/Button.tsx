import React from 'react';
import { cn } from '@/lib/utils';
import { useOnboardingForm } from '../OnboardingForm/useOnboardingForm';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isGetStarted?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  isGetStarted,
  onClick,
  ...props
}: ButtonProps) {
  const openForm = useOnboardingForm((state) => state.openForm);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isGetStarted) {
      openForm();
    }
    onClick?.(e);
  };

  const baseStyles = 'font-semibold transition-colors rounded-lg inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-white hover:bg-gray-50 text-blue-600 border border-blue-200',
    outline: 'border border-white/30 hover:bg-white/10 text-white',
    ghost: 'text-blue-600 hover:text-blue-700',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}