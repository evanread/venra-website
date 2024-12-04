import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  reversed?: boolean;
}

export function Step({ title, description, icon: Icon, imageUrl, reversed = false }: StepProps) {
  return (
    <div className="py-16 border-b border-gray-100 last:border-0">
      <div className={`container mx-auto px-4 max-w-6xl ${reversed ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-12`}>
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-3">
            <div className="p-3 bg-blue-600 rounded-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
          <div className="pt-4">
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-2">
              Learn more
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}