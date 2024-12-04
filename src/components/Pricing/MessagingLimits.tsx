import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';

export function MessagingLimits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Messaging Allowances
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold">SMS Messages</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Monthly Allowance</p>
                <p className="text-gray-600">1,000 SMS sends included</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Overage Rate</p>
                <p className="text-gray-600">$0.05 per additional SMS</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold">Email Messages</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Monthly Allowance</p>
                <p className="text-gray-600">5,000 emails included</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Overage Rate</p>
                <p className="text-gray-600">$0.001 per additional email</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
          <p className="text-gray-700">
            These allowances cover the needs of most small businesses. For high-volume messaging, we'll notify you in advance before applying any overage charges.
          </p>
        </div>
      </div>
    </section>
  );
}