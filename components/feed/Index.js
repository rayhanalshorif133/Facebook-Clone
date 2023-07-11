import React from 'react'
import InputBox from './device2xl/inputBox/Index'
import Posts from './posts/Index'
import SmInputBox from './smallDevice/InputBox'
import { default as SmStories, default as Stories } from './story/Index'

export const inputContext = React.createContext({});

export default function Index() {

  const [show, setShow] = React.useState(false);
  const [isPosting, setIsPosting] = React.useState(false);

  const handleModal = () => {
    setShow(!show);
  }

  const inputContextValue = {
    show, setShow, handleModal, isPosting, setIsPosting
  }

  return (
    <div className='flex flex-col xl:ml-1 2xl:w-8/12 2xl:mx-auto overflow-x-hidden 3xl:w-[45%] scrollbar-hide'>
      <inputContext.Provider value={inputContextValue}>
        <SmInputBox />
      </inputContext.Provider>
      <span className='2xl:hidden'>
        <SmStories />
      </span>
      <div className='hidden 2xl:inline-flex mt-6 justify-center sm:mx-[3rem] 2xl:mx-auto 2xl:justify-items-center px-6 4xl:pr-0 5xl:pr-[8.5rem]'>
        <Stories />
      </div>
      <div className='hidden 2xl:inline-flex text-white mt-6 justify-center sm:mx-[3rem] 2xl:mx-auto 2xl:justify-items-center px-6 5xl:pr-[8.5rem] w-full'>
        <inputContext.Provider value={inputContextValue}>
          <InputBox />
        </inputContext.Provider>
      </div>
      <div className='text-white 2xl:mt-6 -mt-[6px] justify-center 2xl:mx-auto 2xl:justify-items-center px-0 xl:px-0 2xl:px-6 5xl:pr-[8.5rem] w-full'>
        <Posts />
      </div>
    </div>
  )
}