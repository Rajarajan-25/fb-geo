// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyDgvXupa7FcXDiUr-OdhnulQ6tqh_349QE",
 authDomain: "fb-geo.firebaseapp.com",
 projectId: "fb-geo",
 storageBucket: "fb-geo.appspot.com",
 messagingSenderId: "210721006520",
 appId: "1:210721006520:web:10970f16a28b38cbfbe54d",
 measurementId: "G-QBSJ2QFLMB"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);