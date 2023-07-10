import React from 'react'
import { FaMobileScreenButton } from "react-icons/fa6";
import InputFields from './InputFields';
export default function MobileIndex() {
  return (
    <div className='bg-[#FFFFFF] h-screen'>
      <div className='bg-[#FFFBE2] h-12 w-full flex'>
          <div className='flex justify-center items-center'>
            <FaMobileScreenButton className='text-[#586785] text-2xl ml-3' />
          </div>
          <div className='flex justify-center items-center'>
            <h2 className='ml-2 text-[#3B7CB7] text-base font-normal'>Get Facebook for Android and browse faster.</h2>
          </div>
      </div>
      <div className='w-full mx-auto text-center justify-center'>
        <h2 className='text-2xl font-bold text-[#3588F4] py-3'>facebook</h2>
        <form className='w-full'>
          <InputFields placeholder="Phone number or email address"/>
          <InputFields placeholder="Password"/>
          <button className='w-3/4 h-11 bg-[#1877F2] text-white font-semibold text-[1.2rem] rounded-md mb-2'>Login In</button>
        </form>
      </div>
    </div>
  )
}
