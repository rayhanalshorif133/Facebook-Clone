import React from 'react'
import { FaVideo,FaSistrix,FaEllipsisH } from "react-icons/fa";

const contacts = [
    {
      id: 1,
      name: "Rayhan Al Shorif",
      src: "https://rebrand.ly/ukck8ia",
    },
    {
      id: 2,
      name: "Elon Musk",
      src: "https://links.papareact.com/4zn",
    },
    {
      id: 3,
      name: "Jeff Bezoz",
      src: "https://links.papareact.com/k2j",
  
    },{
      id: 4,
      name: "Mark Zuckerberg",
      src: "https://links.papareact.com/xql",
    },{
      id: 5,
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
    }
  ];

export default function Index() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
        <div className='flex justify-between items-center text-gray-500 mb-5'>
            <h2 className='text-xl'>Contacts</h2>
            <div className='flex space-x-2'>
                <FaVideo className='h-6'/>
                <FaSistrix className='h-6'/>
                <FaEllipsisH className='h-6'/>
            </div>
        </div>
    </div>
  )
}
