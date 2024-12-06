import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { BlogPost as BlogPostType } from '@/types/blog';

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  const shareUrl = `https://venra.io/blog/${post.slug}`;

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${post.title}`,
    },
  ];

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <Link
          to={`/blog/category/${post.category.toLowerCase().replace(' ', '-')}`}
          className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4 hover:bg-blue-200 transition-colors"
        >
          {post.category}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
        <div className="text-sm text-gray-600">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span className="mx-2">·</span>
          <span>{post.readingTime} min read</span>
        </div>
      </header>

      <div className="aspect-[16/9] mb-8">
        <img
          src={post.coverImage}
          alt={post.title}
          className="rounded-xl w-full h-full object-cover"
        />
      </div>

      <div 
        className="prose prose-lg prose-blue max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="border-t border-gray-200 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Share2 className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">Share this article</span>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label={`Share on ${link.name}`}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </article>
  );
}