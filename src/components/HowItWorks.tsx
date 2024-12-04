import React from 'react';
import { Section } from '@/components/ui/Section';
import { HowItWorks as HowItWorksContent } from './HowItWorks/index';

export function HowItWorks() {
  return (
    <Section background="gray">
      <HowItWorksContent />
    </Section>
  );
}