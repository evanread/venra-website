import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AlertCircle } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { BlogPost } from '@/components/Blog/BlogPost';
import { RelatedPosts } from '@/components/Blog/RelatedPosts';
import { BlogNewsletter } from '@/components/Blog/BlogNewsletter';
import { Button } from '@/components/ui/Button';
import { useBlogPost } from '@/hooks/useBlogPost';

export function BlogPostPage() {
  const { slug } = useParams();
  const { post, isLoading, error } = useBlogPost(slug);

  if (isLoading) {
    return (
      <Section>
        <div className="animate-pulse max-w-4xl mx-auto">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8" />
          <div className="h-96 bg-gray-200 rounded mb-8" />
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full" />
            ))}
          </div>
        </div>
      </Section>
    );
  }

  if (error || !post) {
    return (
      <Section>
        <div className="text-center py-12">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">
            {error || "Post Not Found"}
          </h1>
          <p className="text-gray-600 mb-8">
            {error 
              ? "We're having trouble loading this post. Please try again later."
              : "The blog post you're looking for doesn't exist."
            }
          </p>
          <Link to="/blog">
            <Button variant="primary">
              Return to Blog
            </Button>
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Venra Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://venra.io/blog/${post.slug}`} />
      </Helmet>

      <Section>
        <BlogPost post={post} />
      </Section>

      <Section background="gray">
        <RelatedPosts currentPostSlug={post.slug} category={post.category} />
        <div className="mt-16">
          <BlogNewsletter />
        </div>
      </Section>
    </>
  );
}