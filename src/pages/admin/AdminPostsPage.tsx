import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';
import { useAdminPosts } from '@/hooks/useAdminPosts';

export function AdminPostsPage() {
  const { posts, isLoading, error, deletePost } = useAdminPosts();

  if (isLoading) {
    return (
      <Section>
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-100 rounded-lg" />
          ))}
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section>
        <div className="text-center py-12">
          <p className="text-red-600">{error}</p>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link to="/admin/posts/new">
          <Button>
            <PlusCircle className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Title</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Category</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Published</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.slug} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <Link 
                    to={`/admin/posts/${post.slug}/edit`}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    {post.title}
                  </Link>
                </td>
                <td className="px-6 py-4 text-gray-600">{post.category}</td>
                <td className="px-6 py-4 text-gray-600">
                  {formatDate(post.publishedAt)}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Link
                      to={`/admin/posts/${post.slug}/edit`}
                      className="p-2 text-gray-600 hover:text-blue-600"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => deletePost(post.slug)}
                      className="p-2 text-gray-600 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}