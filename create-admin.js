import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/tmp/firebase-service-account.json', 'utf8'));

initializeApp({
  credential: cert(serviceAccount)
});

async function createAdmin() {
  const email = "elfridw4@gmail.com";
  const password = "Password123!"; // Default password
  
  try {
    const user = await getAuth().createUser({
      email: email,
      password: password,
      emailVerified: true,
    });
    console.log("Successfully created new user:", user.uid);
  } catch (error) {
    if (error.code === 'auth/email-already-exists') {
      console.log("User already exists.");
    } else {
      console.error("Error creating new user:", error);
    }
  }
}

createAdmin();
