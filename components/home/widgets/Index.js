import React, { useEffect, useState } from 'react'
import { FaVideo, FaSistrix, FaEllipsisH } from "react-icons/fa";
import Sponsored from './Sponsored';
import PageAndProfile from './pageAndProfile/Index';
import Birthdays from './Birthday';
import Contacts from './contacts/Index';
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
    <div className='mr-2 xl:hidden 2xl:inline-flex w-[18rem] 2xl:w-[19rem] 3xl:w-[20rem] 4xl:w-[22rem]'>
      <div className='flex flex-col mt-3 xl:mt-2 h-screen overflow-y-auto scrollbar-hide'>
        <Sponsored />
        <PageAndProfile />
        <Birthdays />
        <Contacts />
      </div>
    </div>
  )
}
