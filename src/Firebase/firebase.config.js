// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmtSdYyj_QcLBvZSvUz67O2U6QHPfrTAA",
    authDomain: "my-task-site.firebaseapp.com",
    projectId: "my-task-site",
    storageBucket: "my-task-site.appspot.com",
    messagingSenderId: "878818669130",
    appId: "1:878818669130:web:eba995af90624af7406cb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app