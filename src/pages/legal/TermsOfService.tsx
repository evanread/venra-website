import React from 'react';
import { Section } from '@/components/ui/Section';

export function TermsOfService() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto prose prose-blue">
        <h1>Terms of Service</h1>
        <p className="text-lg text-gray-600 mb-8">Last updated: March 19, 2024</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using Venra's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

        <h2>2. Service Description</h2>
        <p>Venra provides digital marketing automation services for home service businesses. We offer:</p>
        <ul>
          <li>Ad campaign management</li>
          <li>Lead generation tools</li>
          <li>Automated follow-up systems</li>
          <li>Analytics and reporting</li>
        </ul>

        <h2>3. User Obligations</h2>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Maintain account security</li>
          <li>Comply with all applicable laws</li>
          <li>Use the service for legitimate business purposes</li>
        </ul>

        <h2>4. Payment Terms</h2>
        <p>Users agree to pay all fees according to the pricing plan selected. Fees are non-refundable except as specified in our money-back guarantee.</p>

        <h2>5. Limitation of Liability</h2>
        <p>Venra shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>

        <h2>6. Contact</h2>
        <p>For questions about these Terms, please contact us at legal@venra.io</p>
      </div>
    </Section>
  );
}