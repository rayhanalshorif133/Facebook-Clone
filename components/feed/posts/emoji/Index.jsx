import React, { useContext } from 'react'
import { emojiContext } from '../Post';
import SingleItem from './SingleItem';

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
        <SingleItem title='like' image='assets/emoji/fb-emoji/like.png' />
        <SingleItem title='love' image='assets/emoji/fb-emoji/love.png' />
        <SingleItem title='care' image='assets/emoji/fb-emoji/care.png' />
        <SingleItem title='haha' image='assets/emoji/fb-emoji/haha.png' />
        <SingleItem title='wow' image='assets/emoji/fb-emoji/wow.png' />
        <SingleItem title='sad' image='assets/emoji/fb-emoji/sad.png' />
        <SingleItem title='angry' image='assets/emoji/fb-emoji/angry.png' />
      </div>
    </div>
  )
}
