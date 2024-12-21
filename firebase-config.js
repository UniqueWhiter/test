// Import Firebase modules
import { initializeApp } from "";
import { getDatabase } from "";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the database instance
export const db = getDatabase(app);
