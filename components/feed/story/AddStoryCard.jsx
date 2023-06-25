import React from 'react'
import Image from 'next/image'
import {  useSession } from 'next-auth/react'

export default function AddStoryCard() {

  const { data: session } = useSession();

  const {name,image} = session?.user;

  return (
    <div className='p-3 flex flex-col'>
      <div>
        <Image src={image} alt="profile"
          className="h-[8rem] w-40 rounded-t-lg object-cover" width={40} height={40} />
      </div>
      <div className="h-[8rem] w-40 rounded-b-lg text-center m-auto bg-[#323436]">
          <h2 className="text-white text-[1.2rem] font-bold align-middle mt-20">{name}</h2>
      </div>
    </div>
  )
}
