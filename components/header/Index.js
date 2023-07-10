import { useSession, signOut } from 'next-auth/react';
import Image from "next/image";
import { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBars, FaBell, FaFacebookMessenger, FaGamepad, FaHome, FaSearch, FaStore, FaTv, FaUserFriends } from "react-icons/fa";
import { FiArrowLeft, FiHome, FiUsers } from "react-icons/fi";
import HeaderMiddleIcons from "./HeaderMiddleIcons";
import HeaderRightIcons from "./HeaderRightIcons";
import SmHeaderIcons from "./_partials/SmHeaderIcons";
import axios from "axios";


export default function Index() {

  const [isFocusSearch, setIsFocusSearch] = useState(true);
  const { data: session } = useSession();

  const { image } = session?.user;



  const handleSearchOption = () => {
    setIsFocusSearch(false);
  }
  const handleSearchOptionReset = () => {
    setIsFocusSearch(true);
  }

  const  handleLogout = async () => {
    signOut();
   
  }

  return (
    <div className="sticky top-0 z-30">
      {/* For Small Device */}
      <div className="bg-[#242526] h-auto 2xl:hidden">
        <div className="flex justify-between px-3">
          <div>
            <h2 className="text-white text-[2rem] font-bold">facebook</h2>
          </div>
          <div className="flex">
            <FaSearch className="w-10 h-10 text-gray-300  mt-2 mr-2 p-2 bg-[#3A3B3C] rounded-full" />
            <FaBars className="w-10 h-10 text-gray-300  mt-2 mr-2 p-2 bg-[#3A3B3C] rounded-full" />
          </div>
        </div>
        <div className="px-3 divide-y divide-blue-200">
          <div className="flex justify-evenly mx-auto">
            <SmHeaderIcons Icon={FiHome} active={true} />
            <SmHeaderIcons Icon={FaUserFriends} />
            <SmHeaderIcons Icon={FaFacebookMessenger} />
            <SmHeaderIcons Icon={FaTv} />
            <SmHeaderIcons Icon={FaBell} />
            <SmHeaderIcons Icon={FaStore} />
          </div>
        </div>
      </div>
    </div>
  )
}