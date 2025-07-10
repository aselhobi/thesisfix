import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCPxyAaRoxjTwcKu0Tzd2o_HseOszT2VMI",
  authDomain: "easyshopping-11e50.firebaseapp.com",
  projectId: "easyshopping-11e50",
  storageBucket: "easyshopping-11e50.appspot.com",
  messagingSenderId: "16955863660",
  appId: "1:16955863660:web:52527423f7fefa33985e49"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
