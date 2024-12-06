import React from 'react';
import { BlogCard } from './BlogCard';
import { useBlogPosts } from '@/hooks/useBlogPosts';

interface RelatedPostsProps {
  currentPostSlug: string;
  category: string;
}

export function RelatedPosts({ currentPostSlug, category }: RelatedPostsProps) {
  const { posts } = useBlogPosts();
  
  const relatedPosts = posts
    .filter(post => post.slug !== currentPostSlug && post.category === category)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}