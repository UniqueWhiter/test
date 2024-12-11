// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAof6bT060pZ1q1Lj57UuFKCxqMnUhc1XA",
  authDomain: "devest2024-2f38c.firebaseapp.com",
  projectId: "devest2024-2f38c",
  storageBucket: "devest2024-2f38c.firebasestorage.app",
  messagingSenderId: "107275103557",
  appId: "1:107275103557:web:41b64c073b58ac2e84222c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the database instance
export const db = getDatabase(app);