import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDvIe4WaVQhTQrN9377dZIOmDtHyuv5eIU",
  authDomain: "venra-website.firebaseapp.com",
  projectId: "venra-website",
  storageBucket: "venra-website.firebasestorage.app",
  messagingSenderId: "15582489840",
  appId: "1:15582489840:web:1b44750c9fba242d3fe635",
  measurementId: "G-21Y6GJ0HZF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);