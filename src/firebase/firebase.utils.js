import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB7WH4U63ScpLwS26Xg9FpRmGk-f3N-MJE",
  authDomain: "portfolioecommapp.firebaseapp.com",
  databaseURL: "https://portfolioecommapp.firebaseio.com",
  projectId: "portfolioecommapp",
  storageBucket: "portfolioecommapp.appspot.com",
  messagingSenderId: "802270467837",
  appId: "1:802270467837:web:499e35713d79234c0e1094"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;