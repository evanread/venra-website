import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where, 
  orderBy, 
  limit,
  setDoc,
  deleteDoc
} from 'firebase/firestore';
import { db } from './firebase';
import { BlogPost } from '@/types/blog';

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, orderBy('publishedAt', 'desc'));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      ...doc.data(),
      slug: doc.id,
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const postRef = doc(db, 'posts', slug);
    const postDoc = await getDoc(postRef);
    
    if (!postDoc.exists()) {
      return null;
    }

    return {
      ...postDoc.data(),
      slug: postDoc.id,
    } as BlogPost;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  try {
    const postsRef = collection(db, 'posts');
    const q = query(
      postsRef,
      where('category', '==', category),
      orderBy('publishedAt', 'desc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      ...doc.data(),
      slug: doc.id,
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

export async function savePost(slug: string, data: Omit<BlogPost, 'slug'>): Promise<void> {
  try {
    const postRef = doc(db, 'posts', slug);
    await setDoc(postRef, data);
  } catch (error) {
    console.error('Error saving post:', error);
    throw new Error('Failed to save post');
  }
}

export async function deletePost(slug: string): Promise<void> {
  try {
    await deleteDoc(doc(db, 'posts', slug));
  } catch (error) {
    console.error('Error deleting post:', error);
    throw new Error('Failed to delete post');
  }
}