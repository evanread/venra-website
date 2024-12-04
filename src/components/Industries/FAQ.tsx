import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  industry: string;
  faqs: FAQItem[];
}

export function FAQ({ industry, faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions for {industry} Professionals
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-gray-500 transition-transform",
                    openIndex === index && "transform rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "px-6 overflow-hidden transition-all duration-200",
                  openIndex === index ? "pb-4" : "max-h-0"
                )}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}