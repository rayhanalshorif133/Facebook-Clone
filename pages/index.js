import Header from '@/components/Header/Index'
import Feed from '@/components/feed/Index'
import Widgets from '@/components/home/widgets/Index'
import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Sidebar from '@/components/home/sidebar/Index'
import axios from 'axios'


export default function Home({session}) {

  if (!session) return (<>Login page</>);

  if(session){
    axios.post('/api/user/modify',session);
  }

  return (
    <div className='h-screen bg-[#18191A] overflow-x-hidden'>
      <Head>
        <link rel="icon" href="/assets/icons/facebook_logo_icon.ico" sizes="any" />
        <title>Facebook</title>
      </Head>
      <Header />
      <main className='xl:flex bg-[#18191A]'>
        <span className='hidden xl:inline-flex'><Sidebar /></span>
        <Feed />
        <span className='hidden xl:inline-flex'><Widgets /></span>
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log("ok");
  return {
    props: {
      session,
    }// In seconds after a successful request to validate the request
  }
}
