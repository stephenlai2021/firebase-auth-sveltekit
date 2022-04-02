import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth"

//TODO: add firebaes config
const firebaseConfig = {
  apiKey: "AIzaSyDQcbr4SLpZj5bP7zn84_vK1fzbkuxjG_k",
  authDomain: "chat-app-9ff7a.firebaseapp.com",
  projectId: "chat-app-9ff7a",
  storageBucket: "chat-app-9ff7a.appspot.com",
  messagingSenderId: "870524125509",
  appId: "1:870524125509:web:8d3cfb6c72a3f3aadb7e2c"
};

const app = initializeApp(firebaseConfig, "CLIENT");
export const auth = getAuth(app)

setPersistence(auth, inMemoryPersistence)