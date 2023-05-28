import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleSignIn = () => {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBkNhb0-sqGtbZUc8RLsT6nkOrUNpuKRqY",
    authDomain: "uasproject-533ef.firebaseapp.com",
    projectId: "uasproject-533ef",
    storageBucket: "uasproject-533ef.appspot.com",
    messagingSenderId: "301638309891",
    appId: "1:301638309891:web:0a80acce7b953bd4539636",
    measurementId: "G-6NJ277602Z",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  );
};
export default GoogleSignIn;
