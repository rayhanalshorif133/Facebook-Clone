import InputBox from './device2xl/inputBox/Index'
import SmInputBox from './smallDevice/InputBox'
import Posts from './posts/Index'
import { default as SmStories, default as Stories } from './story'

export default function Feed() {
  return (
    <div className='flex flex-col xl:ml-1 2xl:w-8/12 2xl:mx-auto overflow-x-hidden overscroll-contain 3xl:w-[45%]'>
      <span className='2xl:hidden'>
        <SmStories />
      </span>
      <div className='hidden 2xl:inline-flex mt-6 justify-center sm:mx-[3rem] 2xl:mx-auto 2xl:justify-items-center px-6 4xl:pr-0 5xl:pr-[8.5rem]'>
          <Stories />
      </div>
      <div className='hidden 2xl:inline-flex text-white mt-6 justify-center sm:mx-[3rem] 2xl:mx-auto 2xl:justify-items-center px-6 5xl:pr-[8.5rem] 3xl:w-full'>
          <InputBox />
      </div>
      <div className='hidden 2xl:inline-flex text-white mt-6 justify-center sm:mx-[3rem] 2xl:mx-auto 2xl:justify-items-center px-6 5xl:pr-[8.5rem] 3xl:w-full'>
      <Posts />
      </div>
    </div>
  )
}
