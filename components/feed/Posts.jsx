import React from 'react'
import { getFirestore, collection, query, orderBy } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { app } from '@/database/firebaseDb';
import Post from './Post';
import Loading from '../Loading';

export default function Posts() {

  const [value, loading, error] = useCollection(
    query(
      collection(getFirestore(app), "posts"),
      orderBy("timestamp", "desc")
    )
  );

  if(loading) return <Loading/>

  return (
    <div>
      {value?.docs.map((doc) => (
        <Post key={doc.id}
        name={doc.data().name}
        message={doc.data().message}
        email={doc.data().email}
        timestamp={doc.data().timestamp}
        image={doc.data().image}
        postImage={doc.data().postImage}
        />
          
      ))}
    </div>
  )
}
