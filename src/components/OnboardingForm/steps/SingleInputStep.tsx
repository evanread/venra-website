import React, { KeyboardEvent } from 'react';

interface SingleInputStepProps {
  formData: Record<string, string>;
  updateFormData: (data: Record<string, string>) => void;
  field: string;
  placeholder: string;
  type: string;
}

export function SingleInputStep({ 
  formData, 
  updateFormData, 
  field, 
  placeholder,
  type 
}: SingleInputStepProps) {
  const formatPhoneNumber = (value: string) => {
    if (type !== 'tel') return value;
    
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format the number
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = type === 'tel' ? formatPhoneNumber(e.target.value) : e.target.value;
    updateFormData({ [field]: value });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const event = new CustomEvent('form-next-step');
      window.dispatchEvent(event);
    }
  };

  return (
    <div>
      <input
        type={type}
        value={formData[field] || ''}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        autoFocus
      />
    </div>
  );
}