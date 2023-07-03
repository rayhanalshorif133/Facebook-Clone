import Loading from '@/components/Loading'
import React, { Suspense } from 'react'
import { FaSistrix,FaEllipsisH } from "react-icons/fa";
import {BiSolidVideoPlus} from "react-icons/bi";
import Icons from './Icons';

export default function Index() {
  return (
    <div className='border-b-1 border-gray-500 py-1'>
      <div className='flex justify-between'>
        <h2 className='font-semibold text-base text-gray-400 mt-2'>Contacts</h2>
        <div className='flex justify-center items-center'>
          <div className='flex space-x-2 text-gray-400'>
            <Icons Icon={BiSolidVideoPlus}/>
            <Icons Icon={FaSistrix}/>
            <Icons Icon={FaEllipsisH}/>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loading isBg={false} />}>
        Rayhan
      </Suspense>
    </div>
  )
}
