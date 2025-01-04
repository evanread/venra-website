import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "How quickly can I get started with Venra?",
    answer: "You can launch your first HVAC campaign in under 30 minutes. Our templates are pre-configured with proven ad copy, targeting, and landing pages specifically for HVAC services."
  },
  {
    question: "What landing page templates are included?",
    answer: "We provide optimized landing pages for AC installation, heating replacement, maintenance contracts, and emergency repairs. Each template includes appointment scheduling, trust badges, and social proof sections."
  },
  {
    question: "How does the calendar integration work?",
    answer: "Venra syncs with Google Calendar to show real-time availability. When a lead books an appointment, it's automatically added to your calendar and they receive confirmation and reminder messages."
  },
  {
    question: "Can Venra work with my existing software?",
    answer: "Yes! Venra integrates with popular HVAC business software through our API. We can sync appointments, customer data, and job status updates automatically."
  },
  {
    question: "What makes Venra different from hiring an agency?",
    answer: "Venra gives you direct control over your HVAC marketing at a fraction of the cost. You get the same professional-grade campaigns and automation, but without the agency markup or long-term contracts."
  },
  {
    question: "How does the money-back guarantee work?",
    answer: "If you don't generate any HVAC leads in your first 30 days, we'll refund your subscription—no questions asked. We're confident in our platform's ability to deliver results for your business."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center gap-4 text-left hover:text-blue-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown className={cn(
          "w-5 h-5 text-blue-600 transition-transform flex-shrink-0",
          isOpen && "transform rotate-180"
        )} />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-96 pb-6" : "max-h-0"
      )}>
        <p className="text-gray-600 leading-relaxed pr-12">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about getting started with Venra
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600">
            Have a question that's not listed here? Email us at{' '}
            <a href="mailto:support@venra.io" className="text-blue-600 hover:text-blue-700">
              support@venra.io
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}