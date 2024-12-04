import React from 'react';
import { Section } from '@/components/ui/Section';

export function PrivacyPolicy() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto prose prose-blue">
        <h1>Privacy Policy</h1>
        <p className="text-lg text-gray-600 mb-8">Last updated: March 19, 2024</p>

        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, including:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Business information</li>
          <li>Payment information</li>
          <li>Marketing preferences</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Process your transactions</li>
          <li>Send you marketing communications (with your consent)</li>
          <li>Analyze platform usage and optimize our services</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

        <h2>4. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to data processing</li>
          <li>Data portability</li>
        </ul>

        <h2>5. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Email: privacy@venra.io</p>
      </div>
    </Section>
  );
}