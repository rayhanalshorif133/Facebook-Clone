import Head from 'next/head'
import React from 'react'
import Form from './Form'
import Footer from './Footer'
import MobileIndex from './mobile/MobileIndex'
import { signIn } from 'next-auth/react'

export default function Index() {


  const handleGoogleSignIn = (e) => {
    signIn('google');
  };

    return (
        <div className='h-screen bg-gray-100 overflow-scroll'>
          <Head>
            <link rel="icon" href="/assets/icons/facebook_logo_icon.ico" sizes="any" />
            <title>Facebook - log in or sign up</title>
          </Head>
          <main className='bg-[#F0F2F5]'>
            <div className="xl:items-center justify-between mx-auto w-[55%] xl:w-[75%] hidden 2xl:flex">
              <div className="w-2/3">
                <h2 className="text-[#1877F2] text-[4rem] font-bold">facebook</h2>
                <p className="text-black text-[1.7rem] font-[480] xl:font-[490] leading-none">
                  Facebook helps you connect and share <br /> with the people in your life.</p>
              </div>
              <div className="xl:mt-24 2xl:mt-24">
                <Form handleGoogleSignIn={handleGoogleSignIn}/>
              </div>
            </div>
            <div className='2xl:mt-40 bg-white hidden 2xl:flex'>
              <Footer />
            </div>
            <div className="2xl:hidden">
                <MobileIndex handleGoogleSignIn={handleGoogleSignIn}/>
            </div>
          </main>
        </div>
    
      )
}
