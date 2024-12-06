import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import { getPostBySlug, savePost } from '@/lib/blog';
import { slugify } from '@/lib/utils';

export function useAdminPost(slug: string | undefined) {
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
        console.error('Error fetching post:', err);
        setError('Failed to load post');
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  async function handleSavePost(data: Omit<BlogPost, 'slug'>) {
    const postSlug = slug || slugify(data.title);
    
    try {
      await savePost(postSlug, data);
      return postSlug;
    } catch (err) {
      console.error('Error saving post:', err);
      throw new Error('Failed to save post');
    }
  }

  return { post, isLoading, error, savePost: handleSavePost };
}