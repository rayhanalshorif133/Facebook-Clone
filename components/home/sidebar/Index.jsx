import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import SidebarRow from './SidebarRow';

export default function Index() {
  const { data: session, status } = useSession()
  const { image, name } = session?.user;
  return (
    <div className='text-white ml-2 w-[22rem]'>
      <div className='flex flex-col mt-3'>
        <SidebarRow src={image} title={name} profileImage={true}/>
        <SidebarRow src='/assets/icons/home_sidebar/friends.png' title='Friends' />
        <SidebarRow src='/assets/icons/home_sidebar/messenger.png' title='Messenger' />
        <SidebarRow src='/assets/icons/home_sidebar/feeds.png' title='Feeds (Most Recent)' />
        <SidebarRow src='/assets/icons/home_sidebar/group.png' title='Group' />
        <SidebarRow src='/assets/icons/home_sidebar/marketplace.png' title='Marketplace' />
        <SidebarRow icon={true} title='See more' />
      </div>
    </div>
  )
}
