import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB93MzrOyTr0RrWzXU4Il7bU9XfDn0-8_k",
  authDomain: "thinge-75824.firebaseapp.com",
  projectId: "thinge-75824",
  storageBucket: "thinge-75824.appspot.com",
  messagingSenderId: "620144331226",
  appId: "1:620144331226:web:498f1377aac5651cf018e3",
  measurementId: "G-9PZC1CD9TD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//그냥 로그인
const auth = firebase.auth();
// 구글 로그인
const provider = new firebase.auth.GoogleAuthProvider();
// database
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
