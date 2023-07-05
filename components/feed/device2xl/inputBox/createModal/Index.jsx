import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { BiSolidLockAlt, BiSolidDownArrow, BiSmile, BiImageAdd } from 'react-icons/bi';
import { LuImagePlus } from "react-icons/lu";
import { FaMobileScreen } from "react-icons/fa6";
import Header from "./Header";
import Body from "./Body";



export default function Index({ show, handleModal }) {
   
  return (
    <>
    {
        show === true && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-[#0E0E0E] bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-[#242526] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <Header handleModal={handleModal}/>
                        <Body/>
                    </div>
                </div>
            </div>
        </div>
    }
</>
  )
}
