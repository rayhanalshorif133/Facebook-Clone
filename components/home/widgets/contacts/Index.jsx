import Loading from '@/components/Loading'
import React, { Suspense, useEffect, useState } from 'react'
import { FaSistrix, FaEllipsisH } from "react-icons/fa";
import { BiSolidVideoPlus } from "react-icons/bi";
import Icons from './Icons';
import Contact from './Contact';
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
    <div className='border-b-1 border-gray-500 py-1'>
      <div className='flex justify-between'>
        <h2 className='font-semibold text-base text-gray-400 mt-2'>Contacts</h2>
        <div className='flex justify-center items-center'>
          <div className='flex space-x-2 text-gray-400'>
            <Icons Icon={BiSolidVideoPlus} />
            <Icons Icon={FaSistrix} />
            <Icons Icon={FaEllipsisH} />
          </div>
        </div>
      </div>
      <Suspense fallback={<Loading isBg={false} />}>
        {contacts && contacts.map(contact => (
          <Contact key={contact._id} image={contact.image} name={contact.name} />
        )
        )}
      </Suspense>
    </div>
  )
}
