import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLg6eXtrE8NZczijknyPnLGxJ4YkOWk3c",
  authDomain: "wrybrit-databases.firebaseapp.com",
  projectId: "wrybrit-databases",
  storageBucket: "wrybrit-databases.appspot.com",
  messagingSenderId: "915717983087",
  appId: "1:915717983087:web:56501c60b5a1efcbb4769a",
  measurementId: "G-KN4D8L0102",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
