// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import '@firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcv-6lqQI1S_q9HymzfMueh8BjP5L0OLM",
  authDomain: "image-gallery-28e24.firebaseapp.com",
  projectId: "image-gallery-28e24",
  storageBucket: "image-gallery-28e24.appspot.com",
  messagingSenderId: "167015804714",
  appId: "1:167015804714:web:6daaaccea008acf006f853"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const db = getFirestore(app);
 const projectStorage = getStorage(app);
// const projectFireStore = firebase.firestore()

  export {projectStorage, db};