import firebase from "firebase/app";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const useRetrieveFirebase = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAifQ0DsvYyInUextKfbG_Mo0t0n5sLCa0",
    authDomain: "whacka-same.firebaseapp.com",
    projectId: "whacka-same",
    storageBucket: "whacka-same.appspot.com",
    messagingSenderId: "387315247914",
    appId: "1:387315247914:web:4cf8d8e5cece5e6c28cc53",
    measurementId: "G-PZ9DBXM9TK",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  if (typeof window !== "undefined") {
    // Initialize Firebase
    const analytics = getAnalytics(app);
  }

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  return db;
};
