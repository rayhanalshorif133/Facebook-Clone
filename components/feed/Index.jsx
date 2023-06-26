import React from 'react'
import SmInputBox from './smallDevice/InputBox'
import Posts from './Posts'
import SmStories from './story'
import Stories from './story'

export default function Feed() {
  return (
    <div className='flex flex-col xl:ml-28'>
      <SmInputBox />
      <span className='xl:hidden'>
        <SmStories />
      </span>
      <div className='hidden justify-center w-3/4 items-center mx-auto xl:inline-flex mt-6'>
        <Stories />
      </div>
      <div className="hidden scrollbar-hide flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
        <div className="mx-auto max-w-md md:max-w-lg lg:max-w-[43rem] justify-center">
          {/* <InputBox /> */}
          {/* <Posts /> */}
        </div>
      </div>
    </div>
  )
}
