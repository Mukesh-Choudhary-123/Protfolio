import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj-OeExmBqLzBRhWP8lhjLNmVe9pjye0M",
  authDomain: "my-portfolio-fdb69.firebaseapp.com",
  databaseURL: "https://my-portfolio-fdb69-default-rtdb.firebaseio.com/",
  projectId: "my-portfolio-fdb69",
  storageBucket: "my-portfolio-fdb69.appspot.com",
  messagingSenderId: "48545071842",
  appId: "1:48545071842:web:ec30e6bf785489820e14bb",
  measurementId: "G-VG184L7MYJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const visitorRef = ref(database, "visitorCount");

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Function to increment visitor count
    const incrementVisitorCount = () => {
      get(visitorRef).then((snapshot) => {
        if (snapshot.exists()) {
          const currentCount = snapshot.val();
          set(visitorRef, currentCount + 1);
        } else {
          // Initialize visitor count if it doesn't exist
          set(visitorRef, 1);
        }
      });
    };

    // Automatically increment visitor count on component mount
    incrementVisitorCount();

    // Listen for real-time updates to visitor count
    onValue(visitorRef, (snapshot) => {
      if (snapshot.exists()) {
        setVisitorCount(snapshot.val());
      } else {
        setVisitorCount(0);
      }
    });
  }, []);

  return (
    <div>
      <h2>Total Visitors: {visitorCount}</h2>
    </div>
  );
}

export default VisitorCounter;
