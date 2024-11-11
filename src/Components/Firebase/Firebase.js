
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB15lck4YHlDCE8cRsqTKSo2SBtR5RlYTs",
  authDomain: "indian-premier-league-cefd2.firebaseapp.com",
  projectId: "indian-premier-league-cefd2",
  storageBucket: "indian-premier-league-cefd2.appspot.com",
  messagingSenderId: "820692989467",
  appId: "1:820692989467:web:b2727820edfa982ab7aabe",
  measurementId: "G-TN07C0SFS9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



export {auth, provider}