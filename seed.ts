import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';
import { readFileSync } from 'fs';
import { projects, services } from './src/data.js';

const firebaseConfig = JSON.parse(readFileSync('./firebase-applet-config.json', 'utf8'));
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function seed() {
  const batch = writeBatch(db);
  
  projects.forEach(p => {
    const ref = doc(collection(db, 'projects'), p.id);
    batch.set(ref, p);
  });
  
  await batch.commit();
  console.log("Seeded projects");
  process.exit(0);
}
seed();
