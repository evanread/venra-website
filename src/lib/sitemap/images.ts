import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function uploadImage(file: File): Promise<string> {
  try {
    // Create a unique filename using timestamp and original name
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name}`;
    
    // Create a reference to the file location
    const storageRef = ref(storage, `images/${filename}`);
    
    // Upload the file
    await uploadBytes(storageRef, file);
    
    // Get the download URL
    const url = await getDownloadURL(storageRef);
    
    return url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Failed to upload image');
  }
}