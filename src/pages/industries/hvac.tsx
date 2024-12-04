import React from 'react';
import { IndustryTemplate } from './IndustryTemplate';

export function HVACPage() {
  return (
    <IndustryTemplate
      industry="HVAC"
      description="Drive more service calls and installations with targeted digital marketing campaigns designed specifically for HVAC companies."
      benefits={[
        "Pre-built ad campaigns for seasonal services (AC repair, heating maintenance, etc.)",
        "Smart scheduling system that automatically adjusts ad spend based on weather patterns",
        "Location-based targeting to reach homeowners in your service area",
        "Custom landing pages optimized for HVAC service conversions",
        "Automated follow-up sequences for maintenance contracts and repeat business"
      ]}
      imageUrl="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80"
    />
  );
}