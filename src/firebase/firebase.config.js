// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_APIKEY,
//     authDomain: import.meta.env.VITE_AUTHDOMAIN,
//     projectId: import.meta.env.VITE_PROJECTID,
//     storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//     appId: import.meta.env.VITE_APPID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyBSiLSgq62lvWKopYH0y1UE_NG7HqTLRLA",
    authDomain: "corp-elevate-pro.firebaseapp.com",
    projectId: "corp-elevate-pro",
    storageBucket: "corp-elevate-pro.appspot.com",
    messagingSenderId: "810889041448",
    appId: "1:810889041448:web:09494986c294f15c8e071d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app