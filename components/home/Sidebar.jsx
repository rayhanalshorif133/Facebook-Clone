import React from 'react'
import { useSession } from "next-auth/react"
import { FaShoppingBag,FaTv, FaChevronDown, FaUsers, FaCalendarMinus, FaClock,FaUserFriends } from "react-icons/fa";
import SidebarRow from './SidebarRow';


export default function Sidebar() {
 const { data:session, status } = useSession()
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px] text-white'>
        <SidebarRow src={session.user?.image} title={session.user?.name}/>
        <SidebarRow Icon={FaUserFriends} title="Friends"/>
        <SidebarRow Icon={FaUsers} title="Groups"/>
        <SidebarRow Icon={FaShoppingBag} title="Marketplace"/>
        <SidebarRow Icon={FaTv} title="Watch"/>
        <SidebarRow Icon={FaCalendarMinus} title="Events"/>
        <SidebarRow Icon={FaClock} title="Memories"/>
        <SidebarRow Icon={FaChevronDown} title="See More"/>
    </div>
  )
}
