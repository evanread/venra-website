import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

interface IndustryTemplateProps {
  industry: string;
  description: string;
  benefits: string[];
  imageUrl: string;
}

export function IndustryTemplate({ industry, description, benefits, imageUrl }: IndustryTemplateProps) {
  return (
    <>
      <Section background="gradient" className="text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              Digital Marketing Solutions for {industry} Companies
            </h1>
            <p className="text-xl text-blue-100">
              {description}
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" size="lg">
                Get Started Now
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <img
              src={imageUrl}
              alt={`${industry} services`}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </Section>
      
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why {industry} Companies Choose Venra
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-lg text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}