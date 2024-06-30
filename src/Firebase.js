import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAj-OeExmBqLzBRhWP8lhjLNmVe9pjye0M",
  authDomain: "my-portfolio-fdb69.firebaseapp.com",
  projectId: "my-portfolio-fdb69",
  storageBucket: "my-portfolio-fdb69.appspot.com",
  messagingSenderId: "48545071842",
  appId: "1:48545071842:web:ec30e6bf785489820e14bb",
  measurementId: "G-VG184L7MYJ",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, get, set, onValue };
