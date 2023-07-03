import Loading from '@/components/Loading'
import React, { Suspense } from 'react'
import ItemsInRow from './ItemsInRow'
import { FaRegUserCircle } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";

export default function Index() {
  return (
    <div className='border-b-1 border-gray-500 py-2'>
            <h2 className='font-semibold text-base text-gray-400'>Your Pages and profiles</h2>
            <Suspense fallback={<Loading isBg={false} />}>
                <ItemsInRow  src='https://picsum.photos/200' title="Rayhan's Movie"/>  
                <ItemsInRow  Icon={FaRegUserCircle} title="Switch into page"/>  
                <ItemsInRow Icon={TfiAnnouncement} title="Create Promotion"/>  
            </Suspense>
        </div>
  )
}
