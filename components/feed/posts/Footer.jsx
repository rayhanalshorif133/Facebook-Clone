import React, { useContext } from 'react'
import { BiLike, BiSolidLike,BiComment,BiSolidComment } from 'react-icons/bi'
import {RiShareForwardLine,RiShareForwardFill} from 'react-icons/ri'
import { emojiContext } from './Post';

export default function Footer() {


  const {handlePopupReactEmoji, handleRemoveReactEmoji} = useContext(emojiContext);


  return (
    <div className='mx-2 justify-between pb-2 flex text-gray-300 font-medium'>
      <div className="flex">
        <div onMouseEnter={handlePopupReactEmoji} onMouseLeave={handleRemoveReactEmoji}  className="flex cursor-pointer hover:bg-gray-hover px-[4.5rem] pt-1 pb-2 rounded-lg items-center m-auto">
          <BiLike className="h-5 w-5 mt-2 ml-2" />
          <h2 className="text-base mt-[5px] ml-2">Like</h2>
        </div>
        <div className="hidden">
          <BiSolidLike className="h-5 w-5" /> Like
        </div>
      </div>
      <div className="">
        <div className="flex cursor-pointer hover:bg-gray-hover px-[4.5rem] pt-1 pb-2 rounded-lg items-center m-auto">
          <BiComment className="h-5 w-5 mt-2 ml-2" />
          <h2 className="text-base mt-[5px] ml-2">Comment</h2>
        </div>
        <div className="hidden">
          <BiSolidComment className="h-5 w-5" /> Comment
        </div>
      </div>
      <div className="">
        <div className="flex cursor-pointer hover:bg-gray-hover px-[4.5rem] pt-1 pb-2 rounded-lg items-center m-auto">
          <RiShareForwardLine className="h-5 w-5 mt-2 ml-2" />
          <h2 className="text-base mt-[5px] ml-2">Share</h2>
        </div>
        <div className="hidden">
          <RiShareForwardFill className="h-5 w-5" /> Share
        </div>
      </div>
    </div>
  )
}
