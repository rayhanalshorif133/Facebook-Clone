import React from 'react'
import RowItems from './RowItems';
import {MdOutlineCancelPresentation} from 'react-icons/md';
import {BiTimeFive} from 'react-icons/bi';

export default function index({post}) {


  return (
    <div className='bg-[#242526] h-auto w-full rounded-xl mt-2'>
        <RowItems Icon={MdOutlineCancelPresentation} title="Hidden" 
        des="Hiding posts helps Facebook personalize your Feed."
        isHeader={true}/>
        <RowItems Icon={BiTimeFive} title="Hidden" 
        des="Hiding posts helps Facebook personalize your Feed."/>
    </div>
  )
}