import React from 'react'

export default function HeaderRightIcons({Icon}) {

    const active = true;
  return (
        <div className={`h-10 w-10 mt-2 p-3 flex items-center cursor-pointer bg-gray-600  md:hover:bg-gray-700 rounded-full active:border-b-2 text-gray-500`}>
            <Icon className="h-6 w-6 items-center text-white" />
        </div>
  )
}