import { db } from "./firebaseDb";
import { collection } from 'firebase/firestore/lite';

export const userRef = collection(db, 'users');
export const postRef = collection(db, 'posts');