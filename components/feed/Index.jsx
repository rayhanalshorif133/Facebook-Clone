import InputBox from './device2xl/InputBox'
import SmInputBox from './smallDevice/InputBox'
import { default as SmStories, default as Stories } from './story'

export default function Feed() {
  return (
    <div className='flex flex-col xl:ml-1 2xl:w-8/12 2xl:mx-auto'>
      <SmInputBox />
      <span className='xl:hidden'>
        <SmStories />
      </span>
      <div className='hidden 2xl:inline-flex mt-6 justify-center sm:mx-[3rem] xl:ml-[6rem] 2xl:ml-[19.8rem] 2xl:w-[56%] xl:mr-[26.8rem]'>
          <Stories />
      </div>
      <div className='hidden text-white 2xl:inline-flex mt-6 justify-center sm:mx-[3rem] xl:ml-[6rem] 2xl:ml-[19.8rem] 2xl:w-[56%] xl:mr-[26.8rem]'>
          <InputBox />
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
