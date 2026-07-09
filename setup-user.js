import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { readFileSync } from 'fs';

const firebaseConfig = JSON.parse(readFileSync('./firebase-applet-config.json', 'utf8'));

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function setup() {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, "elfridw4@gmail.com", "Admin123!");
    console.log("Admin user created:", userCredential.user.uid);
  } catch (error) {
    console.error("Error creating user:", error.code, error.message);
  }
  process.exit(0);
}
setup();
