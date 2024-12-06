import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import { getPostBySlug } from '@/lib/blog';

export function useBlogPost(slug: string | undefined) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        
        const fetchedPost = await getPostBySlug(slug);
        setPost(fetchedPost);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load blog post. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  return { post, isLoading, error };
}