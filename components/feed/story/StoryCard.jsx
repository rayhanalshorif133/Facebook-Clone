import Image from 'next/image';

export default function StoryCard() {

  // random number generator
  const random = Math.floor(Math.random() * 100);


  return (
    <div className='p-1 cursor-pointer'>
      <Image src={`https://picsum.photos/400?random=${random}`} alt="profile"
        className="h-[12rem] w-28 rounded-lg object-cover" width={28} height={28} />
    </div>
  )
}
