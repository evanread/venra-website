import React from 'react';
import { Section } from '@/components/ui/Section';

export function CookiePolicy() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto prose prose-blue">
        <h1>Cookie Policy</h1>
        <p className="text-lg text-gray-600 mb-8">Last updated: March 19, 2024</p>

        <h2>1. What Are Cookies</h2>
        <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by:</p>
        <ul>
          <li>Remembering your preferences</li>
          <li>Understanding how you use our platform</li>
          <li>Improving our services</li>
          <li>Providing personalized content</li>
        </ul>

        <h2>2. Types of Cookies We Use</h2>
        <h3>Essential Cookies</h3>
        <p>Required for the platform to function properly. These cannot be disabled.</p>

        <h3>Analytics Cookies</h3>
        <p>Help us understand how visitors interact with our platform.</p>

        <h3>Marketing Cookies</h3>
        <p>Used to deliver relevant advertisements and track campaign performance.</p>

        <h2>3. Managing Cookies</h2>
        <p>You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our platform.</p>

        <h2>4. Updates to This Policy</h2>
        <p>We may update this Cookie Policy periodically. Please check back regularly for any changes.</p>

        <h2>5. Contact Us</h2>
        <p>If you have questions about our Cookie Policy, please contact us at privacy@venra.io</p>
      </div>
    </Section>
  );
}