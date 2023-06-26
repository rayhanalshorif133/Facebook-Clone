import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import SidebarRow from './SidebarRow';
import YourShortcutRow from './YourShortcutRow';

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
      <div className='flex flex-col mt-3 border-t-[1px] border-gray-600'>
        <p className='text-gray-400 text-[16px] font-bold py-3'>Your Shortcuts</p>
        <YourShortcutRow src='https://picsum.photos/300/300?random=1' title="Rayhan's Movies" />
        <YourShortcutRow src='https://picsum.photos/300/300?random=2' title='CSE/EEE JOBS in Bangladesh' />
        <YourShortcutRow src='https://picsum.photos/300/300?random=3' title='কাঠ গোলাপ' />
        <YourShortcutRow src='https://picsum.photos/300/300?random=4' title='কিছু স্মৃতি- Some Memories' />
        <YourShortcutRow icon={true} title='See more'  />
      </div>
    </div>
  )
}
