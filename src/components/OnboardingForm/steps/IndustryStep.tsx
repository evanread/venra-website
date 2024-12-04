import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const industries = [
  'HVAC',
  'Plumbing',
  'Electrician',
  'Landscape',
  'Roofing',
  'Cleaning',
];

interface IndustryStepProps {
  formData: {
    industry: string;
    customIndustry?: string;
  };
  updateFormData: (data: { industry: string; customIndustry?: string }) => void;
}

export function IndustryStep({ formData, updateFormData }: IndustryStepProps) {
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleIndustrySelect = (industry: string) => {
    if (industry === 'Other') {
      setShowCustomInput(true);
      updateFormData({ industry: 'Other' });
    } else {
      setShowCustomInput(false);
      updateFormData({ industry, customIndustry: undefined });
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {[...industries, 'Other'].map((industry) => (
          <button
            key={industry}
            onClick={() => handleIndustrySelect(industry)}
            className={cn(
              "p-4 border rounded-lg text-left hover:border-blue-500 transition-colors",
              formData.industry === industry ? "border-blue-500 bg-blue-50" : "border-gray-200"
            )}
          >
            <span className="font-medium">{industry}</span>
          </button>
        ))}
      </div>

      {showCustomInput && (
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What type of home service do you provide?
          </label>
          <input
            type="text"
            value={formData.customIndustry || ''}
            onChange={(e) => updateFormData({ 
              industry: 'Other',
              customIndustry: e.target.value 
            })}
            placeholder="Enter your industry"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
      )}
    </div>
  );
}