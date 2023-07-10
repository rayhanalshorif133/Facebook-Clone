import React from 'react'
import { FaMobileScreenButton } from "react-icons/fa6";
import InputFields from './InputFields';
import { signIn } from 'next-auth/react';
export default function MobileIndex() {

  const handleGoogleSignIn = (e) => {
    const URL = 'http://localhost:3000';
    signIn('google', { callbackUrl: URL });
  };

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
          <InputFields placeholder="Phone number or email address" />
          <InputFields placeholder="Password" />
          <button className='w-3/4 h-11 bg-[#1877F2] text-white font-semibold text-[1.2rem] rounded-md mb-2'>Login In</button>
          <button onClick={() => handleGoogleSignIn()} type="button" className="group hover:group-first:bg-white w-3/4 h-11 hover:bg-[#1B74E4] hover:text-white font-bold text-[1.1rem] rounded-lg mt-2  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#1B74E4]  border py-3.5 border-[#1B74E4] flex mx-auto items-center hover:bg-">
            <img src="/assets/icons/svg/google.svg" className='m-[3px] p-[10px] group group-hover:bg-white' alt="google" />
            <p className="text-base font-medium ml-4 text-gray-700  hover:text-white group group-hover:text-white">Continue with Google</p>
          </button>
        </form>
      </div>
    </div>
  )
}
