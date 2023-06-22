import { getFirestore} from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCHtP7lgpO00ZF_g8aHKlA0QIJkwk7VMX8",
    authDomain: "facebook-clone-f10a6.firebaseapp.com",
    projectId: "facebook-clone-f10a6",
    storageBucket: "facebook-clone-f10a6.appspot.com",
    messagingSenderId: "623394342821",
    appId: "1:623394342821:web:30b483d007b576ee870a4c"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = getFirestore(app);
const storage = getStorage(app);

export {app, db,storage };