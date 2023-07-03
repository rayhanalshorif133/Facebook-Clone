import React, { useEffect ,useState} from 'react'
import { FaVideo,FaSistrix,FaEllipsisH } from "react-icons/fa";
import Contact from './Contact';
import axios from 'axios';
import { useSession } from 'next-auth/react'
export default function Index() {


  const [contacts,setContacts] = useState([]);
  const {data:session} = useSession();

  const email = session?.user?.email;

  useEffect(() => {
    axios.post('/api/user/fetch',{
      type:'active',
      email
    }).then(res => {
      setContacts(res.data.data);
    }).catch(err => console.log(err));
  },[email]);


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
        {contacts && contacts.map(contact => (
            <Contact key={contact.id} src={contact.image} name={contact.name}/>
        )
        )}
    </div>
  )
}

