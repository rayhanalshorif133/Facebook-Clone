import Loading from '@/components/Loading'
import React, { Suspense } from 'react'

export default function Index() {
  return (
    <div className='border-b-1 border-gray-500 py-2'>
            <h2 className='font-semibold text-base text-gray-400'>Contacts</h2>
            <Suspense fallback={<Loading isBg={false} />}>
                Rayhan
            </Suspense>
        </div>
  )
}
