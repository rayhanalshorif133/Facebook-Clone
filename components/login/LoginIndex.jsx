import Head from 'next/head'
import Footer from './Footer'
import Form from './Form'

export default function LoginIndex() {
  return (
    <div className='h-screen bg-gray-100 overflow-scroll'>
      <Head>
        <link rel="icon" href="/assets/icons/facebook_logo_icon.ico" sizes="any" />
        <title>Facebook - log in or sign up</title>
      </Head>
      <main className='bg-[#F0F2F5]'>
        <div className="flex xl:items-center justify-between mx-auto w-[55%] xl:w-[75%]">
          <div className="w-2/3">
            <h2 className="text-[#1877F2] text-[4rem] font-bold">facebook</h2>
            <p className="text-black text-[1.7rem] font-[480] xl:font-[490] leading-none">
              Facebook helps you connect and share <br /> with the people in your life.</p>
          </div>
          <div className="xl:mt-24 2xl:mt-24">
            <Form />
          </div>
        </div>
        <div className='2xl:mt-40 bg-white'>
          <Footer />
        </div>
      </main>
    </div>

  )
}
