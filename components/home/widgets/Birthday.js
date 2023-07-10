import Loading from '@/components/Loading'
import Image from 'next/image'
import React, { Suspense } from 'react'

export default function Index() {
  return (
    <div className='border-b-1 border-gray-500 py-2'>
      <h2 className='font-semibold text-base text-gray-400'>Birthdays</h2>
      <Suspense fallback={<Loading isBg={false} />}>
        <div className="flex hover:bg-[#303031] rounded-xl p-2 m-1 cursor-pointer mt-2">
          <Image src='/assets/icons/home_sidebar/birthday_gift.png' alt='birthday_gift' height={8} width={8} className='h-8 w-8 mt-3 justify-center items-center' />
          <h2 className='text-white p-1 ml-1'>
            <strong className='font-semibold text-md'>Rayhan</strong> and <strong className='font-semibold text-md text-white'>3 others</strong> have birthdays today.
          </h2>
        </div>
      </Suspense>
    </div>
  )
}