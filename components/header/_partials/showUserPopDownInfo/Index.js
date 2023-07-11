import React from "react";
import Header from "./_partials/Header";
import Body from "./_partials/body/Index";
import Footer from "./_partials/Footer";


export default function Index({ handlePopDown }) {


  return (
    <div className='hidden 2xl:inline-flex w-full relative'>
      <div className='bg-[#242526] h-auto w-[20rem] 3xl:w-[22rem] 4xl:w-[25rem] absolute right-0 -mt-5 rounded-md'>
        <Header handlePopDown={handlePopDown} />
        <Body/>
        <Footer/>
      </div>
    </div>
  )
}
