import InputBox from './device2xl/inputBox/Index'
import SmInputBox from './smallDevice/InputBox'
import Posts from './posts/Index'
import { default as SmStories, default as Stories } from './story'

export default function Feed() {
  return (
    <div className='flex flex-col xl:ml-1 2xl:w-8/12 2xl:mx-auto overflow-x-hidden overscroll-contain 3xl:w-[45%]'>
      <span className='xl:hidden'>
        <SmStories />
      </span>
      <div className='hidden 2xl:inline-flex mt-6 justify-center sm:mx-[3rem] xl:ml-[6rem] 2xl:mx-auto 2xl:justify-items-center 2xl:w-[86%] xl:mr-[26.8rem]'>
          <Stories />
      </div>
    </div>
  )
}
