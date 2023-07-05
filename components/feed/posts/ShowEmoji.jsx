import React from 'react'

export default function ShowEmoji() {
  return (
    <div className='absolute bg-black rounded-2xl w-[23.4rem] h-10 text-white'>
        <div className='flex justify-around items-center'>
            <img className='w-10 h-10' src='assets/emoji/like.png' alt='like' />
            <img className='w-10 h-10' src='assets/emoji/love.png' alt='like' />
            <img className='w-10 h-10' src='assets/emoji/thinking.png' alt='like' />
            <img className='w-10 h-10' src='assets/emoji/lovely.png' alt='like' />
            <img className='w-10 h-10' src='assets/emoji/happy.png' alt='like' />
            <img className='w-10 h-10' src='assets/emoji/party.png' alt='like' />
            <img className='w-10 h-10' src='assets/emoji/sad.png' alt='like' />
            <img className='w-10 h-10' src='assets/emoji/angry.png' alt='like' />
        </div>
    </div>
  )
}
