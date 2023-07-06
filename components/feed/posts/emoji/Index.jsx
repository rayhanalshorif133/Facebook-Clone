import React, { useContext } from 'react'
import { emojiContext } from '../Post';

export default function Index() {

  const { setShowEmoji,handleRemoveReactEmoji } = useContext(emojiContext);

  const handleHoverEmoji = () => {
    setShowEmoji(true);
    handleRemoveReactEmoji(true);
  } 
  const handleOnLeave = () => {
    setShowEmoji(true);
    handleRemoveReactEmoji(false);
  }
  

  return (
    <div className='absolute bg-gray-800 rounded-2xl w-[23.3rem] h-10 text-white'>
      <div className='flex justify-around items-center' onMouseEnter={handleHoverEmoji} onMouseLeave={handleOnLeave}>
        <img className='w-10 h-10 cursor-pointer hover:scale-110 transition-all ease-in-out' src='assets/emoji/fb-emoji/like.png' alt='like' />
        <img className='w-10 h-10 cursor-pointer hover:scale-110 transition-all ease-in-out' src='assets/emoji/fb-emoji/love.png' alt='like' />
        <img className='w-10 h-10 cursor-pointer hover:scale-110 transition-all ease-in-out' src='assets/emoji/fb-emoji/care.png' alt='like' />
        <img className='w-10 h-10 cursor-pointer hover:scale-110 transition-all ease-in-out' src='assets/emoji/fb-emoji/haha.png' alt='like' />
        <img className='w-10 h-10 cursor-pointer hover:scale-110 transition-all ease-in-out' src='assets/emoji/fb-emoji/wow.png' alt='like' />
        <img className='w-10 h-10 cursor-pointer hover:scale-110 transition-all ease-in-out' src='assets/emoji/fb-emoji/sad.png' alt='like' />
        <img className='w-10 h-10 cursor-pointer hover:scale-110 transition-all ease-in-out' src='assets/emoji/fb-emoji/angry.png' alt='like' />
      </div>
    </div>
  )
}
