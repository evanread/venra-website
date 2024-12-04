import React from 'react';
import { PartyPopper } from 'lucide-react';

export function ThankYouStep() {
  return (
    <div className="text-center py-6">
      <div className="mb-6">
        <PartyPopper className="w-16 h-16 text-blue-600 mx-auto" />
      </div>
      <h3 className="text-2xl font-bold mb-4">
        Thank You for Joining Our Beta!
      </h3>
      <div className="space-y-4 text-gray-600">
        <p>
          You've secured your spot as an early adopter of Venra. We're working hard to launch soon and you'll be among the first to know when we're ready.
        </p>
        <p>
          <strong className="text-blue-600">Your beta pricing is locked in!</strong> You'll get 50% off our regular pricing when we launch.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg mt-6 mb-6">
          <h4 className="text-lg font-semibold text-blue-900 mb-2">
            Want to Try Venra 100% Free?
          </h4>
          <p className="text-blue-800 mb-4">
            Join our Product Advisory Board and help shape the future of Venra. Members get:
          </p>
          <ul className="text-left text-blue-800 mb-4 space-y-2">
            <li>• 3 months completely free access</li>
            <li>• Early access to new features</li>
            <li>• Direct input on product development</li>
          </ul>
          <a
            href="https://forms.gle/HzJs13G8NEFRPGCC6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Join Advisory Board
          </a>
        </div>
        <p>
          We'll send you an email with next steps and your exclusive beta access link as soon as we're ready.
        </p>
      </div>
    </div>
  );
}