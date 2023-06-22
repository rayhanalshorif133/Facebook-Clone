import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/feed/Index'
import Widgets from '@/components/widgets/Index'
import { getSession,useSession  } from 'next-auth/react'


export default function Home() {

  const { data: session, status } = useSession()


  console.log(useSession());

  if(!session) return <Login/>;


  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main className='flex'>
      <Sidebar />
      <Feed />
      <Widgets />
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);


  console.log(getSession(context));


  return {
    props: {
      session,
    }
  }
}
