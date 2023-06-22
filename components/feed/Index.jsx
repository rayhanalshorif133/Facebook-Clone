import React from 'react'
import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

export default function Feed() {
  return (
    <div className="scrollbar-hide flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
        <div className="mx-auto max-w-md md:max-w-lg lg:max-w-[43rem] justify-center">
            <Stories/>
            <InputBox/>
            <Posts/>
        </div>
    </div>
  )
}
