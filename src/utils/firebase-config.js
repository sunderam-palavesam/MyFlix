import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8PUyc3cDDVmfO9FLHMdffcmtUq-5c9gs",
  authDomain: "react-netflix-clone-2c7c1.firebaseapp.com",
  projectId: "react-netflix-clone-2c7c1",
  storageBucket: "react-netflix-clone-2c7c1.appspot.com",
  messagingSenderId: "1045925263034",
  appId: "1:1045925263034:web:3eca4fefdd4a268688b483",
  measurementId: "G-RTZ1Z22B7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);