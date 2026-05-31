// Kasaysayan: Live Firebase Configuration & Initialization
// Uses browser-native ES Modules from the official Google CDN.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// User's active Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHj8Jdlw_qdx1lFtNQb1pnMIVfjRTY-OA",
  authDomain: "kasaysayan-6d093.firebaseapp.com",
  projectId: "kasaysayan-6d093",
  storageBucket: "kasaysayan-6d093.firebasestorage.app",
  messagingSenderId: "248172994788",
  appId: "1:248172994788:web:e20cb6b265d96e99e34cf1",
  measurementId: "G-YF14TSZN7C"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize & Export Firebase Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
