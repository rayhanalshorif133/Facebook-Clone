import Head from 'next/head'
import Footer from './Footer'
import Form from './Form'

export default function Index() {
 return (
  <div className='h-screen bg-gray-100 overflow-hidden'>
   <Head>
    <link rel="icon" href="/assets/icons/facebook_logo_icon.ico" sizes="any" />
    <title>Facebook - log in or sign up</title>
   </Head>
   <main className='bg-[#F0F2F5] min-h-screen'>
    <div className="flex items-center justify-between mx-auto w-[55%]">
     <div className="mt-[4rem]">
      <h2 className="text-[#1877F2] text-[4rem] font-bold">facebook</h2>
      <p className="text-black text-[1.7rem] font-[480]">
       Facebook helps you connect and share <br /> with the people in your life.</p>
     </div>
     <div className="mt-40">
      <Form />
     </div>
    </div>
    <div className='mt-40 bg-white'>
     <Footer />
    </div>
   </main>
  </div>

 )
}
