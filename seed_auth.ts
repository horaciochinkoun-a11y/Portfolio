import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';
import { readFileSync } from 'fs';
import { projects, services } from './src/data.ts';

const firebaseConfig = JSON.parse(readFileSync('./firebase-applet-config.json', 'utf8'));
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function seed() {
  await signInWithEmailAndPassword(auth, "elfridw4@gmail.com", "Admin123!");
  console.log("Logged in");
  
  const batch = writeBatch(db);
  
  projects.forEach(p => {
    const ref = doc(collection(db, 'projects'), p.id);
    batch.set(ref, p);
  });
  
  await batch.commit();
  console.log("Seeded projects");
  process.exit(0);
}
seed().catch(console.error);
