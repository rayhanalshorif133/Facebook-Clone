import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React from 'react'

export default function Index() {

  const { data: session } = useSession();

  const { image, name } = session?.user;

  return (
    <div className='flex items-center p-2 rounded-xl space-x-4 cursor-pointer hover:bg-gray-200'>
      Hello
    </div>
  )
}
