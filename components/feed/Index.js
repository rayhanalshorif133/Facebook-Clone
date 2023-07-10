import React from 'react'
import InputBox from './device2xl/inputBox/Index'
import Posts from './posts/Index'
import { default as SmStories, default as Stories } from './story/Index'

export default function Index() {
  return (
    <div className='flex flex-col xl:ml-1 2xl:w-8/12 2xl:mx-auto overflow-x-hidden 3xl:w-[45%] scrollbar-hide'>
      <span className='2xl:hidden'>
        <SmStories />
      </span>
      <div className='hidden 2xl:inline-flex mt-6 justify-center sm:mx-[3rem] 2xl:mx-auto 2xl:justify-items-center px-6 4xl:pr-0 5xl:pr-[8.5rem]'>
        <Stories />
      </div>
      <div className='hidden 2xl:inline-flex text-white mt-6 justify-center sm:mx-[3rem] 2xl:mx-auto 2xl:justify-items-center px-6 5xl:pr-[8.5rem] 3xl:w-full'>
        <InputBox />
      </div>
      <div className='text-white 2xl:mt-6 -mt-[6px] justify-center 2xl:mx-auto 2xl:justify-items-center px-0 xl:px-0 2xl:px-6 5xl:pr-[8.5rem] 3xl:w-full'>
        <Posts />
      </div>
    </div>
  )
}
