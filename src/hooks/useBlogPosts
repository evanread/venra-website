import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import { getAllPosts, getPostsByCategory } from '@/lib/blog';

interface UseBlogPostsOptions {
  category?: string;
}

export function useBlogPosts(options: UseBlogPostsOptions = {}) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        setError(null);
        
        const fetchedPosts = options.category
          ? await getPostsByCategory(options.category)
          : await getAllPosts();
        
        setPosts(fetchedPosts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [options.category]);

  return { posts, isLoading, error };
}