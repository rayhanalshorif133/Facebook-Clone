import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar'
import { getSession,useSession  } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: session, status } = useSession()
  if(!session) return <Login/>;


  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main className='flex'>
      <Sidebar />
        {/* feed */}
        {/* widgets */}
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    }
  }
}
