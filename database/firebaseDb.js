import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDR-2HARTEIa2qJxNI6xokDzrNDyZK_12c",
    authDomain: "facebook-clone-9a8ef.firebaseapp.com",
    projectId: "facebook-clone-9a8ef",
    storageBucket: "facebook-clone-9a8ef.appspot.com",
    messagingSenderId: "553016214254",
    appId: "1:553016214254:web:055f1b01bc3aa93b6029ff"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };

