import Header from '@/components/Header/Index'
import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'


export default function Home({session}) {


  return (
    <div className='h-screen bg-[#18191A] overflow-x-hidden'>
      <Head>
        <link rel="icon" href="/assets/icons/facebook_logo_icon.ico" sizes="any" />
        <title>Facebook</title>
      </Head>
      <Header />
    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    }// In seconds after a successful request to validate the request
  }
}
