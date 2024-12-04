import React from 'react';

interface BusinessStepProps {
  formData: {
    businessName: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
  };
  updateFormData: (data: Partial<{
    businessName: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
  }>) => void;
}

export function BusinessStep({ formData, updateFormData }: BusinessStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business Name
        </label>
        <input
          type="text"
          value={formData.businessName}
          onChange={(e) => updateFormData({ businessName: e.target.value })}
          placeholder="Enter your business name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
            placeholder="Enter your first name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => updateFormData({ lastName: e.target.value })}
            placeholder="Enter your last name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
          placeholder="Enter your phone number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="Enter your email address"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </div>
  );
}