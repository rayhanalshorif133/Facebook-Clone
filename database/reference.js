import { db } from "./firebaseDb";
import { collection } from 'firebase/firestore/lite';

export const postRef = collection(db, 'posts');
export const testRef = collection(db, 't');