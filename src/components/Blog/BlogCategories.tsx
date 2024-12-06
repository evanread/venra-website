import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'All', slug: '/blog' },
  { name: 'Marketing Tips', slug: '/blog/category/marketing-tips' },
  { name: 'Lead Generation', slug: '/blog/category/lead-generation' },
  { name: 'Business Growth', slug: '/blog/category/business-growth' },
  { name: 'Industry News', slug: '/blog/category/industry-news' },
];

export function BlogCategories() {
  const currentPath = window.location.pathname;

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={category.slug}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              currentPath === category.slug
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}