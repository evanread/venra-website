import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "How quickly can I get started with Venra?",
    answer: "You can launch your first campaign in under 15 minutes. Our templates are pre-configured for home service businesses, so you just need to customize your service area and budget."
  },
  {
    question: "Do I need technical knowledge to use Venra?",
    answer: "Not at all! Venra is designed to be user-friendly for busy home service professionals. Our step-by-step setup wizard and pre-built templates handle all the technical details for you."
  },
  {
    question: "What makes Venra different from hiring an agency?",
    answer: "Venra gives you direct control over your marketing at a fraction of the cost. You get the same professional-grade campaigns and automation, but without the agency markup or long-term contracts."
  },
  {
    question: "How does the money-back guarantee work?",
    answer: "If you don't generate any leads in your first 30 days, we'll refund your subscription—no questions asked. We're confident in our platform's ability to deliver results for your business."
  },
  {
    question: "Can I pause my campaigns at any time?",
    answer: "Absolutely! You have full control to pause, adjust, or restart your campaigns at any time through our dashboard. This flexibility helps you manage your budget and adapt to seasonal demands."
  },
  {
    question: "How much do the ads cost?",
    answer: "You have complete control over your ad spend. Our platform provides smart budget recommendations based on your service area and industry, but you can adjust your budget at any time. Whether you want to start small or scale up aggressively, you can easily manage your ad spend and turn campaigns on or off as needed."
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