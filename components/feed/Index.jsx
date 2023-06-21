import React from 'react'
import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

export default function Feed() {
  return (
    <div>
        <div className="">
            <Stories/>
        </div>
        <div className="">
            <InputBox/>
        </div>
        <div className="">
            <Posts/>
        </div>
    </div>
  )
}
