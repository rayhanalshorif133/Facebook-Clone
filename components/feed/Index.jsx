import React from 'react'
import SmInputBox from './smallDevice/InputBox'
import Posts from './Posts'
import SmStories from './story'

export default function Feed() {
  return (
    <div className='flex flex-col'>
      <SmInputBox />
      <SmStories />
      <div className="hidden scrollbar-hide flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
        <div className="mx-auto max-w-md md:max-w-lg lg:max-w-[43rem] justify-center">
          {/* <Stories /> */}
          {/* <InputBox /> */}
          {/* <Posts /> */}
        </div>
      </div>
    </div>
  )
}
