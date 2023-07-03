import React from 'react'

export default function Index() {
  return (
    <div className='border-b-1 border-gray-500 pb-2'>
        <h2 className='font-bold text-lg text-gray-400'>Sponsored</h2>
        <div className='flex flex-col space-y-2 mt-5 cursor-pointer'>
            <div className='flex items-center justify-between hover:bg-[#303031] rounded-xl p-2'>
                <img className='w-28 h-28 m-2 rounded-sm' src='https://picsum.photos/200' alt=''/>
                <div className='flex flex-col space-y-1 justify-start items-start m-auto'>
                    <h2 className='font-bold text-md text-white'>NextJS</h2>
                    <p className='text-xs text-gray-400'>NextJS is the React Framework for Production</p>
                </div>
            </div>
        </div>
    </div>
  )
}
