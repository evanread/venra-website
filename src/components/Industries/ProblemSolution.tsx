import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

interface Problem {
  problem: string;
  solution: string;
}

interface ProblemSolutionProps {
  industry: string;
  problems: Problem[];
}

export function ProblemSolution({ industry, problems }: ProblemSolutionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Marketing Challenges for {industry} Professionals—Solved by Venra
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {problems.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="font-semibold mb-2">{item.problem}</p>
                  <div className="flex gap-3 items-start mt-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-6">How Venra Helps</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Pre-built campaigns proven to work for {industry.toLowerCase()} businesses</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>AI-powered follow-ups that never miss a lead</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Real-time analytics to track your ROI</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}