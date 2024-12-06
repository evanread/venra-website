import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function BlogNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // TODO: Implement newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Get Marketing Tips in Your Inbox
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Join other home service professionals receiving weekly marketing insights, strategies, and tips.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
          <Button 
            type="submit"
            disabled={status === 'loading'}
            className="whitespace-nowrap"
          >
            Subscribe
          </Button>
        </div>
        {status === 'success' && (
          <p className="mt-4 text-green-600">Thanks for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}