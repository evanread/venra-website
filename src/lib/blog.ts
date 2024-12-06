import { 
    collection, 
    getDocs, 
    getDoc, 
    doc, 
    query, 
    where, 
    orderBy, 
    limit,
    DocumentData 
  } from 'firebase/firestore';
  import { db } from './firebase';
  import { BlogPost } from '@/types/blog';
  
  export async function getAllPosts(): Promise<BlogPost[]> {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, orderBy('publishedAt', 'desc'));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      ...doc.data(),
      slug: doc.id,
    })) as BlogPost[];
  }
  
  export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const postRef = doc(db, 'posts', slug);
    const postDoc = await getDoc(postRef);
    
    if (!postDoc.exists()) {
      return null;
    }
  
    return {
      ...postDoc.data(),
      slug: postDoc.id,
    } as BlogPost;
  }
  
  export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
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
  }
  
  export async function getRelatedPosts(
    currentSlug: string,
    category: string,
    limit: number = 3
  ): Promise<BlogPost[]> {
    const postsRef = collection(db, 'posts');
    const q = query(
      postsRef,
      where('category', '==', category),
      orderBy('publishedAt', 'desc'),
      limit(limit + 1)
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs
      .map(doc => ({
        ...doc.data(),
        slug: doc.id,
      }))
      .filter(post => post.slug !== currentSlug)
      .slice(0, limit) as BlogPost[];
  }