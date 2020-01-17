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
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
