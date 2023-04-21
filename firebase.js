import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA2DE8tYIPXhW2l7IymJbl8NnFgeBx4twM",
  authDomain: "l-esmorzador.firebaseapp.com",
  databaseURL: "https://l-esmorzador-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "l-esmorzador",
  storageBucket: "l-esmorzador.appspot.com",
  messagingSenderId: "818430434020",
  appId: "1:818430434020:web:83c467116f0fb404c2aaf1"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export function addToken(user, token) {
  set(ref(db, 'tokens/' + user), token);
}