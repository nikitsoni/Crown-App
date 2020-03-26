import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtxj9aIvnJFW8lMmhZyssnPp02hAZHdgE",
    authDomain: "crown-app-ac153.firebaseapp.com",
    databaseURL: "https://crown-app-ac153.firebaseio.com",
    projectId: "crown-app-ac153",
    storageBucket: "crown-app-ac153.appspot.com",
    messagingSenderId: "320427734568",
    appId: "1:320427734568:web:76a581b523db1d0b56271d",
    measurementId: "G-SY4W9BRZS6"
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
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;