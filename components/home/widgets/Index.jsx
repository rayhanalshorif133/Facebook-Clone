import React, { useEffect, useState } from 'react'
import { FaVideo, FaSistrix, FaEllipsisH } from "react-icons/fa";
import Sponsored from './Sponsored/Index';
import axios from 'axios';
import { useSession } from 'next-auth/react'
export default function Index() {


  const [contacts, setContacts] = useState([]);
  const { data: session } = useSession();

  const email = session?.user?.email;

  useEffect(() => {
    axios.post('/api/user/fetch', {
      type: 'active',
      email
    }).then(res => {
      setContacts(res.data.data);
    }).catch(err => console.log(err));
  }, [email]);


  return (
    <div className='mr-2 w-[22rem] xl:w-[18rem]'>
      <div className='flex flex-col mt-3 xl:mt-2'>
        <Sponsored />
      </div>
    </div>
  )
}

