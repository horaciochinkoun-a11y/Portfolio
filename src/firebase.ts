import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "animated-conduit-rlll2",
  appId: "1:475449336443:web:9b99de620fca85f48838de",
  apiKey: "AIzaSyCVJNK_D_Mx_gLu8mb8dzM_GG8buT4BbzI",
  authDomain: "animated-conduit-rlll2.firebaseapp.com",
  storageBucket: "animated-conduit-rlll2.firebasestorage.app",
  messagingSenderId: "475449336443",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, "ai-studio-portfoliohoracio-9a40e4f5-9a9c-4073-9d5f-c76bedf458a4");
