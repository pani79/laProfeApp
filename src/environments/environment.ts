export const environment = {

  production: false,
  firebase: {
    apiKey: 'yDkBwTXLVoBEPNz7L7wb6M9BWvmGXGhhg8',
    authDomain: 'laprofeapp-121aa.firebaseapp.com',
    databaseURL: '1:454726191211:web:2acc65a1bcdb5fb37f092e',
    projectId: 'laprofeapp-121aa',
    storageBucket: 'laprofeapp-121aa.firebasestorage.app',
    messagingSenderId: '454726191211'
  }
/* 
  const firebaseConfig = {
    apiKey: "AIzaSyDkBwTXLVoBEPNz7L7wb6M9BWvmGXGhhg8",
    authDomain: "laprofeapp-121aa.firebaseapp.com",
    projectId: "laprofeapp-121aa",
    storageBucket: "laprofeapp-121aa.firebasestorage.app",
    messagingSenderId: "454726191211",
    appId: "1:454726191211:web:2acc65a1bcdb5fb37f092e",
    measurementId: "G-5BDF9WYSXS"
  };
 */




};


/*
 Nombre del proyecto
laProfeApp
ID del proyecto
laprofeapp-121aa
Número del proyecto
454726191211

rules_version = '2';


service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2026, 4, 6);
    }
  }
}




// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDkBwTXLVoBEPNz7L7wb6M9BWvmGXGhhg8",

  authDomain: "laprofeapp-121aa.firebaseapp.com",

  projectId: "laprofeapp-121aa",

  storageBucket: "laprofeapp-121aa.firebasestorage.app",

  messagingSenderId: "454726191211",

  appId: "1:454726191211:web:2acc65a1bcdb5fb37f092e",

  measurementId: "G-5BDF9WYSXS"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

*/