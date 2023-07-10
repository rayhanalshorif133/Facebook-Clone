import React from 'react'

export default function RowItems(props) {

  const { Icon, title, des, isHeader = false } = props;

  return (
    <div className={`flex justify-between m-2 ${isHeader == true ? 'mb-4 border-b-1 border-gray-500 mt-2' : 'mb-3 hover:bg-gray-hover'}`}>
      <div className={`flex ${isHeader == true ? 'px-2':'px-2'}`}>
        <div className='mt-2'>
          <Icon className='text-[20px] text-gray-200' />
        </div>
        <div className='ml-2'>
          <h2 className='text-base font-semibold'>{title}</h2>
          <p className='text-xs text-gray-300'>{des}</p>
        </div>
      </div>
      <div className=''></div>
    </div>
  )
}