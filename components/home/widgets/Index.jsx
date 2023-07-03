import React, { useEffect ,useState} from 'react'
import { FaVideo,FaSistrix,FaEllipsisH } from "react-icons/fa";
import Contact from './Contact';
import axios from 'axios';
import { getSession } from 'next-auth/react'
export default function Index({session}) {


  const [contacts,setContacts] = useState([]);

  useEffect(() => {
    axios.get('/api/user/get',{
      params:{
        type:'active',
        containsUser: session
      }
    }).then(res => {
      setContacts(res.data.data);
    }).catch(err => console.log(err));
  },[1]);


  return (
    <div className="lg:flex flex-col w-60 p-2 mt-5">
        <div className='flex justify-between items-center text-gray-500 mb-5'>
            <h2 className='text-xl'>Contacts</h2>
            <div className='flex space-x-2'>
                <FaVideo className='h-6'/>
                <FaSistrix className='h-6'/>
                <FaEllipsisH className='h-6'/>
            </div>
        </div>
        {
          console.log(contacts)
        }
        {contacts && contacts.map(contact => (
            <Contact key={contact.id} src={contact.image} name={contact.name}/>
        )
        )}
    </div>
  )
}



export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    }
  }
}
