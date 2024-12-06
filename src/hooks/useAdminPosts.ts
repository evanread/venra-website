import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import { getAllPosts, deletePost as deleteBlogPost } from '@/lib/blog';

export function useAdminPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchPosts() {
    try {
      setIsLoading(true);
      setError(null);
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load posts');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  async function deletePost(slug: string) {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return;
    }

    try {
      await deleteBlogPost(slug);
      setPosts(posts.filter(post => post.slug !== slug));
    } catch (err) {
      console.error('Error deleting post:', err);
      alert('Failed to delete post');
    }
  }

  return { posts, isLoading, error, deletePost, refreshPosts: fetchPosts };
}