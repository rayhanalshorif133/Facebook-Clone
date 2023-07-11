import React from 'react'

export default function Icons({Icon,title= 'Icons'}) {
  return (
    <div className="h-8 w-8 rounded-full hover:bg-[#303031] flex justify-center items-center cursor-pointer">
        <Icon className='h-6' />
    </div>
  )
}